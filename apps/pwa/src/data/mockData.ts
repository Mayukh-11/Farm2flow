import { User, Produce, DemandForecast, ImpactMetrics, LogisticsOptimization, Order } from '@/types';

export const mockFarmers: User[] = [
  {
    id: 'f-101',
    name: 'Ramesh Ghosh',
    role: 'farmer',
    location: 'Hooghly, West Bengal',
    phone: '+91 98310 44210',
    verified: true,
    fpoName: 'Hooghly Agri Producers Cooperative',
    avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'f-102',
    name: 'Suhas Biswas',
    role: 'farmer',
    location: 'Barasat, North 24 Parganas',
    phone: '+91 98311 88320',
    verified: true,
    fpoName: 'Barasat Farmers Collective'
  },
  {
    id: 'f-103',
    name: 'Hooghly FPO Hub',
    role: 'farmer',
    location: 'Singur, Hooghly',
    phone: '+91 98312 99430',
    verified: true,
    fpoName: 'NABARD Hooghly FPO'
  },
  {
    id: 'f-104',
    name: 'Bimal Halder',
    role: 'farmer',
    location: 'Tarakeswar, Hooghly',
    phone: '+91 98313 11540',
    verified: true
  }
];

export const mockBuyers: User[] = [
  {
    id: 'b-201',
    name: 'Kolkata Wholesale Mandi',
    role: 'buyer',
    location: 'Posta, Kolkata',
    phone: '+91 98300 12345',
    verified: true
  },
  {
    id: 'b-202',
    name: 'FreshRetail Hypermarkets',
    role: 'buyer',
    location: 'New Town, Kolkata',
    phone: '+91 98301 54321',
    verified: true
  }
];

