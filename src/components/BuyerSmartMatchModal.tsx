import React from 'react';
import { SmartMatchResult, Order } from '@/types';
import { findSmartMatches, createOrderFromMatch } from '@/services/api';

interface BuyerSmartMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderCreated: (order: Order) => void;
}

export const BuyerSmartMatchModal: React.FC<BuyerSmartMatchModalProps> = ({
  isOpen,
  onClose,
  onOrderCreated
}) => {
  const [crop, setCrop] = React.useState('Tomato');
  const [requiredKg, setRequiredKg] = React.useState(2000);
  const [matchResult, setMatchResult] = React.useState<SmartMatchResult | null>(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isCreatingOrder, setIsCreatingOrder] = React.useState(false);

  if (!isOpen) return null;

  const handleSearchMatch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const res = findSmartMatches(crop, requiredKg);
      setMatchResult(res);
      setIsSearching(false);
    }, 500);
  };

  const handleCreateOrder = () => {
    if (!matchResult) return;
    setIsCreatingOrder(true);
    setTimeout(() => {
      const createdOrder = createOrderFromMatch(matchResult);
      setIsCreatingOrder(false);
      onOrderCreated(createdOrder);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <h3 className="text-headline-sm font-bold text-on-surface">Buyer Smart Matching Engine</h3>
            <p className="text-body-sm text-[12px] text-on-surface-variant">Automated multi-supplier crop aggregation</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Input Requirements Form */}
        <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-3">
          <div>
            <label className="text-body-sm text-[12px] text-on-surface-variant">Crop Required</label>
            <select
              value={crop}
              onChange={e => setCrop(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-bold text-on-surface"
            >
              <option value="Tomato">Tomato (Grade A)</option>
              <option value="Potato">Potato (Jyoti)</option>
              <option value="Onion">Onion (Nashik)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-body-sm text-[12px] text-on-surface-variant">
              <span>Required Bulk Quantity</span>
              <span className="font-extrabold text-primary">{requiredKg.toLocaleString()} kg</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={requiredKg}
              onChange={e => setRequiredKg(Number(e.target.value))}
              className="w-full mt-2 h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <button
            onClick={handleSearchMatch}
            disabled={isSearching}
            className="w-full py-2.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
          >
            {isSearching ? 'Analyzing Local Mandis...' : 'Run Smart Match'}
          </button>
        </div>

        {/* Match Output Results */}
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
              {matchResult.suppliers.map((s, idx) => (
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
              ))}
            </div>

            {/* Summary metrics */}
            <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant flex justify-between items-center text-label-md">
              <div>
                <p className="text-[11px] text-on-surface-variant">Total Quantity Matched</p>
                <p className="font-extrabold text-on-surface">{matchResult.fulfilledKg.toLocaleString()} / {matchResult.requestedKg.toLocaleString()} kg</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-on-surface-variant">Estimated Order Value</p>
                <p className="font-extrabold text-primary text-headline-sm">₹{matchResult.estimatedTotalCost.toLocaleString()}</p>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleCreateOrder}
              disabled={isCreatingOrder}
              className="w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-extrabold hover:bg-primary transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              {isCreatingOrder ? 'Creating Direct Order...' : 'Create Order & Dispatch Logistics'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
