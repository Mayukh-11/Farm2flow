'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FrontPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'consumer'>('consumer');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // 1-Click Individual Person Profiles (Sole Consumers & Farmers)
  const DEMO_PROFILES = {
    consumer: [
      {
        id: 'consumer-1',
        name: 'Sourav Mukherjee',
        occupation: 'Household Consumer',
        location: 'Salt Lake (Sector 1), Kolkata',
        address: 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064',
        email: 'sourav.consumer@farm2flow.in',
        icon: '👨‍💼'
      },
      {
        id: 'consumer-2',
        name: 'Priyanka Sen',
        occupation: 'Family Consumer',
        location: 'New Town (Action Area 1), Kolkata',
        address: 'Tower 4, Uniworld City, New Town, Kolkata - 700156',
        email: 'priyanka.consumer@farm2flow.in',
        icon: '👩‍🏫'
      },
      {
        id: 'consumer-3',
        name: 'Debojyoti Banerjee',
        occupation: 'Independent Consumer',
        location: 'Ballygunge, South Kolkata',
        address: '42/1 Dover Road, Ballygunge, Kolkata - 700019',
        email: 'debojyoti.consumer@farm2flow.in',
        icon: '👨‍⚕️'
      }
    ],
    farmer: [
      {
        id: 'farmer-1',
        name: 'Ramesh Ghosh',
        occupation: 'Vegetable & Tomato Farmer',
        location: 'Hooghly (Singur)',
        address: 'Singur Vegetable Cluster, Hooghly, WB',
        email: 'ramesh.farmer@farm2flow.in',
        icon: '🌾'
      },
      {
        id: 'farmer-2',
        name: 'Subhash Mondal',
        occupation: 'Paddy & Grain Cultivator',
        location: 'Burdwan (Shaktigarh)',
        address: 'Paddy & Cereal Mandi Yard, Purba Bardhaman, WB',
        email: 'subhash.farmer@farm2flow.in',
        icon: '🚜'
      },
      {
        id: 'farmer-3',
        name: 'Animesh Biswas',
        occupation: 'Spices & Chilli Grower',
        location: 'Nadia (Ranaghat)',
        address: 'Ranaghat Agro Hub, Nadia, WB',
        email: 'animesh.farmer@farm2flow.in',
        icon: '🌱'
      }
    ]
  };

  const handleProfileLogin = (profile: { id: string; name: string; location: string; address: string; email: string }, selectedRole: 'farmer' | 'consumer') => {
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
        role: selectedRole === 'consumer' ? 'buyer' : 'farmer',
        token: `f2f-token-${profile.id}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'consumer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your phone number or email.');
      return;
    }
    executeLogin(role);
  };

  const executeLogin = (selectedRole: 'farmer' | 'consumer') => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const userSession = {
        identifier,
        name: selectedRole === 'consumer' ? 'Sourav Mukherjee' : 'Ramesh Ghosh',
        location: selectedRole === 'consumer' ? 'Salt Lake, Kolkata' : 'Hooghly (Singur), West Bengal',
        address: selectedRole === 'consumer' ? 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064' : 'Singur Vegetable Cluster, Hooghly, WB',
        role: selectedRole === 'consumer' ? 'buyer' : 'farmer',
        token: `f2f-token-${selectedRole}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'consumer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-on-surface flex flex-col justify-center items-center p-3 sm:p-6 relative overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[440px] bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col gap-5 relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-2 pt-1">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-900 to-emerald-700 text-emerald-100 flex items-center justify-center shadow-lg shadow-emerald-900/30 ring-4 ring-emerald-500/20">
            <span className="material-symbols-outlined text-[36px]">agriculture</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-[28px] font-black text-emerald-950 tracking-tight leading-tight">Farm2Flow</h1>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">Direct</span>
            </div>
            <p className="text-[13px] text-slate-600 font-semibold mt-0.5">Direct Farm to Consumer • Zero Middlemen</p>
          </div>
        </div>

        {/* Dedicated Role Selection Toggle (Strict Separation) */}
        <div>
          <label className="text-[12px] font-extrabold text-on-surface-variant flex items-center justify-between">
            <span>I am a:</span>
            <span className="text-[10px] text-primary font-bold">100% Direct P2P</span>
          </label>
          <div className="grid grid-cols-2 gap-2 bg-surface-container-high p-1.5 rounded-2xl mt-1 text-[13px] font-extrabold">
            <button
              type="button"
              onClick={() => setRole('consumer')}
              className={`py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                role === 'consumer' 
                  ? 'bg-secondary text-on-secondary shadow-md font-black scale-101' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="text-base">🛒</span>
              <span>Consumer (Buyer)</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('farmer')}
              className={`py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                role === 'farmer' 
                  ? 'bg-primary-container text-on-primary shadow-md font-black scale-101' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="text-base">🌾</span>
              <span>Farmer (Seller)</span>
            </button>
          </div>
        </div>

        {/* 1-Click Fast Instant Profiles - STRICTLY SHOWS ONLY THE SELECTED ROLE */}
        <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 text-on-surface">
              <span>⚡</span>
              <span>1-Click Login: {role === 'consumer' ? 'Select Consumer' : 'Select Farmer'}</span>
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${role === 'consumer' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}`}>
              Individual Person
            </span>
          </div>

          {/* Conditional Display: ONLY Consumers if Consumer is selected */}
          {role === 'consumer' && (
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-extrabold text-secondary uppercase tracking-wider">
                🛒 Individual Household Consumers (Pick an account):
              </span>
              <div className="grid grid-cols-1 gap-2">
                {DEMO_PROFILES.consumer.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleProfileLogin(c, 'consumer')}
                    className="p-3 bg-white hover:bg-amber-50/70 border border-outline-variant hover:border-secondary/40 rounded-xl flex items-center justify-between text-left transition-all active:scale-98 shadow-xs group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{c.icon}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-[13px] font-black text-on-surface leading-tight truncate">{c.name}</p>
                          <span className="text-[9px] bg-secondary/15 text-secondary px-1.5 py-0.2 rounded font-extrabold shrink-0">Person</span>
                        </div>
                        <p className="text-[11px] text-secondary font-bold truncate mt-0.5">📍 {c.location}</p>
                        <p className="text-[10px] text-on-surface-variant truncate">{c.address}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-secondary shrink-0 ml-1">login</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conditional Display: ONLY Farmers if Farmer is selected */}
          {role === 'farmer' && (
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                🌾 Individual Farmers & Growers (Pick an account):
              </span>
              <div className="grid grid-cols-1 gap-2">
                {DEMO_PROFILES.farmer.map(f => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => handleProfileLogin(f, 'farmer')}
                    className="p-3 bg-white hover:bg-emerald-50/70 border border-outline-variant hover:border-primary/40 rounded-xl flex items-center justify-between text-left transition-all active:scale-98 shadow-xs group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{f.icon}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-[13px] font-black text-on-surface leading-tight truncate">{f.name}</p>
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-extrabold shrink-0">Farmer</span>
                        </div>
                        <p className="text-[11px] text-primary font-bold truncate mt-0.5">📍 {f.location}</p>
                        <p className="text-[10px] text-on-surface-variant truncate">{f.address}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary shrink-0 ml-1">login</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Manual Credentials Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {error && (
            <div className="bg-red-50 text-red-800 text-[12px] p-3 rounded-xl border border-red-200 font-bold">
              {error}
            </div>
          )}

          {/* Mobile Number or Email */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">
              {role === 'consumer' ? 'Consumer Mobile Number or Email' : 'Farmer Mobile Number or Email'}
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3.5 text-on-surface-variant material-symbols-outlined text-[20px]">person</span>
              <input
                type="text"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder={role === 'consumer' ? 'e.g. +91 98300 12345 or consumer@gmail.com' : 'e.g. +91 98310 44210 or farmer@farm2flow.in'}
                className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[13px] font-semibold text-on-surface focus:outline-none focus:border-primary"
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
                className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[13px] font-semibold text-on-surface focus:outline-none focus:border-primary"
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
              onClick={(e) => { e.preventDefault(); alert("Password reset code sent to your mobile."); }} 
              className="text-secondary font-bold hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 rounded-2xl text-[15px] font-extrabold transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 mt-0.5 text-white ${
              role === 'consumer' ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary-container text-on-primary hover:bg-primary'
            }`}
          >
            {isLoading ? (
              <span>Signing in...</span>
            ) : (
              <>
                <span>Sign In as {role === 'consumer' ? 'Consumer' : 'Farmer'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-[11px] text-on-surface-variant border-t border-outline-variant pt-3 pb-1">
          Direct Farm-to-Consumer Platform • Support Helpline: <strong>1800-180-1551</strong>
        </div>
      </div>
    </div>
  );
}
