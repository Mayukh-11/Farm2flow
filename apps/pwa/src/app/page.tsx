'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FrontPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'buyer'>('farmer');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // 1-Click Accounts with distinct locations & addresses
  const DEMO_PROFILES = {
    farmer: [
      { id: 'farmer-1', name: 'Ramesh Ghosh', location: 'Hooghly (Singur)', address: 'Singur Vegetable Cluster, Hooghly, WB', email: 'ramesh.farmer@farm2flow.in', icon: '🌾' },
      { id: 'farmer-2', name: 'Subhash Mondal', location: 'Burdwan (Shaktigarh)', address: 'Paddy & Cereal Mandi Yard, Purba Bardhaman, WB', email: 'subhash.farmer@farm2flow.in', icon: '🚜' },
      { id: 'farmer-3', name: 'Animesh Biswas', location: 'Nadia (Ranaghat)', address: 'Ranaghat Agro Hub, Nadia, WB', email: 'animesh.farmer@farm2flow.in', icon: '🌱' }
    ],
    buyer: [
      { id: 'buyer-1', name: 'Kolkata Wholesale Mandi', location: 'Posta Mandi, Kolkata', address: 'Posta Wholesale Hub, Strand Road, Kolkata - 700007', email: 'posta.buyer@farm2flow.in', icon: '🏪' },
      { id: 'buyer-2', name: 'Koley Market Aggregators', location: 'Sealdah, Kolkata', address: 'Koley Central Bazaar, Sealdah, Kolkata - 700014', email: 'koley.buyer@farm2flow.in', icon: '🏬' },
      { id: 'buyer-3', name: 'Howrah Bulk Supply Depot', location: 'Howrah Station Yard', address: 'Howrah Wholesale Terminal, Howrah - 711101', email: 'howrah.buyer@farm2flow.in', icon: '🚚' }
    ]
  };

  const handleProfileLogin = (profile: { id: string; name: string; location: string; address: string; email: string }, selectedRole: 'farmer' | 'buyer') => {
    setRole(selectedRole);
    setIdentifier(profile.email);
    setPassword('demo1234');
    
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const userSession = {
        identifier: profile.email,
        name: profile.name,
        location: profile.location,
        address: profile.address,
        role: selectedRole,
        token: `f2f-token-${profile.id}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'buyer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your phone number or email.');
      return;
    }
    executeLogin(role);
  };

  const executeLogin = (selectedRole: 'farmer' | 'buyer') => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const userSession = {
        identifier,
        name: selectedRole === 'buyer' ? 'Wholesale Procurement Buyer' : 'Ramesh Ghosh',
        location: selectedRole === 'buyer' ? 'Posta Mandi, Kolkata' : 'Hooghly (Singur), West Bengal',
        address: selectedRole === 'buyer' ? 'Posta Mandi, Strand Road, Kolkata' : 'Singur Vegetable Cluster, Hooghly, WB',
        role: selectedRole,
        token: `f2f-token-${selectedRole}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'buyer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[440px] bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 shadow-xl flex flex-col gap-5">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-1.5 pt-1">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-primary-fixed flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[32px]">agriculture</span>
          </div>
          <div>
            <h1 className="text-[26px] font-extrabold text-primary leading-tight">Farm2Flow</h1>
            <p className="text-[12px] text-on-surface-variant font-bold">From Farm to Market, Smarter.</p>
          </div>
        </div>

        {/* 1-Click Fast Login Panel: 3 Farmers & 3 Buyers */}
        <div className="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
              <span>⚡</span> 1-CLICK INSTANT PROFILES
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Direct Access</span>
          </div>
          
          {/* Farmers Section (3 Farmers) */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
              🌾 Choose Farmer Profile (3 Locations):
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {DEMO_PROFILES.farmer.map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => handleProfileLogin(f, 'farmer')}
                  className="p-2.5 bg-white hover:bg-emerald-50/70 border border-outline-variant rounded-xl flex items-center justify-between text-left transition-all active:scale-98 shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0">{f.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-extrabold text-on-surface leading-tight truncate">{f.name}</p>
                      <p className="text-[11px] text-primary font-bold truncate">📍 {f.location}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0">login</span>
                </button>
              ))}
            </div>
          </div>

          {/* Buyers Section (3 Buyers) */}
          <div className="flex flex-col gap-1.5 pt-1 border-t border-outline-variant">
            <span className="text-[10px] font-extrabold text-secondary uppercase tracking-wider">
              🏪 Choose Buyer / Mandi Profile (3 Locations):
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {DEMO_PROFILES.buyer.map(b => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => handleProfileLogin(b, 'buyer')}
                  className="p-2.5 bg-white hover:bg-emerald-50/70 border border-outline-variant rounded-xl flex items-center justify-between text-left transition-all active:scale-98 shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0">{b.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-extrabold text-on-surface leading-tight truncate">{b.name}</p>
                      <p className="text-[11px] text-secondary font-bold truncate">📍 {b.location}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0">login</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div>
          <label className="text-[12px] font-bold text-on-surface-variant">Select Account Role</label>
          <div className="grid grid-cols-2 gap-1.5 bg-surface-container-high p-1 rounded-2xl mt-1 text-[13px] font-bold">
            <button
              type="button"
              onClick={() => setRole('farmer')}
              className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                role === 'farmer' 
                  ? 'bg-primary-container text-on-primary shadow-sm font-extrabold' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>🌾</span>
              <span>Farmer</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('buyer')}
              className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                role === 'buyer' 
                  ? 'bg-primary-container text-on-primary shadow-sm font-extrabold' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>🏪</span>
              <span>Buyer</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red-50 text-red-800 text-[12px] p-3 rounded-xl border border-red-200 font-bold">
              {error}
            </div>
          )}

          {/* Mobile Number or Email */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">Mobile Number or Email</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3.5 text-on-surface-variant material-symbols-outlined text-[20px]">person</span>
              <input
                type="text"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder="e.g. +91 98310 44210 or farmer@farm2flow.in"
                className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[14px] font-semibold text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">Password</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3.5 text-on-surface-variant material-symbols-outlined text-[20px]">lock</span>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[14px] font-semibold text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-[12px] text-on-surface-variant font-bold">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-primary border-outline-variant accent-primary"
              />
              <span>Remember me</span>
            </label>
            <a 
              href="#forgot" 
              onClick={(e) => { e.preventDefault(); alert("Password reset code sent to your registered contact."); }} 
              className="text-secondary font-bold hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-primary-container text-on-primary rounded-2xl text-[16px] font-extrabold hover:bg-primary transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 mt-1"
          >
            {isLoading ? (
              <span>Signing in...</span>
            ) : (
              <>
                <span>Sign In as {role === 'farmer' ? 'Farmer' : 'Buyer'}</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-[11px] text-on-surface-variant border-t border-outline-variant pt-3 pb-1">
          Direct Agricultural Platform • Helpline: <strong>1800-180-1551</strong>
        </div>
      </div>
    </div>
  );
}
