'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'buyer' | 'admin'>('farmer');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Role-based 1-click Demo Login Accounts (Farmer & Buyer)
  const handleDemoLogin = (demoRole: 'farmer' | 'buyer' | 'admin') => {
    setRole(demoRole);
    if (demoRole === 'farmer') setIdentifier('farmer@farm2flow.in');
    if (demoRole === 'buyer') setIdentifier('buyer@farm2flow.in');
    if (demoRole === 'admin') setIdentifier('admin@farm2flow.in');
    setPassword('demo1234');
    
    executeLogin(demoRole);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your phone number or email.');
      return;
    }
    executeLogin(role);
  };

  const executeLogin = (selectedRole: 'farmer' | 'buyer' | 'admin') => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const userSession = {
        identifier,
        role: selectedRole,
        token: `f2f-token-${selectedRole}-${Date.now()}`
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farm2flow_user_session', JSON.stringify(userSession));
      }

      setIsLoading(false);

      if (selectedRole === 'admin') {
        window.location.href = 'http://localhost:3001';
      } else if (selectedRole === 'buyer') {
        router.push('/buyer');
      } else {
        router.push('/farmer');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[430px] bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-md flex flex-col gap-6">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-primary-fixed flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[32px]">agriculture</span>
          </div>
          <div>
            <h1 className="text-[24px] font-extrabold text-primary leading-tight">Farm2Flow</h1>
            <p className="text-[13px] text-on-surface-variant font-bold">From Farm to Market, Smarter.</p>
          </div>
        </div>

        {/* Demo 1-Click Login Quick Switcher */}
        <div className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">🌟 1-Click Fast Login</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Direct Access</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[12px] font-bold">
            <button
              type="button"
              onClick={() => handleDemoLogin('farmer')}
              className="p-3 bg-white hover:bg-primary-fixed-dim/20 border border-outline-variant rounded-xl flex items-center gap-2 text-left transition-all active:scale-95 shadow-xs"
            >
              <span className="text-xl">🌾</span>
              <div>
                <p className="leading-tight text-on-surface font-extrabold">Farmer</p>
                <p className="text-[11px] text-on-surface-variant font-normal">Ramesh (Hooghly)</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleDemoLogin('buyer')}
              className="p-3 bg-white hover:bg-primary-fixed-dim/20 border border-outline-variant rounded-xl flex items-center gap-2 text-left transition-all active:scale-95 shadow-xs"
            >
              <span className="text-xl">🏪</span>
              <div>
                <p className="leading-tight text-on-surface font-extrabold">Buyer</p>
                <p className="text-[11px] text-on-surface-variant font-normal">Kolkata Mandi</p>
              </div>
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red-50 text-red-800 text-[12px] p-3 rounded-lg border border-red-200 font-bold">
              {error}
            </div>
          )}

          {/* Role Selector Tabs (Farmer & Buyer) */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">Select Account Role</label>
            <div className="grid grid-cols-2 gap-1.5 bg-surface-container-high p-1 rounded-xl mt-1 text-[12px] font-bold">
              {(['farmer', 'buyer'] as const).map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 rounded-lg capitalize transition-all ${
                    role === r ? 'bg-primary-container text-on-primary shadow-xs font-extrabold' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {r === 'farmer' ? '🌾 Farmer' : '🏪 Buyer'}
                </button>
              ))}
            </div>
          </div>

          {/* Phone / Email Input */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">Mobile Number or Email</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3 text-on-surface-variant material-symbols-outlined text-[18px]">person</span>
              <input
                type="text"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder="e.g. +91 98310 44210 or farmer@farm2flow.in"
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[14px] font-bold text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-[12px] font-bold text-on-surface-variant">Password</label>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-3 text-on-surface-variant material-symbols-outlined text-[18px]">lock</span>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-[14px] font-bold text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Remember me & Forgot Password */}
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
            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent."); }} className="text-secondary hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-[15px] font-extrabold hover:bg-primary transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 mt-2"
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
        <div className="text-center text-[11px] text-on-surface-variant border-t border-outline-variant pt-3">
          Direct Agricultural Platform • Helpline: <strong>1800-180-1551</strong>
        </div>
      </div>
    </div>
  );
}
