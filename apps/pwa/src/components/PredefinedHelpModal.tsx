import React, { useState, useEffect, useRef } from 'react';

interface PredefinedHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionKey: string, params?: { crop?: string; quantity?: number; price?: number }) => void;
  language?: 'EN' | 'BN' | 'HI';
  onDetectedLanguage?: (lang: 'EN' | 'BN' | 'HI') => void;
}

export const PredefinedHelpModal: React.FC<PredefinedHelpModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
  language = 'EN',
  onDetectedLanguage
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [detectedLangDisplay, setDetectedLangDisplay] = useState('Omni-Voice (Listening in all Indian languages)');
  const [voiceRecognitionLang, setVoiceRecognitionLang] = useState<'AUTO' | 'BN' | 'HI' | 'EN'>('AUTO');
  const [speakingResponse, setSpeakingResponse] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const quickActions = [
    { key: 'sell', icon: 'add_circle', label: "Sell my produce", desc: "List crop in 3 simple steps" },
    { key: 'prices', icon: 'payments', label: "Show today's market prices", desc: "View real-time mandi rates & AI demand alerts" },
    { key: 'track', icon: 'local_shipping', label: "Track my orders", desc: "View live dispatch & logistics status" },
    { key: 'market', icon: 'analytics', label: "Market Intelligence", desc: "Forecast demand and fair rate analysis" }
  ];

  // Browser Speech Synthesis (Voice response like YouTube / Google Assistant)
  const speakVoiceResponse = (text: string, langCode: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onstart = () => setSpeakingResponse(true);
        utterance.onend = () => setSpeakingResponse(false);
        utterance.onerror = () => setSpeakingResponse(false);
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('TTS error:', e);
      }
    }
  };

  // Detect language and intent universally
  const detectLanguageAndRespond = (spokenText: string) => {
    const raw = spokenText.trim();
    if (!raw) return;

    setTranscript(raw);

    // 1. Script & Phonetic Language Detection
    const hasBengali = /[\u0980-\u09FF]/.test(raw) || /bikri|koto|daam|dor|dhan|alu|shobji|chawal|peyaj/i.test(raw);
    const hasHindi = /[\u0900-\u097F]/.test(raw) || /bechna|bhav|kya|aalu|khet|mandi|gehu/i.test(raw);
    
    let detected: 'BN' | 'HI' | 'EN' = 'EN';
    let ttsLang = 'en-IN';
    
    if (hasBengali) {
      detected = 'BN';
      ttsLang = 'bn-IN';
      setDetectedLangDisplay('🌐 বাংলা (Bengali Voice Detected)');
    } else if (hasHindi) {
      detected = 'HI';
      ttsLang = 'hi-IN';
      setDetectedLangDisplay('🌐 हिन्दी (Hindi Voice Detected)');
    } else {
      detected = 'EN';
      ttsLang = 'en-IN';
      setDetectedLangDisplay('🌐 English (Voice Detected)');
    }

    if (onDetectedLanguage) {
      onDetectedLanguage(detected);
    }

    const lower = raw.toLowerCase();

    // 2. Universal Crop Detection
    let detectedCrop = 'Tomato';
    if (lower.includes('potato') || lower.includes('alu') || lower.includes('aaloo') || lower.includes('আলু') || lower.includes('आलू')) {
      detectedCrop = 'Potato';
    } else if (lower.includes('onion') || lower.includes('pyaj') || lower.includes('peyaj') || lower.includes('পেঁয়াজ') || lower.includes('प्याज')) {
      detectedCrop = 'Onion';
    } else if (lower.includes('rice') || lower.includes('chawal') || lower.includes('dhan') || lower.includes('চাল') || lower.includes('ধান') || lower.includes('चावल')) {
      detectedCrop = 'Rice';
    } else if (lower.includes('wheat') || lower.includes('gehu') || lower.includes('gom') || lower.includes('গম') || lower.includes('गेहूं')) {
      detectedCrop = 'Wheat';
    } else if (lower.includes('mango') || lower.includes('aam') || lower.includes('আম') || lower.includes('आम')) {
      detectedCrop = 'Mango';
    } else if (lower.includes('cauliflower') || lower.includes('phulkopi') || lower.includes('গোভি') || lower.includes('ফুলকপি') || lower.includes('गोभी')) {
      detectedCrop = 'Cauliflower';
    }

    // 3. Command Intent Mapping with Audio Response
    // A. SELL / LIST
    if (
      lower.includes('sell') || lower.includes('list') || lower.includes('produce') || lower.includes('crop') ||
      lower.includes('bikri') || lower.includes('bech') || lower.includes('বিক্রি') || lower.includes('বেচা') ||
      lower.includes('ফসল') || lower.includes('बेचना') || lower.includes('बिक्री') || lower.includes('फसल') ||
      lower.includes('টমেটো') || lower.includes('আলু') || lower.includes('পেঁয়াজ') || lower.includes('टमाटर') ||
      lower.includes('आलू') || lower.includes('tomato') || lower.includes('potato')
    ) {
      const responseMsg = detected === 'BN' 
        ? `${detectedCrop} বিক্রির ফর্ম খোলা হচ্ছে`
        : detected === 'HI'
        ? `${detectedCrop} बेचने का फॉर्म खोला जा रहा है`
        : `Opening sell produce form for ${detectedCrop}`;

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('sell', { crop: detectedCrop });
        onClose();
      }, 1200);
      return;
    }

    // B. PRICES / MANDI RATES
    if (
      lower.includes('price') || lower.includes('rate') || lower.includes('mandi') || lower.includes('dam') ||
      lower.includes('daam') || lower.includes('dor') || lower.includes('দর') || lower.includes('দাম') ||
      lower.includes('মান্ডি') || lower.includes('বাজার') || lower.includes('भाव') || lower.includes('दाम') ||
      lower.includes('मंडी')
    ) {
      const responseMsg = detected === 'BN' 
        ? 'আজকের বাজার দর দেখানো হচ্ছে'
        : detected === 'HI'
        ? 'आज का मंडी भाव दिखाया जा रहा है'
        : 'Showing today market rates';

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('prices');
        onClose();
      }, 1200);
      return;
    }

    // C. ORDERS / DISPATCHES
    if (
      lower.includes('order') || lower.includes('track') || lower.includes('dispatch') || lower.includes('status') ||
      lower.includes('delivery') || lower.includes('অর্ডার') || lower.includes('ট্র্যাক') || lower.includes('চালান') ||
      lower.includes('ऑर्डर') || lower.includes('ट्रैक') || lower.includes('डिलीवरी')
    ) {
      const responseMsg = detected === 'BN' 
        ? 'আপনার অর্ডারের স্থিতি দেখাচ্ছি'
        : detected === 'HI'
        ? 'आपके ऑर्डर की स्थिति दिखाई जा रही है'
        : 'Tracking your orders';

      setFeedback(`🔊 ${responseMsg}`);
      speakVoiceResponse(responseMsg, ttsLang);

      setTimeout(() => {
        onSelectAction('track');
        onClose();
      }, 1200);
      return;
    }

    // Generic acknowledgment
    const genericMsg = detected === 'BN' ? 'শুনতে পেয়েছি' : detected === 'HI' ? 'सुनाई दिया' : 'I heard: ' + raw;
    setFeedback(`Heard: "${raw}"`);
    speakVoiceResponse(genericMsg, ttsLang);
  };

  const startOmniVoice = async () => {
    if (typeof window === 'undefined') return;

    // First request real microphone permissions via getUserMedia to unlock audio pipeline immediately
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
      }
    } catch (permErr) {
      console.warn('Microphone permission request failed:', permErr);
      setFeedback('Microphone permission needed. Please click Allow in browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback('Voice recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }

      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 5;

      // Allow language preference or omni auto-detect
      // Bengali: bn-IN, Hindi: hi-IN, English/Omni: en-IN
      const targetLang = voiceRecognitionLang === 'BN' ? 'bn-IN' : voiceRecognitionLang === 'HI' ? 'hi-IN' : 'en-IN';
      rec.lang = targetLang; 

      rec.onstart = () => {
        setIsListening(true);
        setFeedback('Listening... Speak now in Bengali, Hindi, or English.');
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
        if (text) {
          setTranscript(text);
          if (finalTrans.trim()) {
            detectLanguageAndRespond(finalTrans.trim());
          }
        }
      };

      rec.onerror = (event: any) => {
        console.warn('Voice error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setFeedback('Mic access was blocked. Please tap the lock/mic icon in the browser address bar.');
        } else if (event.error === 'no-speech') {
          setFeedback('No speech detected. Please speak closer to the mic.');
        } else {
          setFeedback(`Voice status: ${event.error}. You can also use the 1-click speech buttons below.`);
        }
      };

      rec.onend = () => {
        setIsListening(false);
        // Release audio track
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(t => t.stop());
          mediaStreamRef.current = null;
        }
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (e: any) {
      console.error('Failed to start speech:', e);
      setIsListening(false);
      setFeedback('Failed to start microphone. Please try clicking a test button below.');
    }
  };

  const stopOmniVoice = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }
    setIsListening(false);
  };

  const toggleListening = () => {
    if (isListening) {
      stopOmniVoice();
    } else {
      setTranscript('');
      setFeedback('Activating microphone pipeline...');
      startOmniVoice();
    }
  };

  useEffect(() => {
    if (!isListening && transcript.trim()) {
      detectLanguageAndRespond(transcript);
    }
  }, [isListening, transcript]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
              isListening ? 'bg-red-600 text-white animate-bounce shadow-lg' : 'bg-primary-container text-on-primary'
            }`}>
              <span className="material-symbols-outlined text-[26px]">mic</span>
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-on-surface">Universal Voice Assistant</h3>
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
            <span className="material-symbols-outlined text-[16px]">language</span>
            Speech Dialect:
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => { setVoiceRecognitionLang('AUTO'); setDetectedLangDisplay('🌐 Auto-Detecting Any Language'); }}
              className={`px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'AUTO' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`}
            >
              Omni / Auto
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
              onClick={() => { setVoiceRecognitionLang('EN'); setDetectedLangDisplay('🇬🇧 English (Voice Mode)'); }}
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
            <span className="material-symbols-outlined text-[36px]">
              {isListening ? 'graphic_eq' : 'mic'}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
              {isListening ? 'Listening...' : 'Tap to Talk'}
            </span>
          </button>

          <div className="flex flex-col gap-1 w-full">
            {transcript ? (
              <p className="text-[15px] font-extrabold text-primary bg-white py-2.5 px-3 rounded-xl border border-outline-variant shadow-xs">
                "{transcript}"
              </p>
            ) : null}

            <p className="text-[12px] font-bold text-on-surface-variant px-2">
              {feedback || 'Speak naturally in ANY language: English, Hindi, or Bengali! The app will automatically understand and respond.'}
            </p>

            {speakingResponse && (
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-primary animate-pulse mt-1">
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
                <span>Responding aloud...</span>
              </div>
            )}
          </div>

          {/* 1-Click Universal Voice Test Triggers */}
          <div className="w-full pt-2.5 border-t border-outline-variant flex flex-col gap-1.5 text-left">
            <span className="text-[10px] uppercase font-bold text-on-surface-variant">Instant Voice Simulator (1-Click Speak):</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("টমেটো বিক্রি করব")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇧🇩 বাংলা: "টমেটো বিক্রি"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("टमाटर बेचना है")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇮🇳 हिन्दी: "टमाटर बेचना है"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("Sell 500 kg tomato")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs"
              >
                🇬🇧 English: "Sell tomato"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("আজকের আলুর বাজার দর কত")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95"
              >
                🇧🇩 বাংলা: "আলুর দর"
              </button>
              <button
                type="button"
                onClick={() => detectLanguageAndRespond("मंडी भाव दिखाओ")}
                className="text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95"
              >
                🇮🇳 हिन्दी: "मंडी भाव"
              </button>
            </div>
          </div>
        </div>

        {/* Quick tap fallback suggestions */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider px-1">
            Or Tap Action Directly
          </span>
          {quickActions.map(action => (
            <button
              key={action.key}
              onClick={() => {
                onSelectAction(action.key);
                onClose();
              }}
              className="p-3 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-2xl flex items-center gap-3 text-left transition-all active:scale-98 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">{action.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-on-surface">{action.label}</p>
                <p className="text-[11px] text-on-surface-variant truncate font-medium">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
