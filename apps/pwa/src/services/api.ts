import { mockForecasts, initialProduceList, mockLogisticsData, mockImpactMetrics, initialOrders } from '@/data/mockData';
import { DemandForecast, PriceEstimate, Produce, SmartMatchResult, LogisticsOptimization, Order, CartItem } from '@/types';

// Browser storage fallback for PWA offline execution
const STORAGE_KEYS = {
  PRODUCE: 'farm2flow_produce_items',
  ORDERS: 'farm2flow_orders',
  PENDING_SYNC: 'farm2flow_pending_sync',
  REGISTERED_USERS: 'farm2flow_registered_users_db',
  CART: 'farm2flow_consumer_cart'
};

export interface RegisteredAccount {
  id: string;
  name: string;
  address: string;
  location: string;
  dob: string;
  phone: string;
  role: 'farmer' | 'buyer';
  email?: string;
  password?: string;
  enamId?: string;
  isEnamVerified?: boolean;
  createdAt: string;
}

export const getRegisteredAccounts = (): RegisteredAccount[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const syncRegisteredAccountsFromBackend = async (): Promise<RegisteredAccount[]> => {
  if (typeof window === 'undefined') return [];
  try {
    const res = await fetch('http://localhost:8000/api/users', { cache: 'no-store' });
    if (res.ok) {
      const serverUsers = await res.json();
      if (Array.isArray(serverUsers) && serverUsers.length > 0) {
        const localAccounts = getRegisteredAccounts();
        const mergedMap = new Map<string, RegisteredAccount>();
        localAccounts.forEach(u => mergedMap.set(u.phone, u));
        serverUsers.forEach((u: any) => {
          const existing = localAccounts.find(l => l.phone === u.phone);
          mergedMap.set(u.phone, {
            id: u.id,
            name: u.name,
            address: u.address,
            location: u.location || (u.address.includes(',') ? u.address.split(',').slice(-2, -1)[0].trim() : u.address),
            dob: u.dob || '1995-01-01',
            phone: u.phone,
            role: u.role || 'buyer',
            email: u.email,
            enamId: u.enam_id || existing?.enamId,
            isEnamVerified: u.is_enam_verified !== undefined ? Boolean(u.is_enam_verified) : (existing?.isEnamVerified || Boolean(u.enam_id)),
            createdAt: u.created_at || new Date().toISOString()
          });
        });
        const mergedList = Array.from(mergedMap.values());
        localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(mergedList));
        window.dispatchEvent(new CustomEvent('farm2flow_accounts_updated', { detail: { allAccounts: mergedList } }));
        return mergedList;
      }
    }
  } catch {}
  return getRegisteredAccounts();
};

export const registerNewAccount = async (account: {
  name: string;
  address: string;
  dob: string;
  phone: string;
  role: 'farmer' | 'buyer';
  email?: string;
  password: string;
  enamId?: string;
  isEnamVerified?: boolean;
}): Promise<RegisteredAccount> => {
  const isEnam = Boolean(account.enamId && account.enamId.trim().length > 0);
  const newAccount: RegisteredAccount = {
    ...account,
    id: `usr-${Date.now().toString().slice(-5)}`,
    location: account.address.includes(',') ? account.address.split(',').slice(-2, -1)[0].trim() : account.address,
    enamId: account.enamId?.trim() || undefined,
    isEnamVerified: account.isEnamVerified !== undefined ? account.isEnamVerified : isEnam,
    createdAt: new Date().toISOString()
  };

  // 1. Save in local browser storage
  if (typeof window !== 'undefined') {
    const existing = getRegisteredAccounts();
    const updated = [newAccount, ...existing.filter(u => u.phone !== account.phone && (!account.email || u.email !== account.email))];
    localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('farm2flow_accounts_updated', { detail: { newAccount, allAccounts: updated } }));
  }

  // 2. Sync in background with backend API server if available
  try {
    fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAccount)
    }).catch(() => {});
  } catch {}

  return newAccount;
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

export const PLATFORM_CONVENIENCE_FEE_PER_KG = 3;

