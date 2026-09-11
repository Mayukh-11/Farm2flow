import React, { useState, useEffect, useRef } from 'react';
import { parseAgriculturalVoice, ParsedVoiceResult, getBestIndicVoice } from '@/services/voiceParser';

interface PredefinedHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionKey: string, params?: { crop?: string; quantity?: number; price?: number }) => void;
  language?: 'EN' | 'BN' | 'HI';
  onDetectedLanguage?: (lang: 'EN' | 'BN' | 'HI') => void;
  onProduceCreated?: (produce: any) => void;
}

export const PredefinedHelpModal: React.FC<PredefinedHelpModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
  language = 'EN',
  onDetectedLanguage,
  onProduceCreated
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [detectedLangDisplay, setDetectedLangDisplay] = useState('Omni-Voice (Listening in all Indian languages)');
  const [voiceRecognitionLang, setVoiceRecognitionLang] = useState<'AUTO' | 'BN' | 'HI' | 'EN'>('AUTO');
  const [speakingResponse, setSpeakingResponse] = useState(false);
  const [lastResult, setLastResult] = useState<ParsedVoiceResult | null>(null);
  const [customQuery, setCustomQuery] = useState('');
  
  const recognitionRef = useRef<any>(null);
  const silenceTimerRef = useRef<any>(null);

  const quickActions = [
    { key: 'sell', icon: 'add_circle', label: "Sell my produce", desc: "List crop in 3 simple steps" },
    { key: 'prices', icon: 'payments', label: "Show today's market prices", desc: "View real-time mandi rates & AI demand alerts" },
    { key: 'track', icon: 'local_shipping', label: "Track my orders", desc: "View live dispatch & logistics status" },
    { key: 'market', icon: 'analytics', label: "Market Intelligence", desc: "Forecast demand and fair rate analysis" }
  ];

  // Browser Speech Synthesis (High-quality voice output with native Indic voice selection)
  const speakVoiceResponse = (text: string, langCode: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 0.95;
        utterance.pitch = 1.0;

        const bestVoice = getBestIndicVoice(langCode.startsWith('bn') ? 'BN' : langCode.startsWith('hi') ? 'HI' : 'EN');
        if (bestVoice) {
          utterance.voice = bestVoice;
        }

        utterance.onstart = () => setSpeakingResponse(true);
        utterance.onend = () => setSpeakingResponse(false);
        utterance.onerror = () => setSpeakingResponse(false);
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('TTS error:', e);
      }
    }
  };

  // Detect language, entities and intent using Agricultural Voice Parser
  const detectLanguageAndRespond = (spokenText: string) => {
    const raw = spokenText.trim();
    if (!raw) return;

    setTranscript(raw);

    const parsed = parseAgriculturalVoice(raw);
    setLastResult(parsed);

    // Update detected language tag and notify parent
    let ttsLang = 'en-IN';
    if (parsed.detectedLang === 'BN') {
      ttsLang = 'bn-IN';
      setDetectedLangDisplay('🌐 বাংলা (Bengali Voice Detected)');
    } else if (parsed.detectedLang === 'HI') {
      ttsLang = 'hi-IN';
      setDetectedLangDisplay('🌐 हिन्दी (Hindi Voice Detected)');
    } else {
      ttsLang = 'en-IN';
      setDetectedLangDisplay('🌐 English (Voice Detected)');
    }

    if (onDetectedLanguage) {
      onDetectedLanguage(parsed.detectedLang);
    }

    const cropName = parsed.crop || 'Tomato';
    const cropLocal = parsed.cropLocalName || cropName;

    // Intent routing:
    // A. SELL / DIRECT LIST PRODUCE INTENT
    if (parsed.intent === 'sell') {
      const hasDirectCommand = /\b(list|listing|sell|bikri|bikroy|bech|bechna|becho|বিক্রি|বিক্রয়|বেচা|বেচব|বেচবো|বেচতে|তোলো|তালিকা|बेचना|बेचें|बिक्री|दर्ज|डालो)\b/i.test(raw);
      const isSubKg = parsed.quantityKg && parsed.quantityKg < 1;
      const qtyStr = isSubKg ? `${Math.round((parsed.quantityKg || 0) * 1000)}g` : `${parsed.quantityKg} kg`;

      // If user gives a direct command like "list 400 grams of rice" or "৪০০ গ্রাম চাল বিক্রি করো" or "400 ग्राम चावल बेचना है", directly list it!
      if (hasDirectCommand && parsed.crop && parsed.quantityKg) {
        let activeFarmerName = 'Ramesh Ghosh';
        let activeFarmerLocation = 'Hooghly (Singur)';
        if (typeof window !== 'undefined') {
          try {
            const session = JSON.parse(localStorage.getItem('farm2flow_user_session') || '{}');
            if (session.name) activeFarmerName = session.name;
            if (session.location) activeFarmerLocation = session.location;
          } catch (err) {}
        }

        const defaultPrice = parsed.pricePerKg || 30;
        const finalQty = parsed.quantityKg;

        const directProduce = {
          id: `prod-${Date.now().toString().slice(-4)}`,
          farmerId: `f-${Date.now().toString().slice(-3)}`,
          farmerName: activeFarmerName,
          farmerLocation: activeFarmerLocation,
          cropName: cropName,
          variety: 'Farm Fresh',
          grade: 'Grade A' as const,
          quantityKg: finalQty,
          expectedPricePerKg: defaultPrice,
          marketSuggestedPriceMin: Math.max(10, Math.round(defaultPrice * 0.9)),
          marketSuggestedPriceMax: Math.round(defaultPrice * 1.15),
          harvestDate: '2026-09-04',
          demandStatus: 'High' as const,
          demandForecastPct: 20,
          status: 'Available' as const,
          fpoVerified: true,
          createdAt: new Date().toISOString()
        };

        if (typeof window !== 'undefined') {
          try {
            const currentList = JSON.parse(localStorage.getItem('farm2flow_produce_items') || '[]');
            const updated = [directProduce, ...currentList];
            localStorage.setItem('farm2flow_produce_items', JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('farm2flow_produce_updated', { detail: { newProduce: directProduce, produceList: updated } }));
          } catch (e) {}
        }

        if (onProduceCreated) {
          try {
            onProduceCreated(directProduce);
          } catch (e) {}
        }

        const directSuccessMsg = parsed.detectedLang === 'BN'
          ? `✓ সরাসরি তালিকাভুক্ত হয়েছে: ${cropLocal} ${isSubKg ? `${Math.round(finalQty * 1000)} গ্রাম` : `${finalQty} কেজি`} (₹${defaultPrice}/কেজি দর)`
          : parsed.detectedLang === 'HI'
          ? `✓ सीधे दर्ज कर दिया गया है: ${cropLocal} ${isSubKg ? `${Math.round(finalQty * 1000)} ग्राम` : `${finalQty} किलो`} (₹${defaultPrice}/किलो भाव)`
          : `✓ Successfully Listed: ${cropName} ${qtyStr} at ₹${defaultPrice}/kg!`;

        setFeedback(`🎉 ${directSuccessMsg}`);
        speakVoiceResponse(directSuccessMsg, ttsLang);

        setTimeout(() => {
          onClose();
        }, 1800);
        return;
      }

      // Normal wizard opening fallback
      const responseMsg = parsed.detectedLang === 'BN' 
        ? `${cropLocal} বিক্রির ফর্ম খোলা হচ্ছে${parsed.quantityKg ? ` (${isSubKg ? `${Math.round(parsed.quantityKg * 1000)} গ্রাম` : `${parsed.quantityKg} কেজি`})` : ''}`
        : parsed.detectedLang === 'HI'
        ? `${cropLocal} बेचने का फॉर्म खोला जा रहा है${parsed.quantityKg ? ` (${isSubKg ? `${Math.round(parsed.quantityKg * 1000)} ग्राम` : `${parsed.quantityKg} किलो`})` : ''}`
        : `Opening produce listing for ${cropName}${parsed.quantityKg ? ` (${qtyStr})` : ''}`;

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('sell', { 
          crop: cropName,
          quantity: parsed.quantityKg,
          price: parsed.pricePerKg
        });
        onClose();
      }, 1400);
      return;
    }

    // B. PRICES / MANDI RATES INTENT
    if (parsed.intent === 'price') {
      const responseMsg = parsed.detectedLang === 'BN' 
        ? `${cropLocal}-এর আজকের বাজার দর ও চাহিদা দেখাচ্ছি`
        : parsed.detectedLang === 'HI'
        ? `${cropLocal} का आज का मंडी भाव दिखाया जा रहा है`
        : `Checking today's mandi market rates for ${cropName}`;

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('prices', { crop: cropName });
        onClose();
      }, 1400);
      return;
    }

    // C. TRACK ORDERS / DISPATCH INTENT
    if (parsed.intent === 'track') {
      const responseMsg = parsed.detectedLang === 'BN' 
        ? 'আপনার চলতি অর্ডার ও গাড়ি ট্র্যাক করা হচ্ছে'
        : parsed.detectedLang === 'HI'
        ? 'आपके ऑर्डर और वाहन की स्थिति ट्रैक की जा रही है'
        : 'Tracking your active orders and truck dispatch';

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('track');
        onClose();
      }, 1400);
      return;
    }

    // D. WEATHER INTENT
    if (parsed.intent === 'weather') {
      const responseMsg = parsed.detectedLang === 'BN'
        ? 'আজ আবহাওয়া রোদ ঝলমলে, তাপমাত্রা ৩২ ডিগ্রি। ফসল তোলা ও পরিবহনের জন্য অনুকূল।'
        : parsed.detectedLang === 'HI'
        ? 'आज मौसम साफ़ और धूप खिली रहेगी। तापमान ३२ डिग्री है, फसल कटाई के लिए उत्तम दिन है।'
        : 'Weather forecast: Clear sunny sky, 32°C. Excellent conditions for harvesting and dispatch.';

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);
      return;
    }

    // E. MARKET INTELLIGENCE INTENT
    if (parsed.intent === 'market') {
      const responseMsg = parsed.detectedLang === 'BN'
        ? 'চাহিদার এআই পূর্বাভাস ও ঘাটতি এলাকা দেখানো হচ্ছে'
        : parsed.detectedLang === 'HI'
        ? 'मांग का पूर्वानुमान और बाज़ार की जानकारी दिखाई जा रही है'
        : 'Displaying AI demand intelligence and regional forecasts';

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('market');
        onClose();
      }, 1400);
      return;
    }

    // Generic acknowledgment fallback
    const summary = parsed.humanSummary[parsed.detectedLang] || `Heard: "${raw}"`;
    setFeedback(`Heard: "${raw}"`);
    speakVoiceResponse(summary, ttsLang);
  };

  const startOmniVoice = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback('Web Speech API is not supported in this browser. Please use Chrome/Edge or the test buttons below.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }

      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.maxAlternatives = 3;

      // Select target dialect tag
      const targetLang = voiceRecognitionLang === 'BN' ? 'bn-IN' 
        : voiceRecognitionLang === 'HI' ? 'hi-IN' 
        : 'en-IN';
      rec.lang = targetLang;

      rec.onstart = () => {
        setIsListening(true);
        setFeedback('🎤 Listening... Speak naturally in English, Hindi, or Bengali.');
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
        if (text) {
          setTranscript(text);
          // Set silence pause timer to auto-finalize
          silenceTimerRef.current = setTimeout(() => {
            stopOmniVoice();
            detectLanguageAndRespond(text);
          }, 1600);
        }
      };

      rec.onerror = (event: any) => {
        if (event.error === 'no-speech') {
          setFeedback('🎤 Still listening... Speak closer to the microphone.');
        } else if (event.error === 'not-allowed') {
          setIsListening(false);
          setFeedback('Mic access was blocked. Please tap the lock icon in the address bar to allow.');
        } else {
          setIsListening(false);
          setFeedback(`Voice status: ${event.error}. You can also use the 1-click test triggers below.`);
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (e: any) {
      console.error('Failed to start speech:', e);
      setIsListening(false);
      setFeedback('Could not start microphone. Try the sample speech pills below.');
    }
  };

  const stopOmniVoice = () => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }
    setIsListening(false);
  };

  const toggleListening = () => {
    if (isListening) {
      stopOmniVoice();
      if (transcript.trim()) {
        detectLanguageAndRespond(transcript);
      }
    } else {
      setTranscript('');
      setLastResult(null);
      startOmniVoice();
    }
  };

  useEffect(() => {
    return () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[440px] bg-surface rounded-t-3xl sm:rounded-3xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
              isListening ? 'bg-red-600 text-white animate-pulse shadow-lg' : 'bg-primary-container text-on-primary'
            }`}>
              <span className="material-symbols-outlined text-[26px]">
                {isListening ? 'graphic_eq' : 'mic'}
              </span>
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-on-surface">Universal Agricultural Voice</h3>
              <p className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                {detectedLangDisplay}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Voice Language Selector / Auto Detection Indicator */}
        <div className="flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-xl border border-outline-variant text-[11px] font-bold">
          <span className="text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">translate</span>
            Input Dialect:
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => { setVoiceRecognitionLang('AUTO'); setDetectedLangDisplay('🌐 Auto-Detecting Any Language'); }}
              className={`px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'AUTO' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              Auto
            </button>
            <button
              type="button"
              onClick={() => { setVoiceRecognitionLang('BN'); setDetectedLangDisplay('🇧🇩 বাংলা (Bengali Voice Mode)'); }}
              className={`px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'BN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => { setVoiceRecognitionLang('HI'); setDetectedLangDisplay('🇮🇳 हिन्दी (Hindi Voice Mode)'); }}
              className={`px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'HI' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              हिन्दी
            </button>
            <button
              type="button"
              onClick={() => { setVoiceRecognitionLang('EN'); setDetectedLangDisplay('🇬🇧 English / Hinglish'); }}
              className={`px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'EN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* Big Mic Button & Speech Feedback Panel */}
        <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-4 flex flex-col items-center text-center gap-3 shadow-inner">
          <button
            onClick={toggleListening}
            className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all transform active:scale-95 shadow-md ${
              isListening 
                ? 'bg-red-600 text-white ring-4 ring-red-300 animate-pulse' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            <span className="material-symbols-outlined text-[34px]">
              {isListening ? 'stop' : 'mic'}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
              {isListening ? 'Stop' : 'Tap to Talk'}
            </span>
          </button>

          {/* Equalizer Visualizer Waves when listening */}
          {isListening && (
            <div className="flex items-center gap-1.5 py-1">
              <span className="w-1.5 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-0.4s]"></span>
              <span className="w-1.5 h-8 bg-red-600 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
              <span className="w-1.5 h-6 bg-red-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-9 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.1s]"></span>
              <span className="w-1.5 h-7 bg-red-600 rounded-full animate-bounce [animation-delay:-0.25s]"></span>
              <span className="w-1.5 h-4 bg-red-600 rounded-full animate-bounce"></span>
            </div>
          )}

          <div className="flex flex-col gap-1.5 w-full">
            {transcript ? (
              <div className="bg-white py-2.5 px-3 rounded-xl border border-outline-variant shadow-xs text-left flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider">Spoken Input:</p>
                  {lastResult?.dialectLabel && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {lastResult.dialectLabel}
                    </span>
                  )}
                </div>
                <p className="text-[15px] font-extrabold text-primary leading-snug">"{transcript}"</p>

                {/* Real-time Multi-lingual Translation Box */}
                {lastResult?.translations && (
                  <div className="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/80 flex flex-col gap-1.5 text-[11px]">
                    <span className="text-[10px] font-extrabold uppercase text-secondary tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">g_translate</span>
                      Live Agricultural Translation:
                    </span>
                    <div className="flex flex-col gap-1 pl-1">
                      <div className="flex items-start gap-1.5 text-on-surface">
                        <span className="shrink-0 font-bold text-gray-500">🇬🇧 EN:</span>
                        <span className="font-semibold text-gray-900">{lastResult.translations.EN}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-on-surface">
                        <span className="shrink-0 font-bold text-emerald-700">🇧🇩 BN:</span>
                        <span className="font-semibold text-emerald-950">{lastResult.translations.BN}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-on-surface">
                        <span className="shrink-0 font-bold text-amber-700">🇮🇳 HI:</span>
                        <span className="font-semibold text-amber-950">{lastResult.translations.HI}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Recognized Entity Badges */}
                {lastResult && (
                  <div className="flex flex-wrap gap-1 pt-1.5 border-t border-outline-variant/60">
                    {lastResult.crop && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 flex items-center gap-0.5">
                        🌾 Crop: {lastResult.cropLocalName || lastResult.crop}
                      </span>
                    )}
                    {lastResult.quantityKg && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 flex items-center gap-0.5">
                        ⚖️ Qty: {lastResult.quantityKg} kg
                      </span>
                    )}
                    {lastResult.pricePerKg && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 flex items-center gap-0.5">
                        💰 Price: ₹{lastResult.pricePerKg}/kg
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 uppercase">
                      🎯 Intent: {lastResult.intent}
                    </span>
                  </div>
                )}
              </div>
            ) : null}

            <p className="text-[12px] font-bold text-on-surface-variant px-2">
              {feedback || 'Speak in Bengali, Hindi, or English (e.g. "Sell 500 kg Tomato" or "আলুর দাম কত")'}
            </p>

            {speakingResponse && (
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-primary animate-pulse">
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
                <span>Answering aloud with speech...</span>
              </div>
            )}
          </div>

          {/* Direct Text / Query Input Bar */}
          <div className="flex items-center gap-1.5 w-full pt-1">
            <input
              type="text"
              value={customQuery}
              onChange={e => setCustomQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && customQuery.trim()) {
                  detectLanguageAndRespond(customQuery);
                  setCustomQuery('');
                }
              }}
              placeholder="Or type query (e.g. 'Sell 500 kg tomato' or 'দর কত')..."
              className="flex-1 px-3 py-2 text-[12px] bg-white border border-outline-variant rounded-xl font-medium focus:outline-none focus:border-primary shadow-xs"
            />
            <button
              type="button"
              onClick={() => {
                if (customQuery.trim()) {
                  detectLanguageAndRespond(customQuery);
                  setCustomQuery('');
                }
              }}
              className="px-3 py-2 bg-primary text-white text-[12px] font-bold rounded-xl active:scale-95 transition-transform shrink-0 shadow-xs"
            >
              Analyze
            </button>
          </div>

          {/* 1-Click Instant Voice Testing Simulation */}
          <div className="w-full pt-2 border-t border-outline-variant flex flex-col gap-1.5 text-left">
            <span className="text-[10px] uppercase font-bold text-on-surface-variant">1-Click Voice Direct Listing & Query Triggers:</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("list 400 grams of rice")}
                className="text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs flex items-center gap-1"
              >
                🌾 "List 400 grams of rice"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("৪০০ গ্রাম চাল বিক্রি করো")}
                className="text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs flex items-center gap-1"
              >
                🇧🇩 "৪০০ গ্রাম চাল বিক্রি করো"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("400 ग्राम चावल बेचना है")}
                className="text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs flex items-center gap-1"
              >
                🇮🇳 "400 ग्राम चावल बेचना है"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("টমেটো ৫০০ কেজি ৩০ টাকা বিক্রি করব")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇧🇩 "টমেটো ৫০০ কেজি ৩০ টাকা বিক্রি"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("আলুর আজকের বাজার দর কত")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇧🇩 "আলুর বাজার দর কত?"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("আমার গাড়ি এখন কোথায়")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇧🇩 "আমার গাড়ি এখন কোথায়?"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("टमाटर का आज का मंडी भाव क्या है")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇮🇳 "टमाटर का मंडी भाव क्या है"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("आलू 200 किलो 25 रुपये बेचना है")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇮🇳 "आलू 200 किलो ₹25 बेचना है"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("आज बारिश होगी क्या मौसम बताओ")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇮🇳 "मौसम और बारिश पूर्वानुमान"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("Sell 500 kg Tomato at 30 rupees")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇬🇧 "Sell 500 kg Tomato @ ₹30"
              </button>
            </div>
          </div>
        </div>

        {/* Quick tap fallback suggestions */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider px-1">
            Or Tap Action Directly
          </span>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map(action => (
              <button
                key={action.key}
                onClick={() => {
                  onSelectAction(action.key);
                  onClose();
                }}
                className="p-2.5 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-xl flex items-center gap-2 text-left transition-all active:scale-98 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">{action.icon}</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[12px] text-on-surface leading-tight">{action.label}</h4>
                  <p className="text-[10px] text-on-surface-variant line-clamp-1">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
