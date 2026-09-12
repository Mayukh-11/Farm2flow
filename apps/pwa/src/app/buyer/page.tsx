'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStoredProduce, getOrders, getCart, addToCart } from '@/services/api';
import { Produce, Order, CartItem } from '@/types';
import { BuyerSmartMatchModal } from '@/components/BuyerSmartMatchModal';
import { InDriveMapModal, LocationData } from '@/components/InDriveMapModal';
import { PanIndiaBuyerMapModal } from '@/components/PanIndiaBuyerMapModal';
import { ConsumerCartDrawer } from '@/components/ConsumerCartDrawer';
import { PanIndiaSeller } from '@/data/panIndiaSellers';
import { translations, Language } from '@/data/translations';
import { getCropPhoto } from '@/data/cropImages';

export default function BuyerPage() {
  const [language, setLanguage] = useState<Language>('EN');
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartAddedToast, setCartAddedToast] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSmartMatchOpen, setIsSmartMatchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isSellerMapOpen, setIsSellerMapOpen] = useState(false);
  const [selectedMapCrop, setSelectedMapCrop] = useState<string>('All Crops');
  const [selectedSellerForMatch, setSelectedSellerForMatch] = useState<PanIndiaSeller | null>(null);
  const [buyerIdentifier, setBuyerIdentifier] = useState<string>('guest');
  const [buyerName, setBuyerName] = useState<string>('Sourav Mukherjee');
  const [buyerLocation, setBuyerLocation] = useState<string>('Salt Lake, Kolkata');
  const [buyerAddress, setBuyerAddress] = useState<string>('AD-Block, Sector 1, Salt Lake, Kolkata - 700064');
  const [buyerTab, setBuyerTab] = useState<'home' | 'browse' | 'orders' | 'profile'>('home');


  const t = (translations[language] || translations.EN) as any;

  const categories = [
    { id: 'All', label: t.catAll || 'All Items', icon: '✨' },
    { id: 'Vegetables', label: t.catVegetables || 'Vegetables', icon: '🥦' },
    { id: 'Fruits', label: t.catFruits || 'Fresh Fruits', icon: '🍎' },
    { id: 'Grains', label: t.catGrains || 'Grains & Cereals', icon: '🌾' },
    { id: 'Spices', label: t.catSpices || 'Pure Spices', icon: '🌶️' },
  ];

  useEffect(() => {
    let currentUserId = 'guest';
    // Auth Guard: Check session
    if (typeof window !== 'undefined') {
      const sessionStr = localStorage.getItem('farm2flow_user_session');
      if (!sessionStr) {
        window.location.href = '/login';
        return;
      }
      try {
        const session = JSON.parse(sessionStr);
        currentUserId = session.identifier || session.email || session.phone || session.name || 'guest';
        setBuyerIdentifier(currentUserId);
        if (session.name) setBuyerName(session.name);
        if (session.location) setBuyerLocation(session.location);
        if (session.address) setBuyerAddress(session.address);
      } catch (e) {}
    }
    setProduceList(getStoredProduce());
    setOrdersList(getOrders());
    setCartList(getCart(currentUserId));

    const handleProduceUpdated = (e: any) => {
      if (e?.detail?.produceList) {
        setProduceList(e.detail.produceList);
      } else {
        setProduceList(getStoredProduce());
      }
    };

    const handleCartUpdated = (e: any) => {
      if (!e?.detail?.userId || e.detail.userId === currentUserId) {
        if (e?.detail?.cart) {
          setCartList(e.detail.cart);
        } else {
          setCartList(getCart(currentUserId));
        }
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'farm2flow_produce_items') {
        setProduceList(getStoredProduce());
      }
      if (e.key && e.key.startsWith('farm2flow_consumer_cart')) {
        setCartList(getCart(currentUserId));
      }
    };

    window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
    window.addEventListener('farm2flow_cart_updated', handleCartUpdated);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
      window.removeEventListener('farm2flow_cart_updated', handleCartUpdated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleAddToCart = (produce: Produce, quantityKg: number = 5) => {
    const itemToAdd: CartItem = {
      id: produce.id,
      produceId: produce.id,
      cropName: produce.cropName,
      variety: produce.variety,
      grade: produce.grade,
      farmerName: produce.farmerName,
      farmerLocation: produce.farmerLocation,
      pricePerKg: produce.expectedPricePerKg,
      quantityKg: Math.min(quantityKg, produce.quantityKg),
      maxAvailableKg: produce.quantityKg,
      image: getCropPhoto(produce.cropName)
    };
    const updated = addToCart(itemToAdd, buyerIdentifier);
    setCartList(updated);
    setCartAddedToast(`Added ${produce.cropName} to your Cart!`);
    setTimeout(() => {
      setCartAddedToast(null);
    }, 2800);
  };

  const handleOrderCreated = (newOrder: Order) => {
    setOrdersList(getOrders());
    setCartList(getCart(buyerIdentifier));
    setBuyerTab('orders');
  };


  // Filter produce by category & search query (only show lots with available stock)
  const filteredProduce = useMemo(() => {
    return produceList.filter(item => {
      // Must have available stock > 0
      const hasStock = item.quantityKg > 0 && item.status !== 'Sold Out';
      if (!hasStock) return false;

      const FRUIT_NAMES = ['Apple', 'Banana', 'Mango', 'Orange', 'Guava', 'Papaya', 'Watermelon', 'Pomegranate', 'Pineapple', 'Grapes', 'Lemon', 'Coconut', 'Muskmelon', 'Custard Apple', 'Lychee', 'Pear', 'Peach', 'Plum', 'Kiwi', 'Dragon Fruit', 'Sweet Lime', 'Sapota', 'Jackfruit'];
      const GRAIN_NAMES = ['Rice', 'Wheat', 'Maize', 'Jowar', 'Bajra', 'Ragi', 'Barley', 'Basmati Rice'];
      const SPICE_NAMES = ['Chilli', 'Mustard', 'Turmeric', 'Cardamom', 'Black Pepper', 'Cumin', 'Coriander Seeds', 'Fennel'];

      const matchCat =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Fruits'
          ? FRUIT_NAMES.some(f => item.cropName.toLowerCase().includes(f.toLowerCase()))
          : selectedCategory === 'Grains'
          ? GRAIN_NAMES.some(g => item.cropName.toLowerCase().includes(g.toLowerCase()))
          : selectedCategory === 'Spices'
          ? SPICE_NAMES.some(s => item.cropName.toLowerCase().includes(s.toLowerCase()))
          : selectedCategory === 'Vegetables'
          ? !FRUIT_NAMES.some(f => item.cropName.toLowerCase().includes(f.toLowerCase())) &&
            !GRAIN_NAMES.some(g => item.cropName.toLowerCase().includes(g.toLowerCase())) &&
            !SPICE_NAMES.some(s => item.cropName.toLowerCase().includes(s.toLowerCase()))
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
    <div className="bg-[#051c0e] text-slate-900 antialiased min-h-screen pb-28 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="max-w-[430px] mx-auto min-h-screen bg-[#f2fbf4] flex flex-col relative shadow-2xl border-x border-emerald-200/80">
        
        {/* TOP STATUS & BRAND HEADER */}
        <header className="bg-emerald-900 text-white border-b border-emerald-800 sticky top-0 z-40 px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-2">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[20px]">eco</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[16px] font-black text-white tracking-tight leading-none">Farm2Flow</span>
                <span className="text-[8px] bg-emerald-800 text-emerald-200 font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-700 shrink-0">
                  Direct
                </span>
              </div>
            </div>

            {/* Actions: Language Switcher + Cart + Orders */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Language Switcher */}
              <div className="bg-emerald-950/90 rounded-full p-0.5 flex text-[10px] border border-emerald-700/60 font-bold shadow-xs">
                {(['EN', 'BN', 'HI'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-1.5 py-0.5 rounded-full transition-all ${
                      language === lang
                        ? 'bg-emerald-500 text-emerald-950 font-black shadow-xs'
                        : 'text-emerald-300 hover:text-white'
                    }`}
                  >
                    {lang === 'BN' ? 'বাং' : lang === 'HI' ? 'हिं' : 'EN'}
                  </button>
                ))}
              </div>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="w-8 h-8 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-all relative border border-emerald-700 active:scale-95 shrink-0"
                aria-label="View Cart"
                title="View Cart"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                {cartList.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-emerald-400 text-emerald-950 text-[9px] font-black rounded-full flex items-center justify-center border border-emerald-900 shadow-xs animate-pulse">
                    {cartList.length}
                  </span>
                )}
              </button>

              {/* Track Orders Button */}
              <button
                onClick={() => setBuyerTab('orders')}
                className="w-8 h-8 rounded-full bg-emerald-800 hover:bg-emerald-700 text-emerald-100 flex items-center justify-center transition-all relative border border-emerald-700 active:scale-95 shrink-0"
                aria-label="View Orders"
                title="Track Orders"
              >
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                {ordersList.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-emerald-400 text-emerald-950 text-[9px] font-black rounded-full flex items-center justify-center border border-emerald-900 shadow-xs">
                    {ordersList.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sub-bar: Delivery Location Picker */}
          <div className="mt-2 pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px]">
            <button
              onClick={() => setIsMapOpen(true)}
              className="flex items-center gap-1.5 font-bold text-emerald-200 hover:text-white transition-colors min-w-0 text-left group"
              title="Click to change delivery address"
            >
              <span className="material-symbols-outlined text-[15px] text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">location_on</span>
              <span className="text-emerald-300/80 font-normal shrink-0">Deliver to:</span>
              <span className="truncate max-w-[220px] font-extrabold text-white underline decoration-emerald-500/50 underline-offset-2">
                {buyerLocation}
              </span>
              <span className="material-symbols-outlined text-[14px] text-emerald-400 shrink-0">expand_more</span>
            </button>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-700/60 shrink-0">
              Fresh Today
            </span>
          </div>
        </header>


        {/* MAIN BODY CONTENT */}
        <main className="flex-1 flex flex-col">
          {buyerTab === 'home' && (
            <>
              {/* DRIBBLE-STYLE HERO SECTION WITH REAL FARM PHOTOGRAPHY & LUXURY BADGES */}
              <section className="p-4 pt-3">
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-emerald-950 via-green-950 to-emerald-900 text-white shadow-xl border border-emerald-800/60">
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
                        <span className="text-[11px] font-black tracking-tight">{t.heroTag || '100% Farm-Gate Direct'}</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-200/90 bg-emerald-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-700/50">
                        {t.zeroMiddlemen || 'Zero Middlemen'}
                      </span>
                    </div>

                    <div>
                      <h1 className="text-[26px] font-black tracking-tight leading-[1.15] text-white">
                        {t.heroTitlePart1 || 'Fresh from the soil,'} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-amber-200">
                          {t.heroTitlePart2 || 'straight to your door.'}
                        </span>
                      </h1>
                      <p className="text-[12px] text-slate-300/95 font-medium mt-1.5 leading-relaxed">
                        {t.heroDesc || 'Order pristine harvests directly from verified Indian farmers at transparent mandi-index prices.'}
                      </p>
                    </div>

                    {/* Quick CTA Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setIsSmartMatchOpen(true)}
                        className="py-3 px-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl text-[12px] font-extrabold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">handshake</span>
                        <span>{t.smartProcureBtn || 'Smart Procure'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedMapCrop('All Crops');
                          setIsSellerMapOpen(true);
                        }}
                        className="py-3 px-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl text-[12px] font-bold border border-white/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px] text-emerald-300">map</span>
                        <span>{t.farmerRadarBtn || 'Farmer Radar'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* DRIBBLE-STYLE PILL SEARCH BAR */}
              <section className="px-4 pb-2">
                <div className="dribbble-search flex items-center px-4 py-2.5 gap-2.5 bg-emerald-50/60 border border-emerald-200">
                  <span className="material-symbols-outlined text-emerald-700 text-[20px]">search</span>
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder || "Search fresh tomatoes, aromatic rice, potatoes..."}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-[13px] font-medium text-emerald-950 placeholder-emerald-800/50 outline-none"
                  />
                  {searchQuery ? (
                    <button onClick={() => setSearchQuery('')} className="text-emerald-700 hover:text-emerald-950">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  ) : (
                    <span className="text-[10px] uppercase font-extrabold tracking-wider bg-emerald-100 text-emerald-800 px-2 py-1 rounded-lg">
                      Filter
                    </span>
                  )}
                </div>
              </section>

              {/* CATEGORY PILL CAROUSEL */}
              <section className="px-4 py-2">
                <div className="flex items-center justify-between mb-2.5">
                  <h2 className="text-[15px] font-extrabold text-emerald-950 tracking-tight">{t.categoriesTitle || 'Categories'}</h2>
                  <span className="text-[11px] text-emerald-700 font-bold hover:underline cursor-pointer">
                    {filteredProduce.length} {t.lotsOnlineSuffix || 'lots online'}
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {categories.map(cat => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                          isSelected
                            ? 'dribbble-pill-active'
                            : 'bg-emerald-50 text-emerald-900 border border-emerald-200/90 hover:bg-emerald-100 shadow-xs'
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
                        <span className="text-[13px] font-black text-white">{t.radarBannerTitle || 'All-India Farmers Radar'}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <p className="text-[11px] text-emerald-200/90 font-medium">
                        {t.radarBannerDesc || 'Compare farm-gate prices & route direct transit across 15+ states.'}
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
                    {t.viewMapBtn || 'View Map'}
                  </button>
                </div>
              </section>

              {/* FEATURED HARVESTS GRID (LUXURY DRIBBLE E-COMMERCE CARDS) */}
              <section className="px-4 py-2 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-[16px] font-extrabold text-emerald-950 tracking-tight">{t.todayHarvestsTitle || 'Today’s Verified Harvests'}</h2>
                    <p className="text-[11px] text-emerald-700/80 font-medium">{t.todayHarvestsSub || 'Direct farm batches inspected for quality & weight'}</p>
                  </div>
                  <button
                    onClick={() => setBuyerTab('browse')}
                    className="text-[12px] text-emerald-700 font-black hover:text-emerald-800 transition-colors"
                  >
                    {t.viewAllArrow || 'View All →'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredProduce.slice(0, 8).map(item => {
                    const photoUrl = getCropPhoto(item.cropName);

                    return (
                      <div
                        key={item.id}
                        className="dribbble-card overflow-hidden flex flex-col group relative bg-[#f4fcf6] border border-emerald-300"
                      >
                        {/* Crop Image Container */}
                        <div className="relative w-full h-32 bg-emerald-950/20 overflow-hidden">
                          <img
                            src={photoUrl}
                            alt={item.cropName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                          {/* Top Badges */}
                          <div className="absolute top-2 left-2 flex items-center gap-1">
                            <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-900/90 text-white px-2 py-0.5 rounded-full shadow-xs backdrop-blur-sm">
                              Direct Farm
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
                            <span>{item.quantityKg} kg {t.readySuffix || 'ready'}</span>
                          </div>
                        </div>

                        {/* Card Info Details */}
                        <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                          <div>
                            <div className="flex items-center justify-between">
                              <h3 className="font-extrabold text-emerald-950 text-[14px] leading-snug">
                                {item.cropName}
                              </h3>
                              <div className="flex items-center gap-0.5 text-emerald-600 text-[11px] font-black">
                                <span>★</span>
                                <span className="text-emerald-900">4.9</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-emerald-700/80 font-medium truncate">
                              {item.variety}
                            </p>
                            <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-0.5 truncate">
                              <span className="material-symbols-outlined text-[11px]">location_on</span>
                              <span>{item.farmerLocation}</span>
                            </p>
                          </div>

                          {/* Price & Action Buttons (Add to Cart + Buy Now) */}
                          <div className="pt-2 border-t border-emerald-200/80 flex items-center justify-between gap-1.5">
                            <div>
                              <span className="text-[9px] uppercase font-bold text-emerald-600/70 block leading-none">
                                {t.farmGatePriceLabel || 'Farm-Gate'}
                              </span>
                              <div className="text-[14px] font-black text-emerald-950 leading-tight">
                                ₹{item.expectedPricePerKg}
                                <span className="text-[10px] font-semibold text-emerald-700">/kg</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {/* Flipkart Style Add to Cart Button */}
                              <button
                                onClick={() => handleAddToCart(item, 10)}
                                className="px-2 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-[10px] flex items-center gap-0.5 active:scale-95 transition-all shadow-2xs"
                                title="Add to Cart"
                              >
                                <span className="material-symbols-outlined text-[14px] text-emerald-700">add_shopping_cart</span>
                                <span>Cart</span>
                              </button>

                              {/* Direct Smart Procure Button */}
                              <button
                                onClick={() => {
                                  setSelectedMapCrop(item.cropName);
                                  setIsSmartMatchOpen(true);
                                }}
                                className="w-7 h-7 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-90 text-white flex items-center justify-center transition-all shadow-xs"
                                title="Instant Direct Buy"
                              >
                                <span className="material-symbols-outlined text-[15px]">flash_on</span>
                              </button>
                            </div>
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
                    {t.farmEconomicsDesc}
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
                  <h2 className="text-[18px] font-black text-emerald-950">{t.exploreCatalogTitle || 'Explore Catalog'}</h2>
                  <p className="text-[12px] text-emerald-700/80 font-medium">{t.exploreCatalogSub || 'All active harvest batches from registered farmers'}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedMapCrop('All Crops');
                    setIsSellerMapOpen(true);
                  }}
                  className="px-3 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-[11px] font-black flex items-center gap-1 hover:bg-emerald-200 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">map</span>
                  <span>{t.mapRadarBtn || 'Map Radar'}</span>
                </button>
              </div>

              {/* Search in Browse */}
              <div className="dribbble-search flex items-center px-4 py-2.5 gap-2.5 bg-[#f4fcf6] border border-emerald-300">
                <span className="material-symbols-outlined text-emerald-700 text-[20px]">search</span>
                <input
                  type="text"
                  placeholder={t.browseSearchPlaceholder || 'Search produce name, grade, location...'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-[13px] font-medium text-emerald-950 placeholder-emerald-800/50 outline-none"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {categories.map(cat => {
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                        selectedCategory === cat.id
                          ? 'dribbble-pill-active'
                          : 'bg-[#f4fcf6] text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                      }`}
                    >
                      {cat.icon} {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Produce List Cards */}
              <div className="flex flex-col gap-3">
                {filteredProduce.map(item => {
                  const photoUrl = getCropPhoto(item.cropName);
                  return (
                    <div
                      key={item.id}
                      className="dribbble-card p-3 flex gap-3 items-center bg-[#f4fcf6] border border-emerald-300"
                    >
                      <img
                        src={photoUrl}
                        alt={item.cropName}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-emerald-200 shadow-xs"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-black text-emerald-950 text-[15px] truncate">
                            {item.cropName}
                          </h3>
                        </div>
                        <p className="text-[12px] text-emerald-800/80 font-medium truncate">{item.variety}</p>
                        <p className="text-[11px] text-emerald-700 mt-0.5">
                          🧑‍🌾 {item.farmerName} • 📍 {item.farmerLocation}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-200/80">
                          <div>
                            <span className="text-[10px] text-emerald-600/70 font-bold block leading-none">{t.availableLabel || 'AVAILABLE'}</span>
                            <span className="text-[13px] font-extrabold text-emerald-950">{item.quantityKg} kg</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[15px] font-black text-emerald-800">₹{item.expectedPricePerKg}/kg</span>
                            <button
                              onClick={() => handleAddToCart(item, 10)}
                              className="px-2.5 py-1.5 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-950 rounded-xl text-[11px] font-extrabold active:scale-95 transition-all shadow-2xs flex items-center gap-1"
                              title="Add to Cart"
                            >
                              <span className="material-symbols-outlined text-[15px] text-emerald-800">add_shopping_cart</span>
                              <span>Cart</span>
                            </button>
                            <button
                              onClick={() => {
                                setSelectedMapCrop(item.cropName);
                                setIsSmartMatchOpen(true);
                              }}
                              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-[11px] font-black active:scale-95 transition-all shadow-xs"
                            >
                              {t.procureBtn || 'Procure'}
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
                  <h2 className="text-[18px] font-black text-emerald-950">{t.trackOrdersTitle || 'Active Orders'}</h2>
                  <p className="text-[12px] text-emerald-700/80 font-medium">{ordersList.length} {t.activeProcurementsSuffix || 'Active procurements'}</p>
                </div>
                <span className="text-[11px] font-extrabold bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded-full">
                  {t.verifiedDispatchBadge || 'Verified Dispatch'}
                </span>
              </div>

              {ordersList.length === 0 ? (
                <div className="bg-[#f4fcf6] rounded-3xl p-8 text-center border border-emerald-300 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <span className="material-symbols-outlined text-[32px]">receipt_long</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-emerald-950">{t.noActiveOrders || 'No active orders yet'}</h3>
                    <p className="text-[12px] text-emerald-700 mt-1">
                      {t.noActiveOrdersSub || 'Run Smart Match to create your first direct farmer order!'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSmartMatchOpen(true)}
                    className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-[12px] font-black shadow-md shadow-emerald-700/20"
                  >
                    {t.startProcurementBtn || 'Start Procurement'}
                  </button>
                </div>
              ) : (
                ordersList.map(ord => (
                  <div
                    key={ord.id}
                    className="dribbble-card p-4 flex flex-col gap-3 bg-[#f4fcf6] border border-emerald-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-700/70">{t.orderIdLabel || 'Order ID'}</span>
                        <h4 className="font-black text-emerald-950 text-[14px]">{ord.orderNumber}</h4>
                      </div>
                      <span className="bg-emerald-200 text-emerald-950 px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-emerald-300">
                        {ord.status}
                      </span>
                    </div>

                    <div className="bg-emerald-100/60 rounded-xl p-3 text-[12px] text-emerald-950 flex flex-col gap-1 border border-emerald-200">
                      <p><strong className="text-emerald-900">{t.quantityLabel}:</strong> {ord.totalQuantityKg} kg</p>
                      <p><strong className="text-emerald-900">{t.destinationLabel}:</strong> {ord.destination}</p>
                      <p><strong className="text-emerald-900">{t.deliveryLabel}:</strong> {ord.expectedDelivery}</p>
                      {ord.paymentMethod && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <strong className="text-emerald-900">Payment:</strong>
                          <span className="font-bold text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded text-[10px]">
                            {ord.paymentMethod}
                          </span>
                          <span className="font-extrabold px-2 py-0.5 rounded text-[10px] bg-emerald-700 text-white">
                            {ord.paymentStatus || 'Paid'}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-emerald-200/80">
                      <div>
                        <span className="text-[10px] text-emerald-700/80 font-bold block leading-none">{t.totalPaidLabel || 'TOTAL PAID (INCL. ₹3/KG ESCROW)'}</span>
                        <span className="text-[17px] font-black text-emerald-950">₹{ord.totalAmount.toLocaleString()}</span>
                      </div>
                      {ord.totalPlatformFee && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded-md">
                          {t.platformFeeLabel || 'Platform Fee'}: ₹{ord.totalPlatformFee.toLocaleString()}
                        </span>
                      )}
                      {ord.savingsRealized && (
                        <div className="text-[11px] text-emerald-900 font-black bg-emerald-200 border border-emerald-300 px-3 py-1.5 rounded-xl text-center">
                          💰 {t.savedLabel || 'Saved'}: ₹{ord.savingsRealized.toLocaleString()}
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
              <div className="dribbble-card p-5 flex flex-col gap-4 bg-[#f4fcf6] border border-emerald-300">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white font-black text-[20px] flex items-center justify-center shadow-md">
                    {buyerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'BY'}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-black text-emerald-950">{buyerName}</h3>
                    <p className="text-[12px] text-emerald-700/80 font-medium">{t.consumerSubtitle || 'Household & Institutional Buyer'}</p>
                    <span className="inline-block mt-1 text-[10px] font-black text-emerald-900 bg-emerald-200 px-2 py-0.5 rounded-md border border-emerald-300">
                      Verified Buyer • Kolkata Cluster
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-[12px] text-emerald-900 bg-emerald-100/60 rounded-2xl p-3.5 border border-emerald-200">
                  <p><strong className="text-emerald-950">{t.registeredPhoneLabel || 'Registered Phone'}:</strong> +91 98300 12345</p>
                  <p><strong className="text-emerald-950">{t.hubCityLabel || 'Hub City'}:</strong> {buyerLocation}</p>
                  <p><strong className="text-emerald-950">{t.receivingAddressLabel || 'Receiving Address'}:</strong> {buyerAddress}</p>
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
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#f2fbf4]/95 backdrop-blur-xl border-t border-emerald-300/80 grid grid-cols-4 text-[11px] font-bold text-center py-2.5 z-40 shadow-xl px-2">
          {[
            { id: 'home', icon: 'storefront', label: t.shopTab || 'Shop' },
            { id: 'browse', icon: 'explore', label: t.browseTab || 'Browse' },
            { id: 'orders', icon: 'receipt_long', label: t.ordersTab || 'Orders' },
            { id: 'profile', icon: 'person', label: t.profileTab || 'Profile' },
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

        {/* FLOATING CART PILL (Flipkart / Zepto style when items exist in cart) */}
        {cartList.length > 0 && !isCartOpen && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[390px] px-3 z-30 animate-in slide-in-from-bottom-3 duration-300">
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-slate-900 text-white rounded-2xl p-3 px-4 shadow-xl border border-slate-700/80 flex items-center justify-between hover:bg-slate-850 active:scale-98 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-[13px] shadow-sm">
                  {cartList.length}
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-black leading-none">
                    {cartList.length} {cartList.length === 1 ? 'Item' : 'Items'} in Cart
                  </p>
                  <p className="text-[10px] text-emerald-400 font-bold mt-0.5">
                    {cartList.reduce((acc, i) => acc + i.quantityKg, 0)} kg total harvest
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[13px] font-black text-emerald-400">
                <span>View Cart & Checkout</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </button>
          </div>
        )}

        {/* TOAST ALERT WHEN ITEM ADDED TO CART */}
        {cartAddedToast && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white px-4 py-2.5 rounded-full shadow-2xl border border-emerald-500/50 flex items-center gap-2 text-[12px] font-extrabold animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="material-symbols-outlined text-emerald-400 text-[18px]">shopping_cart_checkout</span>
            <span>{cartAddedToast}</span>
            <button
              onClick={() => {
                setCartAddedToast(null);
                setIsCartOpen(true);
              }}
              className="underline text-emerald-400 ml-1 text-[11px]"
            >
              View Cart
            </button>
          </div>
        )}

        {/* MODALS & DRAWERS */}
        <ConsumerCartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cartList}
          buyerName={buyerName}
          buyerAddress={buyerAddress || buyerLocation}
          buyerIdentifier={buyerIdentifier}
          onOrderPlaced={handleOrderCreated}
        />

        <BuyerSmartMatchModal
          isOpen={isSmartMatchOpen}
          onClose={() => {
            setIsSmartMatchOpen(false);
            setSelectedSellerForMatch(null);
          }}
          onOrderCreated={handleOrderCreated}
          buyerName={buyerName}
          buyerDestination={buyerAddress || buyerLocation}
          buyerIdentifier={buyerIdentifier}
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

