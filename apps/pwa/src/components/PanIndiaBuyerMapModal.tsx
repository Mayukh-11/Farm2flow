import React, { useEffect, useRef, useState, useMemo } from 'react';
import { getLivePanIndiaSellers, PanIndiaSeller } from '@/data/panIndiaSellers';
import { getStoredProduce } from '@/services/api';
import { getCropPhoto } from '@/data/cropImages';

export const CROP_MAP_COLORS: Record<string, { bg: string; border: string; emoji: string }> = {
  tomato: { bg: '#dc2626', border: '#fef2f2', emoji: '🍅' },
  potato: { bg: '#d97706', border: '#fffbeb', emoji: '🥔' },
  onion: { bg: '#9333ea', border: '#faf5ff', emoji: '🧅' },
  wheat: { bg: '#ca8a04', border: '#fefce8', emoji: '🌾' },
  rice: { bg: '#059669', border: '#ecfdf5', emoji: '🍚' },
  chilli: { bg: '#e11d48', border: '#fff1f2', emoji: '🌶️' },
  mustard: { bg: '#eab308', border: '#fefce8', emoji: '🌼' },
  apple: { bg: '#b91c1c', border: '#fef2f2', emoji: '🍎' },
  banana: { bg: '#eab308', border: '#fefce8', emoji: '🍌' },
  mango: { bg: '#ea580c', border: '#fff7ed', emoji: '🥭' },
  orange: { bg: '#f97316', border: '#fff7ed', emoji: '🍊' },
  guava: { bg: '#84cc16', border: '#f7fee7', emoji: '🍈' },
  papaya: { bg: '#f59e0b', border: '#fffbeb', emoji: '🥭' },
  watermelon: { bg: '#10b981', border: '#ecfdf5', emoji: '🍉' },
  pomegranate: { bg: '#be123c', border: '#fff1f2', emoji: '🫐' },
  pineapple: { bg: '#ca8a04', border: '#fefce8', emoji: '🍍' },
  grapes: { bg: '#7c3aed', border: '#f5f3ff', emoji: '🍇' },
  lemon: { bg: '#eab308', border: '#fefce8', emoji: '🍋' },
  kiwi: { bg: '#65a30d', border: '#f7fee7', emoji: '🥝' },
  'dragon fruit': { bg: '#ec4899', border: '#fdf2f8', emoji: '🐉' },
  'sweet lime': { bg: '#84cc16', border: '#f7fee7', emoji: '🍋' },
  sapota: { bg: '#78350f', border: '#fef3c7', emoji: '🥔' },
  litchi: { bg: '#e11d48', border: '#fff1f2', emoji: '🍓' },
  coconut: { bg: '#065f46', border: '#ecfdf5', emoji: '🥥' },
  jackfruit: { bg: '#65a30d', border: '#f7fee7', emoji: '🍈' },
  pear: { bg: '#a3e635', border: '#f7fee7', emoji: '🍐' },
  peach: { bg: '#fb923c', border: '#fff7ed', emoji: '🍑' },
  plum: { bg: '#701a75', border: '#fdf4ff', emoji: '🟣' },
  cauliflower: { bg: '#15803d', border: '#f0fdf4', emoji: '🥦' },
  cabbage: { bg: '#16a34a', border: '#f0fdf4', emoji: '🥬' },
  carrot: { bg: '#ea580c', border: '#fff7ed', emoji: '🥕' },
  brinjal: { bg: '#6b21a8', border: '#faf5ff', emoji: '🍆' },
  'lady finger': { bg: '#15803d', border: '#f0fdf4', emoji: '🌱' },
  'green peas': { bg: '#22c55e', border: '#f0fdf4', emoji: '🫛' },
  cucumber: { bg: '#10b981', border: '#ecfdf5', emoji: '🥒' },
  ginger: { bg: '#b45309', border: '#fffbeb', emoji: '🫚' },
  garlic: { bg: '#64748b', border: '#f8fafc', emoji: '🧄' },
  pumpkin: { bg: '#ea580c', border: '#fff7ed', emoji: '🎃' },
  radish: { bg: '#e2e8f0', border: '#ffffff', emoji: '🌱' },
  beetroot: { bg: '#881337', border: '#fff1f2', emoji: '🟣' },
  broccoli: { bg: '#14532d', border: '#f0fdf4', emoji: '🥦' },
  mushroom: { bg: '#78716c', border: '#fafaf9', emoji: '🍄' },
  spinach: { bg: '#166534', border: '#f0fdf4', emoji: '🥬' },
  coriander: { bg: '#15803d', border: '#f0fdf4', emoji: '🌿' },
  mint: { bg: '#047857', border: '#ecfdf5', emoji: '🍃' },
  fenugreek: { bg: '#15803d', border: '#f0fdf4', emoji: '🌱' },
  'ridge gourd': { bg: '#16a34a', border: '#f0fdf4', emoji: '🥒' },
  'pointed gourd': { bg: '#15803d', border: '#f0fdf4', emoji: '🥒' },
  drumstick: { bg: '#15803d', border: '#f0fdf4', emoji: '🥢' },
  'sweet potato': { bg: '#9a3412', border: '#fff7ed', emoji: '🍠' },
  maize: { bg: '#d97706', border: '#fffbeb', emoji: '🌽' },
  jowar: { bg: '#b45309', border: '#fffbeb', emoji: '🌾' },
  bajra: { bg: '#92400e', border: '#fffbeb', emoji: '🌾' },
  ragi: { bg: '#78350f', border: '#fef3c7', emoji: '🌾' },
  turmeric: { bg: '#d97706', border: '#fffbeb', emoji: '🟡' },
  cardamom: { bg: '#15803d', border: '#f0fdf4', emoji: '🟢' },
  'black pepper': { bg: '#1e293b', border: '#f8fafc', emoji: '⚫' }
};

