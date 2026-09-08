'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getStoredProduce, getDemandForecast, getPriceEstimate, getLogisticsOptimization, getImpactMetrics, getOrders, saveProduce } from '@/services/api';
import { Produce, Order } from '@/types';
import { PredefinedHelpModal } from '@/components/PredefinedHelpModal';
import { ListProduceWizard } from '@/components/ListProduceWizard';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';

export default function Farm2FlowApp() {
  const searchParams = useSearchParams();
  const initialRoleParam = searchParams.get('role') as 'farmer' | 'fpo' | 'buyer' | 'consumer' | null;

  // Role & Authentication States
  const [role, setRole] = useState<'farmer' | 'fpo' | 'buyer' | 'consumer'>(initialRoleParam || 'farmer');
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

  // Active Bottom Navigation Tab per Role (PRD Section 3, 4, 5)
  const [farmerTab, setFarmerTab] = useState<'home' | 'market' | 'sell' | 'orders' | 'profile'>('home');
  const [buyerTab, setBuyerTab] = useState<'home' | 'browse' | 'buy' | 'orders' | 'profile'>('home');
  const [fpoTab, setFpoTab] = useState<'home' | 'supply' | 'opportunities' | 'orders' | 'profile'>('home');

  useEffect(() => {
    // Initial data hydration
    setProduceList(getStoredProduce());
    setOrdersList(getOrders());

    // Update role if search param changes
    if (initialRoleParam) {
      setRole(initialRoleParam);
    }
  }, [initialRoleParam]);

  const handleProduceCreated = (newProduce: Produce) => {
    saveProduce(newProduce);
    setProduceList(getStoredProduce());
    if (isOfflineSim) {
      setOfflineNotice("Saved locally. Will sync when network is restored.");
      setTimeout(() => setOfflineNotice(''), 4000);
    }
  };

  const handleOrderCreated = (newOrder: Order) => {
    setOrdersList(getOrders());
    setRole('buyer');
    setBuyerTab('orders');
  };

  // SIH 2026 Presentation Demo Launch Sequence
  const runSihDemoSequence = () => {
    setRole('farmer');
    setFarmerTab('home');
    setSelectedCrop('Tomato');
    setTimeout(() => {
      setIsListWizardOpen(true);
    }, 600);
  };

  const forecast = getDemandForecast(selectedCrop);
  const priceEst = getPriceEstimate(selectedCrop);
  const logistics = getLogisticsOptimization();
  const impact = getImpactMetrics();

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-surface flex flex-col relative shadow-md border-x border-outline-variant">
        
        {/* Offline Simulation / Connection Banner */}
        <div className={`px-4 py-2 text-[11px] font-bold flex items-center justify-between transition-colors ${
          isOfflineSim ? 'bg-amber-100 text-amber-900 border-b border-amber-300' : 'bg-secondary-fixed text-on-secondary-fixed-variant'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isOfflineSim ? 'bg-amber-600' : 'bg-emerald-600 animate-pulse'}`}></span>
            <span>
              {isOfflineSim ? "Offline Draft Mode • Changes Queued" : "PWA Online • Direct Sync Active"}
            </span>
          </div>
          <button 
            onClick={() => setIsOfflineSim(!isOfflineSim)}
            className="underline hover:opacity-80 text-[11px]"
          >
            {isOfflineSim ? 'Go Online' : 'Simulate Offline'}
          </button>
        </div>

        {/* Offline Sync Toast */}
        {offlineNotice && (
          <div className="bg-emerald-700 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300">
            {offlineNotice}
          </div>
        )}

        {/* SIH Demo Quick Bar */}
        <div className="bg-primary-container text-on-primary px-3 py-1.5 flex items-center justify-between text-[11px] font-bold">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">play_circle</span>
            SIH 2026 PS 26033 Demo Mode
          </span>
          <button
            onClick={runSihDemoSequence}
            className="bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full hover:bg-secondary-container text-[11px] active:scale-95"
          >
            1-Click SIH Presentation
          </button>
        </div>

        {/* Top Header */}
        <header className="bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="flex justify-between items-center w-full px-4 h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">agriculture</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-extrabold text-primary leading-tight">Farm2Flow</span>
                <span className="text-[10px] text-on-surface-variant font-bold">From Farm to Market, Smarter</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold">
                <button onClick={() => setLanguage('EN')} className={`px-2 py-0.5 rounded-full ${language === 'EN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>EN</button>
                <button onClick={() => setLanguage('BN')} className={`px-1.5 py-0.5 rounded-full ${language === 'BN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>বাংলা</button>
                <button onClick={() => setLanguage('HI')} className={`px-1.5 py-0.5 rounded-full ${language === 'HI' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`}>हिन्दी</button>
              </div>

              <button 
                onClick={() => setIsHelpOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-container-high text-primary hover:bg-surface-container active:scale-95 transition-transform"
                title="Voice Assistant"
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </div>
          </div>

          {/* Role Switcher Bar */}
          <div className="grid grid-cols-4 bg-surface-container-low border-t border-outline-variant px-1 py-1 text-[11px] font-bold text-center">
            <button
              onClick={() => { setRole('farmer'); setFarmerTab('home'); }}
              className={`py-1.5 rounded-md transition-all ${role === 'farmer' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              🌾 Farmer
            </button>
            <button
              onClick={() => { setRole('fpo'); setFpoTab('home'); }}
              className={`py-1.5 rounded-md transition-all ${role === 'fpo' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              🏡 FPO
            </button>
            <button
              onClick={() => { setRole('buyer'); setBuyerTab('home'); }}
              className={`py-1.5 rounded-md transition-all ${role === 'buyer' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
            >
              🏪 Buyer
            </button>
            <a
              href="/login"
              className="py-1.5 rounded-md text-secondary hover:bg-surface-container-high transition-all flex items-center justify-center gap-0.5"
            >
              🔑 Login
            </a>
          </div>
        </header>

        {/* Location & Mandi Status Bar */}
        <section className="bg-surface-container-low px-4 py-1.5 flex items-center justify-between border-b border-outline-variant text-[11px]">
          <div className="flex items-center gap-1 font-bold text-on-surface">
            <span className="material-symbols-outlined text-[15px] text-secondary">location_on</span>
            <span>Hooghly, West Bengal</span>
          </div>
          <div className="bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-primary-container">
            Mandi: Open
          </div>
        </section>

        {/* MAIN ROLE ROUTER */}
        <main className="p-4 flex flex-col gap-4">

          {/* ==================== 1. FARMER ROLE ==================== */}
          {role === 'farmer' && (
            <>
              {farmerTab === 'home' && (
                <>
                  {/* Farmer Welcome Profile Bar */}
                  <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl border border-outline-variant">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed-dim text-primary font-extrabold text-base flex items-center justify-center border-2 border-primary">
                        RG
                      </div>
                      <div>
                        <h1 className="text-[16px] font-extrabold text-on-surface leading-tight">Ramesh Ghosh</h1>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-md mt-0.5">
                          ✓ NABARD / e-NAM Verified Farmer
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Hero Opportunity Card (PRD Section 3) */}
                  <section className="bg-surface-container-lowest rounded-xl border-2 border-primary-container p-4 shadow-xs flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                      <span className="text-[11px] text-secondary font-bold uppercase tracking-wider">🌟 High Demand Opportunity</span>
                      <span className="bg-emerald-100 text-primary-container px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                        +{forecast.percentageChange}% Demand
                      </span>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-[20px] font-extrabold text-on-surface">Tomato (Grade A)</h2>
                        <p className="text-[12px] text-on-surface-variant">Hybrid Red • Firm Harvest Ready</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-on-surface-variant">Estimated Fair Rate</span>
                        <p className="text-[24px] font-extrabold text-primary-container leading-none">
                          ₹{priceEst.suggestedMin}–{priceEst.suggestedMax} <span className="text-[12px] font-normal">/kg</span>
                        </p>
                      </div>
                    </div>

                    {/* AI Recommendation Banner */}
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant flex items-start gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">smart_toy</span>
                      <div>
                        <p className="text-[12px] font-bold text-on-surface">AI Recommendation</p>
                        <p className="text-[11px] text-on-surface-variant mt-0.5">"{forecast.recommendation}"</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsListWizardOpen(true)}
                      className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
                    >
                      <span className="material-symbols-outlined text-[20px]">add_circle</span>
                      <span>List My Produce for Sale</span>
                    </button>
                  </section>
                </>
              )}

              {farmerTab === 'market' && (
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                  <h3 className="text-[16px] font-bold text-on-surface">Market Intelligence</h3>
                  <div className="grid grid-cols-2 gap-2 text-[12px]">
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
                      <p className="text-on-surface-variant">Current Demand</p>
                      <p className="font-bold text-on-surface text-[14px]">{forecast.currentDemandTonnes} tonnes/week</p>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
                      <p className="text-on-surface-variant">Forecast Demand</p>
                      <p className="font-bold text-primary text-[14px]">{forecast.forecastDemandTonnes} tonnes/week</p>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]">
                    <p className="font-bold text-emerald-900">Direct Farm2Flow Price Realization:</p>
                    <p className="text-emerald-800 mt-1">Farmer: ₹30/kg → Buyer: ₹35/kg (Eliminates ₹15/kg middlemen spread!)</p>
                  </div>
                </div>
              )}

              {farmerTab === 'sell' && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[16px] font-bold text-on-surface">My Active Listings</h3>
                    <button
                      onClick={() => setIsListWizardOpen(true)}
                      className="bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold"
                    >
                      + List Produce
                    </button>
                  </div>
                  {produceList.map(item => (
                    <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                          <p className="text-[12px] text-on-surface-variant">{item.farmerLocation}</p>
                        </div>
                        <span className="bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[13px] pt-1 border-t border-outline-variant">
                        <span className="font-bold text-on-surface">{item.quantityKg} kg</span>
                        <span className="font-extrabold text-primary">₹{item.expectedPricePerKg} / kg</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {farmerTab === 'orders' && (
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                  <h3 className="text-[16px] font-bold text-on-surface">Active Orders & Dispatches</h3>
                  {ordersList.map(ord => (
                    <div key={ord.id} className="p-3 bg-surface-container-low border border-outline-variant rounded-xl text-[12px] flex flex-col gap-1">
                      <div className="flex justify-between font-bold text-primary">
                        <span>{ord.orderNumber}</span>
                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]">{ord.status}</span>
                      </div>
                      <p>Destination: {ord.destination}</p>
                      <p className="font-bold text-on-surface mt-1">Order Value: ₹{ord.totalAmount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )}

              {farmerTab === 'profile' && (
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px]">
                  <h3 className="text-[16px] font-bold text-on-surface">Farmer Profile</h3>
                  <p><strong>Name:</strong> Ramesh Ghosh</p>
                  <p><strong>Location:</strong> Hooghly, West Bengal</p>
                  <p><strong>FPO Membership:</strong> Hooghly Agri Producers Cooperative</p>
                  <p><strong>Verification:</strong> NABARD / e-NAM Verified ✓</p>
                </div>
              )}

              {/* Farmer Bottom Navigation (PRD Section 3) */}
              <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-5 text-[10px] font-bold text-center py-2 z-40">
                <button onClick={() => setFarmerTab('home')} className={farmerTab === 'home' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">home</span>Home
                </button>
                <button onClick={() => setFarmerTab('market')} className={farmerTab === 'market' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">analytics</span>Market
                </button>
                <button onClick={() => setFarmerTab('sell')} className={farmerTab === 'sell' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">add_circle</span>Sell
                </button>
                <button onClick={() => setFarmerTab('orders')} className={farmerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">local_shipping</span>Orders
                </button>
                <button onClick={() => setFarmerTab('profile')} className={farmerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">person</span>Profile
                </button>
              </nav>
            </>
          )}

          {/* ==================== 2. FPO ROLE ==================== */}
          {role === 'fpo' && (
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] font-bold text-on-surface">FPO Member Aggregation Hub</h2>
                  <span className="bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    Singur Hub (42 Members)
                  </span>
                </div>
                <p className="text-[12px] text-on-surface-variant">Aggregate smallholder member produce into bulk lots for large buyer requirements.</p>

                <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant text-[12px] flex flex-col gap-1">
                  <p className="font-bold text-on-surface">Pooled Member Supply Available:</p>
                  <p>• Tomato (Grade A): <strong>1,700 kg aggregated</strong></p>
                  <p>• Potato (Jyoti): <strong>3,500 kg aggregated</strong></p>
                </div>

                <button
                  onClick={() => setIsSmartMatchOpen(true)}
                  className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[13px] font-bold hover:bg-primary transition-all shadow-md"
                >
                  Match Aggregated FPO Supply to Buyer Orders
                </button>
              </div>
            </div>
          )}

          {/* ==================== 3. BUYER ROLE ==================== */}
          {role === 'buyer' && (
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <h2 className="text-[18px] font-bold text-on-surface">Buyer Marketplace & Procurement</h2>
                <p className="text-[12px] text-on-surface-variant">Direct procurement from verified regional farmers & FPOs.</p>

                <button
                  onClick={() => setIsSmartMatchOpen(true)}
                  className="w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-extrabold hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  <span>Create Bulk Requirement & Run Smart Match</span>
                </button>
              </div>

              {/* Active Logistics Tracking */}
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                <h3 className="text-[16px] font-bold text-on-surface">Track Active Orders</h3>
                {ordersList.map(ord => (
                  <div key={ord.id} className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary text-[14px]">{ord.orderNumber}</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[11px] font-bold">{ord.status}</span>
                    </div>
                    <div className="text-[12px] text-on-surface-variant">
                      <p><strong className="text-on-surface">Quantity:</strong> {ord.totalQuantityKg} kg</p>
                      <p><strong className="text-on-surface">Destination:</strong> {ord.destination}</p>
                    </div>
                    <div className="flex justify-between items-center text-[13px] font-bold text-on-surface pt-2 border-t border-outline-variant">
                      <span>Total Value</span>
                      <span className="text-primary text-[16px]">₹{ord.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buyer Bottom Navigation (PRD Section 5) */}
              <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-5 text-[10px] font-bold text-center py-2 z-40">
                <button onClick={() => setBuyerTab('home')} className={buyerTab === 'home' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">home</span>Home
                </button>
                <button onClick={() => setBuyerTab('browse')} className={buyerTab === 'browse' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">search</span>Browse
                </button>
                <button onClick={() => setIsSmartMatchOpen(true)} className="text-secondary font-bold">
                  <span className="material-symbols-outlined block text-[20px]">handshake</span>Buy
                </button>
                <button onClick={() => setBuyerTab('orders')} className={buyerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">local_shipping</span>Orders
                </button>
                <button onClick={() => setBuyerTab('profile')} className={buyerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant'}>
                  <span className="material-symbols-outlined block text-[20px]">person</span>Profile
                </button>
              </nav>
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
            if (actionKey === 'prices') setRole('farmer');
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
