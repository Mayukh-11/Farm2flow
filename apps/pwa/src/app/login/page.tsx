'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { registerNewAccount, getRegisteredAccounts, syncRegisteredAccountsFromBackend, RegisteredAccount } from '@/services/api';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'buyer'>('farmer');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [registeredAccounts, setRegisteredAccounts] = useState<RegisteredAccount[]>([]);
  const router = useRouter();

  // Create Account Modal States
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [regName, setRegName] = useState('');
  const [regAddress, setRegAddress] = useState('');
  const [regDob, setRegDob] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regRole, setRegRole] = useState<'farmer' | 'buyer'>('farmer');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Real Person Profiles with Home Addresses
  const DEMO_PROFILES = {
    buyer: [
      {
        id: 'consumer-1',
        name: 'Sourav Mukherjee',
        occupation: 'Household Consumer',
        location: 'Salt Lake (Sector 1), Kolkata',
        address: 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064',
        email: 'sourav.consumer@farm2flow.in',
        phone: '+91 98300 12345',
        icon: '👨‍💼'
      },
      {
        id: 'consumer-2',
        name: 'Priyanka Sen',
        occupation: 'Family Consumer',
        location: 'New Town (Action Area 1), Kolkata',
        address: 'Tower 4, Uniworld City, New Town, Kolkata - 700156',
        email: 'priyanka.consumer@farm2flow.in',
        phone: '+91 98344 66789',
        icon: '👩‍🏫'
      },
      {
        id: 'consumer-3',
        name: 'Debojyoti Banerjee',
        occupation: 'Independent Consumer',
        location: 'Ballygunge, South Kolkata',
        address: '42/1 Dover Road, Ballygunge, Kolkata - 700019',
        email: 'debojyoti.consumer@farm2flow.in',
        phone: '+91 98355 88990',
        icon: '👨‍⚕️'
      }
    ],
    farmer: [
      {
        id: 'farmer-1',
        name: 'Ramesh Ghosh',
        occupation: 'Vegetable Farmer',
        location: 'Hooghly (Singur)',
        address: 'Singur Vegetable Cluster, Hooghly, WB',
        email: 'ramesh.farmer@farm2flow.in',
        phone: '+91 98310 44210',
        icon: '🌾'
      },
      {
        id: 'farmer-2',
        name: 'Subhash Mondal',
        occupation: 'Paddy Cultivator',
        location: 'Burdwan (Shaktigarh)',
        address: 'Paddy & Cereal Mandi Yard, Purba Bardhaman, WB',
        email: 'subhash.farmer@farm2flow.in',
        phone: '+91 98321 55678',
        icon: '🚜'
      },
      {
        id: 'farmer-3',
        name: 'Animesh Biswas',
        occupation: 'Spices & Chilli Grower',
        location: 'Nadia (Ranaghat)',
        address: 'Ranaghat Agro Hub, Nadia, WB',
        email: 'animesh.farmer@farm2flow.in',
        phone: '+91 98333 77890',
        icon: '🌱'
      }
    ]
  };

  useEffect(() => {
    // Load registered accounts from persistent database (local + backend)
    setRegisteredAccounts(getRegisteredAccounts());
    syncRegisteredAccountsFromBackend().then(synced => {
      if (synced && synced.length > 0) {
        setRegisteredAccounts(synced);
      }
    });

    const handleAccountsUpdated = () => {
      setRegisteredAccounts(getRegisteredAccounts());
    };
    window.addEventListener('farm2flow_accounts_updated', handleAccountsUpdated);
    return () => window.removeEventListener('farm2flow_accounts_updated', handleAccountsUpdated);
  }, []);

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
        role: selectedRole === 'buyer' ? 'consumer' : 'farmer',
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
    }, 450);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your phone number or email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    executeLogin(role);
  };

  const executeLogin = (selectedRole: 'farmer' | 'buyer') => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // 1. Check custom registered accounts first
      const cleanIdent = identifier.trim().toLowerCase();
      const cleanPhone = identifier.replace(/\s+/g, '');
      const registeredMatch = registeredAccounts.find(
        u => (u.email && u.email.toLowerCase() === cleanIdent) || u.phone.replace(/\s+/g, '') === cleanPhone
      );

      // 2. Check predefined demo profiles
      const demoList = selectedRole === 'farmer' ? DEMO_PROFILES.farmer : DEMO_PROFILES.buyer;
      const demoMatch = demoList.find(
        d => d.email.toLowerCase() === cleanIdent || d.phone.replace(/\s+/g, '') === cleanPhone
      );

      let profileName = registeredMatch?.name || demoMatch?.name || (selectedRole === 'buyer' ? 'Sourav Mukherjee' : 'Ramesh Ghosh');
      let profileLocation = registeredMatch?.location || demoMatch?.location || (selectedRole === 'buyer' ? 'Salt Lake, Kolkata' : 'Hooghly (Singur)');
      let profileAddress = registeredMatch?.address || demoMatch?.address || (selectedRole === 'buyer' ? 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064' : 'Singur Vegetable Cluster, Hooghly, WB');

      const userSession = {
        identifier: identifier || (selectedRole === 'buyer' ? 'sourav.consumer@farm2flow.in' : 'ramesh.farmer@farm2flow.in'),
        name: profileName,
        location: profileLocation,
        address: profileAddress,
        role: selectedRole === 'buyer' ? 'consumer' : selectedRole,
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
    }, 450);
  };

  // Handle New Account Creation
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');

    if (!regName.trim()) {
      setRegError('Full Name is required.');
      return;
    }
    if (!regAddress.trim()) {
      setRegError('Permanent or Farm Address is required.');
      return;
    }
    if (!regDob) {
      setRegError('Date of Birth is required.');
      return;
    }
    if (!regPhone.trim()) {
      setRegError('Phone number is required.');
      return;
    }
    if (!regPassword || regPassword.length < 4) {
      setRegError('Password must be at least 4 characters.');
      return;
    }

    setIsRegistering(true);

    try {
      const created = await registerNewAccount({
        name: regName.trim(),
        address: regAddress.trim(),
        dob: regDob,
        phone: regPhone.trim(),
        role: regRole,
        email: regEmail.trim() || undefined,
        password: regPassword
      });

      setIsRegistering(false);
      setRegSuccess(`Account successfully created for ${created.name}! Logging you in...`);

      setTimeout(() => {
        // Auto sign in with the new account
        const userSession = {
          identifier: created.email || created.phone,
          name: created.name,
          location: created.location,
          address: created.address,
          role: created.role === 'buyer' ? 'consumer' : 'farmer',
          token: `f2f-token-${created.id}-${Date.now()}`
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
        }

        setIsRegisterModalOpen(false);
        if (created.role === 'buyer') {
          router.push('/buyer');
        } else {
          router.push('/farmer');
        }
      }, 1000);
    } catch (err: any) {
      setIsRegistering(false);
      setRegError('Failed to register account. Please check your network.');
    }
  };

  const isFarmerTheme = role === 'farmer';

  // Custom accounts registered under the currently active role tab
  const activeCustomAccounts = registeredAccounts.filter(a => a.role === role);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col justify-center items-center p-3 sm:p-4 ${
      isFarmerTheme 
        ? 'bg-gradient-to-br from-emerald-950 via-stone-900 to-green-950' 
        : 'bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950'
    }`}>
      {/* Dynamic Background Glow Halo */}
      <div className={`absolute w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-20 ${
        isFarmerTheme ? 'bg-emerald-500 -top-20 -left-20' : 'bg-cyan-500 -top-20 -right-20'
      }`} />

      {/* Main Login Card with Clean Dynamic Colorful Theme */}
      <div className="relative w-full max-w-[430px] bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-5 border border-slate-200">
        
        {/* Header with Colorful Brand Identity */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-500 text-white ${
            isFarmerTheme 
              ? 'bg-gradient-to-tr from-emerald-700 to-green-600 shadow-emerald-900/30' 
              : 'bg-gradient-to-tr from-blue-700 to-cyan-600 shadow-blue-900/30'
          }`}>
            <span className="material-symbols-outlined text-[32px]">
              {isFarmerTheme ? 'agriculture' : 'storefront'}
            </span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5">
              <h1 className="text-[24px] font-black text-slate-900 tracking-tight">Farm2Flow</h1>
              <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full text-white ${
                isFarmerTheme ? 'bg-emerald-700' : 'bg-blue-700'
              }`}>
                {isFarmerTheme ? 'Kisan Edition' : 'Consumer Depot'}
              </span>
            </div>
            <p className="text-[12px] text-slate-500 font-bold">
              {isFarmerTheme ? 'Direct Farm-to-Mandi Flow' : 'Direct Fresh Agricultural Sourcing'}
            </p>
          </div>
        </div>

        {/* Dynamic Role Switcher (Green for Farmer, Blue/Cyan for Consumer) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-500">
            <span>Select Experience</span>
            <span className={isFarmerTheme ? 'text-emerald-700' : 'text-blue-700'}>
              {isFarmerTheme ? '🌾 Farmer View' : '🛍️ Consumer View'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setRole('farmer')}
              className={`py-2.5 rounded-xl text-[13px] font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                isFarmerTheme
                  ? 'bg-emerald-800 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🌾 Farmer</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('buyer')}
              className={`py-2.5 rounded-xl text-[13px] font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                !isFarmerTheme
                  ? 'bg-blue-700 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🏪 Consumer</span>
            </button>
          </div>
        </div>

        {/* 1-Click Real Person Profiles Box */}
        <div className={`p-3.5 rounded-2xl border flex flex-col gap-2.5 transition-colors duration-300 ${
          isFarmerTheme ? 'bg-emerald-50/70 border-emerald-200' : 'bg-blue-50/70 border-blue-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-black uppercase tracking-wider ${
              isFarmerTheme ? 'text-emerald-900' : 'text-blue-900'
            }`}>
              {isFarmerTheme ? '🌾 Verified Farmers (With Address)' : '👨‍💼 Verified Consumers (With Address)'}
            </span>
            <span className={`text-[10px] font-extrabold px-2 py-0.2 rounded-full ${
              isFarmerTheme ? 'bg-emerald-200 text-emerald-900' : 'bg-blue-200 text-blue-900'
            }`}>
              1-Click
            </span>
          </div>

          <div className="flex flex-col gap-2 max-h-[185px] overflow-y-auto no-scrollbar pr-0.5">
            {/* Custom Newly Registered Users */}
            {activeCustomAccounts.map(account => (
              <button
                key={account.id}
                type="button"
                onClick={() => handleProfileLogin({
                  id: account.id,
                  name: account.name,
                  location: account.location,
                  address: account.address,
                  email: account.email || `${account.phone}@farm2flow.in`
                }, role)}
                className={`p-2.5 bg-white rounded-xl border flex items-start gap-2 text-left transition-all active:scale-98 shadow-xs hover:shadow-md ${
                  isFarmerTheme ? 'border-emerald-300 hover:border-emerald-600' : 'border-blue-300 hover:border-blue-600'
                }`}
              >
                <span className="text-2xl mt-0.5">{role === 'farmer' ? '🌾' : '👨‍💼'}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[13px] text-slate-900 truncate">{account.name}</p>
                    <span className="text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded shrink-0">New User</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500">Ph: {account.phone} • DOB: {account.dob}</p>
                  <p className="text-[10px] text-slate-600 font-medium truncate mt-0.5">
                    📍 {account.address}
                  </p>
                </div>
              </button>
            ))}

            {/* Default Verified Real Person Profiles */}
            {(role === 'farmer' ? DEMO_PROFILES.farmer : DEMO_PROFILES.buyer).map(profile => (
              <button
                key={profile.id}
                type="button"
                onClick={() => handleProfileLogin(profile, role)}
                className={`p-2.5 bg-white rounded-xl border flex items-start gap-2 text-left transition-all active:scale-98 shadow-xs hover:shadow-md ${
                  isFarmerTheme 
                    ? 'border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50/40' 
                    : 'border-blue-200 hover:border-blue-600 hover:bg-blue-50/40'
                }`}
              >
                <span className="text-2xl shrink-0 mt-0.5">{profile.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[13px] text-slate-900 truncate">{profile.name}</p>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded shrink-0 ${
                      isFarmerTheme ? 'text-emerald-800 bg-emerald-100' : 'text-blue-800 bg-blue-100'
                    }`}>
                      Fast Login
                    </span>
                  </div>
                  <p className={`text-[11px] font-bold ${isFarmerTheme ? 'text-emerald-700' : 'text-blue-700'}`}>
                    {profile.occupation}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                    📍 {profile.address}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Standard Login Credentials Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {error && (
            <div className="bg-red-50 text-red-800 text-[12px] p-3 rounded-xl border border-red-200 font-bold">
              {error}
            </div>
          )}

          {/* Phone / Email Input */}
          <div>
            <label className="text-[12px] font-bold text-slate-700">Phone Number or Email</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3.5 text-slate-400 material-symbols-outlined text-[18px]">person</span>
              <input
                type="text"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder={isFarmerTheme ? "Phone / email (e.g. +91 98310 44210)" : "Phone / email (e.g. +91 98300 12345)"}
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-[13px] font-bold text-slate-900 focus:outline-none focus:bg-white transition-all shadow-xs ${
                  isFarmerTheme 
                    ? 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20' 
                    : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-[12px] font-bold text-slate-700">Password</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3.5 text-slate-400 material-symbols-outlined text-[18px]">lock</span>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-[13px] font-bold text-slate-900 focus:outline-none focus:bg-white transition-all shadow-xs ${
                  isFarmerTheme 
                    ? 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20' 
                    : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-[12px] text-slate-600 font-bold">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className={`w-4 h-4 rounded border-slate-300 ${
                  isFarmerTheme ? 'text-emerald-700 accent-emerald-700' : 'text-blue-700 accent-blue-700'
                }`}
              />
              <span>Remember login</span>
            </label>
            <button
              type="button"
              onClick={() => alert("Default demo password for all accounts is: demo1234")}
              className={`font-extrabold hover:underline ${
                isFarmerTheme ? 'text-emerald-800' : 'text-blue-800'
              }`}
            >
              Demo credentials?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 text-white rounded-xl text-[14px] font-black transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 mt-1 cursor-pointer ${
              isFarmerTheme 
                ? 'bg-gradient-to-r from-emerald-800 to-green-700 hover:from-emerald-900 hover:to-green-800 shadow-emerald-950/20' 
                : 'bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800 shadow-blue-950/20'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                <span>Signing in...</span>
              </span>
            ) : (
              <>
                <span>Sign In as {role === 'farmer' ? 'Farmer' : 'Consumer'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Create Account Action Bar */}
        <div className="border-t border-slate-200 pt-3 flex flex-col items-center gap-2 text-center">
          <p className="text-[12px] text-slate-500 font-bold">New to Farm2Flow?</p>
          <button
            type="button"
            onClick={() => {
              setRegRole(role);
              setIsRegisterModalOpen(true);
            }}
            className={`w-full py-2.5 rounded-xl border-2 text-[13px] font-black transition-all active:scale-98 flex items-center justify-center gap-1.5 shadow-xs ${
              isFarmerTheme
                ? 'border-emerald-700 text-emerald-900 hover:bg-emerald-50'
                : 'border-blue-700 text-blue-900 hover:bg-blue-50'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Create New Account</span>
          </button>
        </div>
      </div>

      {/* ==================== CREATE ACCOUNT MODAL ==================== */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[430px] bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-[17px] font-black text-slate-900">Create Farm2Flow Account</h3>
                <p className="text-[11px] text-slate-500 font-medium">Saved real-time to agricultural database</p>
              </div>
              <button 
                onClick={() => setIsRegisterModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Notification messages */}
            {regError && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-800 text-[12px] font-bold rounded-xl">
                {regError}
              </div>
            )}
            {regSuccess && (
              <div className="p-2.5 bg-emerald-100 border border-emerald-300 text-emerald-900 text-[12px] font-extrabold rounded-xl text-center">
                {regSuccess}
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-3 text-[12px]">
              
              {/* Type Selection (Farmer vs Buyer) */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-1">Account Type *</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRegRole('farmer')}
                    className={`py-2 rounded-lg font-black transition-all ${
                      regRole === 'farmer' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    🌾 Farmer
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegRole('buyer')}
                    className={`py-2 rounded-lg font-black transition-all ${
                      regRole === 'buyer' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    🏪 Buyer / Consumer
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-0.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={e => setRegName(e.target.value)}
                  placeholder="e.g. Alok Ghosh"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* Address */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-0.5">Home / Farm Address *</label>
                <input
                  type="text"
                  required
                  value={regAddress}
                  onChange={e => setRegAddress(e.target.value)}
                  placeholder="e.g. Singur Green Belt, Hooghly, West Bengal - 712409"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* DOB & Phone Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-extrabold text-slate-700 block mb-0.5">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={regDob}
                    onChange={e => setRegDob(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-extrabold text-slate-700 block mb-0.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={regPhone}
                    onChange={e => setRegPhone(e.target.value)}
                    placeholder="+91 98300 00000"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="font-extrabold text-slate-700">Email ID</label>
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-1.5 py-0.2 rounded">Optional</span>
                </div>
                <input
                  type="email"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  placeholder="alok.ghosh@example.com (optional)"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* Password */}
              <div>
                <label className="font-extrabold text-slate-700 block mb-0.5">Create Password *</label>
                <input
                  type="password"
                  required
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                  placeholder="At least 4 characters"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isRegistering}
                className={`w-full py-3 text-white rounded-xl text-[13px] font-black transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 mt-2 ${
                  regRole === 'farmer' ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {isRegistering ? (
                  <span>Registering to Real-Time Database...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                    <span>Register & Instant Login</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
