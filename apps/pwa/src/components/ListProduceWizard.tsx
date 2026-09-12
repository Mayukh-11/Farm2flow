import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Produce } from '@/types';
import { getAllCatalogCrops, CatalogCropItem } from '@/data/cropCatalog';
import { parseAgriculturalVoice, INDIAN_CROPS } from '@/services/voiceParser';

interface ListProduceWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newProduce: Produce) => void;
  initialCrop?: string;
  initialQuantity?: number;
  initialPrice?: number;
  language?: 'EN' | 'BN' | 'HI';
}

export const ListProduceWizard: React.FC<ListProduceWizardProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialCrop = 'Tomato',
  initialQuantity,
  initialPrice,
  language = 'EN'
}) => {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [selectedCrop, setSelectedCrop] = React.useState(initialCrop);
  const [quantityKg, setQuantityKg] = React.useState<number>(initialQuantity || 800);
  const [grade, setGrade] = React.useState<'Grade A' | 'Grade B' | 'Standard'>('Grade A');
  const [expectedPrice, setExpectedPrice] = React.useState<number>(initialPrice || 30);
  const [harvestDate, setHarvestDate] = React.useState<string>('2026-09-04');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');

  // Voice fill state inside wizard
  const [isWizardListening, setIsWizardListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState('');
  const [lastParsedInfo, setLastParsedInfo] = useState<{ crop?: string; qty?: number; price?: number } | null>(null);
  const wizardRecRef = useRef<any>(null);
  const silenceTimerRef = useRef<any>(null);

  useEffect(() => {
    if (initialCrop) setSelectedCrop(initialCrop);
    if (initialQuantity) setQuantityKg(initialQuantity);
    if (initialPrice) setExpectedPrice(initialPrice);
  }, [initialCrop, initialQuantity, initialPrice]);

  useEffect(() => {
    return () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (wizardRecRef.current) {
        try {
          wizardRecRef.current.abort();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  // Selected wizard voice recognition dialect
  const [wizardVoiceLang, setWizardVoiceLang] = useState<'AUTO' | 'BN' | 'HI' | 'EN'>('AUTO');

  const getLanguageTag = (lang: string) => {
    if (lang === 'BN') return 'bn-IN';
    if (lang === 'HI') return 'hi-IN';
    return 'en-IN';
  };

  // Direct Execution: If user said "List 400 grams of rice" / "চাল ৪০০ গ্রাম বিক্রি করো", directly list it!
  const executeDirectListing = (cropToUse: string, qtyToUse: number, priceToUse?: number, detectedLang: 'EN' | 'BN' | 'HI' = 'EN') => {
    let activeFarmerName = 'Ramesh Ghosh';
    let activeFarmerLocation = 'Hooghly (Singur)';
    if (typeof window !== 'undefined') {
      try {
        const session = JSON.parse(localStorage.getItem('farm2flow_user_session') || '{}');
        if (session.name) activeFarmerName = session.name;
        if (session.location) activeFarmerLocation = session.location;
      } catch (err) {}
    }

    const defaultPrice = priceToUse || 30;
    const finalQty = qtyToUse || 0.4;
    const varietyName = customCatalogCrops.find(c => c.name.toLowerCase() === cropToUse.toLowerCase())?.variety || 'Farm Fresh';

    const created: Produce = {
      id: `prod-${Date.now().toString().slice(-4)}`,
      farmerId: `f-${Date.now().toString().slice(-3)}`,
      farmerName: activeFarmerName,
      farmerLocation: activeFarmerLocation,
      cropName: cropToUse.trim(),
      variety: varietyName,
      grade: 'Grade A',
      quantityKg: finalQty,
      expectedPricePerKg: defaultPrice,
      marketSuggestedPriceMin: Math.max(10, Math.round(defaultPrice * 0.9)),
      marketSuggestedPriceMax: Math.round(defaultPrice * 1.15),
      harvestDate,
      demandStatus: 'High',
      demandForecastPct: 20,
      status: 'Available',
      fpoVerified: true,
      createdAt: new Date().toISOString()
    };

    setIsSubmitting(true);
    const qtyLabel = finalQty < 1 ? `${Math.round(finalQty * 1000)}g` : `${finalQty} kg`;
    const noticeSuccess = detectedLang === 'BN'
      ? `✓ সরাসরি তালিকাভুক্ত: ${cropToUse} ${finalQty < 1 ? `${Math.round(finalQty * 1000)} গ্রাম` : `${finalQty} কেজি`} (₹${defaultPrice}/কেজি)`
      : detectedLang === 'HI'
      ? `✓ सीधा दर्ज हुआ: ${cropToUse} ${finalQty < 1 ? `${Math.round(finalQty * 1000)} ग्राम` : `${finalQty} किलो`} (₹${defaultPrice}/किलो)`
      : `✓ Directly Listed: ${cropToUse} ${qtyLabel} at ₹${defaultPrice}/kg!`;

    setVoiceNotice(noticeSuccess);
    setSuccessMsg(noticeSuccess);

    // Speak voice confirmation in native language
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const spokenMsg = detectedLang === 'BN'
          ? `${cropToUse} ${finalQty < 1 ? `${Math.round(finalQty * 1000)} গ্রাম` : `${finalQty} কেজি`} সরাসরি বিক্রির জন্য তালিকাভুক্ত করা হয়েছে`
          : detectedLang === 'HI'
          ? `${cropToUse} ${finalQty < 1 ? `${Math.round(finalQty * 1000)} ग्राम` : `${finalQty} किलो`} सीधे बेचने के लिए दर्ज कर दिया गया है`
          : `${cropToUse} ${qtyLabel} has been directly listed for direct sale.`;
        
        const utter = new SpeechSynthesisUtterance(spokenMsg);
        utter.lang = detectedLang === 'BN' ? 'bn-IN' : detectedLang === 'HI' ? 'hi-IN' : 'en-IN';
        utter.rate = 0.95;
        window.speechSynthesis.speak(utter);
      } catch (err) {}
    }

    setTimeout(() => {
      onSuccess(created);
      setIsSubmitting(false);
      setSuccessMsg('');
      setStep(1);
      onClose();
    }, 1400);
  };

  const applyVoiceInput = (spokenText: string) => {
    const parsed = parseAgriculturalVoice(spokenText);
    const chips: string[] = [];

    // Prioritize recognized crop from neural parser, or direct match against INDIAN_CROPS
    let resolvedCrop = parsed.crop;
    let resolvedCropLocal = parsed.cropLocalName;

    if (!resolvedCrop) {
      // Fallback matching for single spoken words (like "payaz", "pyaz", "onion", "aloo", "tamatar", etc.)
      const cleanWord = spokenText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
      const directMatch = INDIAN_CROPS.find(c =>
        c.standardName.toLowerCase() === cleanWord ||
        c.aliases.some(a => a.toLowerCase() === cleanWord || cleanWord.includes(a.toLowerCase()))
      );
      if (directMatch) {
        resolvedCrop = directMatch.standardName;
        resolvedCropLocal = (language === 'BN' ? directMatch.bengaliName : language === 'HI' ? directMatch.hindiName : directMatch.standardName);
      }
    }

    if (resolvedCrop) {
      setSelectedCrop(resolvedCrop);
      chips.push(`Crop: ${resolvedCropLocal || resolvedCrop}`);
    }

    if (parsed.quantityKg) {
      setQuantityKg(parsed.quantityKg);
      chips.push(`Qty: ${parsed.quantityKg < 1 ? `${Math.round(parsed.quantityKg * 1000)}g (${parsed.quantityKg}kg)` : `${parsed.quantityKg} kg`}`);
    }
    if (parsed.pricePerKg) {
      setExpectedPrice(parsed.pricePerKg);
      chips.push(`Price: ₹${parsed.pricePerKg}`);
    }

    const cropFound = resolvedCrop || selectedCrop;
    const qtyFound = parsed.quantityKg || (parsed.intent === 'sell' && !parsed.quantityKg ? quantityKg : undefined);
    const priceFound = parsed.pricePerKg || expectedPrice;

    setLastParsedInfo({
      crop: cropFound,
      qty: qtyFound,
      price: priceFound
    });

    // Check if this is an explicit command to directly list or sell
    const hasExplicitListingDirective = /\b(list|listing|sell|bikri|bikroy|bech|bechna|becho|বিক্রি|বিক্রয়|বেচা|বেচব|তালিকা|बेचना|बेचें|बिक्री|दर्ज|डालो)\b/i.test(spokenText) ||
      parsed.intent === 'sell';

    if (hasExplicitListingDirective && resolvedCrop && qtyFound) {
      // Direct listing action as requested by speaker!
      executeDirectListing(resolvedCrop, qtyFound, priceFound, parsed.detectedLang);
      return;
    }

    if (chips.length > 0) {
      setVoiceNotice(`✓ Auto-filled: ${chips.join(' • ')}`);
      // Auto-advance if crop and quantity identified
      if (resolvedCrop && parsed.quantityKg && step === 1) {
        setStep(2);
      }
    } else {
      setVoiceNotice(`Heard: "${spokenText}" (Say: "Onion" / "Payaz" / "List 400 grams of rice")`);
    }
  };

  // Voice input support for filling wizard fields
  const toggleWizardSpeech = () => {
    if (isWizardListening) {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      try {
        wizardRecRef.current?.stop();
      } catch (e) {}
      setIsWizardListening(false);
      return;
    }

    if (typeof window !== 'undefined') {
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRec) {
        setVoiceNotice('Voice recognition not supported on this browser. You can tap the sample voice pills below.');
        return;
      }

      try {
        if (wizardRecRef.current) {
          try {
            wizardRecRef.current.abort();
          } catch (e) {}
        }

        const rec = new SpeechRec();
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 3;

        // Dialect setup
        let targetLang = 'en-IN';
        if (wizardVoiceLang === 'BN' || (wizardVoiceLang === 'AUTO' && language === 'BN')) {
          targetLang = 'bn-IN';
        } else if (wizardVoiceLang === 'HI' || (wizardVoiceLang === 'AUTO' && language === 'HI')) {
          targetLang = 'hi-IN';
        }
        rec.lang = targetLang;

        rec.onstart = () => {
          setIsWizardListening(true);
          setVoiceNotice('🎤 Listening... Speak command (e.g. "Payaz" / "Onion" / "List 400 grams of rice")');
        };

        rec.onresult = (event: any) => {
          if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

          let finalTrans = '';
          let interimTrans = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTrans += event.results[i][0].transcript;
            } else {
              interimTrans += event.results[i][0].transcript;
            }
          }
          const text = (finalTrans || interimTrans).trim();
          if (!text) return;

          applyVoiceInput(text);

          // Auto-stop after 1.8s of silence
          silenceTimerRef.current = setTimeout(() => {
            try { rec.stop(); } catch (e) {}
            setIsWizardListening(false);
          }, 1800);
        };

        rec.onerror = (event: any) => {
          if (event.error === 'no-speech') {
            setVoiceNotice('🎤 Still listening... Speak your crop or listing command.');
          } else if (event.error === 'not-allowed') {
            setIsWizardListening(false);
            setVoiceNotice('Microphone access was blocked. Please allow mic permission in your browser.');
          } else {
            setIsWizardListening(false);
            setVoiceNotice(`Voice status: ${event.error}. You can also type or use test pills below.`);
          }
        };

        rec.onend = () => {
          setIsWizardListening(false);
        };

        wizardRecRef.current = rec;
        rec.start();
      } catch (err: any) {
        console.error('Wizard speech start error:', err);
        setIsWizardListening(false);
        setVoiceNotice('Could not start microphone. You can tap the sample voice pills below.');
      }
    }
  };

  const [wizardCategory, setWizardCategory] = useState<string>('All');
  const [customCatalogCrops, setCustomCatalogCrops] = useState<CatalogCropItem[]>([]);

  useEffect(() => {
    setCustomCatalogCrops(getAllCatalogCrops());
    const handleUpdate = () => {
      setCustomCatalogCrops(getAllCatalogCrops());
    };
    window.addEventListener('farm2flow_catalog_updated', handleUpdate);
    return () => window.removeEventListener('farm2flow_catalog_updated', handleUpdate);
  }, []);

  const filteredWizardCrops = useMemo(() => {
    if (wizardCategory === 'All') return customCatalogCrops;
    return customCatalogCrops.filter(c => c.category === wizardCategory);
  }, [customCatalogCrops, wizardCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let activeFarmerName = 'Ramesh Ghosh';
    let activeFarmerLocation = 'Hooghly (Singur)';
    if (typeof window !== 'undefined') {
      try {
        const session = JSON.parse(localStorage.getItem('farm2flow_user_session') || '{}');
        if (session.name) activeFarmerName = session.name;
        if (session.location) activeFarmerLocation = session.location;
      } catch (err) {}
    }

    setTimeout(() => {
      const created: Produce = {
        id: `prod-${Date.now().toString().slice(-4)}`,
        farmerId: `f-${Date.now().toString().slice(-3)}`,
        farmerName: activeFarmerName,
        farmerLocation: activeFarmerLocation,
        cropName: selectedCrop.trim(),
        variety: customCatalogCrops.find(c => c.name.toLowerCase() === selectedCrop.toLowerCase())?.variety || 'Farm Fresh',
        grade,
        quantityKg,
        expectedPricePerKg: expectedPrice,
        marketSuggestedPriceMin: Math.max(10, Math.round(expectedPrice * 0.9)),
        marketSuggestedPriceMax: Math.round(expectedPrice * 1.15),
        harvestDate,
        demandStatus: 'High',
        demandForecastPct: 20,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      setSuccessMsg('Produce listed successfully! Synced real-time to Pan-India map & buyer feeds.');
      setTimeout(() => {
        onSuccess(created);
        setSuccessMsg('');
        setStep(1);
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto">
        
        {/* Header with Step Indicator & Voice Input Toggle */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <h3 className="text-[17px] font-extrabold text-on-surface">List Produce for Direct Sale</h3>
            <p className="text-[12px] text-on-surface-variant font-medium">Step {step} of 3 • Direct Mandi Match</p>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              type="button"
              onClick={toggleWizardSpeech}
              title="Voice Autofill"
              className={`px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                isWizardListening 
                  ? 'bg-red-600 text-white ring-2 ring-red-400 animate-pulse' 
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isWizardListening ? 'graphic_eq' : 'mic'}
              </span>
              <span>{isWizardListening ? 'Listening...' : 'Voice Fill'}</span>
            </button>
            <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Dynamic Voice Feedback & Equalizer Banner */}
        {isWizardListening && (
          <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-2xl flex items-center justify-between shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1 h-5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1 h-4 bg-red-600 rounded-full animate-bounce"></span>
                <span className="w-1 h-6 bg-red-600 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                <span className="w-1 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.1s]"></span>
              </div>
              <div>
                <p className="text-[12px] font-extrabold text-red-900 leading-tight">Listening in Indian Languages...</p>
                <p className="text-[11px] text-red-700 font-medium">Say crop, kg/quintal, & rate (e.g. "500 kg Tomato at 30 rupees")</p>
              </div>
            </div>
            <button 
              type="button" 
              onClick={toggleWizardSpeech}
              className="text-[11px] font-bold bg-white text-red-700 px-2.5 py-1 rounded-lg border border-red-200 shadow-xs"
            >
              Done
            </button>
          </div>
        )}

        {/* Voice Feedback Banner & Recognized Entities */}
        {voiceNotice && !isWizardListening && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-2.5 rounded-xl text-[12px] font-bold flex flex-col gap-1.5 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-700">check_circle</span>
              <span>{voiceNotice}</span>
            </div>
          </div>
        )}

        {/* Dialect Selector Bar */}
        <div className="flex items-center justify-between bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant text-[11px] font-bold -mt-1">
          <span className="text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">translate</span>
            Dialect:
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setWizardVoiceLang('AUTO')}
              className={`px-2 py-0.5 rounded-md transition-all ${wizardVoiceLang === 'AUTO' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              Auto
            </button>
            <button
              type="button"
              onClick={() => setWizardVoiceLang('BN')}
              className={`px-2 py-0.5 rounded-md transition-all ${wizardVoiceLang === 'BN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setWizardVoiceLang('HI')}
              className={`px-2 py-0.5 rounded-md transition-all ${wizardVoiceLang === 'HI' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              हिन्दी
            </button>
            <button
              type="button"
              onClick={() => setWizardVoiceLang('EN')}
              className={`px-2 py-0.5 rounded-md transition-all ${wizardVoiceLang === 'EN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* 1-Click Voice Test Pills (Includes Direct Listing for 400g Rice in English, Bengali, Hindi) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mt-1 text-[10px] font-bold scrollbar-none">
          <span className="text-on-surface-variant shrink-0 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">bolt</span>
            Direct List:
          </span>
          <button
            type="button"
            onClick={() => applyVoiceInput("list 400 grams of rice")}
            className="shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-md transition-all active:scale-95 flex items-center gap-1"
          >
            🌾 "List 400g rice"
          </button>
          <button
            type="button"
            onClick={() => applyVoiceInput("৪০০ গ্রাম চাল বিক্রি করো")}
            className="shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-md transition-all active:scale-95 flex items-center gap-1"
          >
            🇧🇩 "৪০০ গ্রাম চাল বিক্রি করো"
          </button>
          <button
            type="button"
            onClick={() => applyVoiceInput("400 ग्राम चावल बेचना है")}
            className="shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-md transition-all active:scale-95 flex items-center gap-1"
          >
            🇮🇳 "400 ग्राम चावल बेचना है"
          </button>
          <button
            type="button"
            onClick={() => applyVoiceInput("PAYAZ")}
            className="shrink-0 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md transition-all active:scale-95 flex items-center gap-1"
          >
            🧅 "PAYAZ" (Onion)
          </button>
          <button
            type="button"
            onClick={() => applyVoiceInput("Tomato 500 kg at 30 rupees")}
            className="shrink-0 bg-surface-container-low hover:bg-emerald-50 text-emerald-800 border border-outline-variant px-2 py-0.5 rounded-md transition-all active:scale-95"
          >
            🗣️ "Tomato 500 kg @ ₹30"
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="flex gap-1.5 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
          <div className={`h-full transition-all duration-300 ${step >= 1 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
          <div className={`h-full transition-all duration-300 ${step >= 2 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
          <div className={`h-full transition-all duration-300 ${step >= 3 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
        </div>

        {successMsg ? (
          <div className="bg-emerald-100 text-primary-container p-6 rounded-2xl text-center flex flex-col items-center gap-3 my-4">
            <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <p className="text-[16px] font-bold">{successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* STEP 1: Select or Type Crop */}
            {step === 1 && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-[14px] font-bold text-on-surface">Step 1: Select or Type Crop</label>
                  <span className="text-[11px] font-bold text-secondary">Voice or Type</span>
                </div>

                {/* Direct Typing Box with Voice Recognition */}
                <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant flex flex-col gap-2 shadow-xs">
                  <label className="text-[12px] font-bold text-on-surface-variant flex items-center justify-between">
                    <span>Add Custom Crop / Product Name</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">Voice Enabled</span>
                  </label>
                  
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-on-surface-variant material-symbols-outlined text-[20px]">eco</span>
                    <input
                      type="text"
                      value={selectedCrop}
                      onChange={e => setSelectedCrop(e.target.value)}
                      placeholder="Type crop name (e.g. Cauliflower, Mango, Wheat...)"
                      className="w-full pl-10 pr-12 py-3 bg-white border border-outline-variant rounded-xl text-[14px] font-bold text-on-surface focus:outline-none focus:border-primary shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={toggleWizardSpeech}
                      title="Speak crop name"
                      className={`absolute right-2.5 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isWizardListening ? 'bg-red-600 text-white animate-pulse' : 'bg-primary-container text-primary-fixed hover:bg-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">mic</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 my-0.5">
                  <div className="h-px bg-outline-variant flex-1"></div>
                  <span className="text-[11px] text-on-surface-variant font-bold uppercase">Or Choose Popular Crops</span>
                  <div className="h-px bg-outline-variant flex-1"></div>
                </div>

                {/* Category Filter for Wizard */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] font-bold">
                  {['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Leafy Greens'].map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setWizardCategory(cat)}
                      className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all ${
                        wizardCategory === cat
                          ? 'bg-primary-container text-on-primary shadow-xs font-black'
                          : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Popular & Expanded Crop Cards */}
                <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto no-scrollbar pr-0.5">
                  {filteredWizardCrops.map(crop => (
                    <button
                      key={crop.name}
                      type="button"
                      onClick={() => {
                        setSelectedCrop(crop.name);
                        setExpectedPrice(crop.suggestedPriceMin || 30);
                      }}
                      className={`p-2.5 rounded-xl border text-left flex flex-col gap-0.5 transition-all active:scale-98 ${
                        selectedCrop.toLowerCase() === crop.name.toLowerCase()
                          ? 'border-2 border-primary bg-primary-container/10 ring-1 ring-primary shadow-xs'
                          : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{crop.icon}</span>
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 bg-surface-container-high text-on-surface-variant rounded">
                          {crop.category || 'Produce'}
                        </span>
                      </div>
                      <span className="font-extrabold text-[13px] text-on-surface leading-tight truncate">{crop.name}</span>
                      <span className="text-[10px] text-on-surface-variant font-medium truncate">{crop.variety}</span>
                      <span className="text-[10px] font-black text-primary mt-0.5">₹{crop.suggestedPriceMin}–{crop.suggestedPriceMax}/kg</span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!selectedCrop.trim()) {
                      setVoiceNotice('Please type or speak a crop name first.');
                      return;
                    }
                    setStep(2);
                  }}
                  className="mt-2 w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <span>Continue to Quantity</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            )}

            {/* STEP 2: Enter Quantity */}
            {step === 2 && (
              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-bold text-on-surface">Step 2: Harvest Quantity (Kg)</label>
                
                <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-on-surface-variant font-medium">Available Lot Quantity</span>
                    <span className="text-[24px] font-extrabold text-primary">{quantityKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={quantityKg}
                    onChange={e => setQuantityKg(Number(e.target.value))}
                    className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[11px] text-on-surface-variant font-bold">
                    <span>100 kg</span>
                    <span>1,000 kg</span>
                    <span>5,000 kg</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-[13px] font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Set Price & Date</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Expected Price, Harvest Date */}
            {step === 3 && (
              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-bold text-on-surface">Step 3: Price & Date</label>

                <div>
                  <label className="text-[12px] font-bold text-on-surface-variant">Expected Price per Kg (₹)</label>
                  <div className="relative mt-1">
                    <span className="absolute left-3.5 top-3 font-bold text-on-surface-variant">₹</span>
                    <input
                      type="number"
                      value={expectedPrice}
                      onChange={e => setExpectedPrice(Number(e.target.value))}
                      placeholder="Enter price per kg"
                      className="w-full pl-8 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-on-surface-variant">Expected Harvest / Dispatch Date</label>
                  <input
                    type="date"
                    value={harvestDate}
                    onChange={e => setHarvestDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 mt-1 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-[13px] font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    {isSubmitting ? 'Listing Produce...' : 'List My Produce'}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
