'use client';

import React, { useState, useEffect } from 'react';
import { getStoredProduce, getDemandForecast, getPriceEstimate, getLogisticsOptimization, getImpactMetrics, getOrders, saveProduce } from '@/services/api';
import { Produce, Order } from '@/types';
import { PredefinedHelpModal } from '@/components/PredefinedHelpModal';
import { ListProduceWizard } from '@/components/ListProduceWizard';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';

export default function Farm2FlowApp() {
  // Navigation & Role States
  const [role, setRole] = useState<'farmer' | 'buyer' | 'admin'>('farmer');
  const [language, setLanguage] = useState<'EN' | 'BN' | 'HI'>('EN');
  const [isOfflineSim, setIsOfflineSim] = useState(false);
  const [offlineNotice, setOfflineNotice] = useState('');
  
  // App Data States
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [selectedCrop, setSelectedCrop] = useState('Tomato');
  
  // Modal Visibility States
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isListWizardOpen, setIsListWizardOpen] = useState(false);
  const [isSmartMatchOpen, setIsSmartMatchOpen] = useState(false);
  const [isPwaInstalled, setIsPwaInstalled] = useState(false);
  const [showPwaBanner, setShowPwaBanner] = useState(true);

  // Active View Tab inside role
  const [farmerTab, setFarmerTab] = useState<'dashboard' | 'listings' | 'earnings'>('dashboard');

  useEffect(() => {
    // Initial data hydration
    setProduceList(getStoredProduce());
    setOrdersList(getOrders());

    // Service worker registration
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW reg error:', err));
    }
  }, []);

  const handleProduceCreated = (newProduce: Produce) => {
    const updated = saveProduce(newProduce);
    setProduceList(getStoredProduce());
    if (isOfflineSim) {
      setOfflineNotice("Saved. Will sync when you're back online.");
      setTimeout(() => setOfflineNotice(''), 4000);
    }
  };

  const handleOrderCreated = (newOrder: Order) => {
    setOrdersList(getOrders());
    setRole('buyer');
  };

  // Automated SIH Presentation Demo Sequence
  const runSihDemoSequence = () => {
    // Step 1: Login as Farmer & Show High Demand
    setRole('farmer');
    setFarmerTab('dashboard');
    setSelectedCrop('Tomato');

    // Step 2: List Produce Wizard automatically
    setTimeout(() => {
      setIsListWizardOpen(true);
    }, 800);
  };

  const forecast = getDemandForecast(selectedCrop);
  const priceEst = getPriceEstimate(selectedCrop);
  const logistics = getLogisticsOptimization();
  const impact = getImpactMetrics();

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-surface flex flex-col relative shadow-md border-x border-outline-variant">
        
        {/* Connection & Sync Status Banner */}
        <div className={`px-4 py-2 text-[11px] font-bold flex items-center justify-between transition-colors ${
          isOfflineSim ? 'bg-amber-100 text-amber-900 border-b border-amber-300' : 'bg-secondary-fixed text-on-secondary-fixed-variant'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isOfflineSim ? 'bg-amber-600' : 'bg-emerald-600 animate-pulse'}`}></span>
            <span>
              {isOfflineSim ? "You're offline • Cached Mode" : "Online • Direct Sync Active"}
            </span>
          </div>
          <button 
            onClick={() => setIsOfflineSim(!isOfflineSim)}
            className="underline hover:opacity-80 text-[11px]"
          >
            {isOfflineSim ? 'Go Online' : 'Simulate Offline'}
          </button>
        </div>

        {/* Local Offline Sync Message Notice */}
        {offlineNotice && (
          <div className="bg-emerald-700 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300">
            {offlineNotice}
          </div>
        )}

        {/* PWA Installation Prompt */}
        {showPwaBanner && (
          <div className="bg-surface-container-lowest border-b border-outline-variant px-4 py-2.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 font-bold text-sm">
                F2F
              </div>
              <div>
                <p className="font-bold text-[13px] text-on-surface leading-tight">Install Farm2Flow PWA</p>
                <p className="text-on-surface-variant text-[11px] leading-tight">Fast low-2G offline mandi rates</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => {
                  setIsPwaInstalled(true);
                  setShowPwaBanner(false);
                }}
                className="bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold active:scale-95 transition-transform"
              >
                {isPwaInstalled ? 'Installed' : 'Install App'}
              </button>
              <button onClick={() => setShowPwaBanner(false)} className="text-on-surface-variant w-7 h-7 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        )}

        {/* SIH 2026 Presentation Quick Demo Launcher Bar */}
        <div className="bg-primary-container text-on-primary px-3 py-1.5 flex items-center justify-between text-[11px] font-bold">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">play_circle</span>
            SIH 2026 PS 26033 Demo Mode
          </span>
          <button
            onClick={runSihDemoSequence}
            className="bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full hover:bg-secondary-container text-[11px] active:scale-95"
          >
            Start 1-Click Demo
          </button>
        </div>

        {/* Top Navigation Bar */}
        <header className="bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="flex justify-between items-center w-full px-4 h-14">
            {/* Brand Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">agriculture</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-primary leading-tight">Farm2Flow</span>
                <span className="text-[10px] text-on-surface-variant">From Farm to Market, Smarter</span>
              </div>
            </div>

            {/* Language & Voice Assistant Action */}
            <div className="flex items-center gap-2">
              <div className="bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold">
                <button onClick={() => setLanguage('EN')} className={`px-2 py-0.5 rounded-full ${language === 'EN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>EN</button>
                <button onClick={() => setLanguage('BN')} className={`px-1.5 py-0.5 rounded-full ${language === 'BN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>বাংলা</button>
                <button onClick={() => setLanguage('HI')} className={`px-1.5 py-0.5 rounded-full ${language === 'HI' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>हिन्दी</button>
              </div>

              <button 
                onClick={() => setIsHelpOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-container-high text-primary hover:bg-surface-container active:scale-95 transition-transform"
                title="Voice & Help Assistant"
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </div>
          </div>

          {/* Role Switcher Bar */}
          <div className="grid grid-cols-3 bg-surface-container-low border-t border-outline-variant px-2 py-1 text-[13px] font-bold text-center">
            <button
              onClick={() => setRole('farmer')}
              className={`py-1.5 rounded-md transition-all ${role === 'farmer' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              🌾 Farmer
            </button>
            <button
              onClick={() => setRole('buyer')}
              className={`py-1.5 rounded-md transition-all ${role === 'buyer' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              🏪 Buyer
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`py-1.5 rounded-md transition-all ${role === 'admin' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              📊 Admin Impact
            </button>
          </div>
        </header>

        {/* Location Strip */}
        <section className="bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[12px]">
          <div className="flex items-center gap-1 font-bold text-on-surface">
            <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
            <span>Hooghly, West Bengal</span>
          </div>
          <div className="bg-surface-container-lowest px-2.5 py-0.5 rounded-full border border-outline-variant font-bold text-primary-container">
            Mandi Status: Open
          </div>
        </section>

        {/* MAIN CONTENT ROLE ROUTER */}
        <main className="p-4 flex flex-col gap-4">

          {/* ===================== 1. FARMER ROLE FLOW ===================== */}
          {role === 'farmer' && (
            <>
              {/* Farmer Profile welcome bar */}
              <div className="flex items-center justify-between bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-fixed-dim text-primary font-bold text-lg flex items-center justify-center border-2 border-primary">
                    RG
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold text-on-surface leading-tight">Ramesh Ghosh</h1>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-md mt-0.5">
                      ✓ NABARD / e-NAM Verified Farmer
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-tabs for Farmer */}
              <div className="flex gap-2 border-b border-outline-variant pb-2">
                <button
                  onClick={() => setFarmerTab('dashboard')}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-bold ${farmerTab === 'dashboard' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setFarmerTab('listings')}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-bold ${farmerTab === 'listings' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}
                >
                  My Listings ({produceList.filter(p => p.farmerId === 'f-101').length})
                </button>
                <button
                  onClick={() => setFarmerTab('earnings')}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-bold ${farmerTab === 'earnings' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}
                >
                  Earnings (+₹8,400)
                </button>
              </div>

              {farmerTab === 'dashboard' && (
                <>
                  {/* Hero Opportunity Card */}
                  <section className="bg-surface-container-lowest rounded-xl border-2 border-primary-container p-4 shadow-xs flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                      <span className="text-[12px] text-secondary font-bold uppercase tracking-wider">🌟 High Demand Today</span>
                      <span className="bg-emerald-100 text-primary-container px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                        +{forecast.percentageChange}% Demand
                      </span>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-[20px] font-bold text-on-surface">Tomato (Grade A)</h2>
                        <p className="text-[12px] text-on-surface-variant">Hybrid Red • Firm Harvest Ready</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-on-surface-variant">Estimated Mandi Rate</span>
                        <p className="text-[24px] font-extrabold text-primary-container leading-none">
                          ₹{priceEst.suggestedMin}–{priceEst.suggestedMax} <span className="text-[12px] font-normal">/kg</span>
                        </p>
                      </div>
                    </div>

                    {/* AI Recommendation Banner */}
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">smart_toy</span>
                      <div>
                        <p className="text-[12px] font-bold text-on-surface">AI Demand Recommendation</p>
                        <p className="text-[12px] text-on-surface-variant mt-0.5">"{forecast.recommendation}"</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsListWizardOpen(true)}
                      className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[20px]">add_circle</span>
                      <span>List Produce for Sale</span>
                    </button>
                  </section>

                  {/* Market Intelligence Summary */}
                  <section className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-2">
                    <h3 className="text-[15px] font-bold text-on-surface">Market Intelligence</h3>
                    <div className="grid grid-cols-2 gap-2 text-[12px]">
                      <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                        <p className="text-on-surface-variant">Current Demand</p>
                        <p className="font-bold text-on-surface">{forecast.currentDemandTonnes} tonnes/week</p>
                      </div>
                      <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                        <p className="text-on-surface-variant">Forecast Demand</p>
                        <p className="font-bold text-primary">{forecast.forecastDemandTonnes} tonnes/week</p>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {farmerTab === 'listings' && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[16px] font-bold text-on-surface">Active Crop Listings</h3>
                    <button
                      onClick={() => setIsListWizardOpen(true)}
                      className="bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold"
                    >
                      + Add New
                    </button>
                  </div>

                  {produceList.map(item => (
                    <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                          <p className="text-[12px] text-on-surface-variant">{item.farmerLocation} • Listed {new Date(item.createdAt).toLocaleDateString()}</p>
                        </div>
                        <span className="bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[13px] pt-1 border-t border-outline-variant">
                        <span className="font-bold text-on-surface">{item.quantityKg} kg available</span>
                        <span className="font-extrabold text-primary">₹{item.expectedPricePerKg} / kg</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {farmerTab === 'earnings' && (
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                  <h3 className="text-[16px] font-bold text-on-surface">Earnings Summary</h3>
                  <div className="p-4 bg-primary-container text-on-primary rounded-xl flex flex-col gap-1">
                    <span className="text-[12px] opacity-80">Total Realized Payout</span>
                    <span className="text-[28px] font-extrabold">₹58,400</span>
                    <span className="text-[11px] text-primary-fixed">Direct bank credit via e-NAM • Zero Middlemen Commission</span>
                  </div>
                  <div className="text-[12px] space-y-2">
                    <div className="flex justify-between py-1 border-b border-outline-variant">
                      <span>Order #FF2048 (800kg Tomato)</span>
                      <span className="font-bold text-primary">₹24,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant">
                      <span>Order #FF1980 (1200kg Potato)</span>
                      <span className="font-bold text-primary">₹21,600</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ===================== 2. BUYER ROLE FLOW ===================== */}
          {role === 'buyer' && (
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] font-bold text-on-surface">Buyer Marketplace</h2>
                  <span className="bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    Kolkata Mandi Buyer
                  </span>
                </div>
                <p className="text-[12px] text-on-surface-variant">Find direct verified farmers & FPOs without intermediaries.</p>

                <button
                  onClick={() => setIsSmartMatchOpen(true)}
                  className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  <span>Run Smart Matching Engine (2,000 kg)</span>
                </button>
              </div>

              {/* Active Orders Track */}
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <h3 className="text-[16px] font-bold text-on-surface">Track Logistics Orders</h3>
                {ordersList.map(ord => (
                  <div key={ord.id} className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary text-[14px]">{ord.orderNumber}</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[11px] font-bold">
                        {ord.status}
                      </span>
                    </div>
                    <div className="text-[12px] text-on-surface-variant">
                      <p><strong className="text-on-surface">Quantity:</strong> {ord.totalQuantityKg} kg Tomato</p>
                      <p><strong className="text-on-surface">Destination:</strong> {ord.destination}</p>
                      <p><strong className="text-on-surface">Expected Delivery:</strong> {ord.expectedDelivery}</p>
                    </div>
                    <div className="flex justify-between items-center text-[13px] font-bold text-on-surface pt-2 border-t border-outline-variant">
                      <span>Total Amount</span>
                      <span className="text-primary text-[16px]">₹{ord.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Logistics Optimization Card */}
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <h3 className="text-[16px] font-bold text-on-surface">Smart Route Logistics Optimization</h3>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div className="p-2.5 bg-red-50 text-red-900 rounded-lg border border-red-200">
                    <p className="font-bold">Before Optimization</p>
                    <p>Distance: {logistics.before.distanceKm} km</p>
                    <p>Cost: ₹{logistics.before.estimatedCostRs}</p>
                    <p>Vehicles: {logistics.before.vehiclesCount}</p>
                  </div>
                  <div className="p-2.5 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-200">
                    <p className="font-bold">Optimized Route</p>
                    <p>Distance: {logistics.optimized.distanceKm} km</p>
                    <p>Cost: ₹{logistics.optimized.estimatedCostRs}</p>
                    <p>Vehicles: {logistics.optimized.vehiclesCount}</p>
                  </div>
                </div>
                <div className="p-2.5 bg-primary-container text-on-primary rounded-lg text-center font-bold text-[13px]">
                  Estimated Logistics Saving: ₹{logistics.savingsRs} ({logistics.savingsPct}%)
                </div>
              </div>
            </div>
          )}

          {/* ===================== 3. ADMIN IMPACT ROLE FLOW ===================== */}
          {role === 'admin' && (
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <h2 className="text-[18px] font-bold text-on-surface">SIH Aggregate Impact Dashboard</h2>
                <p className="text-[12px] text-on-surface-variant">Real-time simulation metrics connecting farmers directly to mandis.</p>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant">
                    <span className="text-[11px] text-on-surface-variant font-bold uppercase">Farmers Connected</span>
                    <p className="text-[24px] font-extrabold text-primary">{impact.farmersConnected.toLocaleString()}</p>
                  </div>
                  <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant">
                    <span className="text-[11px] text-on-surface-variant font-bold uppercase">Produce Traded</span>
                    <p className="text-[24px] font-extrabold text-primary">{impact.produceTradedTonnes} tonnes</p>
                  </div>
                  <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant">
                    <span className="text-[11px] text-on-surface-variant font-bold uppercase">Farmer Realization</span>
                    <p className="text-[24px] font-extrabold text-emerald-700">+{impact.farmerRealizationPct}%</p>
                  </div>
                  <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant">
                    <span className="text-[11px] text-on-surface-variant font-bold uppercase">Logistics Savings</span>
                    <p className="text-[24px] font-extrabold text-secondary">{impact.logisticsSavingsPct}%</p>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-high rounded-xl border border-outline-variant text-[12px] text-center font-bold text-on-surface">
                  Over {impact.middlemenEliminated} levels of intermediaries eliminated per transaction!
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Modals */}
        <PredefinedHelpModal
          isOpen={isHelpOpen}
          onClose={() => setIsHelpOpen(false)}
          onSelectAction={(actionKey) => {
            if (actionKey === 'sell') setIsListWizardOpen(true);
            if (actionKey === 'buyers') setIsSmartMatchOpen(true);
            if (actionKey === 'track') setRole('buyer');
            if (actionKey === 'prices') { setRole('farmer'); setFarmerTab('dashboard'); }
          }}
        />

        <ListProduceWizard
          isOpen={isListWizardOpen}
          onClose={() => setIsListWizardOpen(false)}
          onSuccess={handleProduceCreated}
        />

        <BuyerSmartMatchModal
          isOpen={isSmartMatchOpen}
          onClose={() => setIsSmartMatchOpen(false)}
          onOrderCreated={handleOrderCreated}
        />
      </div>
    </div>
  );
}
