import React, { useState, useEffect, useRef } from 'react';
import { Produce } from '@/types';

interface ListProduceWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newProduce: Produce) => void;
  initialCrop?: string;
  language?: 'EN' | 'BN' | 'HI';
}

export const ListProduceWizard: React.FC<ListProduceWizardProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialCrop = 'Tomato',
  language = 'EN'
}) => {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [selectedCrop, setSelectedCrop] = React.useState(initialCrop);
  const [quantityKg, setQuantityKg] = React.useState<number>(800);
  const [grade, setGrade] = React.useState<'Grade A' | 'Grade B' | 'Standard'>('Grade A');
  const [expectedPrice, setExpectedPrice] = React.useState<number>(30);
  const [harvestDate, setHarvestDate] = React.useState<string>('2026-09-04');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');

  // Voice fill state inside wizard
  const [isWizardListening, setIsWizardListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState('');
  const wizardRecRef = useRef<any>(null);

  useEffect(() => {
    if (initialCrop) {
      setSelectedCrop(initialCrop);
    }
  }, [initialCrop]);

  useEffect(() => {
    return () => {
      if (wizardRecRef.current) {
        try {
          wizardRecRef.current.abort();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  const getLanguageTag = (lang: string) => {
    if (lang === 'BN') return 'bn-IN';
    if (lang === 'HI') return 'hi-IN';
    return 'en-IN';
  };

  // Voice input support for filling wizard fields
  const toggleWizardSpeech = () => {
    if (isWizardListening) {
      try {
        wizardRecRef.current?.stop();
      } catch (e) {
        // ignore
      }
      setIsWizardListening(false);
      return;
    }

    if (typeof window !== 'undefined') {
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRec) {
        setVoiceNotice('Voice recognition not supported on this browser. Please use Chrome or Edge.');
        return;
      }

      try {
        if (wizardRecRef.current) {
          try {
            wizardRecRef.current.abort();
          } catch (e) {
            // ignore
          }
        }

        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        rec.lang = getLanguageTag(language);

        rec.onstart = () => {
          setIsWizardListening(true);
          setVoiceNotice('🎤 Listening... Speak crop name or amount (e.g. "Cauliflower" or "500 kg at 30 rupees")');
        };

        rec.onresult = (event: any) => {
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
          
          setVoiceNotice(`Heard: "${text}"`);

          const lower = text.toLowerCase();

          // Multi-language crop detection (English, Bengali, Hindi)
          if (lower.includes('tomato') || lower.includes('টমেটো') || lower.includes('टमाटर')) setSelectedCrop('Tomato');
          else if (lower.includes('potato') || lower.includes('alu') || lower.includes('aaloo') || lower.includes('আলু') || lower.includes('आलू')) setSelectedCrop('Potato');
          else if (lower.includes('onion') || lower.includes('pyaj') || lower.includes('peyaj') || lower.includes('পেঁয়াজ') || lower.includes('प्याज')) setSelectedCrop('Onion');
          else if (lower.includes('rice') || lower.includes('chawal') || lower.includes('dhan') || lower.includes('চাল') || lower.includes('ধান') || lower.includes('चावल')) setSelectedCrop('Rice');
          else if (lower.includes('wheat') || lower.includes('gehu') || lower.includes('gom') || lower.includes('গম') || lower.includes('गेहूं')) setSelectedCrop('Wheat');
          else if (lower.includes('mango') || lower.includes('aam') || lower.includes('আম') || lower.includes('आम')) setSelectedCrop('Mango');
          else if (lower.includes('cauliflower') || lower.includes('phool') || lower.includes('phulkopi') || lower.includes('ফুলকপি') || lower.includes('गोभी')) setSelectedCrop('Cauliflower');
          else {
            // Take spoken word directly as custom crop name if in step 1
            const cleaned = text.replace(/sell|list|kilo|kg|rupees|taka|rs|বিক্রি|টাকা|किलो|रुपये/gi, '').trim();
            if (cleaned.length >= 2) {
              setSelectedCrop(cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
            }
          }

          // Check for numbers / quantity
          const numbers = text.match(/\d+/g);
          if (numbers && numbers.length > 0) {
            const val = parseInt(numbers[0], 10);
            if (val >= 50 && val <= 10000) {
              setQuantityKg(val);
            } else if (val > 0 && val < 50) {
              setExpectedPrice(val);
            }
            if (numbers.length > 1) {
              const secondVal = parseInt(numbers[1], 10);
              if (secondVal < 100) setExpectedPrice(secondVal);
            }
          }

          // Check for grade
          if (lower.includes('grade a')) setGrade('Grade A');
          if (lower.includes('grade b')) setGrade('Grade B');
        };

        rec.onerror = (event: any) => {
          console.warn('Wizard speech error:', event.error);
          setIsWizardListening(false);
          if (event.error === 'not-allowed') {
            setVoiceNotice('Microphone access was blocked. Please allow mic permission in your browser.');
          } else if (event.error === 'no-speech') {
            setVoiceNotice('No speech detected. Tap the mic and speak clearly.');
          } else {
            setVoiceNotice(`Voice status: ${event.error}. You can also type directly in the box.`);
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
        setVoiceNotice('Could not start microphone. You can type in the box directly.');
      }
    }
  };

  if (!isOpen) return null;

  const cropOptions = [
    { name: 'Tomato', icon: '🍅', variety: 'Hybrid Red', suggestedPrice: '₹28–32/kg' },
    { name: 'Potato', icon: '🥔', variety: 'Jyoti', suggestedPrice: '₹16–20/kg' },
    { name: 'Onion', icon: '🧅', variety: 'Nashik Red', suggestedPrice: '₹24–28/kg' },
    { name: 'Rice', icon: '🌾', variety: 'Minikit', suggestedPrice: '₹38–44/kg' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const created: Produce = {
        id: `prod-${Date.now().toString().slice(-4)}`,
        farmerId: 'f-101',
        farmerName: 'Farmer A (Ramesh Ghosh)',
        farmerLocation: 'Hooghly (32 km)',
        cropName: selectedCrop,
        variety: cropOptions.find(c => c.name.toLowerCase() === selectedCrop.toLowerCase())?.variety || 'Hybrid',
        grade,
        quantityKg,
        expectedPricePerKg: expectedPrice,
        marketSuggestedPriceMin: selectedCrop === 'Tomato' ? 28 : 16,
        marketSuggestedPriceMax: selectedCrop === 'Tomato' ? 32 : 20,
        harvestDate,
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      setSuccessMsg('Produce listed successfully. Saved locally and synced to e-NAM!');
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
              className={`p-2 rounded-full transition-all ${
                isWizardListening ? 'bg-red-600 text-white animate-pulse' : 'bg-surface-container-high text-primary hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
            <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Voice Feedback Banner inside form */}
        {voiceNotice && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-2.5 rounded-xl text-[12px] font-bold">
            {voiceNotice}
          </div>
        )}

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

                {/* Popular Crop Cards */}
                <div className="grid grid-cols-2 gap-2.5">
                  {cropOptions.map(crop => (
                    <button
                      key={crop.name}
                      type="button"
                      onClick={() => setSelectedCrop(crop.name)}
                      className={`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all active:scale-98 ${
                        selectedCrop.toLowerCase() === crop.name.toLowerCase()
                          ? 'border-2 border-primary bg-primary-container/10 ring-1 ring-primary'
                          : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="text-2xl">{crop.icon}</span>
                      <span className="font-extrabold text-[15px] text-on-surface">{crop.name}</span>
                      <span className="text-[11px] text-on-surface-variant font-medium">{crop.variety}</span>
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
                    <span>Set Quality & Price</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Quality, Expected Price, Harvest Date */}
            {step === 3 && (
              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-bold text-on-surface">Step 3: Quality, Price & Date</label>

                <div>
                  <label className="text-[12px] font-bold text-on-surface-variant">Quality Grade</label>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {(['Grade A', 'Grade B', 'Standard'] as const).map(g => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGrade(g)}
                        className={`py-2 rounded-xl text-[12px] font-bold border transition-colors ${
                          grade === g
                            ? 'bg-primary-container text-on-primary border-primary'
                            : 'bg-surface-container-lowest text-on-surface border-outline-variant'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

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
