'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { getAllCatalogCrops, addNewCustomCrop, CatalogCropItem } from '@/data/cropCatalog';

interface CropMarketExplorerProps {
  selectedCrop: string;
  onSelectCrop: (cropName: string) => void;
  onListProduceClick?: (cropName: string) => void;
}

export const CropMarketExplorer: React.FC<CropMarketExplorerProps> = ({
  selectedCrop,
  onSelectCrop,
  onListProduceClick
}) => {
  const [catalog, setCatalog] = useState<CatalogCropItem[]>(() => getAllCatalogCrops());
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const [newCropName, setNewCropName] = useState<string>('');
  const [newCropCategory, setNewCropCategory] = useState<'Vegetables' | 'Fruits' | 'Grains' | 'Spices' | 'Leafy Greens'>('Vegetables');
  const [newCropVariety, setNewCropVariety] = useState<string>('');
  const [newCropPrice, setNewCropPrice] = useState<string>('30');
  const [newCropIcon, setNewCropIcon] = useState<string>('🥬');
  const [addNotice, setAddNotice] = useState<string>('');

  useEffect(() => {
    const handleCatalogUpdate = (e: any) => {
      if (e.detail?.catalog) {
        setCatalog(e.detail.catalog);
      } else {
        setCatalog(getAllCatalogCrops());
      }
    };
    window.addEventListener('farm2flow_catalog_updated', handleCatalogUpdate);
    return () => window.removeEventListener('farm2flow_catalog_updated', handleCatalogUpdate);
  }, []);

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Leafy Greens'];

  const filteredCrops = useMemo(() => {
    return catalog.filter(c => {
      const matchCat = activeCategory === 'All' || c.category === activeCategory;
      const matchQuery = !searchQuery || 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.variety.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [catalog, activeCategory, searchQuery]);

  const activeItem = useMemo(() => {
    return catalog.find(c => c.name.toLowerCase() === selectedCrop.toLowerCase()) || catalog[0];
  }, [catalog, selectedCrop]);

  const handleAddNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCropName.trim()) return;

    const added = addNewCustomCrop({
      name: newCropName.trim(),
      category: newCropCategory,
      variety: newCropVariety.trim() || 'Farm Fresh Produce',
      suggestedPriceMin: Math.max(10, Math.round(Number(newCropPrice) * 0.9)),
      suggestedPriceMax: Math.max(12, Math.round(Number(newCropPrice) * 1.15)),
      icon: newCropIcon
    });

    setCatalog(getAllCatalogCrops());
    onSelectCrop(added.name);
    setNewCropName('');
    setNewCropVariety('');
    setIsAddingNew(false);
    setAddNotice(`✓ ${added.name} successfully added to real-time catalog!`);
    setTimeout(() => setAddNotice(''), 4000);
  };

  return (
    <div className="flex flex-col gap-3.5">
      {/* Search & Add New Item Action Bar */}
      <div className="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant shadow-xs flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-2.5 top-2.5">search</span>
            <input
              type="text"
              placeholder="Search 30+ vegetables, fruits & grains..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-xl text-[12px] font-medium text-on-surface focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-on-surface-variant hover:text-on-surface text-[14px]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={() => setIsAddingNew(!isAddingNew)}
            className={`px-3 py-1.5 rounded-xl text-[12px] font-extrabold flex items-center gap-1 transition-all shrink-0 ${
              isAddingNew
                ? 'bg-red-100 text-red-800 border border-red-200'
                : 'bg-primary-container text-on-primary shadow-xs active:scale-95 hover:bg-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isAddingNew ? 'close' : 'add_circle'}
            </span>
            <span>{isAddingNew ? 'Cancel' : 'Add Item'}</span>
          </button>
        </div>

        {/* Dynamic Add New Vegetable/Fruit Drawer */}
        {isAddingNew && (
          <form onSubmit={handleAddNewSubmit} className="bg-emerald-50/80 border border-emerald-300/80 p-3 rounded-xl flex flex-col gap-2.5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black text-emerald-950 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-emerald-700">add_box</span>
                <span>Add Any Vegetable, Fruit or Crop</span>
              </span>
              <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full font-extrabold">Instant Real-Time</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[12px]">
              <div>
                <label className="text-[10px] font-extrabold text-emerald-900 block mb-0.5">Crop / Item Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dragon Fruit, Guava, Palak"
                  value={newCropName}
                  onChange={e => setNewCropName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg font-bold text-on-surface text-[12px]"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-900 block mb-0.5">Category</label>
                <select
                  value={newCropCategory}
                  onChange={e => {
                    const cat = e.target.value as any;
                    setNewCropCategory(cat);
                    if (cat === 'Fruits') setNewCropIcon('🍎');
                    else if (cat === 'Vegetables') setNewCropIcon('🥦');
                    else if (cat === 'Grains') setNewCropIcon('🌾');
                    else if (cat === 'Spices') setNewCropIcon('🌶️');
                    else setNewCropIcon('🥬');
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg font-bold text-on-surface text-[12px]"
                >
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Grains">Grains & Cereals</option>
                  <option value="Spices">Spices & Oilseeds</option>
                  <option value="Leafy Greens">Leafy Greens</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[12px]">
              <div className="col-span-2">
                <label className="text-[10px] font-extrabold text-emerald-900 block mb-0.5">Variety / Cultivar</label>
                <input
                  type="text"
                  placeholder="e.g. Local Hybrid Organic"
                  value={newCropVariety}
                  onChange={e => setNewCropVariety(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg text-on-surface text-[12px]"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-900 block mb-0.5">Expected Rate (₹/kg)</label>
                <input
                  type="number"
                  min="5"
                  max="1000"
                  value={newCropPrice}
                  onChange={e => setNewCropPrice(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg font-bold text-primary text-[12px]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-[12px] font-black shadow-xs transition-all flex items-center justify-center gap-1 active:scale-98"
            >
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Publish to Real-Time Market</span>
            </button>
          </form>
        )}

        {addNotice && (
          <div className="bg-emerald-700 text-white text-[11px] font-bold p-2 rounded-xl text-center animate-in fade-in duration-200">
            {addNotice}
          </div>
        )}

        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] font-bold">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-primary-container text-on-primary shadow-xs font-black'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Expandable Crop Cards Grid */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[12px] font-extrabold text-on-surface">
            {activeCategory} Catalog ({filteredCrops.length} items)
          </span>
          <span className="text-[10px] text-on-surface-variant font-medium">
            Tap card for live intel & rates
          </span>
        </div>

        {/* Horizontal / Grid Scrollable Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto no-scrollbar pr-0.5">
          {filteredCrops.map(crop => {
            const isSelected = selectedCrop.toLowerCase() === crop.name.toLowerCase();
            return (
              <div
                key={crop.id}
                onClick={() => onSelectCrop(crop.name)}
                className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 text-left relative overflow-hidden interactive-card ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-900 to-emerald-950 text-white border-emerald-400 shadow-lg ring-4 ring-emerald-500/20 scale-102'
                    : 'bg-surface-container-lowest hover:border-primary/40 hover:shadow-md border-outline-variant shadow-xs text-on-surface'
                }`}
              >
                {/* Active Indicator Pip */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-xs flex items-center justify-center animate-in zoom-in duration-200">
                    <span className="w-1.5 h-1.5 bg-emerald-950 rounded-full" />
                  </span>
                )}

                {/* Category tag */}
                <div className="flex items-start justify-between">
                  <span className={`text-2xl leading-none drop-shadow-xs transition-transform duration-200 ${isSelected ? 'scale-115 rotate-3' : 'group-hover:scale-105'}`}>
                    {crop.icon}
                  </span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider transition-colors ${
                    isSelected ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40' : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {crop.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-[14px] leading-tight truncate">{crop.name}</h4>
                  <p className={`text-[10px] truncate font-medium ${isSelected ? 'text-emerald-200' : 'text-on-surface-variant'}`}>
                    {crop.variety}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-current/10 flex items-center justify-between text-[11px]">
                  <span className="font-extrabold">₹{crop.suggestedPriceMin}–{crop.suggestedPriceMax}</span>
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded transition-all ${
                    crop.trend === 'up'
                      ? isSelected ? 'bg-emerald-400 text-emerald-950 font-black' : 'bg-emerald-100 text-emerald-900'
                      : isSelected ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {crop.trend === 'up' ? '▲ High' : '● Stable'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Crop Interactive Deep Dive Widget */}
      {activeItem && (
        <div className="bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-emerald-50/50 p-4 rounded-2xl border-2 border-primary-container shadow-md flex flex-col gap-3 animate-in fade-in duration-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl">{activeItem.icon}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[17px] font-black text-on-surface leading-tight">{activeItem.name}</h3>
                  <span className="text-[10px] bg-primary-fixed text-primary-container px-2 py-0.2 rounded font-extrabold">
                    {activeItem.category}
                  </span>
                </div>
                <p className="text-[11px] text-on-surface-variant font-medium">{activeItem.variety}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-on-surface-variant block font-bold">Suggested Rate</span>
              <span className="text-[17px] font-black text-primary">₹{activeItem.suggestedPriceMin}–{activeItem.suggestedPriceMax}</span>
              <span className="text-[10px] text-on-surface-variant">/kg</span>
            </div>
          </div>

          {/* Demand & Forecast Metrics */}
          <div className="grid grid-cols-2 gap-2 text-[12px]">
            <div className="bg-white/80 p-2.5 rounded-xl border border-outline-variant">
              <p className="text-[10px] text-on-surface-variant font-bold">Current Weekly Mandi Flow</p>
              <p className="font-extrabold text-on-surface text-[14px]">{activeItem.demandTonnes} tonnes</p>
            </div>
            <div className="bg-white/80 p-2.5 rounded-xl border border-outline-variant">
              <p className="text-[10px] text-on-surface-variant font-bold">Projected Demand Peak</p>
              <p className="font-extrabold text-primary text-[14px]">{activeItem.forecastDemandTonnes} tonnes</p>
            </div>
          </div>

          {/* AI Advisor Recommendation */}
          <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-[11px]">
            <p className="font-extrabold text-emerald-950 flex items-center gap-1">
              <span>🌾 Direct Realization Insight:</span>
            </p>
            <p className="text-emerald-900 mt-0.5 leading-relaxed font-medium">
              {activeItem.recommendation}
            </p>
          </div>

          {/* Quick List Action */}
          {onListProduceClick && (
            <button
              onClick={() => onListProduceClick(activeItem.name)}
              className="w-full py-3 bg-primary-container text-on-primary rounded-xl text-[13px] font-black hover:bg-primary transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>List {activeItem.name} for Sale Now</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
