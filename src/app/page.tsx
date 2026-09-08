'use client';

import React, { useState } from 'react';
import { initialProduceList, mockLogisticsData, initialOrders } from '@/data/mockData';

export default function RootAppPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<'farmer' | 'fpo' | 'buyer' | 'admin'>('farmer');
  const [farmerTab, setFarmerTab] = useState<'home' | 'market' | 'sell' | 'orders' | 'profile'>('home');
  const [buyerTab, setBuyerTab] = useState<'home' | 'browse' | 'buy' | 'orders'>('home');
  const [produce, setProduce] = useState(initialProduceList);
  const [orders, setOrders] = useState(initialOrders);
  
  // Modals
  const [showWizard, setShowWizard] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [crop, setCrop] = useState('Tomato');
  const [quantity, setQuantity] = useState(800);
  const [price, setPrice] = useState(30);

  // Buyer custom selection state: selected produce item IDs
  const [selectedProduceIds, setSelectedProduceIds] = useState<string[]>(['prod-001', 'prod-002', 'prod-003', 'prod-004']);

  const availableFarmersCount = new Set(produce.map(p => p.farmerId)).size;
  const totalAvailableKg = produce.reduce((acc, p) => acc + p.quantityKg, 0);

  const getDistanceKm = (location: string) => {
    if (location.includes('Singur')) return 18;
    if (location.includes('Barasat')) return 24;
    if (location.includes('Hooghly')) return 32;
    if (location.includes('Tarakeswar')) return 45;
    return 28;
  };

  const toggleProduceSelection = (id: string) => {
    if (selectedProduceIds.includes(id)) {
      if (selectedProduceIds.length === 1) return; // keep at least 1 selected
      setSelectedProduceIds(selectedProduceIds.filter(i => i !== id));
    } else {
      setSelectedProduceIds([...selectedProduceIds, id]);
    }
  };

  const selectedItems = produce.filter(p => selectedProduceIds.includes(p.id));
  const selectedTotalKg = selectedItems.reduce((acc, p) => acc + p.quantityKg, 0);
  const selectedTotalAmount = selectedItems.reduce((acc, p) => acc + (p.quantityKg * p.expectedPricePerKg), 0);

  const handleLogin = (selectedRole: 'farmer' | 'fpo' | 'buyer' | 'admin') => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

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
      items: selectedItems.map(p => ({
        produceId: p.id,
        farmerName: p.farmerName,
        cropName: p.cropName,
        quantityKg: p.quantityKg,
        pricePerKg: p.expectedPricePerKg,
        subtotal: p.quantityKg * p.expectedPricePerKg
      })),
      totalQuantityKg: selectedTotalKg,
      totalAmount: selectedTotalAmount,
      savingsRealized: Math.round(selectedTotalAmount * 0.18),
      status: 'In Transit' as const,
      expectedDelivery: 'Tomorrow, 2:30 PM',
      createdAt: new Date().toISOString(),
      routeId: 'route-opt-101'
    };
    setOrders([newOrd, ...orders]);
    setShowMatch(false);
    setRole('buyer');
    setBuyerTab('orders');
  };

  // 1. INITIAL LOGIN PAGE SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] text-[#121c2a] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-[420px] bg-white border border-[#c0c9be] rounded-2xl p-6 shadow-md flex flex-col gap-5">
          <div className="text-center flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#14532d] text-[#b1f2be] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">agriculture</span>
            </div>
            <h1 className="text-[22px] font-extrabold text-[#003b1b]">Farm2Flow</h1>
            <p className="text-[12px] text-[#404941] font-bold">From Farm to Market, Smarter.</p>
          </div>

          <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#c0c9be] flex flex-col gap-2">
            <span className="text-[11px] font-bold text-[#904d00] uppercase tracking-wider">🌟 1-Click SIH Role Login</span>
            <div className="grid grid-cols-2 gap-2 text-[12px] font-bold">
              <button onClick={() => handleLogin('farmer')} className="p-3 bg-white hover:bg-[#14532d] hover:text-white border border-[#c0c9be] rounded-xl flex items-center gap-2 transition-all">
                <span className="text-xl">🌾</span>
                <div>
                  <p className="leading-tight font-extrabold">Farmer</p>
                  <p className="text-[10px] text-[#404941]">Ramesh (Hooghly)</p>
                </div>
              </button>

              <button onClick={() => handleLogin('fpo')} className="p-3 bg-white hover:bg-[#14532d] hover:text-white border border-[#c0c9be] rounded-xl flex items-center gap-2 transition-all">
                <span className="text-xl">🏡</span>
                <div>
                  <p className="leading-tight font-extrabold">FPO Hub</p>
                  <p className="text-[10px] text-[#404941]">Singur Collective</p>
                </div>
              </button>

              <button onClick={() => handleLogin('buyer')} className="p-3 bg-white hover:bg-[#14532d] hover:text-white border border-[#c0c9be] rounded-xl flex items-center gap-2 transition-all">
                <span className="text-xl">🏪</span>
                <div>
                  <p className="leading-tight font-extrabold">Buyer</p>
                  <p className="text-[10px] text-[#404941]">Kolkata Mandi</p>
                </div>
              </button>

              <button onClick={() => handleLogin('admin')} className="p-3 bg-white hover:bg-[#14532d] hover:text-white border border-[#c0c9be] rounded-xl flex items-center gap-2 transition-all">
                <span className="text-xl">📊</span>
                <div>
                  <p className="leading-tight font-extrabold">Admin Web</p>
                  <p className="text-[10px] text-[#404941]">Command Center</p>
                </div>
              </button>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleLogin(role); }} className="flex flex-col gap-3">
            <div>
              <label className="text-[12px] font-bold text-[#404941]">Phone Number or Email</label>
              <input type="text" defaultValue="buyer@farm2flow.in" className="w-full px-3.5 py-2.5 mt-1 bg-[#eff4ff] border border-[#c0c9be] rounded-xl text-[14px] font-bold" />
            </div>
            <div>
              <label className="text-[12px] font-bold text-[#404941]">Password</label>
              <input type="password" defaultValue="demo1234" className="w-full px-3.5 py-2.5 mt-1 bg-[#eff4ff] border border-[#c0c9be] rounded-xl text-[14px] font-bold" />
            </div>
            <button type="submit" className="w-full py-3.5 bg-[#14532d] text-white rounded-xl text-[15px] font-extrabold hover:bg-[#003b1b] shadow-md mt-1">
              Sign In to Farm2Flow
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. ADMIN WEB COMMAND CENTER
  if (role === 'admin') {
    return (
      <div className="flex w-full min-h-screen bg-[#f8f9ff] text-[#121c2a]">
        <aside className="w-64 bg-[#27313f] text-white p-5 flex flex-col gap-6 shrink-0 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#14532d] text-[#b1f2be] flex items-center justify-center font-bold">F2F</div>
            <div>
              <h1 className="font-bold text-[18px] text-white leading-tight">Farm2Flow</h1>
              <p className="text-[11px] text-gray-300">Admin Command Center</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1 text-[13px] font-bold">
            <button className="px-3 py-2.5 rounded-xl bg-[#14532d] text-white text-left">Dashboard Overview</button>
            <button className="px-3 py-2.5 rounded-xl text-gray-300 hover:bg-white/10 text-left">Farmers & FPOs</button>
            <button className="px-3 py-2.5 rounded-xl text-gray-300 hover:bg-white/10 text-left">Logistics Control Center</button>
          </nav>
          <button onClick={() => setIsLoggedIn(false)} className="mt-auto py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-[12px] font-bold">
            ← Logout / Switch Role
          </button>
        </aside>

        <main className="flex-1 p-8 flex flex-col gap-6">
          <header className="flex justify-between items-center pb-4 border-b border-[#c0c9be]">
            <h1 className="text-[24px] font-extrabold text-[#003b1b]">Agricultural Supply Chain Command Center</h1>
            <button onClick={() => setIsLoggedIn(false)} className="bg-[#14532d] text-white px-4 py-2 rounded-xl text-[13px] font-bold">Sign Out</button>
          </header>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#c0c9be]">
              <span className="text-[11px] text-[#404941] font-bold uppercase">Connected Farmers</span>
              <p className="text-[32px] font-extrabold text-[#003b1b]">1,248</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#c0c9be]">
              <span className="text-[11px] text-[#404941] font-bold uppercase">Produce Traded</span>
              <p className="text-[32px] font-extrabold text-[#003b1b]">482 tonnes</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#c0c9be]">
              <span className="text-[11px] text-[#404941] font-bold uppercase">Farmer Realization</span>
              <p className="text-[32px] font-extrabold text-emerald-700">+17%</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#c0c9be]">
              <span className="text-[11px] text-[#404941] font-bold uppercase">Logistics Savings</span>
              <p className="text-[32px] font-extrabold text-[#904d00]">23%</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 3. FARMER / FPO / BUYER FIELD PWA VIEW
  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] min-h-screen pb-24 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#f8f9ff] flex flex-col border-x border-[#c0c9be] relative shadow-md">
        
        {/* Header */}
        <header className="bg-white border-b border-[#c0c9be] p-4 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-white flex items-center justify-center font-bold">F2F</div>
            <div>
              <h1 className="font-extrabold text-[16px] text-[#003b1b] leading-tight">Farm2Flow PWA</h1>
              <p className="text-[10px] text-[#404941]">From Farm to Market, Smarter</p>
            </div>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-[12px] font-bold text-[#904d00] hover:underline">
            Switch Role
          </button>
        </header>

        {/* Role Bar */}
        <div className="grid grid-cols-3 bg-[#eff4ff] border-b border-[#c0c9be] p-1 text-[12px] font-bold text-center">
          <button onClick={() => { setRole('farmer'); setFarmerTab('home'); }} className={`py-1.5 rounded-md ${role === 'farmer' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🌾 Farmer</button>
          <button onClick={() => setRole('fpo')} className={`py-1.5 rounded-md ${role === 'fpo' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🏡 FPO</button>
          <button onClick={() => { setRole('buyer'); setBuyerTab('home'); }} className={`py-1.5 rounded-md ${role === 'buyer' ? 'bg-[#14532d] text-white' : 'text-[#404941]'}`}>🏪 Buyer</button>
        </div>

        {/* MAIN BODY */}
        <main className="p-4 flex flex-col gap-4">

          {/* FARMER ROLE */}
          {role === 'farmer' && (
            <>
              {farmerTab === 'home' && (
                <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-[12px] font-bold text-[#904d00]">🌟 High Demand Opportunity</span>
                    <span className="bg-emerald-100 text-[#14532d] px-2 py-0.5 rounded-full text-[11px] font-bold">+18% Demand</span>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-extrabold text-[#121c2a]">Tomato (Grade A)</h2>
                    <p className="text-[12px] text-[#404941]">Mandi Rate: ₹28–32 / kg</p>
                  </div>
                  <button onClick={() => setShowWizard(true)} className="w-full py-3 bg-[#14532d] text-white rounded-xl font-bold hover:bg-[#003b1b]">
                    + List Produce for Sale
                  </button>
                </div>
              )}

              {farmerTab === 'sell' && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[16px]">Active Crop Listings</h3>
                    <button onClick={() => setShowWizard(true)} className="bg-[#14532d] text-white px-3 py-1 rounded-lg text-[12px] font-bold">+ Add</button>
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
            </>
          )}

          {/* BUYER ROLE WITH MULTI-FARMER SELECTION OPTION */}
          {role === 'buyer' && (
            <div className="flex flex-col gap-4">
              
              {/* Buyer Overview Card */}
              <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[16px] text-[#003b1b]">Custom Multi-Farmer Procurement</h3>
                  <span className="bg-[#b1f2be] text-[#00210d] px-2.5 py-0.5 rounded-full text-[11px] font-bold">Kolkata Mandi</span>
                </div>
                
                <p className="text-[12px] text-[#404941]">Select exact farmers below or let Smart Match aggregate automatically.</p>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 bg-[#eff4ff] rounded-xl border border-[#c0c9be]">
                    <p className="text-[10px] text-[#404941] font-bold uppercase">Selected Farmers</p>
                    <p className="text-[20px] font-extrabold text-[#14532d]">{selectedItems.length} of {produce.length}</p>
                  </div>
                  <div className="p-2.5 bg-[#eff4ff] rounded-xl border border-[#c0c9be]">
                    <p className="text-[10px] text-[#404941] font-bold uppercase">Combined Volume</p>
                    <p className="text-[20px] font-extrabold text-[#904d00]">{selectedTotalKg.toLocaleString()} kg</p>
                  </div>
                </div>

                <button onClick={() => setShowMatch(true)} className="w-full py-3.5 bg-[#14532d] text-white rounded-xl font-extrabold hover:bg-[#003b1b] shadow-md">
                  Order Selected Farmers ({selectedTotalKg.toLocaleString()} kg • ₹{selectedTotalAmount.toLocaleString()})
                </button>
              </div>

              {/* Interactive Multi-Farmer Selection List */}
              <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[16px]">Select Farmers to Order From</h3>
                  <span className="text-[11px] text-[#904d00] font-bold">Check/uncheck items</span>
                </div>

                {produce.map(item => {
                  const dist = getDistanceKm(item.farmerLocation);
                  const isSelected = selectedProduceIds.includes(item.id);
                  return (
                    <div 
                      key={item.id} 
                      onClick={() => toggleProduceSelection(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected ? 'bg-emerald-50 border-[#14532d] ring-1 ring-[#14532d]' : 'bg-[#eff4ff] border-[#c0c9be] opacity-75'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => {}} // handled by parent div onClick
                          className="w-5 h-5 accent-[#14532d] rounded" 
                        />
                        <div>
                          <p className="font-bold text-[14px] text-[#121c2a]">{item.cropName} ({item.grade})</p>
                          <p className="text-[12px] font-bold text-[#14532d]">{item.farmerName}</p>
                          <p className="text-[11px] text-[#404941] flex items-center gap-1 mt-0.5">
                            <span className="material-symbols-outlined text-[13px] text-[#904d00]">location_on</span>
                            <span>{item.farmerLocation} • <strong>{dist} km away</strong></span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-extrabold text-[15px] text-[#14532d]">{item.quantityKg} kg</p>
                        <p className="text-[12px] font-bold text-[#904d00]">₹{item.expectedPricePerKg}/kg</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Orders */}
              {buyerTab === 'orders' && (
                <div className="bg-white p-4 rounded-xl border border-[#c0c9be] flex flex-col gap-3">
                  <h3 className="font-bold text-[16px]">Track Active Orders</h3>
                  {orders.map(o => (
                    <div key={o.id} className="p-3.5 bg-[#eff4ff] rounded-xl text-[12px] flex flex-col gap-1 border border-[#c0c9be]">
                      <div className="flex justify-between font-bold text-[#14532d]">
                        <span>{o.orderNumber}</span>
                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]">{o.status}</span>
                      </div>
                      <p>Destination: {o.destination}</p>
                      <p className="font-bold text-[14px]">Total Value: ₹{o.totalAmount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        {/* MODAL: Smart Match Summary of Selected Farmers */}
        {showMatch && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4">
            <div className="bg-white w-full max-w-[410px] rounded-2xl p-5 border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">Confirm Order from {selectedItems.length} Farmers</h3>
              
              <div className="bg-emerald-50 p-3.5 rounded-xl text-[12px] border border-emerald-300 flex flex-col gap-1">
                <p className="font-extrabold text-[#14532d] text-[14px]">Selected Total: {selectedTotalKg.toLocaleString()} kg • ₹{selectedTotalAmount.toLocaleString()}</p>
                <p className="text-[#404941]">Direct logistics route will be dispatched to pick up from all selected farm locations.</p>
              </div>

              <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto">
                {selectedItems.map(item => (
                  <div key={item.id} className="p-2.5 bg-[#eff4ff] rounded-lg text-[12px] flex justify-between items-center border border-[#c0c9be]">
                    <div>
                      <p className="font-bold">{item.farmerName} • {item.quantityKg} kg</p>
                      <p className="text-[11px] text-[#904d00]">Distance: {getDistanceKm(item.farmerLocation)} km</p>
                    </div>
                    <span className="font-extrabold text-[#14532d]">₹{item.expectedPricePerKg}/kg</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-1">
                <button type="button" onClick={() => setShowMatch(false)} className="flex-1 py-2.5 bg-gray-200 rounded-xl font-bold">Cancel</button>
                <button type="button" onClick={handleCreateOrder} className="flex-1 py-2.5 bg-[#14532d] text-white rounded-xl font-bold">Confirm & Dispatch</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: List Produce Wizard */}
        {showWizard && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4">
            <div className="bg-white w-full max-w-[400px] rounded-2xl p-5 border border-[#c0c9be] flex flex-col gap-3">
              <h3 className="font-bold text-[16px]">List Produce for Sale</h3>
              <form onSubmit={handleAddProduce} className="flex flex-col gap-3">
                <div>
                  <label className="text-[12px] font-bold">Crop</label>
                  <select value={crop} onChange={e => setCrop(e.target.value)} className="w-full p-2 border rounded-lg font-bold">
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
                  <button type="button" onClick={() => setShowWizard(false)} className="flex-1 py-2.5 bg-gray-200 rounded-xl font-bold">Cancel</button>
                  <button type="submit" className="flex-1 py-2.5 bg-[#14532d] text-white rounded-xl font-bold">List Produce</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        {role === 'buyer' && (
          <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-[#c0c9be] grid grid-cols-4 text-[11px] font-bold text-center py-2 z-40">
            <button onClick={() => setBuyerTab('home')} className={buyerTab === 'home' ? 'text-[#14532d]' : 'text-[#404941]'}>Home</button>
            <button onClick={() => setBuyerTab('browse')} className={buyerTab === 'browse' ? 'text-[#14532d]' : 'text-[#404941]'}>Browse</button>
            <button onClick={() => setShowMatch(true)} className="text-[#904d00]">Buy</button>
            <button onClick={() => setBuyerTab('orders')} className={buyerTab === 'orders' ? 'text-[#14532d]' : 'text-[#404941]'}>Orders</button>
          </nav>
        )}
      </div>
    </div>
  );
}
