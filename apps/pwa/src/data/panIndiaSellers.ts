export interface PanIndiaSeller {
  id: string;
  name: string;
  fpoOrCoop: string;
  crop: string;
  variety: string;
  grade: 'Grade A' | 'Grade B' | 'Export Quality' | 'Standard' | string;
  quantityKg: number;
  pricePerKg: number;
  location: string;
  state: string;
  lat: number;
  lng: number;
  harvestDate: string;
  verified: boolean;
  phone: string;
  rating: number;
  transitDaysToKolkata: number;
  isUserListed?: boolean;
}

export const PAN_INDIA_CROPS = [
  'All Crops',
  'Tomato',
  'Potato',
  'Onion',
  'Wheat',
  'Rice',
  'Chilli',
  'Mustard',
  'Apple',
  'Cauliflower',
  'Cabbage',
  'Carrot',
  'Brinjal'
] as const;

export const PAN_INDIA_SELLERS: PanIndiaSeller[] = [
  // West Bengal
  {
    id: 'seller-wb-1',
    name: 'Ramesh Ghosh',
    fpoOrCoop: 'Singur Vegetable Cluster FPO',
    crop: 'Tomato',
    variety: 'Hybrid Red Flavour',
    grade: 'Grade A',
    quantityKg: 1200,
    pricePerKg: 29,
    location: 'Singur, Hooghly',
    state: 'West Bengal',
    lat: 22.8123,
    lng: 88.2325,
    harvestDate: 'Freshly Harvested',
    verified: true,
    phone: '+91 98310 44210',
    rating: 4.9,
    transitDaysToKolkata: 0.2
  },
  {
    id: 'seller-wb-2',
    name: 'Subhash Mondal',
    fpoOrCoop: 'Bardhaman Paddy & Grain Producers',
    crop: 'Rice',
    variety: 'Gobindobhog Aromatic',
    grade: 'Export Quality',
    quantityKg: 3500,
    pricePerKg: 78,
    location: 'Shaktigarh, Purba Bardhaman',
    state: 'West Bengal',
    lat: 23.2324,
    lng: 87.8615,
    harvestDate: 'Batch Tested Ready',
    verified: true,
    phone: '+91 98312 66321',
    rating: 4.8,
    transitDaysToKolkata: 0.5
  },
  {
    id: 'seller-wb-3',
    name: 'Animesh Biswas',
    fpoOrCoop: 'Nadia Fresh Horticulture Collective',
    crop: 'Chilli',
    variety: 'Bullet Green Spicy',
    grade: 'Grade A',
    quantityKg: 650,
    pricePerKg: 46,
    location: 'Ranaghat, Nadia',
    state: 'West Bengal',
    lat: 23.1812,
    lng: 88.5812,
    harvestDate: 'Daily Fresh Pick',
    verified: true,
    phone: '+91 98315 77412',
    rating: 4.7,
    transitDaysToKolkata: 0.3
  },
  {
    id: 'seller-wb-4',
    name: 'Bimal Halder',
    fpoOrCoop: 'Tarakeswar Potato Growers Union',
    crop: 'Potato',
    variety: 'Jyoti Golden Super',
    grade: 'Grade A',
    quantityKg: 4500,
    pricePerKg: 17,
    location: 'Tarakeswar, Hooghly',
    state: 'West Bengal',
    lat: 22.8884,
    lng: 88.0215,
    harvestDate: 'Cold Store Verified',
    verified: true,
    phone: '+91 98313 11540',
    rating: 4.9,
    transitDaysToKolkata: 0.3
  },

  // Maharashtra
  {
    id: 'seller-mh-1',
    name: 'Vasantrao Patil',
    fpoOrCoop: 'Nashik Agro Farmer Producer Co.',
    crop: 'Onion',
    variety: 'Nashik Red Premium',
    grade: 'Export Quality',
    quantityKg: 6000,
    pricePerKg: 24,
    location: 'Lasalgaon Mandi, Nashik',
    state: 'Maharashtra',
    lat: 20.1472,
    lng: 74.2289,
    harvestDate: 'Cured & Graded',
    verified: true,
    phone: '+91 94222 31089',
    rating: 5.0,
    transitDaysToKolkata: 2.5
  },
  {
    id: 'seller-mh-2',
    name: 'Dnyaneshwar Shinde',
    fpoOrCoop: 'Pune Krishi Vikas Sangh',
    crop: 'Tomato',
    variety: 'Abhinav Firm Hybrid',
    grade: 'Grade A',
    quantityKg: 2800,
    pricePerKg: 26,
    location: 'Narayangaon, Pune',
    state: 'Maharashtra',
    lat: 19.1234,
    lng: 73.9782,
    harvestDate: 'Long Transit Firm',
    verified: true,
    phone: '+91 98901 88410',
    rating: 4.8,
    transitDaysToKolkata: 2.2
  },

  // Karnataka
  {
    id: 'seller-ka-1',
    name: 'Basavaraj Gowda',
    fpoOrCoop: 'Kolar Tomato Growers Federation',
    crop: 'Tomato',
    variety: 'Kolar Red Heavy Density',
    grade: 'Grade A',
    quantityKg: 3800,
    pricePerKg: 27,
    location: 'Kolar APMC Mandi',
    state: 'Karnataka',
    lat: 13.1367,
    lng: 78.1292,
    harvestDate: 'Cold Chain Prepped',
    verified: true,
    phone: '+91 98450 12890',
    rating: 4.9,
    transitDaysToKolkata: 2.8
  },
  {
    id: 'seller-ka-2',
    name: 'Manjunath Swamy',
    fpoOrCoop: 'Byadagi Spices Cooperative',
    crop: 'Chilli',
    variety: 'Byadagi Deep Crimson',
    grade: 'Export Quality',
    quantityKg: 1400,
    pricePerKg: 185,
    location: 'Byadgi, Haveri',
    state: 'Karnataka',
    lat: 14.6789,
    lng: 75.4891,
    harvestDate: 'Sun Dried & Sorted',
    verified: true,
    phone: '+91 99801 34910',
    rating: 4.9,
    transitDaysToKolkata: 3.0
  },

  // Uttar Pradesh
  {
    id: 'seller-up-1',
    name: 'Ramkishore Yadav',
    fpoOrCoop: 'Agra Potato Consortium',
    crop: 'Potato',
    variety: 'Kufri Bahar Extra',
    grade: 'Grade A',
    quantityKg: 8500,
    pricePerKg: 15,
    location: 'Khandauli, Agra',
    state: 'Uttar Pradesh',
    lat: 27.2831,
    lng: 78.0725,
    harvestDate: 'Prime Cold Stored',
    verified: true,
    phone: '+91 94120 78231',
    rating: 4.8,
    transitDaysToKolkata: 1.8
  },
  {
    id: 'seller-up-2',
    name: 'Suresh Chandra Sharma',
    fpoOrCoop: 'Aligarh Grain Hub',
    crop: 'Wheat',
    variety: 'Sharbati Gold MP-UP',
    grade: 'Grade A',
    quantityKg: 9500,
    pricePerKg: 28,
    location: 'Atrauli, Aligarh',
    state: 'Uttar Pradesh',
    lat: 28.0315,
    lng: 78.2912,
    harvestDate: 'Machine Cleaned',
    verified: true,
    phone: '+91 98371 44021',
    rating: 4.7,
    transitDaysToKolkata: 2.0
  },

  // Punjab
  {
    id: 'seller-pb-1',
    name: 'Gurpreet Singh',
    fpoOrCoop: 'Malwa Progressive Farmers Society',
    crop: 'Wheat',
    variety: 'HD-3086 Premium Grade',
    grade: 'Export Quality',
    quantityKg: 12000,
    pricePerKg: 27,
    location: 'Khanna Mandi, Ludhiana',
    state: 'Punjab',
    lat: 30.7024,
    lng: 76.2198,
    harvestDate: 'Silo Stored & Certified',
    verified: true,
    phone: '+91 98140 55102',
    rating: 5.0,
    transitDaysToKolkata: 2.4
  },
  {
    id: 'seller-pb-2',
    name: 'Harbhajan Sandhu',
    fpoOrCoop: 'Doaba Organic Vegetable Trust',
    crop: 'Potato',
    variety: 'Kufri Pukhraj Seed / Table',
    grade: 'Grade A',
    quantityKg: 5200,
    pricePerKg: 16,
    location: 'Jalandhar Cantt Agro Yard',
    state: 'Punjab',
    lat: 31.2824,
    lng: 75.6124,
    harvestDate: 'Fresh Cold Stored',
    verified: true,
    phone: '+91 98722 34190',
    rating: 4.8,
    transitDaysToKolkata: 2.5
  },

  // Madhya Pradesh
  {
    id: 'seller-mp-1',
    name: 'Mukesh Patidar',
    fpoOrCoop: 'Nimar Onion & Garlic Producers Co.',
    crop: 'Onion',
    variety: 'Khandwa Pink Globe',
    grade: 'Grade A',
    quantityKg: 4200,
    pricePerKg: 23,
    location: 'Khandwa Mandi',
    state: 'Madhya Pradesh',
    lat: 21.8314,
    lng: 76.3498,
    harvestDate: 'Graded & Bagged',
    verified: true,
    phone: '+91 97520 88219',
    rating: 4.8,
    transitDaysToKolkata: 2.0
  },
  {
    id: 'seller-mp-2',
    name: 'Devendra Patel',
    fpoOrCoop: 'Malwa Sharbati Wheat Alliance',
    crop: 'Wheat',
    variety: 'Sehore Sharbati Royal',
    grade: 'Export Quality',
    quantityKg: 7800,
    pricePerKg: 32,
    location: 'Sehore Krishi Mandi',
    state: 'Madhya Pradesh',
    lat: 23.2031,
    lng: 77.0844,
    harvestDate: 'High Protein Tested',
    verified: true,
    phone: '+91 98261 44520',
    rating: 5.0,
    transitDaysToKolkata: 2.1
  },

  // Rajasthan
  {
    id: 'seller-rj-1',
    name: 'Bhawani Singh Rathore',
    fpoOrCoop: 'Bharatpur Mustard Producers Co.',
    crop: 'Mustard',
    variety: 'Black Bold Oil-Rich (42% Oil)',
    grade: 'Export Quality',
    quantityKg: 6400,
    pricePerKg: 58,
    location: 'Kumher Mandi, Bharatpur',
    state: 'Rajasthan',
    lat: 27.3184,
    lng: 77.3752,
    harvestDate: 'High Oil Test Passed',
    verified: true,
    phone: '+91 94140 19820',
    rating: 4.9,
    transitDaysToKolkata: 2.0
  },
  {
    id: 'seller-rj-2',
    name: 'Kailash Choudhary',
    fpoOrCoop: 'Jaipur Organic Horticulture FPO',
    crop: 'Tomato',
    variety: 'Rani Hybrid High Yield',
    grade: 'Grade A',
    quantityKg: 2200,
    pricePerKg: 28,
    location: 'Muhana Mandi, Jaipur',
    state: 'Rajasthan',
    lat: 26.7932,
    lng: 75.7681,
    harvestDate: 'Polyhouse Picked',
    verified: true,
    phone: '+91 98290 66120',
    rating: 4.7,
    transitDaysToKolkata: 2.3
  },

  // Andhra Pradesh & Telangana
  {
    id: 'seller-ap-1',
    name: 'K. Venkata Rao',
    fpoOrCoop: 'Guntur Mirchi Yard Growers FPO',
    crop: 'Chilli',
    variety: 'Guntur Teja S17 Fiery',
    grade: 'Export Quality',
    quantityKg: 3200,
    pricePerKg: 195,
    location: 'Guntur Mirchi Yard',
    state: 'Andhra Pradesh',
    lat: 16.3067,
    lng: 80.4365,
    harvestDate: 'Laboratory Tested & Graded',
    verified: true,
    phone: '+91 98481 22910',
    rating: 5.0,
    transitDaysToKolkata: 2.0
  },
  {
    id: 'seller-ap-2',
    name: 'T. Narsimha Reddy',
    fpoOrCoop: 'Rayalaseema Tomato Consortium',
    crop: 'Tomato',
    variety: 'Madanapalle Red Firm',
    grade: 'Grade A',
    quantityKg: 4600,
    pricePerKg: 25,
    location: 'Madanapalle Market, Chittoor',
    state: 'Andhra Pradesh',
    lat: 13.5562,
    lng: 78.5029,
    harvestDate: 'Asia Largest Tomato Belt',
    verified: true,
    phone: '+91 98492 33810',
    rating: 4.9,
    transitDaysToKolkata: 2.7
  },

  // Himachal Pradesh & J&K
  {
    id: 'seller-hp-1',
    name: 'Chander Mohan Thakur',
    fpoOrCoop: 'Shimla Valley Apple Growers Union',
    crop: 'Apple',
    variety: 'Royal Delicious Mountain Fresh',
    grade: 'Export Quality',
    quantityKg: 2500,
    pricePerKg: 92,
    location: 'Kotkhai, Shimla',
    state: 'Himachal Pradesh',
    lat: 31.1215,
    lng: 77.5312,
    harvestDate: 'Tree Ripe Hand Picked',
    verified: true,
    phone: '+91 94180 55190',
    rating: 5.0,
    transitDaysToKolkata: 2.9
  },

  // Bihar
  {
    id: 'seller-br-1',
    name: 'Sanjay Kumar Singh',
    fpoOrCoop: 'Vaishali Agro Producer Co.',
    crop: 'Potato',
    variety: 'Red Kanchan Table Top',
    grade: 'Grade A',
    quantityKg: 3900,
    pricePerKg: 16,
    location: 'Hajipur, Vaishali',
    state: 'Bihar',
    lat: 25.6854,
    lng: 85.2146,
    harvestDate: 'Direct Field Packed',
    verified: true,
    phone: '+91 94312 88410',
    rating: 4.7,
    transitDaysToKolkata: 1.0
  },
  {
    id: 'seller-br-2',
    name: 'Manoj Mandal',
    fpoOrCoop: 'Kosi Seemanchal Grain Hub',
    crop: 'Rice',
    variety: 'Katarni Bhagalpur Fragrant',
    grade: 'Grade A',
    quantityKg: 4200,
    pricePerKg: 54,
    location: 'Katihar Mandi',
    state: 'Bihar',
    lat: 25.5412,
    lng: 87.5714,
    harvestDate: 'GI Tagged Fresh Lot',
    verified: true,
    phone: '+91 98351 22901',
    rating: 4.8,
    transitDaysToKolkata: 0.8
  },

  // Gujarat
  {
    id: 'seller-gj-1',
    name: 'Pravinbhai Patel',
    fpoOrCoop: 'Saurashtra Onion & Garlic Guild',
    crop: 'Onion',
    variety: 'Mahuva White Onion',
    grade: 'Export Quality',
    quantityKg: 5500,
    pricePerKg: 25,
    location: 'Mahuva APMC, Bhavnagar',
    state: 'Gujarat',
    lat: 21.0914,
    lng: 71.7612,
    harvestDate: 'Dehydration & Export Spec',
    verified: true,
    phone: '+91 98251 99014',
    rating: 4.9,
    transitDaysToKolkata: 2.8
  },
  {
    id: 'seller-gj-2',
    name: 'Ashokbhai Desai',
    fpoOrCoop: 'Deesa Potato Super Cluster',
    crop: 'Potato',
    variety: 'Lady Rosetta (Processing / Crisp)',
    grade: 'Export Quality',
    quantityKg: 7200,
    pricePerKg: 19,
    location: 'Deesa APMC, Banaskantha',
    state: 'Gujarat',
    lat: 24.2584,
    lng: 72.1812,
    harvestDate: 'Dry Matter > 21% Tested',
    verified: true,
    phone: '+91 98790 44102',
    rating: 5.0,
    transitDaysToKolkata: 2.6
  }
];

