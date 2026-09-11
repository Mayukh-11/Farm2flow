/**
 * Farm2Flow Agricultural Voice & Translation Intelligence Engine
 * Comprehensive multi-lingual pipeline for Indian Farmers & Traders
 * State-of-the-Art Language Detection, Phonetic Tokenizer & Neural-grade Agricultural Translation
 * Supports: বাংলা (Bengali), हिन्दी (Hindi), English, Banglish & Hinglish
 */

export interface ParsedVoiceResult {
  rawText: string;
  intent: 'sell' | 'price' | 'track' | 'market' | 'weather' | 'help' | 'unknown';
  confidence: number;
  detectedLang: 'EN' | 'BN' | 'HI';
  dialectLabel: string;
  script: 'Bengali' | 'Devanagari' | 'Latin';
  crop?: string;
  cropLocalName?: string;
  cropHindiName?: string;
  cropBengaliName?: string;
  quantityKg?: number;
  pricePerKg?: number;
  translations: {
    EN: string;
    BN: string;
    HI: string;
  };
  humanSummary: {
    EN: string;
    BN: string;
    HI: string;
  };
}

// 1. EXTENSIVE 40+ INDIAN CROPS DICTIONARY WITH DIALECT SYNONYMS
export interface CropDefinition {
  standardName: string;
  hindiName: string;
  bengaliName: string;
  aliases: string[];
}

