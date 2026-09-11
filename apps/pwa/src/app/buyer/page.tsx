'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStoredProduce, getOrders } from '@/services/api';
import { Produce, Order } from '@/types';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
import { PanIndiaBuyerMapModal } from '@/components/PanIndiaBuyerMapModal';
import { PanIndiaSeller } from '@/data/panIndiaSellers';
import { translations, Language } from '@/data/translations';

// High resolution food/crop photography for luxury e-commerce cards
const CROP_PHOTOS: Record<string, string> = {
  tomato: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600',
  potato: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
  onion: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
  rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
  wheat: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600',
  chilli: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=600',
  cauliflower: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=600',
  cabbage: 'https://images.unsplash.com/photo-1551893478-d726eaf0442c?auto=format&fit=crop&q=80&w=600',
  carrot: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&q=80&w=600',
  apple: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600',
  default: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=600',
};

const CATEGORIES = [
  { id: 'All', label: 'All Items', icon: '✨' },
  { id: 'Vegetables', label: 'Vegetables', icon: '🥦' },
  { id: 'Fruits', label: 'Fresh Fruits', icon: '🍎' },
  { id: 'Grains', label: 'Grains & Cereals', icon: '🌾' },
  { id: 'Spices', label: 'Pure Spices', icon: '🌶️' },
];