export const createOrderFromMatch = (
  matchResult: SmartMatchResult, 
  buyerName: string = 'Kolkata Wholesale Mandi',
  paymentMethod: 'Cash on Delivery' | 'Card Payment' | 'Online (UPI/QR)' = 'Cash on Delivery',
  destination: string = 'Salt Lake, Kolkata'
): Order => {
  // Farmer payout is calculated strictly from farmer's demanded price
  const farmerTotalPayout = matchResult.suppliers.reduce((acc, s) => acc + s.matchedKg * s.pricePerKg, 0);
  
  // Platform collects extra ₹3/kg convenience fee from consumer
  const platformFee = matchResult.fulfilledKg * PLATFORM_CONVENIENCE_FEE_PER_KG;
  const consumerTotalAmount = farmerTotalPayout + platformFee;

  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
    buyerId: 'b-201',
    buyerName,
    destination,
    items: matchResult.suppliers.map(s => ({
      produceId: s.produceId,
      farmerName: s.farmerName,
      cropName: matchResult.cropName,
      quantityKg: s.matchedKg,
      // Consumer pays product price + ₹3/kg convenience fee
      pricePerKg: s.pricePerKg + PLATFORM_CONVENIENCE_FEE_PER_KG,
      subtotal: s.matchedKg * (s.pricePerKg + PLATFORM_CONVENIENCE_FEE_PER_KG)
    })),
    totalQuantityKg: matchResult.fulfilledKg,
    totalAmount: consumerTotalAmount,
    platformFeePerKg: PLATFORM_CONVENIENCE_FEE_PER_KG,
    totalPlatformFee: platformFee,
    farmerPayoutAmount: farmerTotalPayout, // Exact amount paid to farmer without the ₹3 fee
    savingsRealized: Math.round(matchResult.estimatedTotalCost * 0.18),
    status: 'Confirmed',
    expectedDelivery: 'Tomorrow, 2:30 PM',
    createdAt: new Date().toISOString(),
    routeId: 'route-opt-101',
    paymentMethod,
    paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending Cash on Delivery' : 'Paid'
  };

  if (typeof window !== 'undefined') {
    // 1. Save new Order in history
    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || JSON.stringify(initialOrders));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify([newOrder, ...existingOrders]));

    // 2. REAL-TIME INVENTORY DEDUCTION
    // For each supplier fulfilled in this order, reduce stock immediately
    const currentProduce = getStoredProduce();
    let produceChanged = false;

    const updatedProduce = currentProduce.map(item => {
      const matchSupplier = matchResult.suppliers.find(s => s.produceId === item.id || s.produceId === `live-${item.id}`);
      if (matchSupplier) {
        produceChanged = true;
        const newQty = Math.max(0, item.quantityKg - matchSupplier.matchedKg);
        return {
          ...item,
          quantityKg: newQty,
          status: (newQty === 0 ? 'Sold Out' : item.status) as any
        };
      }
      return item;
    });

    if (produceChanged) {
      localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updatedProduce));
      window.dispatchEvent(
        new CustomEvent('farm2flow_produce_updated', {
          detail: { produceList: updatedProduce, purchasedOrder: newOrder }
        })
      );
    }
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

// Helper to get active user cart storage key (individual account personalization)
export const getActiveUserIdentifier = (): string => {
  if (typeof window === 'undefined') return 'guest';
  try {
    const sessionStr = localStorage.getItem('farm2flow_user_session');
    if (sessionStr) {
      const session = JSON.parse(sessionStr);
      return session.identifier || session.email || session.phone || session.name || 'guest';
    }
  } catch {}
  return 'guest';
};

export const getCartStorageKey = (userId?: string): string => {
  const user = userId || getActiveUserIdentifier();
  // Sanitize key for safe local storage
  const cleanKey = user.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  return `${STORAGE_KEYS.CART}_${cleanKey}`;
};

export const getCart = (userId?: string): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const key = getCartStorageKey(userId);
  const stored = localStorage.getItem(key);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const saveCart = (cart: CartItem[], userId?: string): CartItem[] => {
  if (typeof window !== 'undefined') {
    const key = getCartStorageKey(userId);
    localStorage.setItem(key, JSON.stringify(cart));
    const activeUser = userId || getActiveUserIdentifier();
    window.dispatchEvent(new CustomEvent('farm2flow_cart_updated', { detail: { cart, userId: activeUser } }));
  }
  return cart;
};

export const addToCart = (item: CartItem, userId?: string): CartItem[] => {
  const cart = getCart(userId);
  const existingIndex = cart.findIndex(c => c.produceId === item.produceId);
  let updated: CartItem[];
  if (existingIndex > -1) {
    updated = [...cart];
    const newQty = Math.min(updated[existingIndex].quantityKg + item.quantityKg, updated[existingIndex].maxAvailableKg);
    updated[existingIndex] = {
      ...updated[existingIndex],
      quantityKg: newQty
    };
  } else {
    updated = [item, ...cart];
  }
  return saveCart(updated, userId);
};

