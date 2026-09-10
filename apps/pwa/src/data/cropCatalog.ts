export interface CatalogCropItem {
  id: string;
  name: string;
  category: 'Vegetables' | 'Fruits' | 'Grains' | 'Spices' | 'Leafy Greens' | 'Custom';
  icon: string;
  variety: string;
  suggestedPriceMin: number;
  suggestedPriceMax: number;
  unit: string;
  demandTonnes: number;
  forecastDemandTonnes: number;
  trend: 'up' | 'stable' | 'down';
  recommendation: string;
}

export const BASE_CROP_CATALOG: CatalogCropItem[] = [
  // --- VEGETABLES ---
  {
    id: 'crop-veg-1',
    name: 'Tomato',
    category: 'Vegetables',
    icon: '🍅',
    variety: 'Hybrid Red Flavour',
    suggestedPriceMin: 28,
    suggestedPriceMax: 32,
    unit: 'kg',
    demandTonnes: 21.8,
    forecastDemandTonnes: 26.4,
    trend: 'up',
    recommendation: 'Surging demand in urban Kolkata retail markets. Harvest firm red fruits for direct logistics.'
  },
  {
    id: 'crop-veg-2',
    name: 'Potato',
    category: 'Vegetables',
    icon: '🥔',
    variety: 'Jyoti Golden Super',
    suggestedPriceMin: 16,
    suggestedPriceMax: 20,
    unit: 'kg',
    demandTonnes: 45.0,
    forecastDemandTonnes: 47.2,
    trend: 'stable',
    recommendation: 'Stable round-the-year demand. Hooghly & Burdwan cold storages clearing stock steadily.'
  },
  {
    id: 'crop-veg-3',
    name: 'Onion',
    category: 'Vegetables',
    icon: '🧅',
    variety: 'Nashik Red & Bellary',
    suggestedPriceMin: 24,
    suggestedPriceMax: 28,
    unit: 'kg',
    demandTonnes: 34.2,
    forecastDemandTonnes: 39.5,
    trend: 'up',
    recommendation: 'Festive season bulk buying starting. High off-take for medium calibrated bulbs.'
  },
  {
    id: 'crop-veg-4',
    name: 'Cauliflower',
    category: 'Vegetables',
    icon: '🥦',
    variety: 'Snowball White Compact',
    suggestedPriceMin: 22,
    suggestedPriceMax: 28,
    unit: 'kg',
    demandTonnes: 18.5,
    forecastDemandTonnes: 22.0,
    trend: 'up',
    recommendation: 'Early curds receiving premium spot prices in local wholesale markets.'
  },
  {
    id: 'crop-veg-5',
    name: 'Cabbage',
    category: 'Vegetables',
    icon: '🥬',
    variety: 'Green Globe Crisp',
    suggestedPriceMin: 14,
    suggestedPriceMax: 18,
    unit: 'kg',
    demandTonnes: 16.0,
    forecastDemandTonnes: 17.5,
    trend: 'stable',
    recommendation: 'Consistent demand across community kitchens and restaurants.'
  },
  {
    id: 'crop-veg-6',
    name: 'Carrot',
    category: 'Vegetables',
    icon: '🥕',
    variety: 'Pusa Kesar Deep Orange',
    suggestedPriceMin: 30,
    suggestedPriceMax: 38,
    unit: 'kg',
    demandTonnes: 14.2,
    forecastDemandTonnes: 17.0,
    trend: 'up',
    recommendation: 'High consumer preference for tender, washed red roots.'
  },
  {
    id: 'crop-veg-7',
    name: 'Brinjal',
    category: 'Vegetables',
    icon: '🍆',
    variety: 'Muktakeshi Round Purple',
    suggestedPriceMin: 25,
    suggestedPriceMax: 32,
    unit: 'kg',
    demandTonnes: 19.0,
    forecastDemandTonnes: 21.2,
    trend: 'up',
    recommendation: 'High domestic household staple consumption; quick turnover crop.'
  },
  {
    id: 'crop-veg-8',
    name: 'Lady Finger (Okra)',
    category: 'Vegetables',
    icon: '🌱',
    variety: 'Kashi Kranti Tender Green',
    suggestedPriceMin: 32,
    suggestedPriceMax: 40,
    unit: 'kg',
    demandTonnes: 12.4,
    forecastDemandTonnes: 14.8,
    trend: 'up',
    recommendation: 'Daily morning harvests fetch top tier prices when unblemished.'
  },
  {
    id: 'crop-veg-9',
    name: 'Green Peas',
    category: 'Vegetables',
    icon: '🫛',
    variety: 'Arkel Sweet Pods',
    suggestedPriceMin: 45,
    suggestedPriceMax: 55,
    unit: 'kg',
    demandTonnes: 15.6,
    forecastDemandTonnes: 20.0,
    trend: 'up',
    recommendation: 'High profit margins for farm-fresh whole pods.'
  },
  {
    id: 'crop-veg-10',
    name: 'Bitter Gourd (Karela)',
    category: 'Vegetables',
    icon: '🥒',
    variety: 'Pusa Do Mausami Dark Green',
    suggestedPriceMin: 28,
    suggestedPriceMax: 36,
    unit: 'kg',
    demandTonnes: 9.8,
    forecastDemandTonnes: 11.2,
    trend: 'stable',
    recommendation: 'Steady medicinal and health-conscious consumer retail purchases.'
  },
  {
    id: 'crop-veg-11',
    name: 'Bottle Gourd (Lauki)',
    category: 'Vegetables',
    icon: '🫒',
    variety: 'Pusa Naveen Cylindrical',
    suggestedPriceMin: 18,
    suggestedPriceMax: 24,
    unit: 'kg',
    demandTonnes: 17.2,
    forecastDemandTonnes: 18.9,
    trend: 'stable',
    recommendation: 'Heavy demand from city daily consumers for fresh morning harvest.'
  },
  {
    id: 'crop-veg-12',
    name: 'Capsicum (Bell Pepper)',
    category: 'Vegetables',
    icon: '🫑',
    variety: 'Indra Dark Green Glossy',
    suggestedPriceMin: 40,
    suggestedPriceMax: 52,
    unit: 'kg',
    demandTonnes: 11.5,
    forecastDemandTonnes: 15.0,
    trend: 'up',
    recommendation: 'Restaurants and retail supermarket buyers offering direct contracts.'
  },
  {
    id: 'crop-veg-13',
    name: 'Cucumber',
    category: 'Vegetables',
    icon: '🥒',
    variety: 'Malini Salad Crisp',
    suggestedPriceMin: 20,
    suggestedPriceMax: 26,
    unit: 'kg',
    demandTonnes: 22.0,
    forecastDemandTonnes: 24.5,
    trend: 'stable',
    recommendation: 'High velocity salad product. Clean grading recommended.'
  },
  {
    id: 'crop-veg-14',
    name: 'Garlic',
    category: 'Vegetables',
    icon: '🧄',
    variety: 'Yamuna Safed White Bulbs',
    suggestedPriceMin: 90,
    suggestedPriceMax: 120,
    unit: 'kg',
    demandTonnes: 8.5,
    forecastDemandTonnes: 10.5,
    trend: 'up',
    recommendation: 'Excellent shelf-life and high wholesale price realization.'
  },
  {
    id: 'crop-veg-15',
    name: 'Ginger',
    category: 'Vegetables',
    icon: '🫚',
    variety: 'Maran Aromatic Fresh Rhizome',
    suggestedPriceMin: 70,
    suggestedPriceMax: 95,
    unit: 'kg',
    demandTonnes: 10.2,
    forecastDemandTonnes: 12.8,
    trend: 'up',
    recommendation: 'Spices and herbal tea demand maintaining strong price floor.'
  },
  {
    id: 'crop-veg-16',
    name: 'Pumpkin',
    category: 'Vegetables',
    icon: '🎃',
    variety: 'Pusa Vishwas Golden Flesh',
    suggestedPriceMin: 14,
    suggestedPriceMax: 18,
    unit: 'kg',
    demandTonnes: 13.0,
    forecastDemandTonnes: 14.1,
    trend: 'stable',
    recommendation: 'Long holding capability without cold chain requirements.'
  },

  // --- FRUITS ---
  {
    id: 'crop-frt-1',
    name: 'Apple',
    category: 'Fruits',
    icon: '🍎',
    variety: 'Himachal Royal Delicious',
    suggestedPriceMin: 85,
    suggestedPriceMax: 110,
    unit: 'kg',
    demandTonnes: 28.0,
    forecastDemandTonnes: 34.5,
    trend: 'up',
    recommendation: 'Premium table-fruit demand surging across tier 1 urban buyers.'
  },
  {
    id: 'crop-frt-2',
    name: 'Banana',
    category: 'Fruits',
    icon: '🍌',
    variety: 'Grand Naine (G9) Golden',
    suggestedPriceMin: 22,
    suggestedPriceMax: 30,
    unit: 'kg',
    demandTonnes: 52.0,
    forecastDemandTonnes: 56.0,
    trend: 'stable',
    recommendation: 'Uninterrupted daily consumption. Uniform bunch grading yields top rate.'
  },
  {
    id: 'crop-frt-3',
    name: 'Mango',
    category: 'Fruits',
    icon: '🥭',
    variety: 'Himsagar / Langra Heritage',
    suggestedPriceMin: 75,
    suggestedPriceMax: 105,
    unit: 'kg',
    demandTonnes: 40.0,
    forecastDemandTonnes: 48.0,
    trend: 'up',
    recommendation: 'High consumer appetite; guaranteed prompt buyouts by pre-registered consumers.'
  },
  {
    id: 'crop-frt-4',
    name: 'Orange',
    category: 'Fruits',
    icon: '🍊',
    variety: 'Nagpur Sweet Juicy',
    suggestedPriceMin: 45,
    suggestedPriceMax: 60,
    unit: 'kg',
    demandTonnes: 26.5,
    forecastDemandTonnes: 31.0,
    trend: 'up',
    recommendation: 'Heavy juice stall and family fruit basket ordering.'
  },
  {
    id: 'crop-frt-5',
    name: 'Guava',
    category: 'Fruits',
    icon: '🍈',
    variety: 'Allahabad Safeda Crisp White',
    suggestedPriceMin: 30,
    suggestedPriceMax: 42,
    unit: 'kg',
    demandTonnes: 14.8,
    forecastDemandTonnes: 17.2,
    trend: 'up',
    recommendation: 'Sweet, spotless fruit crates moving rapidly.'
  },
  {
    id: 'crop-frt-6',
    name: 'Papaya',
    category: 'Fruits',
    icon: '🥭',
    variety: 'Red Lady 786 Sweet Hybrid',
    suggestedPriceMin: 24,
    suggestedPriceMax: 32,
    unit: 'kg',
    demandTonnes: 20.4,
    forecastDemandTonnes: 23.0,
    trend: 'stable',
    recommendation: 'Continuous harvest cycles throughout the month.'
  },
  {
    id: 'crop-frt-7',
    name: 'Watermelon',
    category: 'Fruits',
    icon: '🍉',
    variety: 'Kiran Sugar Baby Hybrid',
    suggestedPriceMin: 15,
    suggestedPriceMax: 22,
    unit: 'kg',
    demandTonnes: 38.0,
    forecastDemandTonnes: 42.0,
    trend: 'stable',
    recommendation: 'High tonnage direct dispatch straight to consumer housing complexes.'
  },
  {
    id: 'crop-frt-8',
    name: 'Pomegranate',
    category: 'Fruits',
    icon: '🫐',
    variety: 'Bhagwa Deep Red Pearls',
    suggestedPriceMin: 95,
    suggestedPriceMax: 135,
    unit: 'kg',
    demandTonnes: 11.2,
    forecastDemandTonnes: 14.0,
    trend: 'up',
    recommendation: 'Superfood premium pricing; buyers readily accept direct pre-orders.'
  },
  {
    id: 'crop-frt-9',
    name: 'Pineapple',
    category: 'Fruits',
    icon: '🍍',
    variety: 'Queen Sweet Siliguri Special',
    suggestedPriceMin: 35,
    suggestedPriceMax: 48,
    unit: 'kg',
    demandTonnes: 16.5,
    forecastDemandTonnes: 19.5,
    trend: 'up',
    recommendation: 'Strong regional demand from Siliguri to Greater Kolkata.'
  },

  // --- GRAINS & CEREALS ---
  {
    id: 'crop-grn-1',
    name: 'Rice',
    category: 'Grains',
    icon: '🌾',
    variety: 'Gobindobhog & Katarni Fragrant',
    suggestedPriceMin: 65,
    suggestedPriceMax: 82,
    unit: 'kg',
    demandTonnes: 60.0,
    forecastDemandTonnes: 68.0,
    trend: 'up',
    recommendation: 'High value GI-tagged aromatic rice receiving constant bulk inquiries.'
  },
  {
    id: 'crop-grn-2',
    name: 'Wheat',
    category: 'Grains',
    icon: '🌾',
    variety: 'Sharbati & HD-3086 Golden',
    suggestedPriceMin: 26,
    suggestedPriceMax: 32,
    unit: 'kg',
    demandTonnes: 48.0,
    forecastDemandTonnes: 52.0,
    trend: 'stable',
    recommendation: 'Steady milling & flour demand; direct storage to consumer orders active.'
  },
  {
    id: 'crop-grn-3',
    name: 'Maize (Corn)',
    category: 'Grains',
    icon: '🌽',
    variety: 'Sweet Corn & Yellow Feed',
    suggestedPriceMin: 22,
    suggestedPriceMax: 28,
    unit: 'kg',
    demandTonnes: 25.0,
    forecastDemandTonnes: 29.0,
    trend: 'up',
    recommendation: 'Sweet corn cobs in high demand in urban retail kiosks.'
  },

  // --- SPICES & OILSEEDS ---
  {
    id: 'crop-spc-1',
    name: 'Chilli',
    category: 'Spices',
    icon: '🌶️',
    variety: 'Bullet Green & Guntur Teja S17',
    suggestedPriceMin: 45,
    suggestedPriceMax: 60,
    unit: 'kg',
    demandTonnes: 19.5,
    forecastDemandTonnes: 24.0,
    trend: 'up',
    recommendation: 'Export & local spice grinder markets are aggressive on pungent lots.'
  },
  {
    id: 'crop-spc-2',
    name: 'Mustard',
    category: 'Spices',
    icon: '🌼',
    variety: 'Yellow Pusa Bold & Black',
    suggestedPriceMin: 55,
    suggestedPriceMax: 68,
    unit: 'kg',
    demandTonnes: 22.0,
    forecastDemandTonnes: 25.5,
    trend: 'up',
    recommendation: 'Direct oil expeller and local kitchen requirement creates immediate demand.'
  },
  {
    id: 'crop-spc-3',
    name: 'Turmeric',
    category: 'Spices',
    icon: '🫚',
    variety: 'Salem High Curcumin Raw',
    suggestedPriceMin: 60,
    suggestedPriceMax: 85,
    unit: 'kg',
    demandTonnes: 12.0,
    forecastDemandTonnes: 15.0,
    trend: 'up',
    recommendation: 'High health-interest value; certified curcumin tests command 20% bonus.'
  },

  // --- LEAFY GREENS ---
  {
    id: 'crop-leaf-1',
    name: 'Spinach (Palak)',
    category: 'Leafy Greens',
    icon: '🥬',
    variety: 'All Green Tender Leaf',
    suggestedPriceMin: 18,
    suggestedPriceMax: 25,
    unit: 'kg',
    demandTonnes: 14.5,
    forecastDemandTonnes: 17.5,
    trend: 'up',
    recommendation: 'Daily early morning delivery requested by resident consumer groups.'
  },
  {
    id: 'crop-leaf-2',
    name: 'Coriander (Dhania)',
    category: 'Leafy Greens',
    icon: '🌿',
    variety: 'Super Aroma Lush Green',
    suggestedPriceMin: 35,
    suggestedPriceMax: 50,
    unit: 'kg',
    demandTonnes: 8.8,
    forecastDemandTonnes: 11.0,
    trend: 'up',
    recommendation: 'Essential culinary herb; constant turnover.'
  },
  {
    id: 'crop-leaf-3',
    name: 'Mint (Pudina)',
    category: 'Leafy Greens',
    icon: '🌱',
    variety: 'Spearmint Fresh Leaf',
    suggestedPriceMin: 30,
    suggestedPriceMax: 45,
    unit: 'kg',
    demandTonnes: 6.2,
    forecastDemandTonnes: 8.0,
    trend: 'up',
    recommendation: 'Steady beverage & culinary consumer purchase orders.'
  }
];

