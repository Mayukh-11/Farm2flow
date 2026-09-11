'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { initialProduceList, mockForecasts, mockLogisticsData, mockImpactMetrics, initialOrders } from '@/data/mockData';

function PwaContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role') as 'farmer' | 'fpo' | 'buyer' | null;

  const [role, setRole] = useState<'farmer' | 'fpo' | 'buyer'>(roleParam || 'farmer');
  const [tab, setTab] = useState<'home' | 'market' | 'sell' | 'orders'>('home');
  const [produce, setProduce] = useState(initialProduceList);
  const [orders, setOrders] = useState(initialOrders);
  const [crop, setCrop] = useState('Tomato');
  const [quantity, setQuantity] = useState(800);
  const [price, setPrice] = useState(30);
  const [showWizard, setShowWizard] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  const handleAddProduce = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing = {
      id: `prod-${Date.now().toString().slice(-4)}`,
      farmerId: 'f-101',
      farmerName: 'Ramesh Ghosh',
      farmerLocation: 'Hooghly (32 km)',
      cropName: crop,
      variety: 'Hybrid Red',
      grade: 'Grade A' as const,
      quantityKg: quantity,
      expectedPricePerKg: price,
      marketSuggestedPriceMin: 28,
      marketSuggestedPriceMax: 32,
      harvestDate: '2026-09-06',
      demandStatus: 'High' as const,
      demandForecastPct: 18,
      status: 'Available' as const,
      fpoVerified: true,
      createdAt: new Date().toISOString()
    };
    setProduce([newListing, ...produce]);
    setShowWizard(false);
  };

  const handleCreateOrder = () => {
    const newOrd = {
      id: `ord-${Date.now().toString().slice(-4)}`,
      orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerId: 'b-201',
      buyerName: 'Kolkata Wholesale Mandi',
      destination: 'Posta Mandi, Kolkata',
      items: [
        { produceId: 'prod-001', farmerName: 'Farmer A (Ramesh)', cropName: 'Tomato', quantityKg: 800, pricePerKg: 30, subtotal: 24000 },
        { produceId: 'prod-002', farmerName: 'Farmer B (Suhas)', cropName: 'Tomato', quantityKg: 500, pricePerKg: 29, subtotal: 14500 },
        { produceId: 'prod-003', farmerName: 'FPO C (Singur)', cropName: 'Tomato', quantityKg: 400, pricePerKg: 28, subtotal: 11200 },
        { produceId: 'prod-004', farmerName: 'Farmer D (Bimal)', cropName: 'Tomato', quantityKg: 300, pricePerKg: 31, subtotal: 9300 }
      ],
      totalQuantityKg: 2000,
      totalAmount: 59000,
      savingsRealized: 11800,
      status: 'In Transit' as const,
      expectedDelivery: 'Tomorrow, 2:30 PM',
      createdAt: new Date().toISOString(),
      routeId: 'route-opt-101'
    };
    setOrders([newOrd, ...orders]);
    setShowMatch(false);
    setRole('buyer');
    setTab('orders');
  };

  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] min-h-screen pb-24 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#f8f9ff] flex flex-col border-x border-[#c0c9be]">
        
        {/* Header */}
        <header className="bg-white border-b border-[#c0c9be] p-4 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-white flex items-center justify-center font-bold">F2F</div>
            <div>
              <h1 className="font-extrabold text-[16px] text-[#003b1b] leading-tight">Farm2Flow PWA</h1>
              <p className="text-[10px] text-[#404941]">From Farm to Market, Smarter</p>
            </div>
          </div>
          <a href="/" className="text-[12px] font-bold text-[#904d00] hover:underline">Change Role</a>
        </header>

        {/* Role Bar */}
        <div className="grid grid-cols-3 bg-[#eff4ff] border-b border-[#c0c9be] p-1 text-[12px] font-bold text-center">
          <button onClick={() => setRole('farmer')} className={`py-1.5 rounded-md ${role === 'farmer' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🌾 Farmer</button>
          <button onClick={() => setRole('fpo')} className={`py-1.5 rounded-md ${role === 'fpo' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🏡 FPO</button>
          <button onClick={() => setRole('buyer')} className={`py-1.5 rounded-md ${role === 'buyer' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🏪 Buyer</button>
        </div>

        {/* MAIN BODY */}
        <main className="p-4 flex flex-col gap-4">
          {/* FARMER VIEW */}
          {role === 'farmer' && (
            <>
              {tab === 'home' && (
                <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-[12px] font-bold text-[#904d00]">🌟 High Demand Today</span>
                    <span className="bg-emerald-100 text-[#14532d] px-2 py-0.5 rounded-full text-[11px] font-bold">+18% Demand</span>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-extrabold">Tomato (Grade A)</h2>
                    <p className="text-[12px] text-[#404941]">Mandi Rate: ₹28–32 / kg</p>
                  </div>
                  <div className="bg-[#eff4ff] p-3 rounded-lg text-[12px]">
                    <strong>AI Insight:</strong> "Tomato demand may increase next week. Consider listing more supply."
                  </div>
                  <button onClick={() => setShowWizard(true)} className="w-full py-3 bg-[#14532d] text-white rounded-xl font-bold hover:bg-[#003b1b]">
                    + List Produce for Sale
                  </button>
                </div>
              )}

              {tab === 'market' && (
                <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                  <h3 className="font-bold text-[16px]">Market Intelligence</h3>
                  <p className="text-[13px]">Current Demand: <strong>21.8 Tonnes</strong> | Forecast: <strong>26.4 Tonnes</strong></p>
                  <p className="text-[13px] text-emerald-700 font-bold">Direct Payout Realization: +17% vs Middlemen</p>
                </div>
              )}

              {tab === 'sell' && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[16px]">Active Listings</h3>
                    <button onClick={() => setShowWizard(true)} className="bg-[#14532d] text-white px-3 py-1 rounded-lg text-[12px] font-bold">+ Add</button>
                  </div>
                  {produce.map(item => (
                    <div key={item.id} className="bg-white p-3 rounded-xl border border-[#c0c9be] flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[14px]">{item.cropName} ({item.grade})</p>
                        <p className="text-[11px] text-[#404941]">{item.quantityKg} kg • ₹{item.expectedPricePerKg}/kg</p>
                      </div>
                      <span className="bg-emerald-100 text-[#14532d] px-2 py-0.5 rounded-full text-[11px] font-bold">{item.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'orders' && (
                <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                  <h3 className="font-bold text-[16px]">Orders & Dispatches</h3>
                  {orders.map(o => (
                    <div key={o.id} className="p-3 bg-[#eff4ff] rounded-lg text-[12px]">
                      <p className="font-bold text-[#14532d]">{o.orderNumber} - {o.status}</p>
                      <p>{o.totalQuantityKg} kg • ₹{o.totalAmount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* FPO VIEW */}
          {role === 'fpo' && (
            <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">FPO Member Supply Aggregation</h3>
              <p className="text-[12px] text-[#404941]">Pooled Singur Member Lots: 1,700 kg Tomato</p>
              <button onClick={() => setShowMatch(true)} className="w-full py-3 bg-[#14532d] text-white rounded-xl font-bold">
                Run Multi-Farmer Smart Match
              </button>
            </div>
          )}

          {/* BUYER VIEW */}
          {role === 'buyer' && (
            <div className="flex flex-col gap-3">
              <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                <h3 className="font-bold text-[16px]">Buyer Marketplace & Procurement</h3>
                <button onClick={() => setShowMatch(true)} className="w-full py-3 bg-[#14532d] text-white rounded-xl font-bold">
                  Run Smart Matching Engine (2,000 kg Requirement)
                </button>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                <h3 className="font-bold text-[16px]">Active Orders Track</h3>
                {orders.map(o => (
                  <div key={o.id} className="p-3 bg-[#eff4ff] rounded-lg text-[12px]">
                    <p className="font-bold text-[#14532d]">{o.orderNumber} - {o.status}</p>
                    <p>{o.totalQuantityKg} kg • ₹{o.totalAmount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* MODAL: 3-Step Sell Wizard */}
        {showWizard && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4">
            <div className="bg-white w-full max-w-[400px] rounded-2xl p-5 border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">List Produce for Sale</h3>
              <form onSubmit={handleAddProduce} className="flex flex-col gap-3">
                <div>
                  <label className="text-[12px] font-bold">Crop</label>
                  <select value={crop} onChange={e => setCrop(e.target.value)} className="w-full p-2 border rounded-lg">
                    <option value="Tomato">Tomato</option>
                    <option value="Potato">Potato</option>
                    <option value="Onion">Onion</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-bold">Quantity (kg): {quantity}</label>
                  <input type="range" min="100" max="3000" step="100" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="text-[12px] font-bold">Expected Price (₹/kg)</label>
                  <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 border rounded-lg font-bold" />
                </div>
                <div className="flex gap-2 mt-2">
                  <button type="button" onClick={() => setShowWizard(false)} className="flex-1 py-2 bg-gray-200 rounded-lg font-bold">Cancel</button>
                  <button type="submit" className="flex-1 py-2 bg-[#14532d] text-white rounded-lg font-bold">Submit Listing</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: Smart Match */}
        {showMatch && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4">
            <div className="bg-white w-full max-w-[400px] rounded-2xl p-5 border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">Smart Supplier Match (2,000 kg)</h3>
              <div className="bg-emerald-50 p-3 rounded-lg text-[12px] border border-emerald-300">
                <p className="font-bold text-[#14532d]">Smart Match Score: 94% (18% Cost Savings)</p>
                <p className="mt-1">• Farmer A (800kg) + Farmer B (500kg) + FPO C (400kg) + Farmer D (300kg)</p>
              </div>
              <div className="flex gap-2 mt-2">
                <button type="button" onClick={() => setShowMatch(false)} className="flex-1 py-2 bg-gray-200 rounded-lg font-bold">Close</button>
                <button type="button" onClick={handleCreateOrder} className="flex-1 py-2 bg-[#14532d] text-white rounded-lg font-bold">Create Order & Dispatch</button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-[#c0c9be] grid grid-cols-4 text-[11px] font-bold text-center py-2 z-40">
          <button onClick={() => setTab('home')} className={tab === 'home' ? 'text-[#14532d]' : 'text-[#404941]'}>Home</button>
          <button onClick={() => setTab('market')} className={tab === 'market' ? 'text-[#14532d]' : 'text-[#404941]'}>Market</button>
          <button onClick={() => setTab('sell')} className={tab === 'sell' ? 'text-[#14532d]' : 'text-[#404941]'}>Sell</button>
          <button onClick={() => setTab('orders')} className={tab === 'orders' ? 'text-[#14532d]' : 'text-[#404941]'}>Orders</button>
        </nav>
      </div>
    </div>
  );
}

export default function PwaClientPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading Farm2Flow...</div>}>
      <PwaContent />
    </Suspense>
  );
}
