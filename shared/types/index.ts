export interface User {
  id: string;
  name: string;
  role: 'farmer' | 'fpo' | 'buyer' | 'admin' | 'consumer';
  location: string;
  phone: string;
  verified: boolean;
  avatarUrl?: string;
  fpoName?: string;
}

export interface Produce {
  id: string;
  farmerId: string;
  farmerName: string;
  farmerLocation: string;
  cropName: string;
  variety: string;
  grade: 'Grade A' | 'Grade B' | 'Standard';
  quantityKg: number;
  expectedPricePerKg: number;
  marketSuggestedPriceMin: number;
  marketSuggestedPriceMax: number;
  harvestDate: string;
  demandStatus: 'High' | 'Moderate' | 'Steady';
  demandForecastPct: number;
  status: 'Available' | 'Reserved' | 'Sold';
  fpoVerified: boolean;
  createdAt: string;
}

export interface BuyerRequirement {
  id: string;
  buyerId: string;
  buyerName: string;
  cropName: string;
  grade: string;
  requiredQuantityKg: number;
  maxBudgetPerKg: number;
  destinationLocation: string;
  urgency: 'Immediate' | 'Within 3 Days' | 'Standard';
}

export interface SupplierMatch {
  produceId: string;
  farmerName: string;
  farmerLocation: string;
  availableKg: number;
  matchedKg: number;
  grade: string;
  pricePerKg: number;
  distanceKm: number;
  matchPercentage: number;
  verified: boolean;
}

export interface SmartMatchResult {
  requirementId: string;
  cropName: string;
  requestedKg: number;
  fulfilledKg: number;
  overallMatchPct: number;
  suppliers: SupplierMatch[];
  estimatedTotalCost: number;
  savingsVsMiddlemenPct: number;
}

export interface OrderItem {
  produceId: string;
  farmerName: string;
  cropName: string;
  quantityKg: number;
  pricePerKg: number;
  subtotal: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  buyerId: string;
  buyerName: string;
  destination: string;
  items: OrderItem[];
  totalQuantityKg: number;
  totalAmount: number;
  savingsRealized: number;
  status: 'Confirmed' | 'Produce Reserved' | 'Pickup Scheduled' | 'In Transit' | 'Delivered' | 'Completed';
  expectedDelivery: string;
  createdAt: string;
  routeId: string;
}

export interface DemandForecast {
  cropName: string;
  currentDemandTonnes: number;
  forecastDemandTonnes: number;
  percentageChange: number;
  confidencePct: number;
  mandiLocation: string;
  recommendation: string;
  trend: 'up' | 'down' | 'stable';
}

export interface PriceEstimate {
  cropName: string;
  location: string;
  currentMin: number;
  currentMax: number;
  suggestedMin: number;
  suggestedMax: number;
  historicalAvg: number;
  confidence: number;
}

export interface RouteStop {
  id: string;
  name: string;
  type: 'Farmer' | 'Collection Hub' | 'Buyer Mandi';
  location: string;
  cargoKg: number;
  estimatedArrival: string;
  coordinates: { lat: number; lng: number };
}

export interface LogisticsOptimization {
  orderId: string;
  before: {
    distanceKm: number;
    estimatedCostRs: number;
    vehiclesCount: number;
    travelTimeHours: number;
  };
  optimized: {
    distanceKm: number;
    estimatedCostRs: number;
    vehiclesCount: number;
    travelTimeHours: number;
  };
  savingsRs: number;
  savingsPct: number;
  stops: RouteStop[];
}

export interface ImpactMetrics {
  farmersConnected: number;
  produceTradedTonnes: number;
  totalOrders: number;
  farmerRealizationPct: number;
  logisticsSavingsPct: number;
  middlemenEliminated: number;
}