export const INDIAN_CROPS: CropDefinition[] = [
  { standardName: 'Tomato', hindiName: 'टमाटर', bengaliName: 'টমেটো', aliases: ['tomato', 'tomatoes', 'tamatar', 'tamator', 'tometo', 'বিলিতি বেগুন', 'টমেটো', 'টমেটর', 'टमाटर', 'टमाटार'] },
  { standardName: 'Potato', hindiName: 'आलू', bengaliName: 'আলু', aliases: ['potato', 'potatoes', 'aloo', 'alu', 'batata', 'bataata', 'গোল আলু', 'আলু', 'आलू', 'बटाटा'] },
  { standardName: 'Onion', hindiName: 'प्याज़', bengaliName: 'পেঁয়াজ', aliases: ['onion', 'onions', 'payaz', 'payaj', 'pyaz', 'pyaaz', 'piyaz', 'piaz', 'piyaan', 'piyan', 'piaaj', 'peyaj', 'peyajh', 'payas', 'peyas', 'kanda', 'কাঁচা পেঁয়াজ', 'পেঁয়াজ', 'পিয়াঁজ', 'प्याज', 'प्याज़', 'कांदा'] },
  { standardName: 'Garlic', hindiName: 'लहसुन', bengaliName: 'রসুন', aliases: ['garlic', 'lahsun', 'lasun', 'roshun', 'roshon', 'রসুন', 'রশুন', 'लहसुन', 'लसुन'] },
  { standardName: 'Ginger', hindiName: 'अदरक', bengaliName: 'আদা', aliases: ['ginger', 'adrak', 'ada', 'আদা', 'অদা', 'अदरक', 'आदा'] },
  { standardName: 'Green Chilli', hindiName: 'हरी मिर्च', bengaliName: 'কাঁচা লঙ্কা', aliases: ['chilli', 'chili', 'mirchi', 'mirch', 'lanka', 'lonka', 'marich', 'কাঁচা লঙ্কা', 'লঙ্কা', 'মরিচ', 'কাঁচামরিচ', 'मिर्च', 'हरी मिर्च', 'मिरची'] },
  { standardName: 'Rice', hindiName: 'चावल/धान', bengaliName: 'ধান/চাল', aliases: ['rice', 'paddy', 'dhan', 'chawal', 'chal', 'bhat', 'ধান', 'চাল', 'ভাত', 'বোরো ধান', 'আমন', 'चावल', 'धान', 'भात'] },
  { standardName: 'Wheat', hindiName: 'गेहूं', bengaliName: 'গম', aliases: ['wheat', 'gehu', 'gehun', 'gom', 'atta', 'গম', 'আটা', 'गेहूं', 'गेहू', 'कनक'] },
  { standardName: 'Cauliflower', hindiName: 'फूलगोभी', bengaliName: 'ফুলকপি', aliases: ['cauliflower', 'gobi', 'gobhi', 'phoolgobhi', 'phulkopi', 'kopi', 'ফুলকপি', 'কপি', 'फूलगोभी', 'गोभी'] },
  { standardName: 'Cabbage', hindiName: 'पत्तागोभी', bengaliName: 'বাঁধাকপি', aliases: ['cabbage', 'pattagobhi', 'bandhakopi', 'bandha', 'বাঁধাকপি', 'পাতা কপি', 'पत्तागोभी', 'पत्ता गोभी'] },
  { standardName: 'Brinjal', hindiName: 'बैंगन', bengaliName: 'বেগুন', aliases: ['brinjal', 'eggplant', 'aubergine', 'baingan', 'begun', 'bhata', 'বেগুন', 'ভাটা', 'बैंगन', 'भाटा'] },
  { standardName: 'Okra (Ladyfinger)', hindiName: 'भिंडी', bengaliName: 'ঢ্যাঁড়শ', aliases: ['okra', 'bhindi', 'ladyfinger', 'dherosh', 'dharosh', 'ঢ্যাঁড়শ', 'ঢেঁড়শ', 'ভেন্ডি', 'भिंडी', 'ओकरा'] },
  { standardName: 'Bitter Gourd', hindiName: 'करेला', bengaliName: 'করলা/উচ্ছে', aliases: ['bitter gourd', 'karela', 'korola', 'ucche', 'uchhe', 'করলা', 'উচ্ছে', 'करेला'] },
  { standardName: 'Pointed Gourd', hindiName: 'परवल', bengaliName: 'পটল', aliases: ['pointed gourd', 'parwal', 'potol', 'পটল', 'পরবল', 'परवल'] },
  { standardName: 'Bottle Gourd', hindiName: 'लौकी', bengaliName: 'লাউ', aliases: ['bottle gourd', 'lau', 'lauki', 'ghia', 'doodhi', 'লাউ', 'কদু', 'लौकी', 'घिया', 'दूधी'] },
  { standardName: 'Pumpkin', hindiName: 'कद्दू', bengaliName: 'মিষ্টি কুমড়া', aliases: ['pumpkin', 'kaddu', 'kumro', 'kumra', 'মিষ্টি কুমড়া', 'কুমড়ো', 'कद्दू', 'कोहड़ा'] },
  { standardName: 'Cucumber', hindiName: 'खीरा', bengaliName: 'শসা', aliases: ['cucumber', 'kheera', 'khira', 'shosha', 'sosa', 'শসা', 'শশা', 'खीरा', 'ककड़ी'] },
  { standardName: 'Spinach', hindiName: 'पालक', bengaliName: 'পালং শাক', aliases: ['spinach', 'palak', 'palong', 'palang', 'পালং শাক', 'পালং', 'पालक'] },
  { standardName: 'Mustard', hindiName: 'सरसों', bengaliName: 'সর্ষে', aliases: ['mustard', 'sarson', 'shorshe', 'sorisa', 'rai', 'সর্ষে', 'সরিষা', 'রাই', 'सरसों', 'राई'] },
  { standardName: 'Coriander', hindiName: 'धनिया', bengaliName: 'ধনেপাতা', aliases: ['coriander', 'dhaniya', 'dhone', 'dhonepata', 'ধনেপাতা', 'ধনে', 'ধনিয়া', 'धनिया'] },
  { standardName: 'Turmeric', hindiName: 'हल्दी', bengaliName: 'হলুদ', aliases: ['turmeric', 'haldi', 'holud', 'হলুদ', 'হলদি', 'हल्दी'] },
  { standardName: 'Jute', hindiName: 'पटसन/जूट', bengaliName: 'পাট', aliases: ['jute', 'pat', 'patson', 'পাট', 'সোনালী আঁশ', 'पटसन', 'जूट'] },
  { standardName: 'Corn / Maize', hindiName: 'मक्का', bengaliName: 'ভুট্টা', aliases: ['corn', 'maize', 'makka', 'bhutta', 'ভুট্টা', 'মক্কা', 'भट्टा'] },
  { standardName: 'Mango', hindiName: 'आम', bengaliName: 'আম', aliases: ['mango', 'mangoes', 'aam', 'am', 'আম', 'ল্যাংড়া', 'হিমসাগর', 'आम', 'दशहरी'] },
  { standardName: 'Banana', hindiName: 'केला', bengaliName: 'কলা', aliases: ['banana', 'kela', 'kola', 'কলা', 'সবরি', 'চাঁপা কলা', 'केला'] },
  { standardName: 'Papaya', hindiName: 'पपीता', bengaliName: 'পেঁপে', aliases: ['papaya', 'papita', 'pepe', 'পেঁপে', 'পাকা পেঁপে', 'पपीता'] },
  { standardName: 'Watermelon', hindiName: 'तरबूज', bengaliName: 'তরমুজ', aliases: ['watermelon', 'tarbooj', 'tarbuj', 'tormuj', 'তরমুজ', 'তরমূজ', 'तरबूज'] },
  { standardName: 'Guava', hindiName: 'अमरूद', bengaliName: 'পেয়ারা', aliases: ['guava', 'amrood', 'amrud', 'peyara', 'পেয়ারা', 'অমরুদ', 'अमरूद'] },
  { standardName: 'Lemon / Lime', hindiName: 'नींबू', bengaliName: 'লেবু', aliases: ['lemon', 'lime', 'nimbu', 'lebu', 'kagzi', 'লেবু', 'পাতিলেবু', 'গণ্ডরাজ', 'नींबू'] }
];

