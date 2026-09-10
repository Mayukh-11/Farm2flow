'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProduce, getOrders } from '@/services/api';
import { Produce, Order } from '@/types';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
import { PanIndiaBuyerMapModal } from '@/components/PanIndiaBuyerMapModal';
import { PanIndiaSeller } from '@/data/panIndiaSellers';
import { translations, Language } from '@/data/translations';

export default function BuyerPage() {
  const [language, setLanguage] = useState<Language>('EN');
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [selectedCropFilter, setSelectedCropFilter] = useState<string>('All');
  const [isSmartMatchOpen, setIsSmartMatchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isSellerMapOpen, setIsSellerMapOpen] = useState(false);
  const [selectedMapCrop, setSelectedMapCrop] = useState<string>('All Crops');
  const [buyerName, setBuyerName] = useState<string>('Sourav Mukherjee');
  const [buyerLocation, setBuyerLocation] = useState<string>('Salt Lake, Kolkata');
  const [buyerAddress, setBuyerAddress] = useState<string>('AD-Block, Sector 1, Salt Lake, Kolkata - 700064');
  const [buyerTab, setBuyerTab] = useState<'home' | 'browse' | 'orders' | 'profile'>('home');

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
        if (session.name) setBuyerName(session.name);
        if (session.location) setBuyerLocation(session.location);
        if (session.address) setBuyerAddress(session.address);
      } catch (e) {}
    }
    setProduceList(getStoredProduce());
    setOrdersList(getOrders());

    // Listen for real-time produce listing events from any farmer tab or wizard
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

  const handleOrderCreated = (newOrder: Order) => {
    setOrdersList(getOrders());
    setBuyerTab('orders');
  };

  // Dynamic list of unique crops from current real-time produce listings
  const availableCrops = ['All', ...Array.from(new Set(produceList.map(p => p.cropName)))];

  const filteredProduce = selectedCropFilter === 'All' 
    ? produceList 
    : produceList.filter(p => p.cropName.toLowerCase() === selectedCropFilter.toLowerCase());

  return (
    <div className="bg-slate-950 text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-slate-50 flex flex-col relative shadow-2xl border-x border-slate-200/80">
        
        {/* Top Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all shadow-xs">
          <div className="flex justify-between items-center w-full px-4 h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[22px]">storefront</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-black text-emerald-950 leading-tight tracking-tight">{t.appTitle}</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-emerald-300/60">
                    Consumer
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold">Direct Farm Sourcing</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-slate-100/90 rounded-full p-0.5 flex text-[11px] border border-slate-200 font-bold shadow-xs">
                <button 
                  onClick={() => setLanguage('EN')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('BN')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  বাংলা
                </button>
                <button 
                  onClick={() => setLanguage('HI')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Location & Mandi Status with InDrive Map Access */}
        <section className="bg-white px-4 py-2 flex items-center justify-between border-b border-slate-200/80 text-[11px]">
          <button 
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-emerald-700 transition-colors text-left max-w-[280px] group"
            title="Open Interactive Map (InDrive style)"
          >
            <span className="material-symbols-outlined text-[18px] text-emerald-600 group-hover:scale-110 transition-transform">location_on</span>
            <span className="truncate underline decoration-dotted font-bold text-slate-700">{buyerLocation}</span>
            <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-md uppercase font-black shrink-0">Map</span>
          </button>
          <div className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200/80 font-bold text-[10px] shrink-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified P2P</span>
          </div>
        </section>

        {/* MAIN BUYER CONTENT */}
        <main className="p-4 flex flex-col gap-4">
          {buyerTab === 'home' && (
            <>
              {/* Buyer Welcome & Smart Match Hero */}
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-[18px] font-extrabold text-on-surface leading-tight">{buyerName}</h2>
                    <p className="text-[12px] text-on-surface-variant font-medium">📍 {buyerLocation}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary font-extrabold flex items-center justify-center border border-secondary text-sm">
                    {buyerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'BY'}
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]">
                  <p className="font-bold text-emerald-900">{t.farmEconomicsTitle}</p>
                  <p className="text-emerald-800 mt-0.5">{t.farmEconomicsDesc}</p>
                </div>

                {/* Pan-India Sellers Interactive Live Map Banner */}
                <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-4 rounded-2xl border border-emerald-700/50 shadow-lg flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                        National Sourcing Radar
                      </span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full font-bold border border-emerald-400/30">
                      All-India Mandis
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-black text-white leading-tight flex items-center gap-1.5">
                      <span>Explore Sellers Across India</span>
                      <span className="text-[18px]">🗺️</span>
                    </h3>
                    <p className="text-[11px] text-emerald-200/90 mt-0.5 font-medium">
                      Filter by crop to view verified farmers, live farm-gate prices & direct transit routes to your receiving depot.
                    </p>
                  </div>

                  {/* Crop Quick Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px]">
                    {[
                      { name: 'Tomato', icon: '🍅' },
                      { name: 'Potato', icon: '🥔' },
                      { name: 'Onion', icon: '🧅' },
                      { name: 'Rice', icon: '🌾' },
                      { name: 'Wheat', icon: '🌾' },
                      { name: 'Chilli', icon: '🌶️' },
                      { name: 'Cauliflower', icon: '🥦' },
                      { name: 'Cabbage', icon: '🥬' },
                      { name: 'Carrot', icon: '🥕' },
                      { name: 'Apple', icon: '🍎' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setSelectedMapCrop(item.name);
                          setIsSellerMapOpen(true);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 font-bold border border-emerald-600/40 whitespace-nowrap active:scale-95 transition-all shadow-xs flex items-center gap-1"
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedMapCrop('All Crops');
                      setIsSellerMapOpen(true);
                    }}
                    className="w-full py-3 bg-white hover:bg-emerald-50 text-emerald-950 rounded-xl text-[13px] font-black transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span className="material-symbols-outlined text-[20px] text-emerald-700">public</span>
                    <span>Open Whole Country Sellers Map</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsSmartMatchOpen(true)}
                  className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[13px] font-extrabold hover:bg-primary transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">handshake</span>
                  <span>{t.runSmartMatchBtn}</span>
                </button>
              </div>

              {/* Direct Available Produce Feeds */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-[16px] font-bold text-on-surface">{t.availableLotsTitle}</h3>
                  <button 
                    onClick={() => setBuyerTab('browse')}
                    className="text-primary text-[12px] font-bold hover:underline"
                  >
                    {t.viewAllLots} ({produceList.length})
                  </button>
                </div>

                {produceList.slice(0, 3).map(item => (
                  <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                        <p className="text-[12px] text-on-surface-variant">{item.farmerName} • {item.farmerLocation}</p>
                      </div>
                      <span className="bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold">
                        {item.quantityKg} kg
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[13px] pt-2 border-t border-outline-variant">
                      <span className="text-on-surface-variant text-[12px]">{item.variety}</span>
                      <span className="font-extrabold text-primary text-[15px]">₹{item.expectedPricePerKg} / kg</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {buyerTab === 'browse' && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-bold text-on-surface">{t.browseTitle}</h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setSelectedMapCrop(selectedCropFilter === 'All' ? 'All Crops' : selectedCropFilter);
                      setIsSellerMapOpen(true);
                    }}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 flex items-center gap-1 shadow-xs"
                    title="View sellers on national map"
                  >
                    <span className="material-symbols-outlined text-[14px]">map</span>
                    <span>View Map</span>
                  </button>
                  <div className="flex gap-1 overflow-x-auto no-scrollbar max-w-[200px] py-0.5">
                    {availableCrops.map(crop => (
                      <button
                        key={crop}
                        onClick={() => setSelectedCropFilter(crop)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                          selectedCropFilter === crop ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {filteredProduce.map(item => (
                <div key={item.id} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-on-surface text-[15px]">{item.cropName} ({item.grade})</h4>
                      <p className="text-[12px] text-on-surface-variant">{item.farmerName} • {item.farmerLocation}</p>
                    </div>
                    <span className="bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] pt-1.5 border-t border-outline-variant">
                    <span className="font-bold text-on-surface">{item.quantityKg} kg available</span>
                    <span className="font-extrabold text-primary text-[15px]">₹{item.expectedPricePerKg} / kg</span>
                  </div>
                  <button
                    onClick={() => setIsSmartMatchOpen(true)}
                    className="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest rounded-lg text-[12px] font-bold text-primary flex items-center justify-center gap-1 transition-colors mt-1"
                  >
                    <span>{t.procureViaSmartMatch}</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {buyerTab === 'orders' && (
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 shadow-xs">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-bold text-on-surface">{t.trackOrdersTitle}</h3>
                <span className="text-[12px] text-on-surface-variant">{ordersList.length} {t.totalLots}</span>
              </div>
              {ordersList.map(ord => (
                <div key={ord.id} className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary text-[14px]">{ord.orderNumber}</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[11px] font-bold">{ord.status}</span>
                  </div>
                  <div className="text-[12px] text-on-surface-variant">
                    <p><strong className="text-on-surface">{t.quantityLabel}:</strong> {ord.totalQuantityKg} kg</p>
                    <p><strong className="text-on-surface">{t.destinationLabel}:</strong> {ord.destination}</p>
                    <p><strong className="text-on-surface">{t.deliveryLabel}:</strong> {ord.expectedDelivery}</p>
                    {ord.paymentMethod && (
                      <p className="flex items-center gap-1.5 mt-1">
                        <strong className="text-on-surface">Payment:</strong> 
                        <span className="font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded text-[10px]">
                          {ord.paymentMethod}
                        </span>
                        <span className={`font-extrabold px-1.5 py-0.2 rounded text-[10px] ${
                          ord.paymentStatus === 'Paid' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'
                        }`}>
                          {ord.paymentStatus || 'Paid'}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-bold text-on-surface pt-2 border-t border-outline-variant">
                    <span>{t.totalProcurementCost}</span>
                    <span className="text-primary text-[16px]">₹{ord.totalAmount.toLocaleString()}</span>
                  </div>
                  {ord.savingsRealized && (
                    <div className="text-[11px] text-emerald-800 font-bold bg-emerald-50 p-1.5 rounded-md text-center">
                      💰 {t.middlemenSavings}: ₹{ord.savingsRealized.toLocaleString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {buyerTab === 'profile' && (
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px] shadow-xs">
              <h3 className="text-[16px] font-bold text-on-surface">{t.buyerProfileTitle}</h3>
              <p><strong>{t.entityLabel}:</strong> {buyerName}</p>
              <p><strong>{t.mobile}:</strong> +91 98300 12345</p>
              <p><strong>{t.location}:</strong> {buyerLocation}</p>
              <p><strong>Address:</strong> {buyerAddress}</p>
              <p><strong>{t.verification}:</strong> {t.buyerStatusValue}</p>
              <div className="pt-2 border-t border-outline-variant">
                <Link href="/" className="text-secondary font-bold hover:underline block py-1">
                  {t.signOut}
                </Link>
              </div>
            </div>
          )}
        </main>

        {/* Buyer Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant grid grid-cols-4 text-[11px] font-bold text-center py-2 z-40 shadow-lg px-2">
          {[
            { id: 'home', icon: 'home', label: t.homeNav },
            { id: 'browse', icon: 'search', label: t.browseNav },
            { id: 'orders', icon: 'local_shipping', label: t.ordersNav },
            { id: 'profile', icon: 'person', label: t.profileNav },
          ].map(item => {
            const isActive = buyerTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setBuyerTab(item.id as any)}
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

        {/* Smart Match Modal */}
        <BuyerSmartMatchModal
          isOpen={isSmartMatchOpen}
          onClose={() => setIsSmartMatchOpen(false)}
          onOrderCreated={handleOrderCreated}
          buyerName={buyerName}
          buyerDestination={buyerAddress || buyerLocation}
        />

        {/* InDrive-style Interactive Location Map */}
        <InDriveMapModal
          isOpen={isMapOpen}
          userRole="buyer"
          currentLocationName={buyerLocation}
          onClose={() => setIsMapOpen(false)}
          onSelectLocation={(loc: LocationData) => {
            setBuyerLocation(`${loc.name}`);
          }}
        />

        {/* Attractive Pan-India Whole Country Sellers Map */}
        <PanIndiaBuyerMapModal
          isOpen={isSellerMapOpen}
          onClose={() => setIsSellerMapOpen(false)}
          buyerCityName={buyerLocation}
          initialCrop={selectedMapCrop}
          onSelectSeller={(seller: PanIndiaSeller) => {
            setIsSmartMatchOpen(true);
          }}
        />
      </div>
    </div>
  );
}