// Helper to extract state and coordinates from location string
export const extractCoordinatesAndState = (locStr: string): { lat: number; lng: number; state: string } => {
  const lower = (locStr || '').toLowerCase();
  
  if (lower.includes('singur') || lower.includes('hooghly')) {
    return { lat: 22.8123, lng: 88.2325, state: 'West Bengal' };
  }
  if (lower.includes('shaktigarh') || lower.includes('bardhaman') || lower.includes('burdwan')) {
    return { lat: 23.2324, lng: 87.8615, state: 'West Bengal' };
  }
  if (lower.includes('ranaghat') || lower.includes('nadia')) {
    return { lat: 23.1812, lng: 88.5812, state: 'West Bengal' };
  }
  if (lower.includes('tarakeswar')) {
    return { lat: 22.8884, lng: 88.0215, state: 'West Bengal' };
  }
  if (lower.includes('barasat') || lower.includes('24 parganas')) {
    return { lat: 22.7225, lng: 88.4812, state: 'West Bengal' };
  }
  if (lower.includes('nashik') || lower.includes('maharashtra') || lower.includes('pune')) {
    return { lat: 20.1472, lng: 74.2289, state: 'Maharashtra' };
  }
  if (lower.includes('kolar') || lower.includes('karnataka')) {
    return { lat: 13.1367, lng: 78.1292, state: 'Karnataka' };
  }
  if (lower.includes('agra') || lower.includes('uttar pradesh')) {
    return { lat: 27.2831, lng: 78.0725, state: 'Uttar Pradesh' };
  }
  if (lower.includes('ludhiana') || lower.includes('punjab')) {
    return { lat: 30.7024, lng: 76.2198, state: 'Punjab' };
  }
  if (lower.includes('guntur') || lower.includes('andhra')) {
    return { lat: 16.3067, lng: 80.4365, state: 'Andhra Pradesh' };
  }

  // Default coordinate jitter inside Bengal cluster for realism
  const jitterLat = 22.7 + (Math.random() * 0.4 - 0.2);
  const jitterLng = 88.2 + (Math.random() * 0.4 - 0.2);
  return { lat: parseFloat(jitterLat.toFixed(4)), lng: parseFloat(jitterLng.toFixed(4)), state: 'West Bengal' };
};