export const initialProduceList: Produce[] = [
  {
    id: 'prod-001',
    farmerId: 'f-101',
    farmerName: 'Ramesh Ghosh',
    farmerLocation: 'Hooghly (Singur)',
    cropName: 'Tomato',
    variety: 'Hybrid Red Flavour',
    grade: 'Grade A',
    quantityKg: 800,
    expectedPricePerKg: 30,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-10',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-002',
    farmerId: 'f-102',
    farmerName: 'Suhas Biswas',
    farmerLocation: 'Barasat (24 km)',
    cropName: 'Tomato',
    variety: 'Roma Organic',
    grade: 'Grade A',
    quantityKg: 500,
    expectedPricePerKg: 29,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-10',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-003',
    farmerId: 'f-103',
    farmerName: 'Subhash Mondal',
    farmerLocation: 'Burdwan (Shaktigarh)',
    cropName: 'Rice',
    variety: 'Gobindobhog Aromatic',
    grade: 'Export Quality',
    quantityKg: 3500,
    expectedPricePerKg: 78,
    marketSuggestedPriceMin: 72,
    marketSuggestedPriceMax: 84,
    harvestDate: '2026-09-08',
    demandStatus: 'High',
    demandForecastPct: 22,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-004',
    farmerId: 'f-104',
    farmerName: 'Bimal Halder',
    farmerLocation: 'Tarakeswar, Hooghly',
    cropName: 'Potato',
    variety: 'Jyoti Golden Super',
    grade: 'Grade A',
    quantityKg: 4500,
    expectedPricePerKg: 17,
    marketSuggestedPriceMin: 15,
    marketSuggestedPriceMax: 19,
    harvestDate: '2026-09-09',
    demandStatus: 'Steady',
    demandForecastPct: 8,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-005',
    farmerId: 'f-105',
    farmerName: 'Animesh Biswas',
    farmerLocation: 'Nadia (Ranaghat)',
    cropName: 'Chilli',
    variety: 'Bullet Green Spicy',
    grade: 'Grade A',
    quantityKg: 650,
    expectedPricePerKg: 46,
    marketSuggestedPriceMin: 42,
    marketSuggestedPriceMax: 50,
    harvestDate: '2026-09-10',
    demandStatus: 'High',
    demandForecastPct: 25,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-006',
    farmerId: 'f-106',
    farmerName: 'Vasantrao Patil',
    farmerLocation: 'Lasalgaon Mandi, Nashik',
    cropName: 'Onion',
    variety: 'Nashik Red Premium',
    grade: 'Grade A',
    quantityKg: 6000,
    expectedPricePerKg: 24,
    marketSuggestedPriceMin: 22,
    marketSuggestedPriceMax: 26,
    harvestDate: '2026-09-08',
    demandStatus: 'High',
    demandForecastPct: 20,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-007',
    farmerId: 'f-107',
    farmerName: 'Gurpreet Singh',
    farmerLocation: 'Khanna Mandi, Ludhiana',
    cropName: 'Wheat',
    variety: 'HD-3086 Premium Grade',
    grade: 'Export Quality',
    quantityKg: 12000,
    expectedPricePerKg: 27,
    marketSuggestedPriceMin: 25,
    marketSuggestedPriceMax: 30,
    harvestDate: '2026-09-07',
    demandStatus: 'Steady',
    demandForecastPct: 10,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-008',
    farmerId: 'f-108',
    farmerName: 'K. Venkata Rao',
    farmerLocation: 'Guntur Mirchi Yard, AP',
    cropName: 'Chilli',
    variety: 'Guntur Teja S17 Fiery',
    grade: 'Export Quality',
    quantityKg: 3200,
    expectedPricePerKg: 195,
    marketSuggestedPriceMin: 185,
    marketSuggestedPriceMax: 210,
    harvestDate: '2026-09-09',
    demandStatus: 'High',
    demandForecastPct: 30,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-009',
    farmerId: 'f-109',
    farmerName: 'Bhawani Singh Rathore',
    farmerLocation: 'Kumher Mandi, Bharatpur, RJ',
    cropName: 'Mustard',
    variety: 'Black Bold Oil-Rich (42%)',
    grade: 'Export Quality',
    quantityKg: 6400,
    expectedPricePerKg: 58,
    marketSuggestedPriceMin: 54,
    marketSuggestedPriceMax: 62,
    harvestDate: '2026-09-08',
    demandStatus: 'Steady',
    demandForecastPct: 12,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-010',
    farmerId: 'f-110',
    farmerName: 'Chander Mohan Thakur',
    farmerLocation: 'Kotkhai, Shimla, HP',
    cropName: 'Apple',
    variety: 'Royal Delicious Mountain Fresh',
    grade: 'Export Quality',
    quantityKg: 2500,
    expectedPricePerKg: 92,
    marketSuggestedPriceMin: 85,
    marketSuggestedPriceMax: 105,
    harvestDate: '2026-09-09',
    demandStatus: 'High',
    demandForecastPct: 24,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-011',
    farmerId: 'f-111',
    farmerName: 'Prabhat Mondal',
    farmerLocation: 'Bongaon, North 24 Parganas',
    cropName: 'Cauliflower',
    variety: 'Snowball White Compact',
    grade: 'Grade A',
    quantityKg: 1400,
    expectedPricePerKg: 22,
    marketSuggestedPriceMin: 20,
    marketSuggestedPriceMax: 25,
    harvestDate: '2026-09-10',
    demandStatus: 'High',
    demandForecastPct: 15,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-012',
    farmerId: 'f-112',
    farmerName: 'Harish Patel',
    farmerLocation: 'Anand Horticulture Hub, Gujarat',
    cropName: 'Cabbage',
    variety: 'Green Globe Crisp',
    grade: 'Grade A',
    quantityKg: 2800,
    expectedPricePerKg: 14,
    marketSuggestedPriceMin: 12,
    marketSuggestedPriceMax: 16,
    harvestDate: '2026-09-09',
    demandStatus: 'Steady',
    demandForecastPct: 8,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-013',
    farmerId: 'f-113',
    farmerName: 'Manjunath Gowda',
    farmerLocation: 'Kolar Agro Belt, Karnataka',
    cropName: 'Carrot',
    variety: 'Kuroda Sweet Orange',
    grade: 'Grade A',
    quantityKg: 1800,
    expectedPricePerKg: 32,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 35,
    harvestDate: '2026-09-10',
    demandStatus: 'High',
    demandForecastPct: 17,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-014',
    farmerId: 'f-114',
    farmerName: 'Debabrata Das',
    farmerLocation: 'Baruipur, South 24 Parganas',
    cropName: 'Brinjal',
    variety: 'Muktakeshi Purple Gloss',
    grade: 'Grade A',
    quantityKg: 900,
    expectedPricePerKg: 26,
    marketSuggestedPriceMin: 24,
    marketSuggestedPriceMax: 30,
    harvestDate: '2026-09-10',
    demandStatus: 'Steady',
    demandForecastPct: 11,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-015',
    farmerId: 'f-115',
    farmerName: 'Manoj Mandal',
    farmerLocation: 'Katihar Mandi, Bihar',
    cropName: 'Rice',
    variety: 'Katarni Bhagalpur Fragrant',
    grade: 'Grade A',
    quantityKg: 4200,
    expectedPricePerKg: 54,
    marketSuggestedPriceMin: 50,
    marketSuggestedPriceMax: 60,
    harvestDate: '2026-09-08',
    demandStatus: 'High',
    demandForecastPct: 19,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  }
];