export const updateCartQuantity = (produceId: string, quantityKg: number, userId?: string): CartItem[] => {
  const cart = getCart(userId);
  if (quantityKg <= 0) {
    return removeFromCart(produceId, userId);
  }
  const updated = cart.map(item => {
    if (item.produceId === produceId) {
      return {
        ...item,
        quantityKg: Math.min(quantityKg, item.maxAvailableKg)
      };
    }
    return item;
  });
  return saveCart(updated, userId);
};

export const removeFromCart = (produceId: string, userId?: string): CartItem[] => {
  const cart = getCart(userId);
  const updated = cart.filter(c => c.produceId !== produceId);
  return saveCart(updated, userId);
};

export const clearCart = (userId?: string): void => {
  if (typeof window !== 'undefined') {
    const key = getCartStorageKey(userId);
    localStorage.removeItem(key);
    const activeUser = userId || getActiveUserIdentifier();
    window.dispatchEvent(new CustomEvent('farm2flow_cart_updated', { detail: { cart: [], userId: activeUser } }));
  }
};

export const createOrderFromCart = (
  cartItems: CartItem[],
  buyerName: string = 'Kolkata Consumer',
  paymentMethod: 'Cash on Delivery' | 'Card Payment' | 'Online (UPI/QR)' = 'Cash on Delivery',
  destination: string = 'Salt Lake, Kolkata'
): Order => {
  // Farmer payout is sum of (qty * demanded price)
  const farmerTotalPayout = cartItems.reduce((acc, item) => acc + item.quantityKg * item.pricePerKg, 0);
  const totalQuantityKg = cartItems.reduce((acc, item) => acc + item.quantityKg, 0);
  
  // Platform fee ₹3/kg collected from consumer
  const platformFee = totalQuantityKg * PLATFORM_CONVENIENCE_FEE_PER_KG;
  const consumerTotalAmount = farmerTotalPayout + platformFee;

  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
    buyerId: 'b-201',
    buyerName,
    destination,
    items: cartItems.map(item => ({
      produceId: item.produceId,
      farmerName: item.farmerName,
      cropName: item.cropName,
      quantityKg: item.quantityKg,
      // Consumer price = farmer demanded rate + ₹3/kg convenience fee
      pricePerKg: item.pricePerKg + PLATFORM_CONVENIENCE_FEE_PER_KG,
      subtotal: item.quantityKg * (item.pricePerKg + PLATFORM_CONVENIENCE_FEE_PER_KG)
    })),
    totalQuantityKg,
    totalAmount: consumerTotalAmount,
    platformFeePerKg: PLATFORM_CONVENIENCE_FEE_PER_KG,
    totalPlatformFee: platformFee,
    farmerPayoutAmount: farmerTotalPayout,
    savingsRealized: Math.round(consumerTotalAmount * 0.18),
    status: 'Confirmed',
    expectedDelivery: 'Tomorrow, 2:30 PM',
    createdAt: new Date().toISOString(),
    routeId: 'route-cart-101',
    paymentMethod,
    paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending Cash on Delivery' : 'Paid'
  };

  if (typeof window !== 'undefined') {
    // 1. Save new Order in history
    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || JSON.stringify(initialOrders));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify([newOrder, ...existingOrders]));

    // 2. Real-time stock deduction for all items purchased
    const currentProduce = getStoredProduce();
    let produceChanged = false;

    const updatedProduce = currentProduce.map(item => {
      const cartMatch = cartItems.find(c => c.produceId === item.id);
      if (cartMatch) {
        produceChanged = true;
        const newQty = Math.max(0, item.quantityKg - cartMatch.quantityKg);
        return {
          ...item,
          quantityKg: newQty,
          status: (newQty === 0 ? 'Sold Out' : item.status) as any
        };
      }
      return item;
    });

    if (produceChanged) {
      localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updatedProduce));
      window.dispatchEvent(
        new CustomEvent('farm2flow_produce_updated', {
          detail: { produceList: updatedProduce, purchasedOrder: newOrder }
        })
      );
    }

    // 3. Clear cart once order is placed
    clearCart();
  }

  return newOrder;
};
