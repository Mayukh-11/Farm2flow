'use client';

import React, { useState } from 'react';
import { initialProduceList } from '@/data/mockData';

export default function FarmerPage() {
  const [tab, setTab] = useState<'home' | 'market' | 'sell' | 'orders'>('home');
  const [produce, setProduce] = useState(initialProduceList);
  const [showWizard, setShowWizard] = useState(false);
  const [crop, setCrop] = useState('Tomato');
  const [quantity, setQuantity] = useState(800);
  const [price, setPrice] = useState(30);

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
      harvestDate: '2026-09-08',
      demandStatus: 'High' as const,
      demandForecastPct: 18,
      status: 'Available' as const,
      fpoVerified: true,
      createdAt: new Date().toISOString()
    };
    setProduce([newListing, ...produce]);
    setShowWizard(false);
    setTab('sell');
  };

  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] min-h-screen pb-24 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#f8f9ff] flex flex-col border-x border-[#c0c9be] relative shadow-md">
        
        {/* Header */}
        <header className="bg-white border-b border-[#c0c9be] p-4 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-white flex items-center justify-center font-bold">🌾</div>
            <div>
              <h1 className="font-extrabold text-[16px] text-[#003b1b] leading-tight">Farmer Portal</h1>
              <p className="text-[10px] text-[#404941]">Farm2Flow • Direct Mandi Access</p>
            </div>
          </div>
          <a href="/" className="text-[12px] font-bold text-[#904d00] hover:underline">Switch Role / Logout</a>
        </header>

        {/* Content */}
        <main className="p-4 flex flex-col gap-4">
          {tab === 'home' && (
            <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-[12px] font-bold text-[#904d00]">🌟 High Demand Opportunity</span>
                <span className="bg-emerald-100 text-[#14532d] px-2 py-0.5 rounded-full text-[11px] font-bold">+18% Demand</span>
              </div>
              <div>
                <h2 className="text-[20px] font-extrabold text-[#121c2a]">Tomato (Grade A)</h2>
                <p className="text-[12px] text-[#404941]">Suggested Mandi Rate: ₹28–32 / kg</p>
              </div>
              <div className="bg-[#eff4ff] p-3 rounded-lg text-[12px]">
                <strong>AI Recommendation:</strong> "Tomato demand may increase next week. Consider listing more supply."
              </div>
              <button onClick={() => setShowWizard(true)} className="w-full py-3 bg-[#14532d] text-white rounded-xl font-bold hover:bg-[#003b1b] transition-all">
                + List Produce for Sale
              </button>
            </div>
          )}

          {tab === 'market' && (
            <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">Market Intelligence</h3>
              <p className="text-[13px]">Current Demand: <strong>21.8 Tonnes</strong> | Forecast: <strong>26.4 Tonnes</strong></p>
              <p className="text-[13px] text-emerald-700 font-bold">Direct Realization: +17% vs Traditional Middlemen</p>
            </div>
          )}

          {tab === 'sell' && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[16px]">Active Crop Listings</h3>
                <button onClick={() => setShowWizard(true)} className="bg-[#14532d] text-white px-3 py-1 rounded-lg text-[12px] font-bold">+ Add Listing</button>
              </div>
              {produce.map(item => (
                <div key={item.id} className="bg-white p-3.5 rounded-xl border border-[#c0c9be] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[14px]">{item.cropName} ({item.grade})</p>
                    <p className="text-[11px] text-[#404941]">{item.quantityKg} kg • ₹{item.expectedPricePerKg}/kg</p>
                  </div>
                  <span className="bg-emerald-100 text-[#14532d] px-2.5 py-0.5 rounded-full text-[11px] font-bold">{item.status}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'orders' && (
            <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">Orders & Dispatches</h3>
              <div className="p-3 bg-[#eff4ff] rounded-lg text-[12px] flex flex-col gap-1 border border-[#c0c9be]">
                <p className="font-bold text-[#14532d]">Order #FF-2048 - In Transit</p>
                <p>800 kg Tomato • Total: ₹24,000</p>
              </div>
            </div>
          )}
        </main>

        {/* MODAL: List Produce Wizard */}
        {showWizard && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4">
            <div className="bg-white w-full max-w-[400px] rounded-2xl p-5 border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">List Produce for Sale</h3>
              <form onSubmit={handleAddProduce} className="flex flex-col gap-3">
                <div>
                  <label className="text-[12px] font-bold">Select Crop</label>
                  <select value={crop} onChange={e => setCrop(e.target.value)} className="w-full p-2 border rounded-lg font-bold">
                    <option value="Tomato">Tomato</option>
                    <option value="Potato">Potato</option>
                    <option value="Onion">Onion</option>
                    <option value="Rice">Rice</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-bold">Harvest Quantity (kg): {quantity}</label>
                  <input type="range" min="100" max="3000" step="100" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-full accent-[#14532d]" />
                </div>
                <div>
                  <label className="text-[12px] font-bold">Expected Price (₹/kg)</label>
                  <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 border rounded-lg font-bold" />
                </div>
                <div className="flex gap-2 mt-2">
                  <button type="button" onClick={() => setShowWizard(false)} className="flex-1 py-2.5 bg-gray-200 rounded-xl font-bold">Cancel</button>
                  <button type="submit" className="flex-1 py-2.5 bg-[#14532d] text-white rounded-xl font-bold">List Produce</button>
                </div>
              </form>
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
