'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProduce, getDemandForecast, getPriceEstimate, getOrders, saveProduce } from '@/services/api';
import { Produce, Order } from '@/types';
import { PredefinedHelpModal } from '@/components/PredefinedHelpModal';
import { ListProduceWizard } from '@/components/ListProduceWizard';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
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
  const [isMapOpen, setIsMapOpen] = useState(false);

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
  }, []);

  const handleProduceCreated = (newProduce: Produce) => {
    saveProduce(newProduce);
    setProduceList(getStoredProduce());
    if (isOfflineSim) {
      setOfflineNotice("Saved locally. Will sync when network is restored.");
      setTimeout(() => setOfflineNotice(''), 4000);
    }
  };

  const forecast = getDemandForecast(selectedCrop);
  const priceEst = getPriceEstimate(selectedCrop);

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
              {isOfflineSim ? t.offlineDraft : t.onlineSync}
            </span>
          </div>
          <button 
            onClick={() => setIsOfflineSim(!isOfflineSim)}
            className="underline hover:opacity-80 text-[11px]"
          >
            {isOfflineSim ? t.goOnline : t.simulateOffline}
          </button>
        </div>

        {/* Offline Sync Toast */}
        {offlineNotice && (
          <div className="bg-emerald-700 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300">
            {offlineNotice}
          </div>
        )}

        {/* Top Navigation Bar: Farmer Dedicated Header */}
        <header className="bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="flex justify-between items-center w-full px-4 h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">agriculture</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-extrabold text-primary leading-tight">{t.appTitle}</span>
                  <span className="text-[10px] bg-primary-container text-on-primary font-bold px-1.5 py-0.2 rounded">{t.farmerRole}</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-bold">{t.tagline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold">
                <button onClick={() => setLanguage('EN')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}>EN</button>
                <button onClick={() => setLanguage('BN')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}>বাংলা</button>
                <button onClick={() => setLanguage('HI')} className={`px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}>हिन्दी</button>
              </div>

              <button 
                onClick={() => setIsHelpOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-container-high text-primary hover:bg-surface-container active:scale-95 transition-transform"
                title={t.voiceAssistant}
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </div>
          </div>
        </header>

        {/* Location & Mandi Status Bar with InDrive Map Access */}
        <section className="bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[11px]">
          <button 
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-1.5 font-bold text-on-surface hover:text-primary transition-colors text-left max-w-[280px]"
            title="Open Interactive Map (InDrive style)"
          >
            <span className="material-symbols-outlined text-[18px] text-primary animate-pulse">location_on</span>
            <span className="truncate underline decoration-dotted">{currentLocation}</span>
            <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-md uppercase font-extrabold shrink-0">Map</span>
          </button>
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
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
              <h3 className="text-[16px] font-bold text-on-surface">{t.marketIntel}</h3>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
                  <p className="text-on-surface-variant">{t.currentMandiDemand}</p>
                  <p className="font-bold text-on-surface text-[14px]">{forecast.currentDemandTonnes} tonnes/week</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
                  <p className="text-on-surface-variant">{t.forecastDemand}</p>
                  <p className="font-bold text-primary text-[14px]">{forecast.forecastDemandTonnes} tonnes/week</p>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]">
                <p className="font-bold text-emerald-900">{t.directPriceRealization}</p>
                <p className="text-emerald-800 mt-1">{t.directPriceDesc}</p>
              </div>

              <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant flex flex-col gap-2">
                <span className="font-bold text-[13px] text-on-surface">{t.cropSelection}</span>
                <div className="flex gap-2">
                  {['Tomato', 'Potato'].map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCrop(c)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-bold ${
                        selectedCrop === c ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
                <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                      <p className="text-[12px] text-on-surface-variant">{item.farmerLocation} • {item.variety}</p>
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
                <Link href="/" className="text-secondary font-bold hover:underline block py-1">
                  {t.signOut}
                </Link>
              </div>
            </div>
          )}
        </main>

        {/* Farmer Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-5 text-[10px] font-bold text-center py-2 z-40">
          <button onClick={() => setFarmerTab('home')} className={farmerTab === 'home' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">home</span>{t.homeNav}
          </button>
          <button onClick={() => setFarmerTab('market')} className={farmerTab === 'market' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">analytics</span>{t.marketNav}
          </button>
          <button onClick={() => setFarmerTab('sell')} className={farmerTab === 'sell' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">add_circle</span>{t.sellNav}
          </button>
          <button onClick={() => setFarmerTab('orders')} className={farmerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">local_shipping</span>{t.ordersNav}
          </button>
          <button onClick={() => setFarmerTab('profile')} className={farmerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">person</span>{t.profileNav}
          </button>
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

        {/* InDrive-style Interactive Location Map */}
        <InDriveMapModal
          isOpen={isMapOpen}
          userRole="farmer"
          currentLocationName={currentLocation}
          onClose={() => setIsMapOpen(false)}
          onSelectLocation={(loc: LocationData) => {
            setCurrentLocation(`${loc.name}`);
            setOfflineNotice(`Location updated to: ${loc.name}`);
            setTimeout(() => setOfflineNotice(''), 3500);
          }}
        />
      </div>
    </div>
  );
}
