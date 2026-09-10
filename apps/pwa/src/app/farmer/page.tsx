'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProduce, getDemandForecast, getPriceEstimate, getOrders, saveProduce, deleteProduce } from '@/services/api';
import { Produce, Order } from '@/types';
import { PredefinedHelpModal } from '@/components/PredefinedHelpModal';
import { ListProduceWizard } from '@/components/ListProduceWizard';
import { CropMarketExplorer } from '@/components/CropMarketExplorer';
import { translations, Language } from '@/data/translations';

export default function FarmerPage() {
  const [language, setLanguage] = useState<Language>('EN');
  const [isOfflineSim, setIsOfflineSim] = useState(false);
  const [offlineNotice, setOfflineNotice] = useState('');
  
  // App Data States
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [selectedCrop, setSelectedCrop] = useState('Tomato');
  const [farmerName, setFarmerName] = useState<string>('Ramesh Ghosh');
  const [currentLocation, setCurrentLocation] = useState<string>('Hooghly (Singur), West Bengal');
  const [farmerAddress, setFarmerAddress] = useState<string>('Singur Vegetable Cluster, Hooghly, WB');
  
  // Modal Visibility States
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isListWizardOpen, setIsListWizardOpen] = useState(false);

  // Active Bottom Navigation Tab for Farmer
  const [farmerTab, setFarmerTab] = useState<'home' | 'market' | 'sell' | 'orders' | 'profile'>('home');

  const t = translations[language] || translations.EN;

  useEffect(() => {
    // Auth Guard: Always require login first
    if (typeof window !== 'undefined') {
      const sessionStr = localStorage.getItem('farm2flow_user_session');
      if (!sessionStr) {
        window.location.href = '/';
        return;
      }
      try {
        const session = JSON.parse(sessionStr);
        if (session.name) setFarmerName(session.name);
        if (session.location) setCurrentLocation(session.location);
        if (session.address) setFarmerAddress(session.address);
      } catch (e) {}
    }
    setProduceList(getStoredProduce());
    setOrdersList(getOrders());

    // Real-time synchronization when produce is listed or updated
    const handleProduceUpdated = (e: any) => {
      if (e?.detail?.produceList) {
        setProduceList(e.detail.produceList);
      } else {
        setProduceList(getStoredProduce());
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'farm2flow_produce_items') {
        setProduceList(getStoredProduce());
      }
    };

    window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleProduceCreated = (newProduce: Produce) => {
    saveProduce(newProduce);
    setProduceList(getStoredProduce());
    if (isOfflineSim) {
      setOfflineNotice("Saved locally. Will sync when network is restored.");
      setTimeout(() => setOfflineNotice(''), 4000);
    }
  };

  const handleDeleteProduce = (produceId: string, cropName: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to remove ${cropName} from your listed produce?`);
    if (!confirmDelete) return;
    const updated = deleteProduce(produceId);
    setProduceList(updated);
    setOfflineNotice(`✓ ${cropName} listing removed in real-time.`);
    setTimeout(() => setOfflineNotice(''), 3000);
  };

  const forecast = getDemandForecast(selectedCrop);
  const priceEst = getPriceEstimate(selectedCrop);

  return (
    <div className="bg-slate-950 text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-slate-50 flex flex-col relative shadow-2xl border-x border-slate-200/80">
        
        {/* Offline Simulation / Connection Banner */}
        <div className={`px-4 py-2 text-[11px] font-bold flex items-center justify-between transition-colors ${
          isOfflineSim ? 'bg-amber-100 text-amber-900 border-b border-amber-300' : 'bg-emerald-900 text-emerald-100'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isOfflineSim ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`}></span>
            <span>
              {isOfflineSim ? t.offlineDraft : t.onlineSync}
            </span>
          </div>
          <button 
            onClick={() => setIsOfflineSim(!isOfflineSim)}
            className="underline hover:opacity-80 text-[11px] font-bold text-emerald-200"
          >
            {isOfflineSim ? t.goOnline : t.simulateOffline}
          </button>
        </div>

        {/* Offline Sync Toast */}
        {offlineNotice && (
          <div className="bg-emerald-800 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300 border-b border-emerald-600">
            {offlineNotice}
          </div>
        )}

        {/* Top Navigation Bar: Farmer Dedicated Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all shadow-xs">
          <div className="flex justify-between items-center w-full px-4 h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-900 to-emerald-700 text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[22px]">agriculture</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-black text-emerald-950 leading-tight tracking-tight">{t.appTitle}</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-emerald-300/60">
                    Farmer
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold">{t.tagline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-slate-100/90 rounded-full p-0.5 flex text-[11px] border border-slate-200 font-bold shadow-xs">
                <button onClick={() => setLanguage('EN')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>EN</button>
                <button onClick={() => setLanguage('BN')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>বাংলা</button>
                <button onClick={() => setLanguage('HI')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>हिन्दी</button>
              </div>

              <button 
                onClick={() => setIsHelpOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 active:scale-95 transition-transform"
                title={t.voiceAssistant}
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </div>
          </div>
        </header>

        {/* Location & Mandi Status Bar */}
        <section className="bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-on-surface max-w-[280px]">
            <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
            <span className="truncate">{currentLocation}</span>
          </div>
          <div className="bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-primary-container shrink-0">
            {t.mandiOpen}
          </div>
        </section>

        {/* MAIN FARMER CONTENT */}
        <main className="p-4 flex flex-col gap-4">
          {farmerTab === 'home' && (
            <>
              {/* Farmer Profile Info */}
              <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl border border-outline-variant">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed-dim text-primary font-extrabold text-base flex items-center justify-center border-2 border-primary">
                    {farmerName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'FM'}
                  </div>
                  <div>
                    <h1 className="text-[16px] font-extrabold text-on-surface leading-tight">{farmerName}</h1>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-md mt-0.5">
                      {t.verifiedFarmer}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsListWizardOpen(true)}
                  className="bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold shadow-xs flex items-center gap-1 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span>{t.sellNav}</span>
                </button>
              </div>

              {/* High Demand Opportunity Card */}
              <section className="bg-surface-container-lowest rounded-xl border-2 border-primary-container p-4 shadow-xs flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                  <span className="text-[11px] text-secondary font-bold uppercase tracking-wider">{t.highDemandOpp}</span>
                  <span className="bg-emerald-100 text-primary-container px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    {t.demandSurge}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-[20px] font-extrabold text-on-surface">{t.tomatoGradeA}</h2>
                    <p className="text-[12px] text-on-surface-variant">{t.hybridRedDesc}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsListWizardOpen(true)}
                  className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  <span>{t.listProduceBtn}</span>
                </button>
              </section>

              {/* Farmer Active Quick Overview */}
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1">
                  <span className="text-on-surface-variant font-bold">{t.activeListings}</span>
                  <span className="text-[20px] font-extrabold text-primary">{produceList.length}</span>
                  <span className="text-[10px] text-emerald-700 font-bold">{t.directToVerified}</span>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1">
                  <span className="text-on-surface-variant font-bold">{t.confirmedOrders}</span>
                  <span className="text-[20px] font-extrabold text-secondary">{ordersList.length}</span>
                  <span className="text-[10px] text-primary-container font-bold">{t.pickupScheduled}</span>
                </div>
              </div>
            </>
          )}

          {farmerTab === 'market' && (
            <CropMarketExplorer
              selectedCrop={selectedCrop}
              onSelectCrop={(crop) => setSelectedCrop(crop)}
              onListProduceClick={(crop) => {
                setSelectedCrop(crop);
                setIsListWizardOpen(true);
              }}
            />
          )}

          {farmerTab === 'sell' && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-bold text-on-surface">{t.myActiveListings}</h3>
                <button
                  onClick={() => setIsListWizardOpen(true)}
                  className="bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span>{t.listProduce}</span>
                </button>
              </div>
              {produceList.map(item => (
                <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs transition-all hover:border-outline">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                      <p className="text-[12px] text-on-surface-variant">{item.farmerLocation} • {item.variety}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold">
                        {item.status}
                      </span>
                      <button
                        onClick={() => handleDeleteProduce(item.id, item.cropName)}
                        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete this listed product"
                        aria-label="Delete listing"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[13px] pt-1.5 border-t border-outline-variant">
                    <span className="font-bold text-on-surface">{item.quantityKg} kg</span>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-primary">₹{item.expectedPricePerKg} / kg</span>
                      <button
                        onClick={() => handleDeleteProduce(item.id, item.cropName)}
                        className="text-[11px] font-bold text-red-600 hover:text-red-800 underline flex items-center gap-0.5"
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {farmerTab === 'orders' && (
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
              <h3 className="text-[16px] font-bold text-on-surface">{t.activeOrdersDispatches}</h3>
              {ordersList.map(ord => (
                <div key={ord.id} className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xl text-[12px] flex flex-col gap-2">
                  <div className="flex justify-between font-bold text-primary">
                    <span className="text-[14px]">{ord.orderNumber}</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]">{ord.status}</span>
                  </div>
                  <p className="text-on-surface-variant">Buyer: <strong className="text-on-surface">{ord.buyerName}</strong></p>
                  <p className="text-on-surface-variant">Destination: {ord.destination}</p>
                  <div className="flex justify-between items-center pt-2 border-t border-outline-variant text-[13px] font-bold text-on-surface">
                    <span>{t.orderValue}</span>
                    <span className="text-primary text-[15px]">₹{ord.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {farmerTab === 'profile' && (
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px]">
              <h3 className="text-[16px] font-bold text-on-surface">{t.farmerProfile}</h3>
              <p><strong>Name:</strong> {farmerName}</p>
              <p><strong>{t.mobile}:</strong> +91 98310 44210</p>
              <p><strong>{t.location}:</strong> {currentLocation}</p>
              <p><strong>Address:</strong> {farmerAddress}</p>
              <p><strong>{t.verification}:</strong> NABARD / e-NAM Verified ✓</p>
              <div className="pt-2 border-t border-outline-variant">
                <button 
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem('farm2flow_user_session');
                      window.location.href = '/login';
                    }
                  }} 
                  className="text-secondary font-bold hover:underline block py-1 text-left w-full cursor-pointer"
                >
                  {t.signOut}
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Farmer Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant grid grid-cols-5 text-[11px] font-bold text-center py-2 z-40 shadow-lg px-2">
          {[
            { id: 'home', icon: 'home', label: t.homeNav },
            { id: 'market', icon: 'analytics', label: t.marketNav },
            { id: 'sell', icon: 'add_circle', label: t.sellNav },
            { id: 'orders', icon: 'local_shipping', label: t.ordersNav },
            { id: 'profile', icon: 'person', label: t.profileNav },
          ].map(item => {
            const isActive = farmerTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setFarmerTab(item.id as any)}
                className={`relative flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-black scale-105'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-2 w-8 h-1 bg-primary rounded-full animate-in fade-in zoom-in duration-200" />
                )}
                <div className={`p-1 rounded-full transition-all ${isActive ? 'bg-primary/15' : ''}`}>
                  <span className={`material-symbols-outlined block text-[22px] ${isActive ? 'fill-current' : ''}`}>
                    {item.icon}
                  </span>
                </div>
                <span className={`text-[10px] tracking-tight ${isActive ? 'font-extrabold text-primary' : 'font-medium'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Modals */}
        <PredefinedHelpModal
          isOpen={isHelpOpen}
          language={language}
          onDetectedLanguage={(newLang) => setLanguage(newLang)}
          onClose={() => setIsHelpOpen(false)}
          onSelectAction={(actionKey, params) => {
            if (actionKey === 'sell') {
              if (params?.crop) setSelectedCrop(params.crop);
              setIsListWizardOpen(true);
            }
            if (actionKey === 'prices' || actionKey === 'market') setFarmerTab('market');
            if (actionKey === 'track') setFarmerTab('orders');
          }}
        />

        <ListProduceWizard
          isOpen={isListWizardOpen}
          initialCrop={selectedCrop}
          language={language}
          onClose={() => setIsListWizardOpen(false)}
          onSuccess={handleProduceCreated}
        />
      </div>
    </div>
  );
}