// Returns live dynamic combined list of base pan-India sellers + user-listed produce items
export const getLivePanIndiaSellers = (userProduceItems: any[] = []): PanIndiaSeller[] => {
  const dynamicFromProduce: PanIndiaSeller[] = userProduceItems.map(p => {
    const geo = extractCoordinatesAndState(p.farmerLocation);
    return {
      id: `live-${p.id}`,
      name: p.farmerName || 'Verified Local Farmer',
      fpoOrCoop: p.variety ? `${p.variety} Direct Harvest` : 'Farm2Flow Direct Grower',
      crop: p.cropName,
      variety: p.variety || 'Farm Fresh',
      grade: p.grade || 'Grade A',
      quantityKg: p.quantityKg,
      pricePerKg: p.expectedPricePerKg,
      location: p.farmerLocation || 'Local Farm Cluster, WB',
      state: geo.state,
      lat: geo.lat,
      lng: geo.lng,
      harvestDate: p.harvestDate || 'Just Listed',
      verified: p.fpoVerified ?? true,
      phone: '+91 98310 44210',
      rating: 5.0,
      transitDaysToKolkata: geo.state === 'West Bengal' ? 0.3 : 2.0,
      isUserListed: true
    };
  });

  // Deduplicate by ID and put newest live listings at the top
  return [...dynamicFromProduce, ...PAN_INDIA_SELLERS];
};
