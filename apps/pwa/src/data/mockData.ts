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
    farmerName: 'Farmer A (Ramesh Ghosh)',
    farmerLocation: 'Hooghly (32 km)',
    cropName: 'Tomato',
    variety: 'Hybrid Red',
    grade: 'Grade A',
    quantityKg: 800,
    expectedPricePerKg: 30,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-04',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-002',
    farmerId: 'f-102',
    farmerName: 'Farmer B (Suhas Biswas)',
    farmerLocation: 'Barasat (24 km)',
    cropName: 'Tomato',
    variety: 'Roma Organic',
    grade: 'Grade A',
    quantityKg: 500,
    expectedPricePerKg: 29,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-04',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-003',
    farmerId: 'f-103',
    farmerName: 'FPO C (Hooghly Agri Collective)',
    farmerLocation: 'Singur (18 km)',
    cropName: 'Tomato',
    variety: 'Desi Hybrid',
    grade: 'Grade A',
    quantityKg: 400,
    expectedPricePerKg: 28,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-03',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-004',
    farmerId: 'f-104',
    farmerName: 'Farmer D (Bimal Halder)',
    farmerLocation: 'Tarakeswar (45 km)',
    cropName: 'Tomato',
    variety: 'Red Globe',
    grade: 'Grade A',
    quantityKg: 300,
    expectedPricePerKg: 31,
    marketSuggestedPriceMin: 28,
    marketSuggestedPriceMax: 32,
    harvestDate: '2026-09-05',
    demandStatus: 'High',
    demandForecastPct: 18,
    status: 'Available',
    fpoVerified: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'prod-005',
    farmerId: 'f-101',
    farmerName: 'Ramesh Ghosh',
    farmerLocation: 'Hooghly (32 km)',
    cropName: 'Potato',
    variety: 'Jyoti',
    grade: 'Grade A',
    quantityKg: 1200,
    expectedPricePerKg: 18,
    marketSuggestedPriceMin: 16,
    marketSuggestedPriceMax: 20,
    harvestDate: '2026-09-02',
    demandStatus: 'Steady',
    demandForecastPct: 5,
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