interface PanIndiaBuyerMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  buyerCityName?: string;
  initialCrop?: string;
  onSelectSeller?: (seller: PanIndiaSeller) => void;
}

export const PanIndiaBuyerMapModal: React.FC<PanIndiaBuyerMapModalProps> = ({
  isOpen,
  onClose,
  buyerCityName = 'Salt Lake, Kolkata',
  initialCrop = 'All Crops',
  onSelectSeller
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  // Live real-time sellers list from storage & live events
  const [liveProduce, setLiveProduce] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      return getStoredProduce();
    }
    return [];
  });

  const [selectedCrop, setSelectedCrop] = useState<string>(() => {
    return initialCrop || 'All Crops';
  });

  const [selectedSeller, setSelectedSeller] = useState<PanIndiaSeller | null>(null);
  const [activeStateFilter, setActiveStateFilter] = useState<string>('All States');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'map' | 'split'>('split');
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite' | 'terrain'>('streets');
  const [showDirectLines, setShowDirectLines] = useState<boolean>(true);

  // Listen to real-time events from farmer listings and stock reduction across tabs and current tab
  useEffect(() => {
    const handleProduceUpdated = (e: any) => {
      const updated = e.detail?.produceList || getStoredProduce();
      setLiveProduce([...updated]);
    };

    const handleSellersStockUpdated = () => {
      setLiveProduce(prev => [...prev]);
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'farm2flow_produce_items' || e.key === 'farm2flow_pan_india_sellers_stock') {
        setLiveProduce(getStoredProduce());
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
      window.addEventListener('farm2flow_sellers_stock_updated', handleSellersStockUpdated);
      window.addEventListener('storage', handleStorageChange);
      // Refresh on open
      if (isOpen) {
        setLiveProduce(getStoredProduce());
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
        window.removeEventListener('farm2flow_sellers_stock_updated', handleSellersStockUpdated);
        window.removeEventListener('storage', handleStorageChange);
      }
    };
  }, [isOpen]);

  // Combine base pan-India sellers with live farmer-enlisted crops
  const allSellers = useMemo(() => {
    return getLivePanIndiaSellers(liveProduce);
  }, [liveProduce]);

  // Dynamically compute available crops from all active sellers
  const dynamicCropList = useMemo(() => {
    const set = new Set<string>();
    allSellers.forEach(s => {
      if (s.crop) set.add(s.crop);
    });
    return ['All Crops', ...Array.from(set)];
  }, [allSellers]);

  // Filter sellers based on crop, state, and query
  const filteredSellers = useMemo(() => {
    return allSellers.filter(seller => {
      const matchesCrop = selectedCrop === 'All Crops' || seller.crop.toLowerCase() === selectedCrop.toLowerCase();
      const matchesState = activeStateFilter === 'All States' || seller.state.toLowerCase() === activeStateFilter.toLowerCase();
      const matchesQuery = !searchQuery || 
        seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.fpoOrCoop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.variety.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCrop && matchesState && matchesQuery;
    });
  }, [allSellers, selectedCrop, activeStateFilter, searchQuery]);

  // Unique states for current selected crop
  const availableStates = useMemo(() => {
    const states = new Set<string>();
    allSellers.forEach(s => {
      if (selectedCrop === 'All Crops' || s.crop.toLowerCase() === selectedCrop.toLowerCase()) {
        states.add(s.state);
      }
    });
    return ['All States', ...Array.from(states)];
  }, [allSellers, selectedCrop]);

  // Buyer coordinates (Default: Kolkata wholesale hub)
  const buyerCoords: [number, number] = [22.5852, 88.3563];

  // Initialize or re-center Leaflet Map
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !(window as any).L || !mapContainerRef.current) return;

      const L = (window as any).L;

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: [22.5, 79.5], // Center of India
          zoom: 5,
          minZoom: 4,
          maxZoom: 18,
          zoomControl: false
        });

        const tileUrls = {
          streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        };

        const currentTileLayer = L.tileLayer(tileUrls.streets, {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        (map as any)._baseTileLayer = currentTileLayer;

        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Buyer Pin
        // Consumer Location Pin
        const buyerIcon = L.divIcon({
          className: 'buyer-dest-pin',
          html: `
            <div style="
              width: 44px; height: 44px;
              background: #003b1b;
              border: 3px solid #ffcc00;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 6px 18px rgba(0,0,0,0.45);
              display: flex; align-items: center; justify-content: center;
              cursor: pointer;
            ">
              <span style="
                transform: rotate(45deg);
                font-size: 18px;
                color: #ffffff;
              ">🏠</span>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 44]
        });

        const buyerMarker = L.marker(buyerCoords, { icon: buyerIcon }).addTo(map);
        buyerMarker.bindPopup(`
          <div style="font-family: sans-serif; padding: 2px;">
            <div style="font-weight: 800; color: #003b1b; font-size: 13px;">📍 Your Home Delivery Location</div>
            <div style="font-size: 11px; color: #333; margin-top: 2px;">${buyerCityName}</div>
            <div style="font-size: 10px; color: #666; margin-top: 2px;">Direct doorstep delivery from verified farmers across India.</div>
          </div>
        `);

        markersLayerRef.current = L.featureGroup().addTo(map);
        mapInstanceRef.current = map;
      } else {
        mapInstanceRef.current.invalidateSize();
      }

      renderMarkers();
    }, 150);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Update map tile layer when mapStyle changes
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === 'undefined' || !(window as any).L) return;
    const L = (window as any).L;
    const map = mapInstanceRef.current;
    
    if (map._baseTileLayer) {
      map.removeLayer(map._baseTileLayer);
    }

    const tileUrls = {
      streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
    };

    const newLayer = L.tileLayer(tileUrls[mapStyle], {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap / ESRI'
    }).addTo(map);
    
    map._baseTileLayer = newLayer;
  }, [mapStyle]);

  // Render seller markers & connection paths
  const renderMarkers = () => {
    if (!mapInstanceRef.current || !markersLayerRef.current || typeof window === 'undefined' || !(window as any).L) return;

    const L = (window as any).L;
    markersLayerRef.current.clearLayers();

    filteredSellers.forEach(seller => {
      const cropKey = seller.crop.toLowerCase();
      const style = CROP_MAP_COLORS[cropKey] || { bg: '#0284c7', border: '#f0f9ff', emoji: '📦' };

      const markerHtml = `
        <div class="seller-pin-marker" style="
          width: 38px; height: 38px;
          background: ${style.bg};
          border: 2.5px solid #ffffff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        ">
          <span style="
            transform: rotate(45deg);
            font-size: 16px;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
          ">${style.emoji}</span>
          <div style="
            position: absolute;
            bottom: -22px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            background: rgba(15, 23, 42, 0.9);
            color: #ffffff;
            font-size: 9px;
            font-weight: 800;
            padding: 1px 4px;
            border-radius: 4px;
            white-space: nowrap;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          ">₹${seller.pricePerKg}/kg</div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: `seller-marker-${seller.id}`,
        html: markerHtml,
        iconSize: [38, 38],
        iconAnchor: [19, 38]
      });

      const marker = L.marker([seller.lat, seller.lng], { icon: customIcon });

      // Optional connecting geodesic line to buyer's destination hub
      if (showDirectLines) {
        const polyline = L.polyline([[seller.lat, seller.lng], buyerCoords], {
          color: style.bg,
          weight: 2,
          opacity: 0.5,
          dashArray: '5, 8'
        });
        markersLayerRef.current.addLayer(polyline);
      }

      // Popup card on click
      marker.bindPopup(`
        <div style="font-family: system-ui, sans-serif; min-width: 200px; padding: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 20px;">${style.emoji}</span>
            <div>
              <div style="font-weight: 900; font-size: 13px; color: #0f172a; line-height: 1.2;">${seller.name}</div>
              <div style="font-size: 10px; color: #006c35; font-weight: 700;">${seller.fpoOrCoop}</div>
            </div>
          </div>
          <div style="font-size: 11px; color: #475569; margin-bottom: 6px;">
            📍 <strong>${seller.location}</strong> (${seller.state})
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; background: #f8fafc; padding: 6px; border-radius: 6px; font-size: 10px; margin-bottom: 6px;">
            <div><strong>Rate:</strong> <span style="color: #006c35; font-weight: 800;">₹${seller.pricePerKg}/kg</span></div>
            <div><strong>Qty:</strong> ${seller.quantityKg.toLocaleString()} kg</div>
            <div><strong>Grade:</strong> ${seller.grade}</div>
            <div><strong>Transit:</strong> ${seller.transitDaysToKolkata} days</div>
          </div>
          <button id="btn-select-${seller.id}" style="
            width: 100%;
            background: #006c35;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
          ">Select Supplier & View Deal</button>
        </div>
      `);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-select-${seller.id}`);
        if (btn) {
          btn.onclick = () => {
            setSelectedSeller(seller);
            if (onSelectSeller) onSelectSeller(seller);
          };
        }
        setSelectedSeller(seller);
      });

      marker.on('click', () => {
        setSelectedSeller(seller);
      });

      markersLayerRef.current.addLayer(marker);
    });

    // Auto fit map bounds to show all markers & buyer location
    if (filteredSellers.length > 0) {
      try {
        const bounds = markersLayerRef.current.getBounds();
        bounds.extend(buyerCoords);
        mapInstanceRef.current.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
      } catch (e) {}
    }
  };

  useEffect(() => {
    renderMarkers();
  }, [filteredSellers, showDirectLines]);

  // Clean up on close
  useEffect(() => {
    if (!isOpen && mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
      markersLayerRef.current = null;
    }
  }, [isOpen]);

  const handleFlyToSeller = (seller: PanIndiaSeller) => {
    setSelectedSeller(seller);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([seller.lat, seller.lng], 11, { duration: 1.2 });
    }
  };

  const handleResetPanIndiaView = () => {
    setSelectedSeller(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.5, 79.5], 5, { duration: 1.0 });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-0 sm:p-3 animate-in fade-in duration-250">
      <div className="w-full max-w-[920px] h-[95vh] sm:h-[720px] bg-surface rounded-none sm:rounded-3xl border border-outline-variant shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="p-3.5 sm:p-4 bg-emerald-900 text-white border-b border-emerald-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[24px]">public</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-extrabold text-white leading-tight">
                  Pan-India Direct Sellers Map
                </h2>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-700">
                  Live Mandi Network
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/90 font-medium">
                Sourcing destination: <strong className="text-emerald-300">{buyerCityName}</strong> • {filteredSellers.length} verified producers available
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Map Style Switcher */}
            <div className="hidden sm:flex bg-surface-container-high rounded-xl p-0.5 border border-outline-variant text-[11px] font-bold">
              <button
                onClick={() => setMapStyle('streets')}
                className={`px-2.5 py-1 rounded-lg transition-all ${mapStyle === 'streets' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
              >
                🗺️ Standard
              </button>
              <button
                onClick={() => setMapStyle('satellite')}
                className={`px-2.5 py-1 rounded-lg transition-all ${mapStyle === 'satellite' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`}
              >
                🛰️ Satellite
              </button>
            </div>

            <button
              onClick={handleResetPanIndiaView}
              className="px-2.5 py-1.5 bg-emerald-800 text-white hover:bg-emerald-700 rounded-xl text-[11px] font-bold border border-emerald-700 flex items-center gap-1"
              title="Fit entire India map view"
            >
              <span className="material-symbols-outlined text-[16px]">crop_free</span>
              <span className="hidden sm:inline">Whole Country</span>
            </button>

            <button 
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        {/* Dynamic Crop Filter Tabs (Horizontally Scrollable) */}
        <div className="bg-surface-container-low px-3.5 py-2 border-b border-outline-variant flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider shrink-0 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">filter_alt</span>
            <span>Product:</span>
          </span>

          {dynamicCropList.map(crop => {
            const isSelected = selectedCrop.toLowerCase() === crop.toLowerCase();
            const count = crop === 'All Crops' 
              ? allSellers.length 
              : allSellers.filter(s => s.crop.toLowerCase() === crop.toLowerCase()).length;

            return (
              <button
                key={crop}
                onClick={() => {
                  setSelectedCrop(crop);
                  setActiveStateFilter('All States');
                  setSelectedSeller(null);
                }}
                className={`px-3 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected 
                    ? 'bg-primary-container text-on-primary shadow-sm scale-102 ring-2 ring-primary/20' 
                    : 'bg-white hover:bg-surface-container-high text-on-surface border border-outline-variant'
                }`}
              >
                <span>
                  {crop === 'All Crops' ? '🌐' : (CROP_MAP_COLORS[crop.toLowerCase()]?.emoji || '🌱')}
                </span>
                <span>{crop}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${isSelected ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* State Filter Pills + Route Line Toggle */}
        <div className="bg-surface px-3.5 py-1.5 border-b border-outline-variant flex items-center justify-between gap-2 overflow-x-auto text-[11px] shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="font-bold text-on-surface-variant shrink-0">States:</span>
            {availableStates.map(st => (
              <button
                key={st}
                onClick={() => setActiveStateFilter(st)}
                className={`px-2 py-0.5 rounded-md font-semibold whitespace-nowrap transition-colors ${
                  activeStateFilter === st 
                    ? 'bg-secondary text-on-secondary font-bold' 
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-1 text-[11px] font-bold text-on-surface-variant shrink-0 cursor-pointer pl-2 border-l border-outline-variant">
            <input
              type="checkbox"
              checked={showDirectLines}
              onChange={e => setShowDirectLines(e.target.checked)}
              className="w-3.5 h-3.5 rounded accent-primary"
            />
            <span className="hidden sm:inline">Transit Routes to Hub</span>
          </label>
        </div>

        {/* Main Body: Interactive Map + Seller Drawer */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          
          {/* Leaflet Map Canvas */}
          <div className="flex-1 relative h-[55%] md:h-full bg-slate-100 overflow-hidden">
            <div ref={mapContainerRef} className="w-full h-full z-10" />

            {/* Floating Map Legend Overlay */}
            <div className="absolute top-3 left-3 z-20 bg-surface/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-outline-variant shadow-lg text-[11px] flex flex-col gap-1 max-w-[200px] pointer-events-auto">
              <div className="flex items-center justify-between font-extrabold text-on-surface border-b border-outline-variant pb-1">
                <span>Map Legend</span>
                <span className="text-[10px] text-emerald-700">Live Pins</span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-600 border border-white inline-block shadow-xs"></span>
                <span className="text-on-surface font-medium">Tomato (WB, MH, KA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-600 border border-white inline-block shadow-xs"></span>
                <span className="text-on-surface font-medium">Nashik / Mahuva Onion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-600 border border-white inline-block shadow-xs"></span>
                <span className="text-on-surface font-medium">Hooghly / Agra Potato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-950 border border-amber-400 inline-block shadow-xs"></span>
                <span className="text-on-surface font-extrabold">Consumer Home ({buyerCityName.split(',')[0]})</span>
              </div>
            </div>

            {/* Quick Zoom India Button */}
            <div className="absolute bottom-3 left-3 z-20 flex gap-2">
              <button
                onClick={handleResetPanIndiaView}
                className="bg-white/95 backdrop-blur-xs text-on-surface font-extrabold px-3 py-1.5 rounded-xl border border-outline-variant shadow-md text-[11px] flex items-center gap-1.5 hover:bg-emerald-50 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">zoom_out_map</span>
                <span>Fit India View</span>
              </button>
            </div>
          </div>

          {/* Right Side / Bottom Seller List & Selection Card */}
          <div className="w-full md:w-[360px] h-[45%] md:h-full bg-surface-container-lowest border-t md:border-t-0 md:border-l border-outline-variant flex flex-col z-20 shadow-xl overflow-hidden">
            
            {/* Search within filtered results */}
            <div className="p-3 border-b border-outline-variant bg-surface shrink-0 flex items-center gap-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                <input
                  type="text"
                  placeholder={`Search in ${selectedCrop} suppliers...`}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-2 py-1.5 text-[12px] bg-surface-container-low border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Selected Seller Showcase Card (If any selected) */}
            {selectedSeller && (
              <div className="p-3 bg-emerald-50 border-b border-emerald-200 shrink-0 flex flex-col gap-2 animate-in slide-in-from-top duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={getCropPhoto(selectedSeller.crop)}
                      alt={selectedSeller.crop}
                      className="w-10 h-10 rounded-xl object-cover border border-emerald-300 shrink-0 shadow-xs"
                    />
                    <div>
                      <h4 className="text-[14px] font-extrabold text-emerald-950 leading-tight">
                        {selectedSeller.name}
                      </h4>
                      <p className="text-[11px] text-emerald-800 font-bold">{selectedSeller.fpoOrCoop} • {selectedSeller.crop}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedSeller(null)}
                    className="text-emerald-700 hover:text-emerald-950 text-[12px] font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-[11px] bg-white p-2 rounded-xl border border-emerald-200">
                  <div><strong>Mandi:</strong> {selectedSeller.location}</div>
                  <div><strong>State:</strong> {selectedSeller.state}</div>
                  <div><strong>Rate:</strong> <span className="font-extrabold text-emerald-700 text-[13px]">₹{selectedSeller.pricePerKg}</span>/kg</div>
                  <div><strong>Volume:</strong> {selectedSeller.quantityKg.toLocaleString()} kg</div>
                  <div><strong>Transit:</strong> ~{selectedSeller.transitDaysToKolkata} Days</div>
                  <div><strong>Grade:</strong> {selectedSeller.grade}</div>
                </div>

                <div className="flex gap-2 pt-1">
                  <a
                    href={`tel:${selectedSeller.phone}`}
                    className="flex-1 py-2 bg-white border border-emerald-300 text-emerald-900 rounded-xl text-[12px] font-bold text-center flex items-center justify-center gap-1 shadow-xs hover:bg-emerald-100/50"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>Call Seller</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onSelectSeller) onSelectSeller(selectedSeller);
                      onClose();
                    }}
                    className="flex-1 py-2 bg-primary-container text-on-primary rounded-xl text-[12px] font-extrabold text-center flex items-center justify-center gap-1 shadow-md hover:bg-primary active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[16px]">shopping_cart_checkout</span>
                    <span>Direct Procure</span>
                  </button>
                </div>
              </div>
            )}

            {/* List of Sellers */}
            <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-2">
              <div className="flex justify-between items-center px-1 text-[11px] text-on-surface-variant font-bold">
                <span>{filteredSellers.length} Farmers & FPOs Listed</span>
                <span>Click to Pinpoint on Map</span>
              </div>

              {filteredSellers.length === 0 ? (
                <div className="py-12 text-center text-on-surface-variant flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-[36px] text-on-surface-variant">travel_explore</span>
                  <p className="text-[13px] font-bold">No suppliers match this query</p>
                  <button 
                    onClick={() => { setSelectedCrop('All Crops'); setActiveStateFilter('All States'); setSearchQuery(''); }}
                    className="text-primary text-[12px] font-bold underline"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                filteredSellers.map(seller => {
                  const isSelected = selectedSeller?.id === seller.id;
                  return (
                    <div
                      key={seller.id}
                      onClick={() => handleFlyToSeller(seller)}
                      className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                        isSelected 
                          ? 'bg-emerald-50/90 border-primary ring-2 ring-primary/20 shadow-md' 
                          : 'bg-white hover:bg-surface-container-low border-outline-variant shadow-xs'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <img
                            src={getCropPhoto(seller.crop)}
                            alt={seller.crop}
                            className="w-9 h-9 rounded-xl object-cover border border-slate-200 shrink-0 shadow-xs"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-[13px] font-extrabold text-on-surface leading-tight">
                                {seller.name}
                              </h4>
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                                {seller.crop}
                              </span>
                            </div>
                            <p className="text-[10px] text-on-surface-variant truncate max-w-[170px]">{seller.fpoOrCoop}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[14px] font-black text-primary block leading-tight">
                            ₹{seller.pricePerKg} <span className="text-[10px] text-on-surface-variant font-medium">/kg</span>
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                            {seller.quantityKg} kg
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-outline-variant/60 text-on-surface-variant">
                        <span className="flex items-center gap-0.5 truncate font-medium">
                          <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                          <span className="truncate">{seller.location}, {seller.state}</span>
                        </span>
                        <span className="text-[10px] font-bold bg-surface-container px-1.5 py-0.5 rounded text-on-surface shrink-0">
                          {seller.transitDaysToKolkata}d transit
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Summary */}
            <div className="p-3 bg-surface border-t border-outline-variant flex items-center justify-between text-[11px] font-bold text-on-surface-variant shrink-0">
              <span>National Mandi Connectivity</span>
              <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Geodesic Routing</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