export default function BuyerPage() {
  const [language, setLanguage] = useState<Language>('EN');
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSmartMatchOpen, setIsSmartMatchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isSellerMapOpen, setIsSellerMapOpen] = useState(false);
  const [selectedMapCrop, setSelectedMapCrop] = useState<string>('All Crops');
  const [selectedSellerForMatch, setSelectedSellerForMatch] = useState<PanIndiaSeller | null>(null);
  const [buyerName, setBuyerName] = useState<string>('Sourav Mukherjee');
  const [buyerLocation, setBuyerLocation] = useState<string>('Salt Lake, Kolkata');
  const [buyerAddress, setBuyerAddress] = useState<string>('AD-Block, Sector 1, Salt Lake, Kolkata - 700064');
  const [buyerTab, setBuyerTab] = useState<'home' | 'browse' | 'orders' | 'profile'>('home');
  const [cartBadgeCount, setCartBadgeCount] = useState<number>(0);

  const t = translations[language] || translations.EN;

  useEffect(() => {
    // Auth Guard: Check session
    if (typeof window !== 'undefined') {
      const sessionStr = localStorage.getItem('farm2flow_user_session');
      if (!sessionStr) {
        window.location.href = '/login';
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
    setCartBadgeCount(prev => prev + 1);
  };

  // Filter produce by category & search query (only show lots with available stock)
  const filteredProduce = useMemo(() => {
    return produceList.filter(item => {
      // Must have available stock > 0
      const hasStock = item.quantityKg > 0 && item.status !== 'Sold Out';
      if (!hasStock) return false;

      const matchCat =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Vegetables'
          ? ['Tomato', 'Potato', 'Onion', 'Cauliflower', 'Cabbage', 'Carrot'].includes(item.cropName)
          : selectedCategory === 'Grains'
          ? ['Rice', 'Wheat'].includes(item.cropName)
          : selectedCategory === 'Spices'
          ? ['Chilli'].includes(item.cropName)
          : selectedCategory === 'Fruits'
          ? ['Apple'].includes(item.cropName)
          : true;

      const matchSearch =
        searchQuery.trim() === ''
          ? true
          : item.cropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.farmerLocation.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [produceList, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 text-slate-900 antialiased min-h-screen pb-28 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#fafbfc] flex flex-col relative shadow-2xl border-x border-slate-200/80">
        
        {/* TOP STATUS & BRAND HEADER */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-40 px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-500 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                <span className="material-symbols-outlined text-[24px]">eco</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-black text-slate-900 tracking-tight leading-none">Farm2Flow</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-200/60">
                    Direct
                  </span>
                </div>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-emerald-700 transition-colors mt-0.5 text-left group"
                >
                  <span className="material-symbols-outlined text-[13px] text-emerald-600 group-hover:scale-110 transition-transform">location_on</span>
                  <span className="truncate max-w-[160px] underline decoration-slate-300 underline-offset-2">{buyerLocation}</span>
                  <span className="material-symbols-outlined text-[12px] text-slate-400">expand_more</span>
                </button>
              </div>
            </div>

            {/* Language Switcher & Cart Action */}
            <div className="flex items-center gap-2">
              <div className="bg-slate-100/90 rounded-full p-0.5 flex text-[11px] border border-slate-200 font-bold shadow-xs">
                {(['EN', 'BN', 'HI'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      language === lang
                        ? 'bg-slate-900 text-white font-black shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'BN' ? 'বাং' : lang === 'HI' ? 'हिं' : 'EN'}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setBuyerTab('orders')}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all relative border border-slate-200"
                aria-label="View Orders"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                {ordersList.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {ordersList.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="flex-1 flex flex-col">
          {buyerTab === 'home' && (
            <>
              {/* DRIBBLE-STYLE HERO SECTION WITH REAL FARM PHOTOGRAPHY & LUXURY BADGES */}
              <section className="p-4 pt-3">
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white shadow-xl">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/hero_banner.jpg"
                      alt="Organic Farm Fresh Harvest"
                      className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />
                  </div>

                  {/* Hero Content */}
                  <div className="relative z-10 p-5 flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="dribbble-badge text-emerald-950 bg-white/95 border-none">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-black tracking-tight">100% Farm-Gate Direct</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-200/90 bg-emerald-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-700/50">
                        Zero Middlemen
                      </span>
                    </div>

                    <div>
                      <h1 className="text-[26px] font-black tracking-tight leading-[1.15] text-white">
                        Fresh from the soil, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-amber-200">
                          straight to your door.
                        </span>
                      </h1>
                      <p className="text-[12px] text-slate-300/95 font-medium mt-1.5 leading-relaxed">
                        Order pristine harvests directly from verified Indian farmers at transparent mandi-index prices.
                      </p>
                    </div>

                    {/* Quick CTA Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setIsSmartMatchOpen(true)}
                        className="py-3 px-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl text-[12px] font-extrabold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">handshake</span>
                        <span>Smart Procure</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedMapCrop('All Crops');
                          setIsSellerMapOpen(true);
                        }}
                        className="py-3 px-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl text-[12px] font-bold border border-white/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px] text-emerald-300">map</span>
                        <span>Farmer Radar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* DRIBBLE-STYLE PILL SEARCH BAR */}
              <section className="px-4 pb-2">
                <div className="dribbble-search flex items-center px-4 py-2.5 gap-2.5 bg-white">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                  <input
                    type="text"
                    placeholder="Search fresh tomatoes, aromatic rice, potatoes..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-[13px] font-medium text-slate-800 placeholder-slate-400 outline-none"
                  />
                  {searchQuery ? (
                    <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  ) : (
                    <span className="text-[10px] uppercase font-extrabold tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-lg">
                      Filter
                    </span>
                  )}
                </div>
              </section>

              {/* CATEGORY PILL CAROUSEL */}
              <section className="px-4 py-2">
                <div className="flex items-center justify-between mb-2.5">
                  <h2 className="text-[15px] font-extrabold text-slate-900 tracking-tight">Categories</h2>
                  <span className="text-[11px] text-emerald-700 font-bold hover:underline cursor-pointer">
                    {filteredProduce.length} lots online
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {CATEGORIES.map(cat => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                          isSelected
                            ? 'dribbble-pill-active'
                            : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 shadow-xs'
                        }`}
                      >
                        <span className="text-[14px]">{cat.icon}</span>
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* PAN-INDIA LIVE MARKET RADAR BANNER (DRIBBLE CARD ELEVATION) */}
              <section className="px-4 py-2">
                <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-3.5 flex items-center justify-between shadow-md relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[20px] border border-white/15 shrink-0">
                      🇮🇳
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-black text-white">All-India Farmers Radar</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <p className="text-[11px] text-emerald-200/90 font-medium">
                        Compare farm-gate prices & route direct transit across 15+ states.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMapCrop('All Crops');
                      setIsSellerMapOpen(true);
                    }}
                    className="px-3 py-1.5 bg-white text-emerald-950 font-black text-[11px] rounded-xl hover:bg-emerald-50 transition-all shrink-0 active:scale-95 shadow-xs"
                  >
                    View Map
                  </button>
                </div>
              </section>

              {/* FEATURED HARVESTS GRID (LUXURY DRIBBLE E-COMMERCE CARDS) */}
              <section className="px-4 py-2 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-[16px] font-extrabold text-slate-900 tracking-tight">Today’s Verified Harvests</h2>
                    <p className="text-[11px] text-slate-500 font-medium">Direct farm batches inspected for quality & weight</p>
                  </div>
                  <button
                    onClick={() => setBuyerTab('browse')}
                    className="text-[12px] text-emerald-700 font-black hover:text-emerald-800 transition-colors"
                  >
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredProduce.slice(0, 6).map(item => {
                    const photoUrl =
                      CROP_PHOTOS[item.cropName.toLowerCase()] || CROP_PHOTOS.default;

                    return (
                      <div
                        key={item.id}
                        className="dribbble-card overflow-hidden flex flex-col group relative bg-white"
                      >
                        {/* Crop Image Container */}
                        <div className="relative w-full h-32 bg-slate-100 overflow-hidden">
                          <img
                            src={photoUrl}
                            alt={item.cropName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                          {/* Top Badges */}
                          <div className="absolute top-2 left-2 flex items-center gap-1">
                            <span className="text-[9px] font-black uppercase tracking-wider bg-white/95 text-emerald-900 px-2 py-0.5 rounded-full shadow-xs backdrop-blur-sm">
                              {item.grade}
                            </span>
                          </div>

                          <div className="absolute top-2 right-2">
                            <span className="text-[9px] font-black uppercase bg-emerald-600/90 text-white px-1.5 py-0.5 rounded-full shadow-xs">
                              {item.demandStatus}
                            </span>
                          </div>

                          {/* Quantity pill overlay bottom */}
                          <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white flex items-center gap-1 drop-shadow-sm">
                            <span className="material-symbols-outlined text-[13px]">inventory_2</span>
                            <span>{item.quantityKg} kg ready</span>
                          </div>
                        </div>

                        {/* Card Info Details */}
                        <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                          <div>
                            <div className="flex items-center justify-between">
                              <h3 className="font-extrabold text-slate-900 text-[14px] leading-snug">
                                {item.cropName}
                              </h3>
                              <div className="flex items-center gap-0.5 text-amber-500 text-[11px] font-black">
                                <span>★</span>
                                <span className="text-slate-700">4.9</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium truncate">
                              {item.variety}
                            </p>
                            <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-0.5 truncate">
                              <span className="material-symbols-outlined text-[11px]">location_on</span>
                              <span>{item.farmerLocation}</span>
                            </p>
                          </div>

                          {/* Price & Action Button */}
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                            <div>
                              <span className="text-[9px] uppercase font-bold text-slate-400 block leading-none">
                                Farm-Gate
                              </span>
                              <div className="text-[15px] font-black text-slate-900 leading-tight">
                                ₹{item.expectedPricePerKg}
                                <span className="text-[10px] font-semibold text-slate-500">/kg</span>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setSelectedMapCrop(item.cropName);
                                setIsSmartMatchOpen(true);
                              }}
                              className="w-8 h-8 rounded-full bg-emerald-700 hover:bg-emerald-800 active:scale-90 text-white flex items-center justify-center transition-all shadow-md shadow-emerald-700/20"
                              title="Procure with Smart Match"
                            >
                              <span className="material-symbols-outlined text-[18px]">add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* VALUE PROPOSITION STRIP */}
              <section className="px-4 py-3">
                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-800">verified</span>
                    <h3 className="text-[13px] font-black text-emerald-950">{t.farmEconomicsTitle}</h3>
                  </div>
                  <p className="text-[11px] text-emerald-800/90 font-medium leading-relaxed">
                    {t.farmEconomicsDesc} Direct cold-chain dispatch eliminates 4 intermediate mandi commissions.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* BROWSE TAB */}
          {buyerTab === 'browse' && (
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[18px] font-black text-slate-900">Explore Catalog</h2>
                  <p className="text-[12px] text-slate-500 font-medium">All active harvest batches from registered farmers</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedMapCrop('All Crops');
                    setIsSellerMapOpen(true);
                  }}
                  className="px-3 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-[11px] font-black flex items-center gap-1 hover:bg-emerald-200 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">map</span>
                  <span>Map Radar</span>
                </button>
              </div>

              {/* Search in Browse */}
              <div className="dribbble-search flex items-center px-4 py-2.5 gap-2.5 bg-white">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                <input
                  type="text"
                  placeholder="Search produce name, grade, location..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-[13px] font-medium text-slate-800 placeholder-slate-400 outline-none"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'dribbble-pill-active'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {/* Produce List Cards */}
              <div className="flex flex-col gap-3">
                {filteredProduce.map(item => {
                  const photoUrl = CROP_PHOTOS[item.cropName.toLowerCase()] || CROP_PHOTOS.default;
                  return (
                    <div
                      key={item.id}
                      className="dribbble-card p-3 flex gap-3 items-center bg-white"
                    >
                      <img
                        src={photoUrl}
                        alt={item.cropName}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-black text-slate-900 text-[15px] truncate">
                            {item.cropName}
                          </h3>
                          <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                            {item.grade}
                          </span>
                        </div>
                        <p className="text-[12px] text-slate-500 font-medium truncate">{item.variety}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          🧑‍🌾 {item.farmerName} • 📍 {item.farmerLocation}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold block leading-none">AVAILABLE</span>
                            <span className="text-[13px] font-extrabold text-slate-800">{item.quantityKg} kg</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[16px] font-black text-emerald-700">₹{item.expectedPricePerKg}/kg</span>
                            <button
                              onClick={() => {
                                setSelectedMapCrop(item.cropName);
                                setIsSmartMatchOpen(true);
                              }}
                              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-[11px] font-black active:scale-95 transition-all shadow-xs"
                            >
                              Procure
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {buyerTab === 'orders' && (
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[18px] font-black text-slate-900">{t.trackOrdersTitle}</h2>
                  <p className="text-[12px] text-slate-500 font-medium">{ordersList.length} Active procurements</p>
                </div>
                <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Verified Dispatch
                </span>
              </div>

              {ordersList.length === 0 ? (
                <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-[32px]">receipt_long</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-800">No active orders yet</h3>
                    <p className="text-[12px] text-slate-500 mt-1">
                      Run Smart Match to create your first direct farmer order!
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSmartMatchOpen(true)}
                    className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-[12px] font-black shadow-md shadow-emerald-700/20"
                  >
                    Start Procurement
                  </button>
                </div>
              ) : (
                ordersList.map(ord => (
                  <div
                    key={ord.id}
                    className="dribbble-card p-4 flex flex-col gap-3 bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">Order ID</span>
                        <h4 className="font-black text-emerald-900 text-[14px]">{ord.orderNumber}</h4>
                      </div>
                      <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-amber-200">
                        {ord.status}
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 text-[12px] text-slate-600 flex flex-col gap-1 border border-slate-100">
                      <p><strong className="text-slate-800">{t.quantityLabel}:</strong> {ord.totalQuantityKg} kg</p>
                      <p><strong className="text-slate-800">{t.destinationLabel}:</strong> {ord.destination}</p>
                      <p><strong className="text-slate-800">{t.deliveryLabel}:</strong> {ord.expectedDelivery}</p>
                      {ord.paymentMethod && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <strong className="text-slate-800">Payment:</strong>
                          <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                            {ord.paymentMethod}
                          </span>
                          <span className="font-extrabold px-2 py-0.5 rounded text-[10px] bg-emerald-600 text-white">
                            {ord.paymentStatus || 'Paid'}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block leading-none">TOTAL INVOICE</span>
                        <span className="text-[17px] font-black text-slate-900">₹{ord.totalAmount.toLocaleString()}</span>
                      </div>
                      {ord.savingsRealized && (
                        <div className="text-[11px] text-emerald-800 font-black bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-center">
                          💰 Saved: ₹{ord.savingsRealized.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* PROFILE TAB */}
          {buyerTab === 'profile' && (
            <div className="p-4 flex flex-col gap-3">
              <div className="dribbble-card p-5 flex flex-col gap-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-500 text-white font-black text-[20px] flex items-center justify-center shadow-md">
                    {buyerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'BY'}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-black text-slate-900">{buyerName}</h3>
                    <p className="text-[12px] text-slate-500 font-medium">Household & Institutional Buyer</p>
                    <span className="inline-block mt-1 text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                      ✓ KYC Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-[12px] text-slate-600 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                  <p><strong className="text-slate-800">Registered Phone:</strong> +91 98300 12345</p>
                  <p><strong className="text-slate-800">Hub City:</strong> {buyerLocation}</p>
                  <p><strong className="text-slate-800">Receiving Address:</strong> {buyerAddress}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem('farm2flow_user_session');
                      window.location.href = '/login';
                    }
                  }}
                  className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-black rounded-xl text-[12px] border border-red-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">logout</span>
                  <span>{t.signOut}</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 backdrop-blur-xl border-t border-slate-200 grid grid-cols-4 text-[11px] font-bold text-center py-2.5 z-40 shadow-xl px-2">
          {[
            { id: 'home', icon: 'storefront', label: 'Shop' },
            { id: 'browse', icon: 'explore', label: 'Browse' },
            { id: 'orders', icon: 'receipt_long', label: 'Orders' },
            { id: 'profile', icon: 'person', label: 'Profile' },
          ].map(item => {
            const isActive = buyerTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setBuyerTab(item.id as any)}
                className={`relative flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-emerald-700 font-black scale-105'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-2.5 w-6 h-1 bg-emerald-600 rounded-full animate-in fade-in zoom-in duration-200" />
                )}
                <span className={`material-symbols-outlined text-[24px] ${isActive ? 'fill-current' : ''}`}>
                  {item.icon}
                </span>
                <span className={`text-[10px] tracking-tight ${isActive ? 'font-extrabold text-emerald-800' : 'font-semibold'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* MODALS */}
        <BuyerSmartMatchModal
          isOpen={isSmartMatchOpen}
          onClose={() => {
            setIsSmartMatchOpen(false);
            setSelectedSellerForMatch(null);
          }}
          onOrderCreated={handleOrderCreated}
          buyerName={buyerName}
          buyerDestination={buyerAddress || buyerLocation}
          initialCrop={selectedMapCrop !== 'All Crops' ? selectedMapCrop : 'Tomato'}
          selectedSeller={selectedSellerForMatch}
        />

        <InDriveMapModal
          isOpen={isMapOpen}
          userRole="buyer"
          currentLocationName={buyerLocation}
          onClose={() => setIsMapOpen(false)}
          onSelectLocation={(loc: LocationData) => {
            setBuyerLocation(`${loc.name}`);
          }}
        />

        <PanIndiaBuyerMapModal
          isOpen={isSellerMapOpen}
          onClose={() => setIsSellerMapOpen(false)}
          buyerCityName={buyerLocation}
          initialCrop={selectedMapCrop}
          onSelectSeller={(seller: PanIndiaSeller) => {
            setSelectedSellerForMatch(seller);
            setSelectedMapCrop(seller.crop);
            setIsSmartMatchOpen(true);
          }}
        />
      </div>
    </div>
  );
}
