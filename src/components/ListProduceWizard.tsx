import React from 'react';
import { Produce } from '@/types';

interface ListProduceWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newProduce: Produce) => void;
}

export const ListProduceWizard: React.FC<ListProduceWizardProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [selectedCrop, setSelectedCrop] = React.useState('Tomato');
  const [quantityKg, setQuantityKg] = React.useState<number>(800);
  const [grade, setGrade] = React.useState<'Grade A' | 'Grade B' | 'Standard'>('Grade A');
  const [expectedPrice, setExpectedPrice] = React.useState<number>(30);
  const [harvestDate, setHarvestDate] = React.useState<string>('2026-09-04');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');

  if (!isOpen) return null;

  const cropOptions = [
    { name: 'Tomato', icon: '🍅', variety: 'Hybrid Red', suggestedPrice: '₹28–32/kg' },
    { name: 'Potato', icon: '🥔', variety: 'Jyoti', suggestedPrice: '₹16–20/kg' },
    { name: 'Onion', icon: '🧅', variety: 'Nashik Red', suggestedPrice: '₹24–28/kg' },
    { name: 'Rice', icon: '🌾', variety: 'Minikit', suggestedPrice: '₹38–44/kg' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const created: Produce = {
        id: `prod-${Date.now().toString().slice(-4)}`,
        farmerId: 'f-101',
        farmerName: 'Farmer A (Ramesh Ghosh)',
        farmerLocation: 'Hooghly (32 km)',
        cropName: selectedCrop,
        variety: cropOptions.find(c => c.name === selectedCrop)?.variety || 'Hybrid',
        grade,
        quantityKg,
        expectedPricePerKg: expectedPrice,
        marketSuggestedPriceMin: selectedCrop === 'Tomato' ? 28 : 16,
        marketSuggestedPriceMax: selectedCrop === 'Tomato' ? 32 : 20,
        harvestDate,
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      setSuccessMsg('Produce listed successfully. Saved locally and synced to e-NAM!');
      setTimeout(() => {
        onSuccess(created);
        setSuccessMsg('');
        setStep(1);
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto">
        
        {/* Header with Step Indicator */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <h3 className="text-headline-sm font-bold text-on-surface">List Produce for Sale</h3>
            <p className="text-body-sm text-[12px] text-on-surface-variant">Step {step} of 3 • Direct Mandi Match</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="flex gap-1.5 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
          <div className={`h-full transition-all duration-300 ${step >= 1 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
          <div className={`h-full transition-all duration-300 ${step >= 2 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
          <div className={`h-full transition-all duration-300 ${step >= 3 ? 'bg-primary flex-1' : 'bg-transparent'}`}></div>
        </div>

        {successMsg ? (
          <div className="bg-emerald-100 text-primary-container p-6 rounded-xl text-center flex flex-col items-center gap-3 my-4">
            <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <p className="text-headline-sm font-bold">{successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* STEP 1: Select Crop */}
            {step === 1 && (
              <div className="flex flex-col gap-3">
                <label className="text-label-md font-bold text-on-surface">Step 1: Select Crop</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {cropOptions.map(crop => (
                    <button
                      key={crop.name}
                      type="button"
                      onClick={() => setSelectedCrop(crop.name)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                        selectedCrop === crop.name
                          ? 'border-2 border-primary bg-primary-container/10 ring-1 ring-primary'
                          : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="text-2xl">{crop.icon}</span>
                      <span className="text-label-md font-bold text-on-surface">{crop.name}</span>
                      <span className="text-body-sm text-[11px] text-on-surface-variant">{crop.variety}</span>
                      <span className="text-label-sm text-[11px] text-secondary font-bold mt-1">{crop.suggestedPrice}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-3 w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                  <span>Continue to Quantity</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            )}

            {/* STEP 2: Enter Quantity */}
            {step === 2 && (
              <div className="flex flex-col gap-3">
                <label className="text-label-md font-bold text-on-surface">Step 2: Harvest Quantity (Kg)</label>
                
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-on-surface-variant">Available Lot Quantity</span>
                    <span className="text-headline-lg font-extrabold text-primary">{quantityKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={quantityKg}
                    onChange={e => setQuantityKg(Number(e.target.value))}
                    className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[11px] text-on-surface-variant font-bold">
                    <span>100 kg</span>
                    <span>1,000 kg</span>
                    <span>5,000 kg</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-label-md font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Set Quality & Price</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Quality, Expected Price, Harvest Date */}
            {step === 3 && (
              <div className="flex flex-col gap-3">
                <label className="text-label-md font-bold text-on-surface">Step 3: Price & Date</label>

                {/* Expected Price */}
                <div>
                  <label className="text-body-sm text-[12px] text-on-surface-variant">Expected Price per Kg (₹)</label>
                  <div className="relative mt-1">
                    <span className="absolute left-3.5 top-3 font-bold text-on-surface-variant">₹</span>
                    <input
                      type="number"
                      value={expectedPrice}
                      onChange={e => setExpectedPrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                  <p className="text-[11px] text-secondary font-bold mt-1">AI Market Range: ₹28 – ₹32 / kg</p>
                </div>

                {/* Harvest Date */}
                <div>
                  <label className="text-body-sm text-[12px] text-on-surface-variant">Expected Harvest / Dispatch Date</label>
                  <input
                    type="date"
                    value={harvestDate}
                    onChange={e => setHarvestDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 mt-1 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-label-md font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    {isSubmitting ? 'Listing Produce...' : 'List My Produce'}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
