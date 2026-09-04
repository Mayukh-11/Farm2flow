import { User, Produce, DemandForecast, ImpactMetrics, LogisticsOptimization, Order } from '../../shared/types';

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