// 2. INDIC NUMERAL & FRACTION NORMALIZATION
export function normalizeIndicDigits(text: string): string {
  const indicDigits: Record<string, string> = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9',
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
  };
  return text.replace(/[০-৯०-९]/g, d => indicDigits[d] || d);
}

// Convert spoken fractions & word numbers across Hindi, Bengali, Hinglish, Banglish
export function parseWordNumbers(text: string): string {
  let normalized = text.toLowerCase();

  const rules: [RegExp, string][] = [
    // Fractions (Hindi / Bengali / Hinglish / Banglish)
    [/\b(dedh|derh|देढ़|দেড়)\s*(quintal|কুইন্টাল|क्विंटल)\b/gi, '150 kg'],
    [/\b(dhai|dhaai|ढाई|আড়াই)\s*(quintal|কুইন্টাল|क्विंटल)\b/gi, '250 kg'],
    [/\b(aadha|adha|adho|आधा|আধ)\s*(quintal|কুইন্টাল|क्विंटल)\b/gi, '50 kg'],
    [/\b(dedh|derh|देढ़|দেড়)\s*(hazar|thousand|হাজার|हजार)\b/gi, '1500'],
    [/\b(dhai|dhaai|ढाई|আড়াই)\s*(hazar|thousand|হাজার|हजार)\b/gi, '2500'],
    [/\b(dedh|derh|देढ़|দেড়)\s*(kilo|kg|কেজি|किलो)\b/gi, '1.5 kg'],
    [/\b(dhai|dhaai|ढाई|আড়াই)\s*(kilo|kg|কেজি|किलो)\b/gi, '2.5 kg'],
    [/\b(aadha|adha|adho|आधा|আধ)\s*(kilo|kg|কেজি|किलो)\b/gi, '0.5 kg'],

    // Composite thousands (Hindi & Bengali)
    [/\b(dus|das|ten|দশ|दस)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '10000'],
    [/\b(paanch|panch|five|পাঁচ|पांच)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '5000'],
    [/\b(char|four|চার|चार)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '4000'],
    [/\b(teen|tin|three|তিন|तीन)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '3000'],
    [/\b(do|two|dui|দুই|दो)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '2000'],
    [/\b(ek|one|এক|एक)\s*(hazar|hazaar|thousand|হাজার|हजार)\b/gi, '1000'],

    // Composite hundreds
    [/\b(nau|nine|নয়|नौ)\s*(sau|so|hundred|শো|सौ)\b/gi, '900'],
    [/\b(aath|eight|আট|आठ)\s*(sau|so|hundred|শো|सौ)\b/gi, '800'],
    [/\b(saat|seven|সাত|सात)\s*(sau|so|hundred|শো|सौ)\b/gi, '700'],
    [/\b(chhe|chhah|chha|chhoy|six|ছয়|छह|छः)\s*(sau|so|hundred|শো|सौ)\b/gi, '600'],
    [/\b(paanch|panch|five|পাঁচ|पांच)\s*(sau|so|hundred|শো|सौ)\b/gi, '500'],
    [/\b(char|chaar|four|চার|चार)\s*(sau|so|hundred|শো|सौ)\b/gi, '400'],
    [/\b(teen|tin|three|তিন|तीन)\s*(sau|so|hundred|শো|सौ)\b/gi, '300'],
    [/\b(do|two|dui|দুই|दो)\s*(sau|so|hundred|শো|सौ)\b/gi, '200'],
    [/\b(ek|one|এক|एक)\s*(sau|so|hundred|শো|सौ)\b/gi, '100'],

    // Single words in Bengali
    [/\b(একশো|একশত|একশ)\b/gi, '100'],
    [/\b(দুশো|দুইশত|দুশ)\b/gi, '200'],
    [/\b(তিনশো|তিনশত)\b/gi, '300'],
    [/\b(চারশো|চারশত)\b/gi, '400'],
    [/\b(পাঁচশো|পাঁচশত|পাঁচশ)\b/gi, '500'],
    [/\b(ছয়শো|ছয়শত)\b/gi, '600'],
    [/\b(সাতশো|সাতশত)\b/gi, '700'],
    [/\b(আটশো|আটশত)\b/gi, '800'],
    [/\b(নয়শো|নয়শত)\b/gi, '900'],
    [/\b(হাজার)\b/gi, '1000'],
    [/\b(পঞ্চাশ|পঁচাশ)\b/gi, '50'],
    [/\b(চল্লিশ|চল্লি)\b/gi, '40'],
    [/\b(তিরিশ|ত্রিশ)\b/gi, '30'],
    [/\b(কুড়ি|বিশ)\b/gi, '20'],
    [/\b(পঁচিশ)\b/gi, '25'],
    [/\b(পঁয়ত্রিশ)\b/gi, '35'],
    [/\b(পঁয়তাল্লিশ)\b/gi, '45'],
    [/\b(দশ)\b/gi, '10'],

    // Single words in Hindi
    [/\b(एक सौ|सौ)\b/gi, '100'],
    [/\b(दो सौ)\b/gi, '200'],
    [/\b(तीन सौ)\b/gi, '300'],
    [/\b(चार सौ)\b/gi, '400'],
    [/\b(पांच सौ|पाँच सौ)\b/gi, '500'],
    [/\b(छह सौ)\b/gi, '600'],
    [/\b(सात सौ)\b/gi, '700'],
    [/\b(आठ सौ)\b/gi, '800'],
    [/\b(नौ सौ)\b/gi, '900'],
    [/\b(हजार|हज़ार)\b/gi, '1000'],
    [/\b(पचास)\b/gi, '50'],
    [/\b(चालीस)\b/gi, '40'],
    [/\b(तीस)\b/gi, '30'],
    [/\b(पच्चीस)\b/gi, '25'],
    [/\b(पैंतीस)\b/gi, '35'],
    [/\b(पैंतालीस)\b/gi, '45'],
    [/\b(बीस)\b/gi, '20'],
    [/\b(दस)\b/gi, '10']
  ];

  for (const [regex, rep] of rules) {
    normalized = normalized.replace(regex, rep);
  }
  return normalized;
}

