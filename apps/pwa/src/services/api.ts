import { mockForecasts, initialProduceList, mockLogisticsData, mockImpactMetrics, initialOrders } from '@/data/mockData';
import { DemandForecast, PriceEstimate, Produce, SmartMatchResult, LogisticsOptimization, Order } from '@/types';

// Browser storage fallback for PWA offline execution
const STORAGE_KEYS = {
  PRODUCE: 'farm2flow_produce_items',
  ORDERS: 'farm2flow_orders',
  PENDING_SYNC: 'farm2flow_pending_sync'
};

export const getStoredProduce = (): Produce[] => {
  if (typeof window === 'undefined') return initialProduceList;
  const stored = localStorage.getItem(STORAGE_KEYS.PRODUCE);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(initialProduceList));
    return initialProduceList;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return initialProduceList;
  }
};

export const saveProduce = (newProduce: Omit<Produce, 'id' | 'createdAt'>): Produce => {
  const current = getStoredProduce();
  const created: Produce = {
    ...newProduce,
    id: `prod-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString()
  };
  const updated = [created, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updated));
    // Broadcast real-time event across tabs/components
    window.dispatchEvent(new CustomEvent('farm2flow_produce_updated', { detail: { newProduce: created, produceList: updated } }));
    // If offline, flag for sync
    if (!navigator.onLine) {
      const syncQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) || '[]');
      syncQueue.push({ type: 'CREATE_PRODUCE', payload: created, timestamp: Date.now() });
      localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, JSON.stringify(syncQueue));
    }
  }
  return created;
};

export const deleteProduce = (produceId: string): Produce[] => {
  const current = getStoredProduce();
  const updated = current.filter(p => p.id !== produceId);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updated));
    // Broadcast real-time event across tabs/components
    window.dispatchEvent(new CustomEvent('farm2flow_produce_updated', { detail: { deletedProduceId: produceId, produceList: updated } }));
    // If offline, flag for sync
    if (!navigator.onLine) {
      const syncQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) || '[]');
      syncQueue.push({ type: 'DELETE_PRODUCE', payload: { id: produceId }, timestamp: Date.now() });
      localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, JSON.stringify(syncQueue));
    }
  }
  return updated;
};

export const getDemandForecast = (cropName: string): DemandForecast => {
  return mockForecasts[cropName] || {
    cropName,
    currentDemandTonnes: 15.0,
    forecastDemandTonnes: 18.2,
    percentageChange: 18,
    confidencePct: 85,
    mandiLocation: 'Regional Central Mandi',
    recommendation: `${cropName} shows strong demand signals in nearby markets.`,
    trend: 'up'
  };
};

export const getPriceEstimate = (cropName: string, location: string = 'Hooghly'): PriceEstimate => {
  const isTomato = cropName.toLowerCase().includes('tomato');
  const isPotato = cropName.toLowerCase().includes('potato');

  if (isTomato) {
    return {
      cropName: 'Tomato',
      location,
      currentMin: 24,
      currentMax: 26,
      suggestedMin: 28,
      suggestedMax: 32,
      historicalAvg: 22,
      confidence: 89
    };
  } else if (isPotato) {
    return {
      cropName: 'Potato',
      location,
      currentMin: 15,
      currentMax: 17,
      suggestedMin: 18,
      suggestedMax: 21,
      historicalAvg: 14,
      confidence: 93
    };
  }

  return {
    cropName,
    location,
    currentMin: 30,
    currentMax: 34,
    suggestedMin: 36,
    suggestedMax: 40,
    historicalAvg: 28,
    confidence: 82
  };
};

export const findSmartMatches = (cropName: string, requiredKg: number): SmartMatchResult => {
  const availableList = getStoredProduce().filter(
    p => p.cropName.toLowerCase() === cropName.toLowerCase() && p.status === 'Available'
  );

  let fulfilled = 0;
  const suppliersMatched = [];

  for (const item of availableList) {
    if (fulfilled >= requiredKg) break;
    const needed = requiredKg - fulfilled;
    const takenKg = Math.min(item.quantityKg, needed);
    fulfilled += takenKg;

    suppliersMatched.push({
      produceId: item.id,
      farmerName: item.farmerName,
      farmerLocation: item.farmerLocation,
      availableKg: item.quantityKg,
      matchedKg: takenKg,
      grade: item.grade,
      pricePerKg: item.expectedPricePerKg,
      distanceKm: item.farmerLocation.includes('Singur') ? 18 : item.farmerLocation.includes('Barasat') ? 24 : item.farmerLocation.includes('Hooghly') ? 32 : 45,
      matchPercentage: item.fpoVerified ? 96 : 89,
      verified: item.fpoVerified
    });
  }

  const totalCost = suppliersMatched.reduce((acc, s) => acc + s.matchedKg * s.pricePerKg, 0);

  return {
    requirementId: `req-${Date.now()}`,
    cropName,
    requestedKg: requiredKg,
    fulfilledKg: fulfilled,
    overallMatchPct: suppliersMatched.length > 0 ? 94 : 0,
    suppliers: suppliersMatched,
    estimatedTotalCost: totalCost,
    savingsVsMiddlemenPct: 18
  };
};

export const createOrderFromMatch = (
  matchResult: SmartMatchResult, 
  buyerName: string = 'Kolkata Wholesale Mandi',
  paymentMethod: 'Cash on Delivery' | 'Card Payment' | 'Online (UPI/QR)' = 'Cash on Delivery',
  destination: string = 'Salt Lake, Kolkata'
): Order => {
  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
    buyerId: 'b-201',
    buyerName,
    destination,
    items: matchResult.suppliers.map(s => ({
      produceId: s.produceId,
      farmerName: s.farmerName,
      cropName: `${matchResult.cropName} (${s.grade})`,
      quantityKg: s.matchedKg,
      pricePerKg: s.pricePerKg,
      subtotal: s.matchedKg * s.pricePerKg
    })),
    totalQuantityKg: matchResult.fulfilledKg,
    totalAmount: matchResult.estimatedTotalCost,
    savingsRealized: Math.round(matchResult.estimatedTotalCost * 0.18),
    status: 'Confirmed',
    expectedDelivery: 'Tomorrow, 2:30 PM',
    createdAt: new Date().toISOString(),
    routeId: 'route-opt-101',
    paymentMethod,
    paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending Cash on Delivery' : 'Paid'
  };

  if (typeof window !== 'undefined') {
    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || JSON.stringify(initialOrders));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify([newOrder, ...existingOrders]));
  }

  return newOrder;
};

export const getOrders = (): Order[] => {
  if (typeof window === 'undefined') return initialOrders;
  const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (!stored) return initialOrders;
  try {
    return JSON.parse(stored);
  } catch {
    return initialOrders;
  }
};

export const getLogisticsOptimization = (): LogisticsOptimization => {
  return mockLogisticsData;
};

export const getImpactMetrics = () => {
  return mockImpactMetrics;
};
