'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface LocationData {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface InDriveMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'farmer' | 'buyer';
  currentLocationName: string;
  onSelectLocation: (loc: LocationData) => void;
}

// Popular agricultural hubs & mandis for quick selection
const POPULAR_LOCATIONS: Record<'farmer' | 'buyer', LocationData[]> = {
  farmer: [
    { name: 'Hooghly Hub (Singur)', address: 'Singur Vegetable Belt, Hooghly, West Bengal - 712409', lat: 22.8123, lng: 88.2325 },
    { name: 'Burdwan Paddy Mandi', address: 'Shaktigarh Agricultural Cluster, Purba Bardhaman, WB - 713149', lat: 23.2324, lng: 87.8615 },
    { name: 'Nadia Vegetable Zone', address: 'Ranaghat Mandi Complex, Nadia, West Bengal - 741201', lat: 23.1812, lng: 88.5812 },
    { name: 'North 24 Parganas (Barasat)', address: 'Kachua Road, Barasat Agro Market, WB - 700124', lat: 22.7225, lng: 88.4812 },
    { name: 'Midnapore Potato Center', address: 'Ghatal Mandi Depot, Paschim Medinipur, WB - 721212', lat: 22.6681, lng: 87.7214 },
    { name: 'Katihar Grain Mandi (Bihar)', address: 'Kosi Seemanchal Grain Hub, Katihar, Bihar - 854105', lat: 25.5412, lng: 87.5714 },
    { name: 'Nashik Onion Mandi (MH)', address: 'Lasalgaon APMC Market, Nashik, Maharashtra - 422306', lat: 20.1481, lng: 74.2289 },
    { name: 'Shimla Apple Orchards (HP)', address: 'Kotkhai Valley Orchards, Shimla, Himachal Pradesh - 171202', lat: 31.1172, lng: 77.5321 },
    { name: 'Guntur Chilli Yard (AP)', address: 'Kisan Road, Mirchi Yard, Guntur, Andhra Pradesh - 522004', lat: 16.3067, lng: 80.4365 },
    { name: 'Ratnagiri Alphonso Estate (MH)', address: 'Devgad Coastal Groves, Ratnagiri, Maharashtra - 416612', lat: 16.9902, lng: 73.3120 }
  ],
  buyer: [
    { name: 'Salt Lake (Sector 1), Kolkata', address: 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064', lat: 22.5862, lng: 88.4091 },
    { name: 'New Town (Action Area 1)', address: 'Tower 4, Uniworld City, New Town, Kolkata - 700156', lat: 22.5804, lng: 88.4625 },
    { name: 'Ballygunge, South Kolkata', address: '42/1 Dover Road, Ballygunge, Kolkata - 700019', lat: 22.5280, lng: 88.3653 },
    { name: 'Jadavpur, Kolkata', address: 'Prince Anwar Shah Road, Jadavpur, Kolkata - 700032', lat: 22.4988, lng: 88.3715 },
    { name: 'Dum Dum Park, North Kolkata', address: 'Tank No. 3, Dum Dum Park, Kolkata - 700055', lat: 22.6072, lng: 88.4065 },
    { name: 'Alipore, South Kolkata', address: '14B Burdwan Road, Alipore, Kolkata - 700027', lat: 22.5312, lng: 88.3289 },
    { name: 'Howrah Central Depot', address: 'Golabari Road, Salkia, Howrah - 711106', lat: 22.5958, lng: 88.3498 }
  ]
};

export const InDriveMapModal: React.FC<InDriveMapModalProps> = ({
  isOpen,
  onClose,
  userRole,
  currentLocationName,
  onSelectLocation
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const [selectedLoc, setSelectedLoc] = useState<LocationData>(() => {
    const list = POPULAR_LOCATIONS[userRole] || POPULAR_LOCATIONS.farmer;
    const match = list.find(l => currentLocationName && l.name.toLowerCase().includes(currentLocationName.toLowerCase())) || list[0];
    return match;
  });

  // Re-sync when currentLocationName or userRole changes
  useEffect(() => {
    const list = POPULAR_LOCATIONS[userRole] || POPULAR_LOCATIONS.farmer;
    const match = list.find(l => currentLocationName && l.name.toLowerCase().includes(currentLocationName.toLowerCase())) || list[0];
    setSelectedLoc(match);
  }, [currentLocationName, userRole, isOpen]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isLocatingGPS, setIsLocatingGPS] = useState(false);
  const [gpsError, setGpsError] = useState('');

  // Initialize interactive Leaflet map
  useEffect(() => {
    if (!isOpen) return;

    // Small delay to ensure modal DOM is mounted
    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !(window as any).L || !mapContainerRef.current) return;

      const L = (window as any).L;

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: [selectedLoc.lat, selectedLoc.lng],
          zoom: 13,
          zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Custom InDrive-style Marker icon
        const pinIcon = L.divIcon({
          className: 'indrive-pin-wrapper',
          html: `
            <div style="
              width: 38px; height: 38px;
              background: #006c35;
              border: 3px solid #ffffff;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 4px 12px rgba(0,0,0,0.35);
              display: flex; align-items: center; justify-content: center;
            ">
              <span style="
                transform: rotate(45deg);
                color: #ffffff;
                font-weight: 900;
                font-size: 16px;
              ">📍</span>
            </div>
          `,
          iconSize: [38, 38],
          iconAnchor: [19, 38]
        });

        const marker = L.marker([selectedLoc.lat, selectedLoc.lng], {
          draggable: true,
          icon: pinIcon
        }).addTo(map);

        marker.on('dragend', async () => {
          const pos = marker.getLatLng();
          const lat = parseFloat(pos.lat.toFixed(5));
          const lng = parseFloat(pos.lng.toFixed(5));
          
          setSelectedLoc(prev => ({
            name: `Pinned Location (${lat}, ${lng})`,
            address: `Coordinates: ${lat}° N, ${lng}° E • West Bengal`,
            lat,
            lng
          }));
        });

        map.on('click', (e: any) => {
          const lat = parseFloat(e.latlng.lat.toFixed(5));
          const lng = parseFloat(e.latlng.lng.toFixed(5));
          marker.setLatLng([lat, lng]);
          map.panTo([lat, lng]);

          setSelectedLoc(prev => ({
            name: `Selected Point (${lat}, ${lng})`,
            address: `Tapped Pin: ${lat}° N, ${lng}° E • West Bengal`,
            lat,
            lng
          }));
        });

        mapInstanceRef.current = map;
        markerRef.current = marker;
      } else {
        mapInstanceRef.current.invalidateSize();
        mapInstanceRef.current.setView([selectedLoc.lat, selectedLoc.lng], 13);
        if (markerRef.current) {
          markerRef.current.setLatLng([selectedLoc.lat, selectedLoc.lng]);
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Clean up on modal close
  useEffect(() => {
    if (!isOpen && mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
      markerRef.current = null;
    }
  }, [isOpen]);

  // Handle GPS location access (InDrive style "Locate Me")
  const handleGetLiveGPS = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setGpsError('Geolocation not supported by this browser.');
      return;
    }

    setIsLocatingGPS(true);
    setGpsError('');

    navigator.geolocation.getCurrentPosition(
      pos => {
        setIsLocatingGPS(false);
        const lat = parseFloat(pos.coords.latitude.toFixed(5));
        const lng = parseFloat(pos.coords.longitude.toFixed(5));

        const liveLoc: LocationData = {
          name: 'My Current Live GPS Location',
          address: `GPS Lat: ${lat}, Lng: ${lng} (±${Math.round(pos.coords.accuracy)}m accuracy)`,
          lat,
          lng
        };

        setSelectedLoc(liveLoc);

        if (mapInstanceRef.current && markerRef.current) {
          mapInstanceRef.current.setView([lat, lng], 15);
          markerRef.current.setLatLng([lat, lng]);
        }
      },
      err => {
        setIsLocatingGPS(false);
        setGpsError('GPS permission denied or timed out. Please select from below.');
        console.warn('GPS Error:', err.message || 'Unable to retrieve position');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handlePickPreset = (loc: LocationData) => {
    setSelectedLoc(loc);
    if (mapInstanceRef.current && markerRef.current) {
      mapInstanceRef.current.setView([loc.lat, loc.lng], 14);
      markerRef.current.setLatLng([loc.lat, loc.lng]);
    }
  };

  const handleConfirmLocation = () => {
    onSelectLocation(selectedLoc);
    onClose();
  };

  if (!isOpen) return null;

  const presets = POPULAR_LOCATIONS[userRole];
  const filteredPresets = searchQuery
    ? presets.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.address.toLowerCase().includes(searchQuery.toLowerCase()))
    : presets;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl border border-outline-variant shadow-2xl flex flex-col h-[90vh] sm:h-[650px] overflow-hidden">
        
        {/* InDrive-style Header */}
        <div className="p-4 bg-surface border-b border-outline-variant flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">explore</span>
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-on-surface leading-tight">
                {userRole === 'farmer' ? 'Set Farm / Mandi Location' : 'Set Buyer Delivery Hub'}
              </h3>
              <p className="text-[11px] text-on-surface-variant font-medium">InDrive-Style Interactive Map & GPS</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Map Container */}
        <div className="relative flex-1 min-h-[220px] bg-surface-container-high overflow-hidden">
          <div ref={mapContainerRef} className="w-full h-full" style={{ zIndex: 1 }} />

          {/* Floating InDrive "Locate Me" GPS Button */}
          <button
            onClick={handleGetLiveGPS}
            disabled={isLocatingGPS}
            title="Locate my position with GPS"
            className="absolute top-3 right-3 z-10 bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5 text-[12px] font-extrabold active:scale-95 transition-transform"
          >
            <span className={`material-symbols-outlined text-[18px] ${isLocatingGPS ? 'animate-spin text-amber-600' : 'text-primary'}`}>
              {isLocatingGPS ? 'refresh' : 'my_location'}
            </span>
            <span>{isLocatingGPS ? 'Locating...' : 'Use My GPS'}</span>
          </button>

          {/* Map Center Instruction Banner */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black/75 text-white px-3 py-1 rounded-full text-[11px] font-bold pointer-events-none whitespace-nowrap shadow-md backdrop-blur-xs">
            📍 Drag pin or tap anywhere on map to set spot
          </div>
        </div>

        {/* Bottom Drawer: Search & Presets */}
        <div className="bg-surface p-4 border-t border-outline-variant flex flex-col gap-3 max-h-[45%] overflow-y-auto shrink-0 shadow-lg">
          {gpsError && (
            <div className="p-2 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-[11px] font-bold">
              ⚠️ {gpsError}
            </div>
          )}

          {/* Current Selected Pin Summary */}
          <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">location_on</span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-extrabold text-on-surface truncate">{selectedLoc.name}</p>
              <p className="text-[11px] text-on-surface-variant font-medium truncate">{selectedLoc.address}</p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <span className="material-symbols-outlined text-[18px] absolute left-3 top-2.5 text-on-surface-variant">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search Bengal mandis, hubs or districts..."
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl text-[12px] font-bold text-on-surface focus:outline-none focus:border-primary shadow-xs"
            />
          </div>

          {/* Quick Select Presets */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              Quick Select Hubs:
            </span>
            <div className="grid grid-cols-1 gap-1.5 max-h-[110px] overflow-y-auto pr-1">
              {filteredPresets.map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePickPreset(loc)}
                  className={`p-2 rounded-xl text-left flex items-center justify-between border transition-all ${
                    selectedLoc.name === loc.name 
                      ? 'bg-primary-container/15 border-primary text-primary font-bold' 
                      : 'bg-surface-container-lowest hover:bg-surface-container-low border-outline-variant text-on-surface text-[12px]'
                  }`}
                >
                  <div className="min-w-0 flex-1 pr-2">
                    <p className="font-bold text-[12px] truncate">{loc.name}</p>
                    <p className="text-[10px] text-on-surface-variant truncate font-normal">{loc.address}</p>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">chevron_right</span>
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmLocation}
            className="w-full py-3 bg-primary text-white rounded-xl text-[14px] font-extrabold hover:bg-primary/90 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 mt-1"
          >
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Confirm & Set Location</span>
          </button>
        </div>

      </div>
    </div>
  );
};