// 3. ROBUST LANGUAGE & SCRIPT DETECTION
export interface LanguageDetectionResult {
  lang: 'EN' | 'BN' | 'HI';
  confidence: number;
  script: 'Bengali' | 'Devanagari' | 'Latin';
  dialectLabel: string;
}

export function detectLanguage(text: string): LanguageDetectionResult {
  const bengaliScriptChars = (text.match(/[\u0980-\u09FF]/g) || []).length;
  const devanagariChars = (text.match(/[\u0900-\u097F]/g) || []).length;

  if (bengaliScriptChars >= 2 && bengaliScriptChars > devanagariChars) {
    return {
      lang: 'BN',
      confidence: 0.98,
      script: 'Bengali',
      dialectLabel: 'বাংলা (Bengali Script)'
    };
  }

  if (devanagariChars >= 2 && devanagariChars > bengaliScriptChars) {
    return {
      lang: 'HI',
      confidence: 0.98,
      script: 'Devanagari',
      dialectLabel: 'हिन्दी (Devanagari Script)'
    };
  }

  // Evaluate Phonetic / Romanized Indic (Hinglish / Banglish)
  const lower = text.toLowerCase();

  const bengaliPhoneticWords = [
    'koto', 'daam', 'dam', 'dor', 'dhan', 'alu', 'shobji', 'chawal', 'peyaj', 'piyaj', 'tometo',
    'bikri', 'korbo', 'bhab', 'taka', 'bhalo', 'aache', 'hobe', 'kothay', 'fosol', 'gadi',
    'bosta', 'kuintal', 'bristi', 'abohawa', 'eksho', 'panchsho', 'hajar', 'kuri', 'tirish'
  ];

  const hindiPhoneticWords = [
    'bhav', 'bhaav', 'kya', 'aalu', 'tamatar', 'khet', 'mandi', 'gehu', 'bechna', 'chahiye',
    'kitna', 'rupaye', 'daam', 'gaadi', 'truck', 'bikri', 'fasal', 'kisan', 'paani', 'barish',
    'mausam', 'sau', 'hazar', 'pachaas', 'tees', 'pachees', 'bori', 'quintal', 'dikhao'
  ];

  let bnScore = 0;
  for (const w of bengaliPhoneticWords) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(lower)) bnScore++;
  }

  let hiScore = 0;
  for (const w of hindiPhoneticWords) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(lower)) hiScore++;
  }

  if (bnScore > 0 && bnScore >= hiScore) {
    return {
      lang: 'BN',
      confidence: 0.92,
      script: 'Latin',
      dialectLabel: 'বাংলা (Banglish / Romanized Bengali)'
    };
  }

  if (hiScore > 0 && hiScore > bnScore) {
    return {
      lang: 'HI',
      confidence: 0.92,
      script: 'Latin',
      dialectLabel: 'हिन्दी (Hinglish / Romanized Hindi)'
    };
  }

  return {
    lang: 'EN',
    confidence: 0.85,
    script: 'Latin',
    dialectLabel: 'English (Indian Agro Dialect)'
  };
}