const STORAGE_CUSTOM_CROPS_KEY = 'farm2flow_custom_crops_v1';

// Get merged crops catalog (Base + Farmer Added Custom Vegetables/Fruits)
export const getAllCatalogCrops = (): CatalogCropItem[] => {
  if (typeof window === 'undefined') return BASE_CROP_CATALOG;
  try {
    const raw = localStorage.getItem(STORAGE_CUSTOM_CROPS_KEY);
    if (!raw) return BASE_CROP_CATALOG;
    const customItems: CatalogCropItem[] = JSON.parse(raw);
    return [...BASE_CROP_CATALOG, ...customItems];
  } catch {
    return BASE_CROP_CATALOG;
  }
};

// Add a newly defined vegetable or fruit dynamically
export const addNewCustomCrop = (crop: {
  name: string;
  category: 'Vegetables' | 'Fruits' | 'Grains' | 'Spices' | 'Leafy Greens' | 'Custom';
  variety?: string;
  suggestedPriceMin?: number;
  suggestedPriceMax?: number;
  icon?: string;
}): CatalogCropItem => {
  let defaultIcon = '🌱';
  if (crop.category === 'Fruits') defaultIcon = '🍎';
  else if (crop.category === 'Vegetables') defaultIcon = '🥕';
  else if (crop.category === 'Grains') defaultIcon = '🌾';
  else if (crop.category === 'Spices') defaultIcon = '🌶️';
  else if (crop.category === 'Leafy Greens') defaultIcon = '🥬';

  const newItem: CatalogCropItem = {
    id: `custom-crop-${Date.now()}`,
    name: crop.name.trim(),
    category: crop.category,
    icon: crop.icon || defaultIcon,
    variety: crop.variety?.trim() || 'Farm Fresh Select',
    suggestedPriceMin: crop.suggestedPriceMin || 25,
    suggestedPriceMax: crop.suggestedPriceMax || 35,
    unit: 'kg',
    demandTonnes: 15.0,
    forecastDemandTonnes: 18.5,
    trend: 'up',
    recommendation: `Direct newly enlisted item: ${crop.name}. High demand across local and urban consumers.`
  };

  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(STORAGE_CUSTOM_CROPS_KEY);
    const existing: CatalogCropItem[] = raw ? JSON.parse(raw) : [];
    const updated = [newItem, ...existing];
    localStorage.setItem(STORAGE_CUSTOM_CROPS_KEY, JSON.stringify(updated));
    // Broadcast event for real-time reactivity
    window.dispatchEvent(new CustomEvent('farm2flow_catalog_updated', { detail: { newCrop: newItem, catalog: [...BASE_CROP_CATALOG, ...updated] } }));
  }

  return newItem;
};
