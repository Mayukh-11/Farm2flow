import React, { useState, useEffect } from 'react';
import { SmartMatchResult, Order } from '@/types';
import { findSmartMatches, createOrderFromMatch, getStoredProduce, PLATFORM_CONVENIENCE_FEE_PER_KG } from '@/services/api';

import { getAllCatalogCrops } from '@/data/cropCatalog';
import { PanIndiaSeller, updatePanIndiaSellerStock } from '@/data/panIndiaSellers';

interface BuyerSmartMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderCreated: (order: Order) => void;
  buyerName?: string;
  buyerDestination?: string;
  initialCrop?: string;
  selectedSeller?: PanIndiaSeller | null;
}

type PaymentMethodType = 'cash' | 'card' | 'online';

export const BuyerSmartMatchModal: React.FC<BuyerSmartMatchModalProps> = ({
  isOpen,
  onClose,
  onOrderCreated,
  buyerName = 'Sourav Mukherjee',
  buyerDestination = 'Salt Lake, Kolkata',
  initialCrop = 'Tomato',
  selectedSeller = null
}) => {
  const [crop, setCrop] = useState(initialCrop || 'Tomato');
  const [requiredKg, setRequiredKg] = useState(selectedSeller ? Math.min(selectedSeller.quantityKg, 200) : 50);
  const [matchResult, setMatchResult] = useState<SmartMatchResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  
  // Checkout & Payment flow states
  const [showPaymentStep, setShowPaymentStep] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>('cash');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isOnlinePaid, setIsOnlinePaid] = useState(false);
  const [availableCropsList, setAvailableCropsList] = useState<string[]>([]);

  useEffect(() => {
    // Dynamic available crops from current catalog and stored produce
    const produce = getStoredProduce();
    const catalog = getAllCatalogCrops();
    const set = new Set<string>();
    
    // Add produce items
    produce.forEach(p => set.add(p.cropName));
    // Add all catalog crops
    catalog.forEach(c => set.add(c.name));
    
    const uniqueCrops = Array.from(set);
    setAvailableCropsList(uniqueCrops.length > 0 ? uniqueCrops : ['Tomato', 'Potato', 'Onion', 'Rice', 'Wheat']);
  }, [isOpen]);

  // Sync when initialCrop or selectedSeller updates
  useEffect(() => {
    if (selectedSeller) {
      setCrop(selectedSeller.crop);
      setRequiredKg(Math.min(selectedSeller.quantityKg, 500));
    } else if (initialCrop) {
      setCrop(initialCrop);
    }
    setShowPaymentStep(false);
    setMatchResult(null);
  }, [initialCrop, selectedSeller, isOpen]);

  if (!isOpen) return null;

  const handleSearchMatch = () => {
    setIsSearching(true);
    setShowPaymentStep(false);
    setIsOnlinePaid(false);
    setTimeout(() => {
      // If a specific seller was chosen directly from the Map, prioritize matching with them
      if (selectedSeller && selectedSeller.crop.toLowerCase() === crop.toLowerCase()) {
        const matchedKg = Math.min(selectedSeller.quantityKg, requiredKg);
        const farmerBaseCost = matchedKg * selectedSeller.pricePerKg;
        const totalWithFee = farmerBaseCost + (matchedKg * PLATFORM_CONVENIENCE_FEE_PER_KG);
        const result: SmartMatchResult = {
          requirementId: `req-${Date.now()}`,
          cropName: selectedSeller.crop,
          requestedKg: requiredKg,
          fulfilledKg: matchedKg,
          overallMatchPct: 98,
          suppliers: [
            {
              produceId: selectedSeller.id,
              farmerName: selectedSeller.name,
              farmerLocation: `${selectedSeller.location}, ${selectedSeller.state}`,
              availableKg: selectedSeller.quantityKg,
              matchedKg,
              grade: (selectedSeller.grade as any) || 'Grade A',
              pricePerKg: selectedSeller.pricePerKg,
              distanceKm: Math.round(selectedSeller.transitDaysToKolkata * 250),
              matchPercentage: 99,
              verified: selectedSeller.verified
            }
          ],
          estimatedTotalCost: totalWithFee,
          savingsVsMiddlemenPct: 22
        };
        setMatchResult(result);
      } else {
        const res = findSmartMatches(crop, requiredKg);
        // Include platform convenience fee in consumer's order value
        const totalWithFee = res.estimatedTotalCost + (res.fulfilledKg * PLATFORM_CONVENIENCE_FEE_PER_KG);
        setMatchResult({
          ...res,
          estimatedTotalCost: totalWithFee
        });
      }
      setIsSearching(false);
    }, 400);
  };

  const handleProceedToBuy = () => {
    if (!matchResult) return;
    setShowPaymentStep(true);
  };

  const handleFinalizeOrder = (method: PaymentMethodType) => {
    if (!matchResult) return;
    setIsProcessingPayment(true);

    const paymentLabel = 
      method === 'cash' ? 'Cash on Delivery' :
      method === 'card' ? 'Card Payment' : 'Online (UPI/QR)';

    setTimeout(() => {
      const createdOrder = createOrderFromMatch(
        matchResult,
        buyerName,
        paymentLabel,
        buyerDestination
      );

      // Real-time stock reduction for Pan-India Sellers if matched
      matchResult.suppliers.forEach(supplier => {
        if (supplier.produceId && !supplier.produceId.startsWith('prod-')) {
          const sellerCleanId = supplier.produceId.replace('live-', '');
          updatePanIndiaSellerStock(sellerCleanId, supplier.matchedKg);
        }
      });

      setIsProcessingPayment(false);
      setShowPaymentStep(false);
      setIsOnlinePaid(false);
      onOrderCreated(createdOrder);
      onClose();
    }, method === 'online' ? 700 : 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <h3 className="text-headline-sm font-bold text-on-surface">Consumer Direct Farm Matching</h3>
            <p className="text-body-sm text-[12px] text-on-surface-variant">Connect directly with verified local & national farmers</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step 1: Input Requirements Form */}
        <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-3">
          
          {/* Selected Seller Profile Preview (when opened from Map or direct seller) */}
          {selectedSeller && (
            <div className="bg-emerald-50/90 border border-emerald-300 p-3 rounded-xl flex flex-col gap-1.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Selected Supplier from Map
                </span>
                <span className="text-[11px] font-extrabold text-emerald-900">
                  {selectedSeller.grade}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-200 text-emerald-950 font-black text-[13px] flex items-center justify-center shrink-0">
                  {selectedSeller.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-extrabold text-emerald-950 text-[14px] leading-tight">
                    {selectedSeller.name}
                  </h4>
                  <p className="text-[11px] text-emerald-800 font-medium">
                    {selectedSeller.location}, {selectedSeller.state} • {selectedSeller.fpoOrCoop}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-bold text-emerald-900 border-t border-emerald-200">
                <div className="bg-white/80 p-1.5 rounded-lg text-center">
                  <span className="block text-slate-500 font-normal">Direct Rate</span>
                  <span className="text-emerald-800 font-extrabold text-[12px]">₹{selectedSeller.pricePerKg}/kg</span>
                </div>
                <div className="bg-white/80 p-1.5 rounded-lg text-center">
                  <span className="block text-slate-500 font-normal">Available</span>
                  <span className="font-extrabold text-[12px]">{selectedSeller.quantityKg.toLocaleString()} kg</span>
                </div>
                <div className="bg-white/80 p-1.5 rounded-lg text-center">
                  <span className="block text-slate-500 font-normal">Transit</span>
                  <span className="font-extrabold text-[12px]">~{selectedSeller.transitDaysToKolkata} Days</span>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between">
              <label className="text-body-sm text-[12px] text-on-surface-variant font-medium">Crop Required</label>
              {selectedSeller && (
                <span className="text-[11px] font-bold text-emerald-700">Preselected from Map</span>
              )}
            </div>
            <select
              value={crop}
              onChange={e => {
                setCrop(e.target.value);
                setShowPaymentStep(false);
              }}
              className="w-full mt-1 px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-bold text-on-surface focus:outline-primary"
            >
              {availableCropsList.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center text-body-sm text-[12px] text-on-surface-variant">
              <span>Required Purchase Quantity</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="2"
                  max="5000"
                  value={requiredKg}
                  onChange={e => {
                    setRequiredKg(Math.max(2, Number(e.target.value)));
                    setShowPaymentStep(false);
                  }}
                  className="w-20 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg font-extrabold text-primary text-right text-[14px]"
                />
                <span className="font-bold text-primary">kg</span>
              </div>
            </div>
            <input
              type="range"
              min="2"
              max="5000"
              step="1"
              value={requiredKg}
              onChange={e => {
                setRequiredKg(Number(e.target.value));
                setShowPaymentStep(false);
              }}
              className="w-full mt-2 h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant font-bold mt-1">
              <span>2 kg (Retail / Min)</span>
              <span>250 kg</span>
              <span>1,000 kg</span>
              <span>5,000 kg (Bulk)</span>
            </div>
          </div>

          <button
            onClick={handleSearchMatch}
            disabled={isSearching}
            className="w-full py-2.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span>{isSearching ? 'Analyzing Local Mandis...' : 'Run Smart Match'}</span>
          </button>
        </div>

        {/* Step 2: Match Output Results */}
        {matchResult && (
          <div className="flex flex-col gap-3 animate-in fade-in duration-200">
            {/* Match Header Badge */}
            <div className="bg-emerald-100 border border-emerald-300 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-label-md font-extrabold text-primary">Smart Match: {matchResult.overallMatchPct}%</span>
              </div>
              <span className="text-label-sm font-bold text-secondary bg-surface px-2 py-0.5 rounded-md">
                18% Savings
              </span>
            </div>

            {/* Fulfilling Farmers Breakdown */}
            <div className="flex flex-col gap-2">
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Matched Supplier Combination:</p>
              {matchResult.suppliers.length > 0 ? (
                matchResult.suppliers.map((s, idx) => (
                  <div key={idx} className="p-3 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-label-md font-bold text-on-surface leading-tight">{s.farmerName}</p>
                        <p className="text-body-sm text-[11px] text-on-surface-variant">{s.farmerLocation} • ₹{s.pricePerKg}/kg</p>
                      </div>
                    </div>
                    <span className="text-label-md font-extrabold text-primary-container">
                      {s.matchedKg} kg
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[12px] text-amber-900 font-medium">
                  No direct matching lots found for this specific quantity right now. Try adjusting the requested kilograms.
                </div>
              )}
            </div>

            {/* Summary metrics with consumer convenience fee breakdown */}
            <div className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 text-label-md">
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/60 text-[12px]">
                <span className="text-on-surface-variant font-medium">Farm Produce Cost ({matchResult.fulfilledKg} kg)</span>
                <span className="font-bold text-on-surface">
                  ₹{(matchResult.estimatedTotalCost - (matchResult.fulfilledKg * PLATFORM_CONVENIENCE_FEE_PER_KG)).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md font-bold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  <span>Platform Convenience & Escrow (+₹{PLATFORM_CONVENIENCE_FEE_PER_KG}/kg)</span>
                </span>
                <span>+₹{(matchResult.fulfilledKg * PLATFORM_CONVENIENCE_FEE_PER_KG).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-1 text-[13px]">
                <div>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">Total Consumer Payable</p>
                  <p className="text-[11px] text-emerald-700 font-bold">Verified Zero Middlemen Dispatch</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-primary text-headline-sm leading-tight">₹{matchResult.estimatedTotalCost.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Section / Buy Now */}
            {!showPaymentStep ? (
              <button
                onClick={handleProceedToBuy}
                disabled={matchResult.fulfilledKg === 0}
                className="w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-extrabold hover:bg-primary transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
                <span>Buy Now • ₹{matchResult.estimatedTotalCost.toLocaleString()}</span>
              </button>
            ) : (
              /* Payment Options Container */
              <div className="bg-surface-container-lowest p-4 rounded-xl border-2 border-primary/40 flex flex-col gap-3 shadow-md animate-in slide-in-from-bottom-2 duration-200">
                <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <span className="font-extrabold text-[14px] text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">payments</span>
                    <span>Select Payment Option</span>
                  </span>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Total: ₹{matchResult.estimatedTotalCost.toLocaleString()}
                  </span>
                </div>

                {/* 3 Payment Options: Cash, Card, Online */}
                <div className="grid grid-cols-3 gap-2 text-[12px]">
                  {/* Cash Option */}
                  <button
                    onClick={() => {
                      setSelectedPayment('cash');
                      setIsOnlinePaid(false);
                    }}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                      selectedPayment === 'cash'
                        ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20'
                        : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                    <span>Cash</span>
                    <span className="text-[9px] opacity-80">(Pay on Delivery)</span>
                  </button>

                  {/* Card Option */}
                  <button
                    onClick={() => {
                      setSelectedPayment('card');
                      setIsOnlinePaid(false);
                    }}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                      selectedPayment === 'card'
                        ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20'
                        : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">credit_card</span>
                    <span>Card</span>
                    <span className="text-[9px] opacity-80">(Debit / Credit)</span>
                  </button>

                  {/* Online UPI / Scanner Option */}
                  <button
                    onClick={() => {
                      setSelectedPayment('online');
                      setIsOnlinePaid(false);
                    }}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                      selectedPayment === 'online'
                        ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20'
                        : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                    <span>Online</span>
                    <span className="text-[9px] opacity-80">(UPI / QR Scanner)</span>
                  </button>
                </div>

                {/* Cash Flow */}
                {selectedPayment === 'cash' && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col gap-2 text-[12px] animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>Cash on Delivery Verified</span>
                    </div>
                    <p className="text-emerald-800 text-[11px]">
                      Your order will be placed immediately. Hand over cash of <strong>₹{matchResult.estimatedTotalCost.toLocaleString()}</strong> to the verified farm delivery partner upon receipt at {buyerDestination}.
                    </p>
                    <button
                      onClick={() => handleFinalizeOrder('cash')}
                      disabled={isProcessingPayment}
                      className="w-full mt-1 py-3 bg-primary text-white rounded-xl font-black text-[13px] hover:bg-primary/90 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                      <span>{isProcessingPayment ? 'Placing Order...' : 'Place Cash Order Now'}</span>
                    </button>
                  </div>
                )}

                {/* Card Flow */}
                {selectedPayment === 'card' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex flex-col gap-2.5 text-[12px] animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-blue-900 font-bold">
                      <span className="material-symbols-outlined text-[18px]">credit_card</span>
                      <span>Instant Card Checkout</span>
                    </div>
                    <div className="space-y-1.5">
                      <input
                        type="text"
                        placeholder="Card Number (XXXX XXXX XXXX XXXX)"
                        defaultValue="4111 2233 4455 9988"
                        className="w-full px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] font-mono"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          defaultValue="12/28"
                          className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          defaultValue="786"
                          maxLength={3}
                          className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => handleFinalizeOrder('card')}
                      disabled={isProcessingPayment}
                      className="w-full py-3 bg-blue-700 text-white rounded-xl font-black text-[13px] hover:bg-blue-800 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span>{isProcessingPayment ? 'Authorizing Card...' : `Pay ₹${matchResult.estimatedTotalCost.toLocaleString()} & Place Order`}</span>
                    </button>
                  </div>
                )}

                {/* Online Flow with Live Scanner */}
                {selectedPayment === 'online' && (
                  <div className="bg-slate-900 text-white border border-slate-700 rounded-xl p-3.5 flex flex-col items-center gap-3 text-[12px] animate-in fade-in duration-200">
                    <div className="flex items-center justify-between w-full border-b border-slate-700 pb-2">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                        <span>Scan & Pay via any UPI App</span>
                      </div>
                      <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                        GPay • PhonePe • Paytm
                      </span>
                    </div>

                    {/* QR Code Scanner Display */}
                    <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center gap-2 border-2 border-emerald-500/50">
                      <div className="w-40 h-40 bg-white relative flex items-center justify-center">
                        {/* Real dynamic SVG QR graphic representation */}
                        <svg className="w-36 h-36" viewBox="0 0 100 100" fill="currentColor">
                          {/* Corner Markers */}
                          <rect x="5" y="5" width="28" height="28" fill="#111827" rx="3" />
                          <rect x="9" y="9" width="20" height="20" fill="white" rx="1" />
                          <rect x="13" y="13" width="12" height="12" fill="#047857" rx="1" />

                          <rect x="67" y="5" width="28" height="28" fill="#111827" rx="3" />
                          <rect x="71" y="9" width="20" height="20" fill="white" rx="1" />
                          <rect x="75" y="13" width="12" height="12" fill="#047857" rx="1" />

                          <rect x="5" y="67" width="28" height="28" fill="#111827" rx="3" />
                          <rect x="9" y="71" width="20" height="20" fill="white" rx="1" />
                          <rect x="13" y="75" width="12" height="12" fill="#047857" rx="1" />

                          {/* Data Pattern Dots */}
                          <rect x="38" y="10" width="5" height="5" fill="#111827" />
                          <rect x="48" y="10" width="5" height="5" fill="#111827" />
                          <rect x="58" y="10" width="5" height="5" fill="#111827" />
                          <rect x="38" y="20" width="5" height="5" fill="#111827" />
                          <rect x="48" y="25" width="5" height="5" fill="#111827" />
                          <rect x="58" y="20" width="5" height="5" fill="#111827" />

                          <rect x="10" y="38" width="5" height="5" fill="#111827" />
                          <rect x="20" y="38" width="5" height="5" fill="#111827" />
                          <rect x="30" y="45" width="5" height="5" fill="#111827" />
                          <rect x="40" y="38" width="5" height="5" fill="#111827" />
                          <rect x="50" y="45" width="5" height="5" fill="#111827" />
                          <rect x="60" y="38" width="5" height="5" fill="#111827" />
                          <rect x="70" y="45" width="5" height="5" fill="#111827" />
                          <rect x="80" y="38" width="5" height="5" fill="#111827" />

                          <rect x="38" y="55" width="5" height="5" fill="#111827" />
                          <rect x="48" y="55" width="5" height="5" fill="#111827" />
                          <rect x="58" y="55" width="5" height="5" fill="#111827" />

                          <rect x="38" y="67" width="5" height="5" fill="#111827" />
                          <rect x="48" y="75" width="5" height="5" fill="#111827" />
                          <rect x="58" y="67" width="5" height="5" fill="#111827" />
                          <rect x="67" y="67" width="5" height="5" fill="#111827" />
                          <rect x="75" y="75" width="5" height="5" fill="#111827" />
                          <rect x="85" y="67" width="5" height="5" fill="#111827" />
                          <rect x="75" y="85" width="5" height="5" fill="#111827" />
                          <rect x="85" y="85" width="5" height="5" fill="#111827" />

                          {/* Center Brand Badge */}
                          <circle cx="50" cy="50" r="10" fill="#047857" />
                          <text x="50" y="54" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">₹</text>
                        </svg>

                        {/* Pulsing scanning beam line */}
                        <div className="absolute inset-x-2 h-0.5 bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse pointer-events-none" />
                      </div>
                      <span className="text-[10px] text-slate-800 font-extrabold tracking-wider uppercase">
                        UPI ID: farm2flow@icici
                      </span>
                    </div>

                    <div className="text-center space-y-0.5">
                      <p className="font-extrabold text-[13px] text-white">
                        Scan & Pay ₹{matchResult.estimatedTotalCost.toLocaleString()}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Scan with your mobile camera or any UPI app.
                      </p>
                    </div>

                    {/* Simulation button for verifying scan payment */}
                    {!isOnlinePaid ? (
                      <button
                        onClick={() => {
                          setIsProcessingPayment(true);
                          setTimeout(() => {
                            setIsProcessingPayment(false);
                            setIsOnlinePaid(true);
                          }, 900);
                        }}
                        disabled={isProcessingPayment}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98"
                      >
                        <span className="material-symbols-outlined text-[16px]">qr_code</span>
                        <span>{isProcessingPayment ? 'Verifying UPI Scanner...' : 'Simulate Scan / Approve UPI Payment'}</span>
                      </button>
                    ) : (
                      <div className="w-full space-y-2 animate-in zoom-in duration-200">
                        <div className="bg-emerald-950 border border-emerald-500/80 rounded-xl p-2.5 flex items-center justify-center gap-2 text-emerald-300 font-bold text-[12px]">
                          <span className="material-symbols-outlined text-[20px] text-emerald-400 animate-bounce">verified</span>
                          <span>UPI Payment Verified Successfully!</span>
                        </div>
                        <button
                          onClick={() => handleFinalizeOrder('online')}
                          disabled={isProcessingPayment}
                          className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-[13px] transition-all shadow-lg active:scale-98 flex items-center justify-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          <span>Finalize & Place Order</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