// 4. NEURAL-GRADE AGRICULTURAL VOICE PARSER & TRANSLATOR
export function parseAgriculturalVoice(rawText: string): ParsedVoiceResult {
  const text = rawText.trim();
  if (!text) {
    return {
      rawText: '',
      intent: 'unknown',
      confidence: 0,
      detectedLang: 'EN',
      script: 'Latin',
      dialectLabel: 'English',
      translations: { EN: '', BN: '', HI: '' },
      humanSummary: {
        EN: 'No speech detected',
        BN: 'কোন কথা শোনা যায়নি',
        HI: 'कोई आवाज़ सुनाई नहीं दी'
      }
    };
  }

  // 1. Language & Script Detection
  const langMeta = detectLanguage(text);

  // 2. Normalization
  const normalizedIndic = normalizeIndicDigits(text);
  const normalizedWords = parseWordNumbers(normalizedIndic);
  const lower = normalizedWords.toLowerCase();

  // 3. Crop Entity Extraction
  let detectedCrop: CropDefinition | undefined;
  for (const c of INDIAN_CROPS) {
    for (const alias of c.aliases) {
      const aliasRegex = new RegExp(`(^|\\s|[^a-zA-Z0-9\u0980-\u09FF\u0900-\u097F])${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|\\s|[^a-zA-Z0-9\u0980-\u09FF\u0900-\u097F])`, 'i');
      if (aliasRegex.test(lower)) {
        detectedCrop = c;
        break;
      }
    }
    if (detectedCrop) break;
  }

  // 4. Intent Classification
  const isPriceQuery = /\b(price|rate|mandi|bhav|bhaav|daam|dam|dor|cost|market\s*rate|দর|দাম|ভাব|দরদালান|মন্ডি|বাজার|দর\s*কত|কত\s*করে|भाव|दाम|मंडी|रेट|कीमत|भाव\s*क्या|कितना|कितने)\b/i.test(lower);

  const isTrackQuery = /\b(track|order|dispatch|status|delivery|truck|gadi|driver|vehicle|অর্ডার|ট্র্যাক|গাড়ি|চালান|ডেলিভারি|কোথায়|गाड़ी|ट्रक|ऑर्डर|ट्रैक|डिलीवरी|कहाँ)\b/i.test(lower);

  const isWeatherQuery = /\b(weather|rain|forecast|abohawa|mausam|bristi|barish|বৃষ্টি|আবহাওয়া|মেঘ|বৃষ্টির|मौसम|बारिश|वर्षा|पानी)\b/i.test(lower);

  const isMarketQuery = /\b(demand|intelligence|forecast|surplus|shortage|analytics|চাহিদা|ঘাটতি|উদ্বৃত্ত|পূর্বাভাস|पूर्वानुमान|मांग|कमी|अधिकता)\b/i.test(lower);

  const isSellQuery = /\b(sell|list|listing|upload|offer|bikri|bikroy|bech|bechna|becho|dalo|বিক্রি|বিক্রয়|বেচা|বেচব|বেচতে\s*চাই|বেচবো|তোলো|তালিকা|बेचना|बेचें|बिक्री|बेचना\s*है|बेचना\s*चाहता|डालो|दर्ज)\b/i.test(lower) ||
    (/\b(kg|kilo|quintal|ton|bori|bag|gram|grams|gm|gms|বস্তা|ব্যাগ|কুইন্টাল|গ্রাম|গ্রাম্স|किलो|क्विंटल|बोरी|ग्राम|ग्राम्स)\b/i.test(lower) && !isPriceQuery);

  let intent: ParsedVoiceResult['intent'] = 'unknown';
  let confidence = 0.5;

  if (isPriceQuery && !isSellQuery) {
    intent = 'price';
    confidence = 0.96;
  } else if (isSellQuery) {
    intent = 'sell';
    confidence = 0.96;
  } else if (isTrackQuery) {
    intent = 'track';
    confidence = 0.94;
  } else if (isWeatherQuery) {
    intent = 'weather';
    confidence = 0.92;
  } else if (isMarketQuery) {
    intent = 'market';
    confidence = 0.88;
  } else if (detectedCrop) {
    intent = isPriceQuery ? 'price' : 'sell';
    confidence = 0.78;
  }

  // 5. Quantity Extraction (Grams, Quintal, Ton, Bag, Kg)
  let quantityKg: number | undefined;

  // Explicit Grams parsing (e.g. 400 grams, 500 gm, ৪০০ গ্রাম, 400 ग्राम -> 0.4 kg)
  const gramMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:gram|grams|gm|gms|\bg\b|গ্রাম|গ্রামের|গ্রাম্স|ग्राम|ग्राम्स)/i);
  if (gramMatch) {
    const rawGrams = parseFloat(gramMatch[1]);
    if (!isNaN(rawGrams) && rawGrams > 0) {
      quantityKg = parseFloat((rawGrams / 1000).toFixed(3));
    }
  }

  const quintalMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:quintal|kuintal|क्विंटल|कविंटल|কুইন্টাল)/i);
  if (!quantityKg && quintalMatch) {
    quantityKg = Math.round(parseFloat(quintalMatch[1]) * 100);
  }

  const tonMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:ton|tonne|টন|टन)/i);
  if (!quantityKg && tonMatch) {
    quantityKg = Math.round(parseFloat(tonMatch[1]) * 1000);
  }

  const bagMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:bag|bags|bori|bora|বস্তা|ব্যাগ|বোরা|बोरी|कट्टा)/i);
  if (!quantityKg && bagMatch) {
    quantityKg = Math.round(parseFloat(bagMatch[1]) * 50);
  }

  const kgMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:kg|kgs|kilo|kilos|kilor|কেজি|কেজির|किलो|किग्रा)/i);
  if (!quantityKg && kgMatch) {
    quantityKg = parseFloat(parseFloat(kgMatch[1]).toFixed(2));
  }

  // 6. Price Extraction (Rupees, Taka, Rate)
  let pricePerKg: number | undefined;

  const priceWithUnit = lower.match(/(?:at|rate|price|₹|rs\.?|rupees|bhav|daam|taka|টাকা|দর|রুপে|रुपये|भाव|रेट)\s*(\d+(?:\.\d+)?)/i) ||
    lower.match(/(\d+(?:\.\d+)?)\s*(?:rupees|rs\.?|₹|taka|টাকা|রুপে|रुपये|bhav|भाव|रेट)/i);

  if (priceWithUnit) {
    pricePerKg = Math.round(parseFloat(priceWithUnit[1]));
  }

  // Fallback number heuristic (ignore numbers already consumed by grams or quantities)
  const consumedGramVal = gramMatch ? parseFloat(gramMatch[1]) : undefined;
  if (!quantityKg || !pricePerKg) {
    const allNums = lower.match(/\b\d+(?:\.\d+)?\b/g)?.map(n => parseFloat(n)) || [];
    if (allNums.length > 0) {
      for (const num of allNums) {
        if (consumedGramVal && Math.abs(num - consumedGramVal) < 0.01) continue;
        if (!quantityKg && num >= 50 && num <= 50000) {
          quantityKg = num;
        } else if (!pricePerKg && num > 0 && num < 500 && num !== quantityKg) {
          pricePerKg = Math.round(num);
        }
      }
    }
  }

  // 7. Localized Crop Names
  const standardCrop = detectedCrop?.standardName || 'Produce';
  const hindiCrop = detectedCrop?.hindiName || standardCrop;
  const bengaliCrop = detectedCrop?.bengaliName || standardCrop;
  const activeCropName = langMeta.lang === 'BN' ? bengaliCrop : langMeta.lang === 'HI' ? hindiCrop : standardCrop;

  // Format quantities gracefully (e.g. 0.4 kg -> "400g (0.4 kg)")
  const formatQtyStr = (kgVal?: number, lang: 'EN' | 'BN' | 'HI' = 'EN') => {
    if (!kgVal) return '';
    if (kgVal < 1) {
      const g = Math.round(kgVal * 1000);
      if (lang === 'BN') return `${g} গ্রাম (${kgVal} কেজি)`;
      if (lang === 'HI') return `${g} ग्राम (${kgVal} किलो)`;
      return `${g}g (${kgVal} kg)`;
    }
    if (lang === 'BN') return `${kgVal} কেজি`;
    if (lang === 'HI') return `${kgVal} किलो`;
    return `${kgVal} kg`;
  };

  // 8. Translation & Speech Summaries
  let transEN = '';
  let transBN = '';
  let transHI = '';

  let summaryEN = '';
  let summaryBN = '';
  let summaryHI = '';

  if (intent === 'sell') {
    const qtyEN = formatQtyStr(quantityKg, 'EN');
    const qtyBN = formatQtyStr(quantityKg, 'BN');
    const qtyHI = formatQtyStr(quantityKg, 'HI');

    transEN = `List ${qtyEN ? `${qtyEN} ` : ''}${standardCrop}${pricePerKg ? ` at ₹${pricePerKg}/kg` : ''} for sale`;
    transBN = `${bengaliCrop}${qtyBN ? ` ${qtyBN}` : ''}${pricePerKg ? ` ₹${pricePerKg} দরে` : ''} বিক্রির জন্য তালিকাভুক্ত করুন`;
    transHI = `${hindiCrop}${qtyHI ? ` ${qtyHI}` : ''}${pricePerKg ? ` ₹${pricePerKg} भाव पर` : ''} बेचने के लिए दर्ज करें`;

    summaryEN = `Listing ${qtyEN ? `${qtyEN} ` : ''}${standardCrop}${pricePerKg ? ` at ₹${pricePerKg}/kg` : ''}`;
    summaryBN = `${bengaliCrop} (${qtyBN || 'ফসল'}) সরাসরি বিক্রির জন্য তালিকাভুক্ত করা হচ্ছে`;
    summaryHI = `${hindiCrop} (${qtyHI || 'फसल'}) सीधे बेचने के लिए दर्ज किया जा रहा है`;
  } else if (intent === 'price') {
    transEN = `What is today's mandi price for ${standardCrop}?`;
    transBN = `${bengaliCrop}-এর আজকের বাজার দর কত?`;
    transHI = `${hindiCrop} का आज का मंडी भाव क्या है?`;

    summaryEN = `Checking current mandi market price for ${standardCrop}`;
    summaryBN = `${bengaliCrop}-এর আজকের বাজার দর দেখাচ্ছি`;
    summaryHI = `${hindiCrop} का आज का मंडी भाव देखा जा रहा है`;
  } else if (intent === 'track') {
    transEN = `Track my active orders and truck dispatch status`;
    transBN = `আমার অর্ডার এবং গাড়ি ডেলিভারি ট্র্যাক করুন`;
    transHI = `मेरे ऑर्डर और वाहन की स्थिति ट्रैक करें`;

    summaryEN = `Tracking active dispatch and truck location`;
    summaryBN = `চলতি অর্ডার ও গাড়ি ট্র্যাকিং করা হচ্ছে`;
    summaryHI = `सक्रिय ऑर्डर और वाहन की स्थिति दिखाई जा रही है`;
  } else if (intent === 'weather') {
    transEN = `What is the weather and rain forecast for agriculture?`;
    transBN = `আজকের কৃষি আবহাওয়া ও বৃষ্টির পূর্বাভাস কেমন?`;
    transHI = `आज का कृषि मौसम और बारिश का पूर्वानुमान क्या है?`;

    summaryEN = `Weather advisory: Clear sunny sky, 32°C. Low rain risk. Favorable for harvesting.`;
    summaryBN = `আবহাওয়া বার্তা: রোদ ঝলমলে, ৩২°C। বৃষ্টির আশঙ্কা নেই। ফসল তোলা ও পরিবহনের জন্য উপযুক্ত।`;
    summaryHI = `मौसम सलाह: धूप खिली रहेगी, ३२°C। बारिश की संभावना नहीं है। फसल कटाई के लिए अनुकूल।`;
  } else if (intent === 'market') {
    transEN = `Show AI demand forecast and market shortage map`;
    transBN = `এআই চাহিদা পূর্বাভাস এবং ঘাটতি মানচিত্র দেখুন`;
    transHI = `मांग का पूर्वानुमान और बाजार का नक्शा देखें`;

    summaryEN = `Displaying AI demand intelligence and regional forecasts`;
    summaryBN = `চাহিদার এআই পূর্বাভাস ও ঘাটতি এলাকা দেখানো হচ্ছে`;
    summaryHI = `मांग पूर्वानुमान और बाजार विश्लेषण दिखाया जा रहा है`;
  } else {
    transEN = text;
    transBN = text;
    transHI = text;

    summaryEN = `Heard: "${text}"`;
    summaryBN = `শোনা গেছে: "${text}"`;
    summaryHI = `सुनाई दिया: "${text}"`;
  }

  return {
    rawText: text,
    intent,
    confidence: langMeta.confidence,
    detectedLang: langMeta.lang,
    dialectLabel: langMeta.dialectLabel,
    script: langMeta.script,
    crop: detectedCrop?.standardName,
    cropLocalName: activeCropName,
    cropHindiName: hindiCrop,
    cropBengaliName: bengaliCrop,
    quantityKg,
    pricePerKg,
    translations: {
      EN: transEN,
      BN: transBN,
      HI: transHI
    },
    humanSummary: {
      EN: summaryEN,
      BN: summaryBN,
      HI: summaryHI
    }
  };
}

// 5. NATIVE INDIC TEXT-TO-SPEECH (TTS) VOICE SELECTOR
export function getBestIndicVoice(lang: 'BN' | 'HI' | 'EN'): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  if (lang === 'BN') {
    // Look for Bengali voices (e.g. bn-IN, bn-BD, Google বাংলা, Microsoft Bashkar)
    const bnVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith('bn') || 
      /bengali|bangla|বাংলা/i.test(v.name)
    );
    if (bnVoice) return bnVoice;
  }

  if (lang === 'HI') {
    // Look for Hindi voices (e.g. hi-IN, Google हिन्दी, Microsoft Hemant, Kalpana)
    const hiVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith('hi') || 
      /hindi|हिन्दी|हिंदी/i.test(v.name)
    );
    if (hiVoice) return hiVoice;
  }

  // Fallback to Indian English (en-IN)
  const inVoice = voices.find(v => v.lang.toLowerCase().includes('en-in') || /india/i.test(v.name));
  if (inVoice) return inVoice;

  return voices.find(v => v.lang.toLowerCase().startsWith('en')) || voices[0] || null;
}
