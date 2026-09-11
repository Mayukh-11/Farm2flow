/**
 * Farm2Flow Agricultural Voice & Translation Intelligence Engine
 * Comprehensive multi-lingual pipeline for Indian Farmers & Traders
 * State-of-the-Art Language Detection, Phonetic Tokenizer & Neural-grade Agricultural Translation
 * Supports: à¦¬à¦¾à¦‚à¦²à¦¾ (Bengali), à¤¹à¤¿à¤¨à¥à¤¦à¥€ (Hindi), English, Banglish & Hinglish
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
  { standardName: 'Tomato', hindiName: 'à¤Ÿà¤®à¤¾à¤Ÿà¤°', bengaliName: 'à¦Ÿà¦®à§‡à¦Ÿà§‹', aliases: ['tomato', 'tomatoes', 'tamatar', 'tamator', 'tometo', 'à¦¬à¦¿à¦²à¦¿à¦¤à¦¿ à¦¬à§‡à¦—à§à¦¨', 'à¦Ÿà¦®à§‡à¦Ÿà§‹', 'à¦Ÿà¦®à§‡à¦Ÿà¦°', 'à¤Ÿà¤®à¤¾à¤Ÿà¤°', 'à¤Ÿà¤®à¤¾à¤Ÿà¤¾à¤°'] },
  { standardName: 'Potato', hindiName: 'à¤†à¤²à¥‚', bengaliName: 'à¦†à¦²à§', aliases: ['potato', 'potatoes', 'aloo', 'alu', 'batata', 'bataata', 'à¦—à§‹à¦² à¦†à¦²à§', 'à¦†à¦²à§', 'à¤†à¤²à¥‚', 'à¤¬à¤Ÿà¤¾à¤Ÿà¤¾'] },
  { standardName: 'Onion', hindiName: 'à¤ªà¥à¤¯à¤¾à¤œà¤¼', bengaliName: 'à¦ªà§‡à¦à¦¯à¦¼à¦¾à¦œ', aliases: ['onion', 'onions', 'payaz', 'payaj', 'pyaz', 'pyaaz', 'piyaz', 'piaz', 'piyaan', 'piyan', 'piaaj', 'peyaj', 'peyajh', 'payas', 'peyas', 'kanda', 'à¦•à¦¾à¦à¦šà¦¾ à¦ªà§‡à¦à¦¯à¦¼à¦¾à¦œ', 'à¦ªà§‡à¦à¦¯à¦¼à¦¾à¦œ', 'à¦ªà¦¿à¦¯à¦¼à¦¾à¦à¦œ', 'à¤ªà¥à¤¯à¤¾à¤œ', 'à¤ªà¥à¤¯à¤¾à¤œà¤¼', 'à¤•à¤¾à¤‚à¤¦à¤¾'] },
  { standardName: 'Garlic', hindiName: 'à¤²à¤¹à¤¸à¥à¤¨', bengaliName: 'à¦°à¦¸à§à¦¨', aliases: ['garlic', 'lahsun', 'lasun', 'roshun', 'roshon', 'à¦°à¦¸à§à¦¨', 'à¦°à¦¶à§à¦¨', 'à¤²à¤¹à¤¸à¥à¤¨', 'à¤²à¤¸à¥à¤¨'] },
  { standardName: 'Ginger', hindiName: 'à¤…à¤¦à¤°à¤•', bengaliName: 'à¦†à¦¦à¦¾', aliases: ['ginger', 'adrak', 'ada', 'à¦†à¦¦à¦¾', 'à¦…à¦¦à¦¾', 'à¤…à¤¦à¤°à¤•', 'à¤†à¤¦à¤¾'] },
  { standardName: 'Green Chilli', hindiName: 'à¤¹à¤°à¥€ à¤®à¤¿à¤°à¥à¤š', bengaliName: 'à¦•à¦¾à¦à¦šà¦¾ à¦²à¦™à§à¦•à¦¾', aliases: ['chilli', 'chili', 'mirchi', 'mirch', 'lanka', 'lonka', 'marich', 'à¦•à¦¾à¦à¦šà¦¾ à¦²à¦™à§à¦•à¦¾', 'à¦²à¦™à§à¦•à¦¾', 'à¦®à¦°à¦¿à¦š', 'à¦•à¦¾à¦à¦šà¦¾à¦®à¦°à¦¿à¦š', 'à¤®à¤¿à¤°à¥à¤š', 'à¤¹à¤°à¥€ à¤®à¤¿à¤°à¥à¤š', 'à¤®à¤¿à¤°à¤šà¥€'] },
  { standardName: 'Rice', hindiName: 'à¤šà¤¾à¤µà¤²/à¤§à¤¾à¤¨', bengaliName: 'à¦§à¦¾à¦¨/à¦šà¦¾à¦²', aliases: ['rice', 'paddy', 'dhan', 'chawal', 'chal', 'bhat', 'à¦§à¦¾à¦¨', 'à¦šà¦¾à¦²', 'à¦­à¦¾à¦¤', 'à¦¬à§‹à¦°à§‹ à¦§à¦¾à¦¨', 'à¦†à¦®à¦¨', 'à¤šà¤¾à¤µà¤²', 'à¤§à¤¾à¤¨', 'à¤­à¤¾à¤¤'] },
  { standardName: 'Wheat', hindiName: 'à¤—à¥‡à¤¹à¥‚à¤‚', bengaliName: 'à¦—à¦®', aliases: ['wheat', 'gehu', 'gehun', 'gom', 'atta', 'à¦—à¦®', 'à¦†à¦Ÿà¦¾', 'à¤—à¥‡à¤¹à¥‚à¤‚', 'à¤—à¥‡à¤¹à¥‚', 'à¤•à¤¨à¤•'] },
  { standardName: 'Cauliflower', hindiName: 'à¤«à¥‚à¤²à¤—à¥‹à¤­à¥€', bengaliName: 'à¦«à§à¦²à¦•à¦ªà¦¿', aliases: ['cauliflower', 'gobi', 'gobhi', 'phoolgobhi', 'phulkopi', 'kopi', 'à¦«à§à¦²à¦•à¦ªà¦¿', 'à¦•à¦ªà¦¿', 'à¤«à¥‚à¤²à¤—à¥‹à¤­à¥€', 'à¤—à¥‹à¤­à¥€'] },
  { standardName: 'Cabbage', hindiName: 'à¤ªà¤¤à¥à¤¤à¤¾à¤—à¥‹à¤­à¥€', bengaliName: 'à¦¬à¦¾à¦à¦§à¦¾à¦•à¦ªà¦¿', aliases: ['cabbage', 'pattagobhi', 'bandhakopi', 'bandha', 'à¦¬à¦¾à¦à¦§à¦¾à¦•à¦ªà¦¿', 'à¦ªà¦¾à¦¤à¦¾ à¦•à¦ªà¦¿', 'à¤ªà¤¤à¥à¤¤à¤¾à¤—à¥‹à¤­à¥€', 'à¤ªà¤¤à¥à¤¤à¤¾ à¤—à¥‹à¤­à¥€'] },
  { standardName: 'Brinjal', hindiName: 'à¤¬à¥ˆà¤‚à¤—à¤¨', bengaliName: 'à¦¬à§‡à¦—à§à¦¨', aliases: ['brinjal', 'eggplant', 'aubergine', 'baingan', 'begun', 'bhata', 'à¦¬à§‡à¦—à§à¦¨', 'à¦­à¦¾à¦Ÿà¦¾', 'à¤¬à¥ˆà¤‚à¤—à¤¨', 'à¤­à¤¾à¤Ÿà¤¾'] },
  { standardName: 'Okra (Ladyfinger)', hindiName: 'à¤­à¤¿à¤‚à¤¡à¥€', bengaliName: 'à¦¢à§à¦¯à¦¾à¦à¦¡à¦¼à¦¶', aliases: ['okra', 'bhindi', 'ladyfinger', 'dherosh', 'dharosh', 'à¦¢à§à¦¯à¦¾à¦à¦¡à¦¼à¦¶', 'à¦¢à§‡à¦à¦¡à¦¼à¦¶', 'à¦­à§‡à¦¨à§à¦¡à¦¿', 'à¤­à¤¿à¤‚à¤¡à¥€', 'à¤“à¤•à¤°à¤¾'] },
  { standardName: 'Bitter Gourd', hindiName: 'à¤•à¤°à¥‡à¤²à¤¾', bengaliName: 'à¦•à¦°à¦²à¦¾/à¦‰à¦šà§à¦›à§‡', aliases: ['bitter gourd', 'karela', 'korola', 'ucche', 'uchhe', 'à¦•à¦°à¦²à¦¾', 'à¦‰à¦šà§à¦›à§‡', 'à¤•à¤°à¥‡à¤²à¤¾'] },
  { standardName: 'Pointed Gourd', hindiName: 'à¤ªà¤°à¤µà¤²', bengaliName: 'à¦ªà¦Ÿà¦²', aliases: ['pointed gourd', 'parwal', 'potol', 'à¦ªà¦Ÿà¦²', 'à¦ªà¦°à¦¬à¦²', 'à¤ªà¤°à¤µà¤²'] },
  { standardName: 'Bottle Gourd', hindiName: 'à¤²à¥Œà¤•à¥€', bengaliName: 'à¦²à¦¾à¦‰', aliases: ['bottle gourd', 'lau', 'lauki', 'ghia', 'doodhi', 'à¦²à¦¾à¦‰', 'à¦•à¦¦à§', 'à¤²à¥Œà¤•à¥€', 'à¤˜à¤¿à¤¯à¤¾', 'à¤¦à¥‚à¤§à¥€'] },
  { standardName: 'Pumpkin', hindiName: 'à¤•à¤¦à¥à¤¦à¥‚', bengaliName: 'à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦•à§à¦®à¦¡à¦¼à¦¾', aliases: ['pumpkin', 'kaddu', 'kumro', 'kumra', 'à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦•à§à¦®à¦¡à¦¼à¦¾', 'à¦•à§à¦®à¦¡à¦¼à§‹', 'à¤•à¤¦à¥à¤¦à¥‚', 'à¤•à¥‹à¤¹à¤¡à¤¼à¤¾'] },
  { standardName: 'Cucumber', hindiName: 'à¤–à¥€à¤°à¤¾', bengaliName: 'à¦¶à¦¸à¦¾', aliases: ['cucumber', 'kheera', 'khira', 'shosha', 'sosa', 'à¦¶à¦¸à¦¾', 'à¦¶à¦¶à¦¾', 'à¤–à¥€à¤°à¤¾', 'à¤•à¤•à¤¡à¤¼à¥€'] },
  { standardName: 'Spinach', hindiName: 'à¤ªà¤¾à¤²à¤•', bengaliName: 'à¦ªà¦¾à¦²à¦‚ à¦¶à¦¾à¦•', aliases: ['spinach', 'palak', 'palong', 'palang', 'à¦ªà¦¾à¦²à¦‚ à¦¶à¦¾à¦•', 'à¦ªà¦¾à¦²à¦‚', 'à¤ªà¤¾à¤²à¤•'] },
  { standardName: 'Mustard', hindiName: 'à¤¸à¤°à¤¸à¥‹à¤‚', bengaliName: 'à¦¸à¦°à§à¦·à§‡', aliases: ['mustard', 'sarson', 'shorshe', 'sorisa', 'rai', 'à¦¸à¦°à§à¦·à§‡', 'à¦¸à¦°à¦¿à¦·à¦¾', 'à¦°à¦¾à¦‡', 'à¤¸à¤°à¤¸à¥‹à¤‚', 'à¤°à¤¾à¤ˆ'] },
  { standardName: 'Coriander', hindiName: 'à¤§à¤¨à¤¿à¤¯à¤¾', bengaliName: 'à¦§à¦¨à§‡à¦ªà¦¾à¦¤à¦¾', aliases: ['coriander', 'dhaniya', 'dhone', 'dhonepata', 'à¦§à¦¨à§‡à¦ªà¦¾à¦¤à¦¾', 'à¦§à¦¨à§‡', 'à¦§à¦¨à¦¿à§Ÿà¦¾', 'à¤§à¤¨à¤¿à¤¯à¤¾'] },
  { standardName: 'Turmeric', hindiName: 'à¤¹à¤²à¥à¤¦à¥€', bengaliName: 'à¦¹à¦²à§à¦¦', aliases: ['turmeric', 'haldi', 'holud', 'à¦¹à¦²à§à¦¦', 'à¦¹à¦²à¦¦à¦¿', 'à¤¹à¤²à¥à¤¦à¥€'] },
  { standardName: 'Jute', hindiName: 'à¤ªà¤Ÿà¤¸à¤¨/à¤œà¥‚à¤Ÿ', bengaliName: 'à¦ªà¦¾à¦Ÿ', aliases: ['jute', 'pat', 'patson', 'à¦ªà¦¾à¦Ÿ', 'à¦¸à§‹à¦¨à¦¾à¦²à§€ à¦†à¦à¦¶', 'à¤ªà¤Ÿà¤¸à¤¨', 'à¤œà¥‚à¤Ÿ'] },
  { standardName: 'Corn / Maize', hindiName: 'à¤®à¤•à¥à¤•à¤¾', bengaliName: 'à¦­à§à¦Ÿà§à¦Ÿà¦¾', aliases: ['corn', 'maize', 'makka', 'bhutta', 'à¦­à§à¦Ÿà§à¦Ÿà¦¾', 'à¦®à¦•à§à¦•à¦¾', 'à¤­à¤Ÿà¥à¤Ÿà¤¾'] },
  { standardName: 'Mango', hindiName: 'à¤†à¤®', bengaliName: 'à¦†à¦®', aliases: ['mango', 'mangoes', 'aam', 'am', 'à¦†à¦®', 'à¦²à§à¦¯à¦¾à¦‚à¦¡à¦¼à¦¾', 'à¦¹à¦¿à¦®à¦¸à¦¾à¦—à¦°', 'à¤†à¤®', 'à¤¦à¤¶à¤¹à¤°à¥€'] },
  { standardName: 'Banana', hindiName: 'à¤•à¥‡à¤²à¤¾', bengaliName: 'à¦•à¦²à¦¾', aliases: ['banana', 'kela', 'kola', 'à¦•à¦²à¦¾', 'à¦¸à¦¬à¦°à¦¿', 'à¦šà¦¾à¦à¦ªà¦¾ à¦•à¦²à¦¾', 'à¤•à¥‡à¤²à¤¾'] },
  { standardName: 'Papaya', hindiName: 'à¤ªà¤ªà¥€à¤¤à¤¾', bengaliName: 'à¦ªà§‡à¦à¦ªà§‡', aliases: ['papaya', 'papita', 'pepe', 'à¦ªà§‡à¦à¦ªà§‡', 'à¦ªà¦¾à¦•à¦¾ à¦ªà§‡à¦à¦ªà§‡', 'à¤ªà¤ªà¥€à¤¤à¤¾'] },
  { standardName: 'Watermelon', hindiName: 'à¤¤à¤°à¤¬à¥‚à¤œ', bengaliName: 'à¦¤à¦°à¦®à§à¦œ', aliases: ['watermelon', 'tarbooj', 'tarbuj', 'tormuj', 'à¦¤à¦°à¦®à§à¦œ', 'à¦¤à¦°à¦®à§‚à¦œ', 'à¤¤à¤°à¤¬à¥‚à¤œ'] },
  { standardName: 'Guava', hindiName: 'à¤…à¤®à¤°à¥‚à¤¦', bengaliName: 'à¦ªà§‡à¦¯à¦¼à¦¾à¦°à¦¾', aliases: ['guava', 'amrood', 'amrud', 'peyara', 'à¦ªà§‡à¦¯à¦¼à¦¾à¦°à¦¾', 'à¦…à¦®à¦°à§à¦¦', 'à¤…à¤®à¤°à¥‚à¤¦'] },
  { standardName: 'Lemon / Lime', hindiName: 'à¤¨à¥€à¤‚à¤¬à¥‚', bengaliName: 'à¦²à§‡à¦¬à§', aliases: ['lemon', 'lime', 'nimbu', 'lebu', 'kagzi', 'à¦²à§‡à¦¬à§', 'à¦ªà¦¾à¦¤à¦¿à¦²à§‡à¦¬à§', 'à¦—à¦£à§à¦¡à¦°à¦¾à¦œ', 'à¤¨à¥€à¤‚à¤¬à¥‚'] }
];

// 2. INDIC NUMERAL & FRACTION NORMALIZATION
export function normalizeIndicDigits(text: string): string {
  const indicDigits: Record<string, string> = {
    'à§¦': '0', 'à§§': '1', 'à§¨': '2', 'à§©': '3', 'à§ª': '4', 'à§«': '5', 'à§¬': '6', 'à§­': '7', 'à§®': '8', 'à§¯': '9',
    'à¥¦': '0', 'à¥§': '1', 'à¥¨': '2', 'à¥©': '3', 'à¥ª': '4', 'à¥«': '5', 'à¥¬': '6', 'à¥­': '7', 'à¥®': '8', 'à¥¯': '9'
  };
  return text.replace(/[à§¦-à§¯à¥¦-à¥¯]/g, d => indicDigits[d] || d);
}

// Convert spoken fractions & word numbers across Hindi, Bengali, Hinglish, Banglish
export function parseWordNumbers(text: string): string {
  let normalized = text.toLowerCase();

  const rules: [RegExp, string][] = [
    // Fractions (Hindi / Bengali / Hinglish / Banglish)
    [/\b(dedh|derh|à¤¦à¥‡à¤¢à¤¼|à¦¦à§‡à¦¡à¦¼)\s*(quintal|à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦²|à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤²)\b/gi, '150 kg'],
    [/\b(dhai|dhaai|à¤¢à¤¾à¤ˆ|à¦†à¦¡à¦¼à¦¾à¦‡)\s*(quintal|à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦²|à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤²)\b/gi, '250 kg'],
    [/\b(aadha|adha|adho|à¤†à¤§à¤¾|à¦†à¦§)\s*(quintal|à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦²|à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤²)\b/gi, '50 kg'],
    [/\b(dedh|derh|à¤¦à¥‡à¤¢à¤¼|à¦¦à§‡à¦¡à¦¼)\s*(hazar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '1500'],
    [/\b(dhai|dhaai|à¤¢à¤¾à¤ˆ|à¦†à¦¡à¦¼à¦¾à¦‡)\s*(hazar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '2500'],
    [/\b(dedh|derh|à¤¦à¥‡à¤¢à¤¼|à¦¦à§‡à¦¡à¦¼)\s*(kilo|kg|à¦•à§‡à¦œà¦¿|à¤•à¤¿à¤²à¥‹)\b/gi, '1.5 kg'],
    [/\b(dhai|dhaai|à¤¢à¤¾à¤ˆ|à¦†à¦¡à¦¼à¦¾à¦‡)\s*(kilo|kg|à¦•à§‡à¦œà¦¿|à¤•à¤¿à¤²à¥‹)\b/gi, '2.5 kg'],
    [/\b(aadha|adha|adho|à¤†à¤§à¤¾|à¦†à¦§)\s*(kilo|kg|à¦•à§‡à¦œà¦¿|à¤•à¤¿à¤²à¥‹)\b/gi, '0.5 kg'],

    // Composite thousands (Hindi & Bengali)
    [/\b(dus|das|ten|à¦¦à¦¶|à¤¦à¤¸)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '10000'],
    [/\b(paanch|panch|five|à¦ªà¦¾à¦à¦š|à¤ªà¤¾à¤‚à¤š)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '5000'],
    [/\b(char|four|à¦šà¦¾à¦°|à¤šà¤¾à¤°)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '4000'],
    [/\b(teen|tin|three|à¦¤à¦¿à¦¨|à¤¤à¥€à¤¨)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '3000'],
    [/\b(do|two|dui|à¦¦à§à¦‡|à¤¦à¥‹)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '2000'],
    [/\b(ek|one|à¦à¦•|à¤à¤•)\s*(hazar|hazaar|thousand|à¦¹à¦¾à¦œà¦¾à¦°|à¤¹à¤œà¤¾à¤°)\b/gi, '1000'],

    // Composite hundreds
    [/\b(nau|nine|à¦¨à¦¯à¦¼|à¤¨à¥Œ)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '900'],
    [/\b(aath|eight|à¦†à¦Ÿ|à¤†à¤ )\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '800'],
    [/\b(saat|seven|à¦¸à¦¾à¦¤|à¤¸à¤¾à¤¤)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '700'],
    [/\b(chhe|chhah|chha|chhoy|six|à¦›à¦¯à¦¼|à¤›à¤¹|à¤›à¤ƒ)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '600'],
    [/\b(paanch|panch|five|à¦ªà¦¾à¦à¦š|à¤ªà¤¾à¤‚à¤š)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '500'],
    [/\b(char|chaar|four|à¦šà¦¾à¦°|à¤šà¤¾à¤°)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '400'],
    [/\b(teen|tin|three|à¦¤à¦¿à¦¨|à¤¤à¥€à¤¨)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '300'],
    [/\b(do|two|dui|à¦¦à§à¦‡|à¤¦à¥‹)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '200'],
    [/\b(ek|one|à¦à¦•|à¤à¤•)\s*(sau|so|hundred|à¦¶à§‹|à¤¸à¥Œ)\b/gi, '100'],

    // Single words in Bengali
    [/\b(à¦à¦•à¦¶à§‹|à¦à¦•à¦¶à¦¤|à¦à¦•à¦¶)\b/gi, '100'],
    [/\b(à¦¦à§à¦¶à§‹|à¦¦à§à¦‡à¦¶à¦¤|à¦¦à§à¦¶)\b/gi, '200'],
    [/\b(à¦¤à¦¿à¦¨à¦¶à§‹|à¦¤à¦¿à¦¨à¦¶à¦¤)\b/gi, '300'],
    [/\b(à¦šà¦¾à¦°à¦¶à§‹|à¦šà¦¾à¦°à¦¶à¦¤)\b/gi, '400'],
    [/\b(à¦ªà¦¾à¦à¦šà¦¶à§‹|à¦ªà¦¾à¦à¦šà¦¶à¦¤|à¦ªà¦¾à¦à¦šà¦¶)\b/gi, '500'],
    [/\b(à¦›à¦¯à¦¼à¦¶à§‹|à¦›à¦¯à¦¼à¦¶à¦¤)\b/gi, '600'],
    [/\b(à¦¸à¦¾à¦¤à¦¶à§‹|à¦¸à¦¾à¦¤à¦¶à¦¤)\b/gi, '700'],
    [/\b(à¦†à¦Ÿà¦¶à§‹|à¦†à¦Ÿà¦¶à¦¤)\b/gi, '800'],
    [/\b(à¦¨à¦¯à¦¼à¦¶à§‹|à¦¨à¦¯à¦¼à¦¶à¦¤)\b/gi, '900'],
    [/\b(à¦¹à¦¾à¦œà¦¾à¦°)\b/gi, '1000'],
    [/\b(à¦ªà¦žà§à¦šà¦¾à¦¶|à¦ªà¦à¦šà¦¾à¦¶)\b/gi, '50'],
    [/\b(à¦šà¦²à§à¦²à¦¿à¦¶|à¦šà¦²à§à¦²à¦¿)\b/gi, '40'],
    [/\b(à¦¤à¦¿à¦°à¦¿à¦¶|à¦¤à§à¦°à¦¿à¦¶)\b/gi, '30'],
    [/\b(à¦•à§à¦¡à¦¼à¦¿|à¦¬à¦¿à¦¶)\b/gi, '20'],
    [/\b(à¦ªà¦à¦šà¦¿à¦¶)\b/gi, '25'],
    [/\b(à¦ªà¦à¦¯à¦¼à¦¤à§à¦°à¦¿à¦¶)\b/gi, '35'],
    [/\b(à¦ªà¦à¦¯à¦¼à¦¤à¦¾à¦²à§à¦²à¦¿à¦¶)\b/gi, '45'],
    [/\b(à¦¦à¦¶)\b/gi, '10'],

    // Single words in Hindi
    [/\b(à¤à¤• à¤¸à¥Œ|à¤¸à¥Œ)\b/gi, '100'],
    [/\b(à¤¦à¥‹ à¤¸à¥Œ)\b/gi, '200'],
    [/\b(à¤¤à¥€à¤¨ à¤¸à¥Œ)\b/gi, '300'],
    [/\b(à¤šà¤¾à¤° à¤¸à¥Œ)\b/gi, '400'],
    [/\b(à¤ªà¤¾à¤‚à¤š à¤¸à¥Œ|à¤ªà¤¾à¤à¤š à¤¸à¥Œ)\b/gi, '500'],
    [/\b(à¤›à¤¹ à¤¸à¥Œ)\b/gi, '600'],
    [/\b(à¤¸à¤¾à¤¤ à¤¸à¥Œ)\b/gi, '700'],
    [/\b(à¤†à¤  à¤¸à¥Œ)\b/gi, '800'],
    [/\b(à¤¨à¥Œ à¤¸à¥Œ)\b/gi, '900'],
    [/\b(à¤¹à¤œà¤¾à¤°|à¤¹à¤œà¤¼à¤¾à¤°)\b/gi, '1000'],
    [/\b(à¤ªà¤šà¤¾à¤¸)\b/gi, '50'],
    [/\b(à¤šà¤¾à¤²à¥€à¤¸)\b/gi, '40'],
    [/\b(à¤¤à¥€à¤¸)\b/gi, '30'],
    [/\b(à¤ªà¤šà¥à¤šà¥€à¤¸)\b/gi, '25'],
    [/\b(à¤ªà¥ˆà¤‚à¤¤à¥€à¤¸)\b/gi, '35'],
    [/\b(à¤ªà¥ˆà¤‚à¤¤à¤¾à¤²à¥€à¤¸)\b/gi, '45'],
    [/\b(à¤¬à¥€à¤¸)\b/gi, '20'],
    [/\b(à¤¦à¤¸)\b/gi, '10']
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
      dialectLabel: 'à¦¬à¦¾à¦‚à¦²à¦¾ (Bengali Script)'
    };
  }

  if (devanagariChars >= 2 && devanagariChars > bengaliScriptChars) {
    return {
      lang: 'HI',
      confidence: 0.98,
      script: 'Devanagari',
      dialectLabel: 'à¤¹à¤¿à¤¨à¥à¤¦à¥€ (Devanagari Script)'
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
      dialectLabel: 'à¦¬à¦¾à¦‚à¦²à¦¾ (Banglish / Romanized Bengali)'
    };
  }

  if (hiScore > 0 && hiScore > bnScore) {
    return {
      lang: 'HI',
      confidence: 0.92,
      script: 'Latin',
      dialectLabel: 'à¤¹à¤¿à¤¨à¥à¤¦à¥€ (Hinglish / Romanized Hindi)'
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
        BN: 'à¦•à§‹à¦¨ à¦•à¦¥à¦¾ à¦¶à§‹à¦¨à¦¾ à¦¯à¦¾à§Ÿà¦¨à¦¿',
        HI: 'à¤•à¥‹à¤ˆ à¤†à¤µà¤¾à¤œà¤¼ à¤¸à¥à¤¨à¤¾à¤ˆ à¤¨à¤¹à¥€à¤‚ à¤¦à¥€'
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
  const isPriceQuery = /\b(price|rate|mandi|bhav|bhaav|daam|dam|dor|cost|market\s*rate|à¦¦à¦°|à¦¦à¦¾à¦®|à¦­à¦¾à¦¬|à¦¦à¦°à¦¦à¦¾à¦²à¦¾à¦¨|à¦®à¦¨à§à¦¡à¦¿|à¦¬à¦¾à¦œà¦¾à¦°|à¦¦à¦°\s*à¦•à¦¤|à¦•à¦¤\s*à¦•à¦°à§‡|à¤­à¤¾à¤µ|à¤¦à¤¾à¤®|à¤®à¤‚à¤¡à¥€|à¤°à¥‡à¤Ÿ|à¤•à¥€à¤®à¤¤|à¤­à¤¾à¤µ\s*à¤•à¥à¤¯à¤¾|à¤•à¤¿à¤¤à¤¨à¤¾|à¤•à¤¿à¤¤à¤¨à¥‡)\b/i.test(lower);

  const isTrackQuery = /\b(track|order|dispatch|status|delivery|truck|gadi|driver|vehicle|à¦…à¦°à§à¦¡à¦¾à¦°|à¦Ÿà§à¦°à§à¦¯à¦¾à¦•|à¦—à¦¾à§œà¦¿|à¦šà¦¾à¦²à¦¾à¦¨|à¦¡à§‡à¦²à¦¿à¦­à¦¾à¦°à¦¿|à¦•à§‹à¦¥à¦¾à§Ÿ|à¤—à¤¾à¤¡à¤¼à¥€|à¤Ÿà¥à¤°à¤•|à¤‘à¤°à¥à¤¡à¤°|à¤Ÿà¥à¤°à¥ˆà¤•|à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€|à¤•à¤¹à¤¾à¤)\b/i.test(lower);

  const isWeatherQuery = /\b(weather|rain|forecast|abohawa|mausam|bristi|barish|à¦¬à§ƒà¦·à§à¦Ÿà¦¿|à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾|à¦®à§‡à¦˜|à¦¬à§ƒà¦·à§à¦Ÿà¦¿à¦°|à¤®à¥Œà¤¸à¤®|à¤¬à¤¾à¤°à¤¿à¤¶|à¤µà¤°à¥à¤·à¤¾|à¤ªà¤¾à¤¨à¥€)\b/i.test(lower);

  const isMarketQuery = /\b(demand|intelligence|forecast|surplus|shortage|analytics|à¦šà¦¾à¦¹à¦¿à¦¦à¦¾|à¦˜à¦¾à¦Ÿà¦¤à¦¿|à¦‰à¦¦à§à¦¬à§ƒà¦¤à§à¦¤|à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸|à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨|à¤®à¤¾à¤‚à¤—|à¤•à¤®à¥€|à¤…à¤§à¤¿à¤•à¤¤à¤¾)\b/i.test(lower);

  const isSellQuery = /\b(sell|list|listing|upload|offer|bikri|bikroy|bech|bechna|becho|dalo|à¦¬à¦¿à¦•à§à¦°à¦¿|à¦¬à¦¿à¦•à§à¦°à¦¯à¦¼|à¦¬à§‡à¦šà¦¾|à¦¬à§‡à¦šà¦¬|à¦¬à§‡à¦šà¦¤à§‡\s*à¦šà¦¾à¦‡|à¦¬à§‡à¦šà¦¬à§‹|à¦¤à§‹à¦²à§‹|à¦¤à¦¾à¦²à¦¿à¦•à¦¾|à¤¬à¥‡à¤šà¤¨à¤¾|à¤¬à¥‡à¤šà¥‡à¤‚|à¤¬à¤¿à¤•à¥à¤°à¥€|à¤¬à¥‡à¤šà¤¨à¤¾\s*à¤¹à¥ˆ|à¤¬à¥‡à¤šà¤¨à¤¾\s*à¤šà¤¾à¤¹à¤¤à¤¾|à¤¡à¤¾à¤²à¥‹|à¤¦à¤°à¥à¤œ)\b/i.test(lower) ||
    (/\b(kg|kilo|quintal|ton|bori|bag|gram|grams|gm|gms|à¦¬à¦¸à§à¦¤à¦¾|à¦¬à§à¦¯à¦¾à¦—|à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦²|à¦—à§à¦°à¦¾à¦®|à¦—à§à¦°à¦¾à¦®à§à¦¸|à¤•à¤¿à¤²à¥‹|à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤²|à¤¬à¥‹à¤°à¥€|à¤—à¥à¤°à¤¾à¤®|à¤—à¥à¤°à¤¾à¤®à¥à¤¸)\b/i.test(lower) && !isPriceQuery);

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

  // Explicit Grams parsing (e.g. 400 grams, 500 gm, à§ªà§¦à§¦ à¦—à§à¦°à¦¾à¦®, 400 à¤—à¥à¤°à¤¾à¤® -> 0.4 kg)
  const gramMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:gram|grams|gm|gms|\bg\b|à¦—à§à¦°à¦¾à¦®|à¦—à§à¦°à¦¾à¦®à§‡à¦°|à¦—à§à¦°à¦¾à¦®à§à¦¸|à¤—à¥à¤°à¤¾à¤®|à¤—à¥à¤°à¤¾à¤®à¥à¤¸)/i);
  if (gramMatch) {
    const rawGrams = parseFloat(gramMatch[1]);
    if (!isNaN(rawGrams) && rawGrams > 0) {
      quantityKg = parseFloat((rawGrams / 1000).toFixed(3));
    }
  }

  const quintalMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:quintal|kuintal|à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤²|à¤•à¤µà¤¿à¤‚à¤Ÿà¤²|à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦²)/i);
  if (!quantityKg && quintalMatch) {
    quantityKg = Math.round(parseFloat(quintalMatch[1]) * 100);
  }

  const tonMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:ton|tonne|à¦Ÿà¦¨|à¤Ÿà¤¨)/i);
  if (!quantityKg && tonMatch) {
    quantityKg = Math.round(parseFloat(tonMatch[1]) * 1000);
  }

  const bagMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:bag|bags|bori|bora|à¦¬à¦¸à§à¦¤à¦¾|à¦¬à§à¦¯à¦¾à¦—|à¦¬à§‹à¦°à¦¾|à¤¬à¥‹à¤°à¥€|à¤•à¤Ÿà¥à¤Ÿà¤¾)/i);
  if (!quantityKg && bagMatch) {
    quantityKg = Math.round(parseFloat(bagMatch[1]) * 50);
  }

  const kgMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:kg|kgs|kilo|kilos|kilor|à¦•à§‡à¦œà¦¿|à¦•à§‡à¦œà¦¿à¦°|à¤•à¤¿à¤²à¥‹|à¤•à¤¿à¤—à¥à¤°à¤¾)/i);
  if (!quantityKg && kgMatch) {
    quantityKg = parseFloat(parseFloat(kgMatch[1]).toFixed(2));
  }

  // 6. Price Extraction (Rupees, Taka, Rate)
  let pricePerKg: number | undefined;

  const priceWithUnit = lower.match(/(?:at|rate|price|â‚¹|rs\.?|rupees|bhav|daam|taka|à¦Ÿà¦¾à¦•à¦¾|à¦¦à¦°|à¦°à§à¦ªà§‡|à¤°à¥à¤ªà¤¯à¥‡|à¤­à¤¾à¤µ|à¤°à¥‡à¤Ÿ)\s*(\d+(?:\.\d+)?)/i) ||
    lower.match(/(\d+(?:\.\d+)?)\s*(?:rupees|rs\.?|â‚¹|taka|à¦Ÿà¦¾à¦•à¦¾|à¦°à§à¦ªà§‡|à¤°à¥à¤ªà¤¯à¥‡|bhav|à¤­à¤¾à¤µ|à¤°à¥‡à¤Ÿ)/i);

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
      if (lang === 'BN') return `${g} à¦—à§à¦°à¦¾à¦® (${kgVal} à¦•à§‡à¦œà¦¿)`;
      if (lang === 'HI') return `${g} à¤—à¥à¤°à¤¾à¤® (${kgVal} à¤•à¤¿à¤²à¥‹)`;
      return `${g}g (${kgVal} kg)`;
    }
    if (lang === 'BN') return `${kgVal} à¦•à§‡à¦œà¦¿`;
    if (lang === 'HI') return `${kgVal} à¤•à¤¿à¤²à¥‹`;
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

    transEN = `List ${qtyEN ? `${qtyEN} ` : ''}${standardCrop}${pricePerKg ? ` at â‚¹${pricePerKg}/kg` : ''} for sale`;
    transBN = `${bengaliCrop}${qtyBN ? ` ${qtyBN}` : ''}${pricePerKg ? ` â‚¹${pricePerKg} à¦¦à¦°à§‡` : ''} à¦¬à¦¿à¦•à§à¦°à¦¿à¦° à¦œà¦¨à§à¦¯ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦­à§à¦•à§à¦¤ à¦•à¦°à§à¦¨`;
    transHI = `${hindiCrop}${qtyHI ? ` ${qtyHI}` : ''}${pricePerKg ? ` â‚¹${pricePerKg} à¤­à¤¾à¤µ à¤ªà¤°` : ''} à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚`;

    summaryEN = `Listing ${qtyEN ? `${qtyEN} ` : ''}${standardCrop}${pricePerKg ? ` at â‚¹${pricePerKg}/kg` : ''}`;
    summaryBN = `${bengaliCrop} (${qtyBN || 'à¦«à¦¸à¦²'}) à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦¬à¦¿à¦•à§à¦°à¦¿à¦° à¦œà¦¨à§à¦¯ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦­à§à¦•à§à¦¤ à¦•à¦°à¦¾ à¦¹à¦šà§à¦›à§‡`;
    summaryHI = `${hindiCrop} (${qtyHI || 'à¤«à¤¸à¤²'}) à¤¸à¥€à¤§à¥‡ à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¦à¤°à¥à¤œ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ`;
  } else if (intent === 'price') {
    transEN = `What is today's mandi price for ${standardCrop}?`;
    transBN = `${bengaliCrop}-à¦à¦° à¦†à¦œà¦•à§‡à¦° à¦¬à¦¾à¦œà¦¾à¦° à¦¦à¦° à¦•à¦¤?`;
    transHI = `${hindiCrop} à¤•à¤¾ à¤†à¤œ à¤•à¤¾ à¤®à¤‚à¤¡à¥€ à¤­à¤¾à¤µ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?`;

    summaryEN = `Checking current mandi market price for ${standardCrop}`;
    summaryBN = `${bengaliCrop}-à¦à¦° à¦†à¦œà¦•à§‡à¦° à¦¬à¦¾à¦œà¦¾à¦° à¦¦à¦° à¦¦à§‡à¦–à¦¾à¦šà§à¦›à¦¿`;
    summaryHI = `${hindiCrop} à¤•à¤¾ à¤†à¤œ à¤•à¤¾ à¤®à¤‚à¤¡à¥€ à¤­à¤¾à¤µ à¤¦à¥‡à¤–à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ`;
  } else if (intent === 'track') {
    transEN = `Track my active orders and truck dispatch status`;
    transBN = `à¦†à¦®à¦¾à¦° à¦…à¦°à§à¦¡à¦¾à¦° à¦à¦¬à¦‚ à¦—à¦¾à§œà¦¿ à¦¡à§‡à¦²à¦¿à¦­à¦¾à¦°à¦¿ à¦Ÿà§à¦°à§à¦¯à¦¾à¦• à¦•à¦°à§à¦¨`;
    transHI = `à¤®à¥‡à¤°à¥‡ à¤‘à¤°à¥à¤¡à¤° à¤”à¤° à¤µà¤¾à¤¹à¤¨ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤Ÿà¥à¤°à¥ˆà¤• à¤•à¤°à¥‡à¤‚`;

    summaryEN = `Tracking active dispatch and truck location`;
    summaryBN = `à¦šà¦²à¦¤à¦¿ à¦…à¦°à§à¦¡à¦¾à¦° à¦“ à¦—à¦¾à§œà¦¿ à¦Ÿà§à¦°à§à¦¯à¦¾à¦•à¦¿à¦‚ à¦•à¦°à¦¾ à¦¹à¦šà§à¦›à§‡`;
    summaryHI = `à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤‘à¤°à¥à¤¡à¤° à¤”à¤° à¤µà¤¾à¤¹à¤¨ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆ`;
  } else if (intent === 'weather') {
    transEN = `What is the weather and rain forecast for agriculture?`;
    transBN = `à¦†à¦œà¦•à§‡à¦° à¦•à§ƒà¦·à¦¿ à¦†à¦¬à¦¹à¦¾à¦“à§Ÿà¦¾ à¦“ à¦¬à§ƒà¦·à§à¦Ÿà¦¿à¦° à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦•à§‡à¦®à¦¨?`;
    transHI = `à¤†à¤œ à¤•à¤¾ à¤•à¥ƒà¤·à¤¿ à¤®à¥Œà¤¸à¤® à¤”à¤° à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?`;

    summaryEN = `Weather advisory: Clear sunny sky, 32Â°C. Low rain risk. Favorable for harvesting.`;
    summaryBN = `à¦†à¦¬à¦¹à¦¾à¦“à§Ÿà¦¾ à¦¬à¦¾à¦°à§à¦¤à¦¾: à¦°à§‹à¦¦ à¦à¦²à¦®à¦²à§‡, à§©à§¨Â°Cà¥¤ à¦¬à§ƒà¦·à§à¦Ÿà¦¿à¦° à¦†à¦¶à¦™à§à¦•à¦¾ à¦¨à§‡à¦‡à¥¤ à¦«à¦¸à¦² à¦¤à§‹à¦²à¦¾ à¦“ à¦ªà¦°à¦¿à¦¬à¦¹à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§à¦•à§à¦¤à¥¤`;
    summaryHI = `à¤®à¥Œà¤¸à¤® à¤¸à¤²à¤¾à¤¹: à¤§à¥‚à¤ª à¤–à¤¿à¤²à¥€ à¤°à¤¹à¥‡à¤—à¥€, à¥©à¥¨Â°Cà¥¤ à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¥€ à¤¸à¤‚à¤­à¤¾à¤µà¤¨à¤¾ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤«à¤¸à¤² à¤•à¤Ÿà¤¾à¤ˆ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤¨à¥à¤•à¥‚à¤²à¥¤`;
  } else if (intent === 'market') {
    transEN = `Show AI demand forecast and market shortage map`;
    transBN = `à¦à¦†à¦‡ à¦šà¦¾à¦¹à¦¿à¦¦à¦¾ à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦à¦¬à¦‚ à¦˜à¦¾à¦Ÿà¦¤à¦¿ à¦®à¦¾à¦¨à¦šà¦¿à¦¤à§à¦° à¦¦à§‡à¦–à§à¦¨`;
    transHI = `à¤®à¤¾à¤‚à¤— à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤”à¤° à¤¬à¤¾à¤œà¤¾à¤° à¤•à¤¾ à¤¨à¤•à¥à¤¶à¤¾ à¤¦à¥‡à¤–à¥‡à¤‚`;

    summaryEN = `Displaying AI demand intelligence and regional forecasts`;
    summaryBN = `à¦šà¦¾à¦¹à¦¿à¦¦à¦¾à¦° à¦à¦†à¦‡ à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦“ à¦˜à¦¾à¦Ÿà¦¤à¦¿ à¦à¦²à¦¾à¦•à¦¾ à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à¦šà§à¦›à§‡`;
    summaryHI = `à¤®à¤¾à¤‚à¤— à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤”à¤° à¤¬à¤¾à¤œà¤¾à¤° à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¦à¤¿à¤–à¤¾à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ`;
  } else {
    transEN = text;
    transBN = text;
    transHI = text;

    summaryEN = `Heard: "${text}"`;
    summaryBN = `à¦¶à§‹à¦¨à¦¾ à¦—à§‡à¦›à§‡: "${text}"`;
    summaryHI = `à¤¸à¥à¤¨à¤¾à¤ˆ à¤¦à¤¿à¤¯à¤¾: "${text}"`;
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
    // Look for Bengali voices (e.g. bn-IN, bn-BD, Google à¦¬à¦¾à¦‚à¦²à¦¾, Microsoft Bashkar)
    const bnVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith('bn') || 
      /bengali|bangla|à¦¬à¦¾à¦‚à¦²à¦¾/i.test(v.name)
    );
    if (bnVoice) return bnVoice;
  }

  if (lang === 'HI') {
    // Look for Hindi voices (e.g. hi-IN, Google à¤¹à¤¿à¤¨à¥à¤¦à¥€, Microsoft Hemant, Kalpana)
    const hiVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith('hi') || 
      /hindi|à¤¹à¤¿à¤¨à¥à¤¦à¥€|à¤¹à¤¿à¤‚à¤¦à¥€/i.test(v.name)
    );
    if (hiVoice) return hiVoice;
  }

  // Fallback to Indian English (en-IN)
  const inVoice = voices.find(v => v.lang.toLowerCase().includes('en-in') || /india/i.test(v.name));
  if (inVoice) return inVoice;

  return voices.find(v => v.lang.toLowerCase().startsWith('en')) || voices[0] || null;
}
