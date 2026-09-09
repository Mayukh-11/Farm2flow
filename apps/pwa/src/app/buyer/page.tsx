'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProduce, getOrders } from '@/services/api';
import { Produce, Order } from '@/types';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
import { translations, Language } from '@/data/translations';

export default function BuyerPage() {
  const [language, setLanguage] = useState<Language>('EN');
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [selectedCropFilter, setSelectedCropFilter] = useState<string>('All');
  const [isSmartMatchOpen, setIsSmartMatchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [buyerName, setBuyerName] = useState<string>('Kolkata Wholesale Mandi');
  const [buyerLocation, setBuyerLocation] = useState<string>('Posta Mandi, Kolkata');
  const [buyerAddress, setBuyerAddress] = useState<string>('Posta Wholesale Hub, Strand Road, Kolkata - 700007');
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
  }, []);

  const handleOrderCreated = (newOrder: Order) => {
    setOrdersList(getOrders());
    setBuyerTab('orders');
  };

  const filteredProduce = selectedCropFilter === 'All' 
    ? produceList 
    : produceList.filter(p => p.cropName.toLowerCase() === selectedCropFilter.toLowerCase());

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-28 font-sans">
      <div className="max-w-[430px] mx-auto min-h-screen bg-surface flex flex-col relative shadow-md border-x border-outline-variant">
        
        {/* Top Header */}
        <header className="bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="flex justify-between items-center w-full px-4 h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">storefront</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-extrabold text-primary leading-tight">{t.appTitle}</span>
                  <span className="text-[10px] bg-secondary-container text-on-secondary-container font-bold px-1.5 py-0.2 rounded">{t.buyerRole}</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-bold">{t.buyerTitle}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold shadow-xs">
                <button 
                  onClick={() => setLanguage('EN')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('BN')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}
                >
                  বাংলা
                </button>
                <button 
                  onClick={() => setLanguage('HI')} 
                  className={`px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Location & Mandi Status with InDrive Map Access */}
        <section className="bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[11px]">
          <button 
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-1.5 font-bold text-on-surface hover:text-primary transition-colors text-left max-w-[280px]"
            title="Open Interactive Map (InDrive style)"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary animate-pulse">location_on</span>
            <span className="truncate underline decoration-dotted">{buyerLocation}</span>
            <span className="text-[9px] bg-secondary/15 text-secondary px-1.5 py-0.5 rounded-md uppercase font-extrabold shrink-0">Map</span>
          </button>
          <div className="bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-emerald-700 shrink-0">
            {t.verifiedAggregator}
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

                <button
                  onClick={() => setIsSmartMatchOpen(true)}
                  className="w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-extrabold hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
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
                <div className="flex gap-1">
                  {['All', 'Tomato', 'Potato'].map(crop => (
                    <button
                      key={crop}
                      onClick={() => setSelectedCropFilter(crop)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                        selectedCropFilter === crop ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                      }`}
                    >
                      {crop}
                    </button>
                  ))}
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
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-4 text-[10px] font-bold text-center py-2 z-40">
          <button onClick={() => setBuyerTab('home')} className={buyerTab === 'home' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">home</span>{t.homeNav}
          </button>
          <button onClick={() => setBuyerTab('browse')} className={buyerTab === 'browse' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">search</span>{t.browseNav}
          </button>
          <button onClick={() => setBuyerTab('orders')} className={buyerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">local_shipping</span>{t.ordersNav}
          </button>
          <button onClick={() => setBuyerTab('profile')} className={buyerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant'}>
            <span className="material-symbols-outlined block text-[20px]">person</span>{t.profileNav}
          </button>
        </nav>

        {/* Smart Match Modal */}
        <BuyerSmartMatchModal
          isOpen={isSmartMatchOpen}
          onClose={() => setIsSmartMatchOpen(false)}
          onOrderCreated={handleOrderCreated}
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
      </div>
    </div>
  );
}
