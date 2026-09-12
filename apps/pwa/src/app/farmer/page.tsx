'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProduce, getDemandForecast, getPriceEstimate, getOrders, saveProduce, deleteProduce } from '@/services/api';
import { Produce, Order } from '@/types';
import { PredefinedHelpModal } from '@/components/PredefinedHelpModal';
import { ListProduceWizard } from '@/components/ListProduceWizard';
import { CropMarketExplorer } from '@/components/CropMarketExplorer';
import { PanIndiaBuyerMapModal } from '@/components/PanIndiaBuyerMapModal';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
import { translations, Language } from '@/data/translations';
import { getCropPhoto } from '@/data/cropImages';


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
  const [farmerPhone, setFarmerPhone] = useState<string>('+91 98310 44210');
  
  // Modal Visibility States
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isListWizardOpen, setIsListWizardOpen] = useState(false);
  const [isPanIndiaMapOpen, setIsPanIndiaMapOpen] = useState(false);
  const [isLocationMapOpen, setIsLocationMapOpen] = useState(false);
  const [wizardInitialQuantity, setWizardInitialQuantity] = useState<number | undefined>(undefined);
  const [wizardInitialPrice, setWizardInitialPrice] = useState<number | undefined>(undefined);


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
        if (session.phone || session.identifier) setFarmerPhone(session.phone || session.identifier);
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
    <div className="bg-[#051c0e] text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#f2fbf4] flex flex-col relative shadow-2xl border-x border-emerald-200/80">
        
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
        <header className="bg-emerald-900 text-white border-b border-emerald-800 sticky top-0 z-40 px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[20px]">agriculture</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[16px] font-black text-white tracking-tight leading-none">{t.appTitle}</span>
                <span className="text-[8px] bg-emerald-800 text-emerald-200 font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-700 shrink-0">
                  Farmer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <div className="bg-emerald-950/90 rounded-full p-0.5 flex text-[10px] border border-emerald-700/60 font-bold shadow-xs">
                <button onClick={() => setLanguage('EN')} className={`px-1.5 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-emerald-500 text-emerald-950 font-black shadow-xs' : 'text-emerald-300 hover:text-white'}`}>EN</button>
                <button onClick={() => setLanguage('BN')} className={`px-1.5 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-emerald-500 text-emerald-950 font-black shadow-xs' : 'text-emerald-300 hover:text-white'}`}>বাং</button>
                <button onClick={() => setLanguage('HI')} className={`px-1.5 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-emerald-500 text-emerald-950 font-black shadow-xs' : 'text-emerald-300 hover:text-white'}`}>हिं</button>
              </div>

              <button 
                onClick={() => setIsHelpOpen(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-800 text-emerald-100 border border-emerald-700 hover:bg-emerald-700 active:scale-95 transition-transform shrink-0"
                title={t.voiceAssistant}
              >
                <span className="material-symbols-outlined text-[18px]">mic</span>
              </button>
            </div>
          </div>

          {/* Sub-bar: Farm / Mandi Location Bar */}
          <div className="mt-2 pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px]">
            <button
              type="button"
              onClick={() => setIsLocationMapOpen(true)}
              className="flex items-center gap-1.5 font-bold text-emerald-200 hover:text-white transition-colors min-w-0 text-left group"
              title="Click to change farm/mandi location on map"
            >
              <span className="material-symbols-outlined text-[15px] text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">location_on</span>
              <span className="text-emerald-300/80 font-normal shrink-0">Farm Mandi:</span>
              <span className="truncate max-w-[220px] font-extrabold text-white underline decoration-emerald-500/50 underline-offset-2">
                {currentLocation}
              </span>
              <span className="material-symbols-outlined text-[14px] text-emerald-400 shrink-0">expand_more</span>
            </button>
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-700/60 shrink-0">
              {t.mandiOpen || 'Mandi Live'}
            </span>
          </div>
        </header>


        {/* MAIN FARMER CONTENT */}
        <main className="p-4 flex flex-col gap-4">
          {farmerTab === 'home' && (
            <>
              {/* Farmer Profile Info */}
              <div className="flex items-center justify-between bg-[#f4fcf6] p-3 rounded-2xl border border-emerald-300 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 text-emerald-900 font-extrabold text-base flex items-center justify-center border-2 border-emerald-600">
                    {farmerName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'FM'}
                  </div>
                  <div>
                    <h1 className="text-[16px] font-extrabold text-emerald-950 leading-tight">{farmerName}</h1>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-900 bg-emerald-200 px-2 py-0.5 rounded-md mt-0.5">
                      {t.verifiedFarmer}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsListWizardOpen(true)}
                  className="bg-emerald-700 text-white hover:bg-emerald-800 px-3 py-1.5 rounded-xl text-[12px] font-bold shadow-xs flex items-center gap-1 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span>{t.sellNav}</span>
                </button>
              </div>

              {/* High Demand Opportunity Card */}
              <section className="bg-[#f4fcf6] rounded-2xl border-2 border-emerald-500 p-4 shadow-xs flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                  <span className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider">{t.highDemandOpp}</span>
                  <span className="bg-emerald-200 text-emerald-900 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    {t.demandSurge}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-[20px] font-extrabold text-on-surface">{t.tomatoGradeA}</h2>
                    <p className="text-[12px] text-on-surface-variant">{t.hybridRedDesc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsListWizardOpen(true)}
                    className="py-3 bg-primary-container text-on-primary rounded-xl text-[13px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>{t.listProduceBtn}</span>
                  </button>
                  <button
                    onClick={() => setIsPanIndiaMapOpen(true)}
                    className="py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 rounded-xl text-[13px] font-black transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[18px] text-emerald-700">map</span>
                    <span>Pan-India Map</span>
                  </button>
                </div>
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
                    <div className="flex items-center gap-3">
                      <img
                        src={getCropPhoto(item.cropName)}
                        alt={item.cropName}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-100 shadow-xs shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-on-surface text-[15px]">{item.cropName}</h4>
                        <p className="text-[12px] text-on-surface-variant">{item.farmerLocation} • {item.variety}</p>
                      </div>
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
                    <span>{t.orderValue} (Direct Farm Payout)</span>
                    <span className="text-primary text-[15px]">
                      ₹{(ord.farmerPayoutAmount ?? ord.totalAmount).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {farmerTab === 'profile' && (
            <div className="flex flex-col gap-4">
              <div className="bg-[#f4fcf6] rounded-3xl p-5 border border-emerald-300 shadow-sm flex flex-col gap-4">
                {/* Profile Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white font-black text-[20px] flex items-center justify-center shadow-md shrink-0">
                    {farmerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'FM'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-[20px] font-black text-emerald-950 truncate leading-tight">{farmerName}</h2>
                    <p className="text-[12px] text-emerald-800/80 font-semibold mt-0.5">{t.farmerProfile || 'Agricultural Producer & Mandi Seller'}</p>
                    <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-extrabold text-emerald-900 bg-emerald-200/90 px-2.5 py-0.5 rounded-lg border border-emerald-300">
                      Verified Producer • West Bengal Cluster
                    </span>
                  </div>
                </div>

                {/* Details Card */}
                <div className="space-y-2.5 text-[12px] text-emerald-900 bg-emerald-100/50 rounded-2xl p-4 border border-emerald-200/80">
                  <p className="flex items-baseline gap-1">
                    <strong className="text-emerald-950 font-extrabold">Registered Phone::</strong>
                    <span className="font-semibold text-emerald-900">{farmerPhone}</span>
                  </p>
                  <p className="flex items-baseline gap-1">
                    <strong className="text-emerald-950 font-extrabold">Hub City::</strong>
                    <span className="font-semibold text-emerald-900">{currentLocation}</span>
                  </p>
                  <p className="flex items-baseline gap-1">
                    <strong className="text-emerald-950 font-extrabold">Receiving Address::</strong>
                    <span className="font-semibold text-emerald-900">{farmerAddress}</span>
                  </p>
                </div>

                {/* Styled Sign Out Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem('farm2flow_user_session');
                      window.location.href = '/login';
                    }
                  }}
                  className="w-full py-3.5 bg-rose-50 hover:bg-rose-100/80 active:scale-98 text-rose-600 font-black rounded-2xl text-[13px] border border-rose-200/80 transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span>← Back to Login / Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Farmer Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#f2fbf4]/95 backdrop-blur-md border-t border-emerald-300/80 grid grid-cols-5 text-[11px] font-bold text-center py-2 z-40 shadow-lg px-2">
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
          onProduceCreated={handleProduceCreated}
          onClose={() => setIsHelpOpen(false)}
          onSelectAction={(actionKey, params) => {
            if (actionKey === 'sell') {
              if (params?.crop) setSelectedCrop(params.crop);
              setWizardInitialQuantity(params?.quantity);
              setWizardInitialPrice(params?.price);
              setIsListWizardOpen(true);
            }
            if (actionKey === 'prices' || actionKey === 'market') setFarmerTab('market');
            if (actionKey === 'track') setFarmerTab('orders');
          }}
        />

        <ListProduceWizard
          isOpen={isListWizardOpen}
          initialCrop={selectedCrop}
          initialQuantity={wizardInitialQuantity}
          initialPrice={wizardInitialPrice}
          language={language}
          onClose={() => setIsListWizardOpen(false)}
          onSuccess={handleProduceCreated}
        />

        <PanIndiaBuyerMapModal
          isOpen={isPanIndiaMapOpen}
          onClose={() => setIsPanIndiaMapOpen(false)}
          buyerCityName={currentLocation}
          initialCrop={selectedCrop}
        />

        {/* Interactive InDrive Map Modal for Farmer (Select & update location/address) */}
        <InDriveMapModal
          isOpen={isLocationMapOpen}
          userRole="farmer"
          currentLocationName={currentLocation}
          onClose={() => setIsLocationMapOpen(false)}
          onSelectLocation={(loc: LocationData) => {
            setCurrentLocation(loc.name);
            setFarmerAddress(loc.address);
            if (typeof window !== 'undefined') {
              const sessionStr = localStorage.getItem('farm2flow_user_session');
              if (sessionStr) {
                try {
                  const sess = JSON.parse(sessionStr);
                  sess.location = loc.name;
                  sess.address = loc.address;
                  localStorage.setItem('farm2flow_user_session', JSON.stringify(sess));
                } catch {}
              }
            }
          }}
        />
      </div>
    </div>
  );

}