export const mockForecasts: Record<string, DemandForecast> = {
  Tomato: {
    cropName: 'Tomato',
    currentDemandTonnes: 21.8,
    forecastDemandTonnes: 26.4,
    percentageChange: 21,
    confidencePct: 87,
    mandiLocation: 'Kolkata Wholesale Mandi',
    recommendation: 'Tomato demand may increase next week. Consider increasing tomato supply to capture higher payout.',
    trend: 'up'
  },
  Potato: {
    cropName: 'Potato',
    currentDemandTonnes: 45.0,
    forecastDemandTonnes: 47.2,
    percentageChange: 5,
    confidencePct: 92,
    mandiLocation: 'Howrah Terminal Mandi',
    recommendation: 'Stable demand expected. Maintain regular supply intervals.',
    trend: 'stable'
  },
  Onion: {
    cropName: 'Onion',
    currentDemandTonnes: 34.2,
    forecastDemandTonnes: 39.5,
    percentageChange: 15,
    confidencePct: 84,
    mandiLocation: 'Kolkata Wholesale Mandi',
    recommendation: 'Upcoming festival demand driving onion requirements up.',
    trend: 'up'
  }
};

export const mockLogisticsData: LogisticsOptimization = {
  orderId: 'ORD-FF2048',
  before: {
    distanceKm: 184,
    estimatedCostRs: 18400,
    vehiclesCount: 6,
    travelTimeHours: 6.5
  },
  optimized: {
    distanceKm: 132,
    estimatedCostRs: 13750,
    vehiclesCount: 4,
    travelTimeHours: 4.2
  },
  savingsRs: 4650,
  savingsPct: 25.2,
  stops: [
    {
      id: 'stop-1',
      name: 'Farmer A (Ramesh) - Farm Gate',
      type: 'Farmer',
      location: 'Hooghly Lot #4',
      cargoKg: 800,
      estimatedArrival: '07:30 AM',
      coordinates: { lat: 22.9031, lng: 88.3888 }
    },
    {
      id: 'stop-2',
      name: 'Farmer B (Suhas) - Pickup Point',
      type: 'Farmer',
      location: 'Barasat Hub',
      cargoKg: 500,
      estimatedArrival: '08:45 AM',
      coordinates: { lat: 22.7226, lng: 88.4804 }
    },
    {
      id: 'stop-3',
      name: 'FPO C & Farmer D Pooling Point',
      type: 'Collection Hub',
      location: 'Singur Aggregation Hub',
      cargoKg: 700,
      estimatedArrival: '10:15 AM',
      coordinates: { lat: 22.8123, lng: 88.2312 }
    },
    {
      id: 'stop-4',
      name: 'Kolkata Central Wholesale Buyer',
      type: 'Buyer Mandi',
      location: 'Posta Mandi, Kolkata',
      cargoKg: 2000,
      estimatedArrival: '01:30 PM',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    }
  ]
};

export const initialOrders: Order[] = [
  {
    id: 'ord-1',
    orderNumber: 'FF-2048',
    buyerId: 'b-201',
    buyerName: 'Kolkata Wholesale Mandi',
    destination: 'Posta Mandi, Kolkata',
    items: [
      { produceId: 'prod-001', farmerName: 'Farmer A (Ramesh Ghosh)', cropName: 'Tomato (Grade A)', quantityKg: 800, pricePerKg: 30, subtotal: 24000 },
      { produceId: 'prod-002', farmerName: 'Farmer B (Suhas Biswas)', cropName: 'Tomato (Grade A)', quantityKg: 500, pricePerKg: 29, subtotal: 14500 },
      { produceId: 'prod-003', farmerName: 'FPO C (Hooghly Collective)', cropName: 'Tomato (Grade A)', quantityKg: 400, pricePerKg: 28, subtotal: 11200 },
      { produceId: 'prod-004', farmerName: 'Farmer D (Bimal Halder)', cropName: 'Tomato (Grade A)', quantityKg: 300, pricePerKg: 31, subtotal: 9300 }
    ],
    totalQuantityKg: 2000,
    totalAmount: 59000,
    savingsRealized: 11800,
    status: 'In Transit',
    expectedDelivery: 'Tomorrow, 2:30 PM',
    createdAt: '2026-09-03T10:00:00Z',
    routeId: 'route-opt-101'
  }
];

export const mockImpactMetrics: ImpactMetrics = {
  farmersConnected: 1248,
  produceTradedTonnes: 482,
  totalOrders: 3842,
  farmerRealizationPct: 17,
  logisticsSavingsPct: 23,
  middlemenEliminated: 4
};
