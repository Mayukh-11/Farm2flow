'use client';

import React, { useState } from 'react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'farmers' | 'logistics' | 'ai'>('overview');

  return (
    <div className="flex w-full min-h-screen">
      {/* Persistent Admin Sidebar (PRD Section 8.1 & 8.2) */}
      <aside className="w-64 bg-inverse-surface text-inverse-on-surface p-5 flex flex-col gap-6 shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">command_center</span>
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-white leading-tight">Farm2Flow</h1>
            <p className="text-[11px] text-gray-400">Admin Command Center</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 text-[14px]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'overview' ? 'bg-primary-container text-white shadow-xs' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span>Ecosystem Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('farmers')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'farmers' ? 'bg-primary-container text-white shadow-xs' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span>Farmers & FPOs</span>
          </button>

          <button
            onClick={() => setActiveTab('logistics')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'logistics' ? 'bg-primary-container text-white shadow-xs' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            <span>Logistics Control Center</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'ai' ? 'bg-primary-container text-white shadow-xs' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">psychology</span>
            <span>Demand AI & Heatmap</span>
          </button>
        </nav>

        <div className="mt-auto p-3 bg-white/5 rounded-xl border border-white/10 text-[12px]">
          <p className="text-gray-400 font-bold">FastAPI Connection</p>
          <p className="text-emerald-400 font-mono text-[11px] mt-0.5">http://localhost:8000</p>
        </div>
      </aside>

      {/* Main Admin Dashboard View */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Operational Header */}
        <header className="flex justify-between items-center pb-6 border-b border-outline-variant mb-6">
          <div>
            <h1 className="text-[24px] font-bold text-on-surface">Regional Supply-Chain Intelligence</h1>
            <p className="text-[13px] text-on-surface-variant">SIH 2026 PS 26033 • Pilot Region: Hooghly, Barasat, Kolkata</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-100 text-primary-container px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Live Mandi Data Active
            </span>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="flex flex-col gap-6">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-xs">
                <span className="text-[12px] text-on-surface-variant font-bold uppercase">Connected Farmers & FPOs</span>
                <p className="text-[32px] font-extrabold text-primary mt-1">1,248</p>
                <span className="text-[12px] text-emerald-700 font-bold">+12% this month</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-xs">
                <span className="text-[12px] text-on-surface-variant font-bold uppercase">Produce Traded</span>
                <p className="text-[32px] font-extrabold text-primary mt-1">482 tonnes</p>
                <span className="text-[12px] text-emerald-700 font-bold">Tomato & Potato lead</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-xs">
                <span className="text-[12px] text-on-surface-variant font-bold uppercase">Farmer Realization</span>
                <p className="text-[32px] font-extrabold text-emerald-700 mt-1">+17%</p>
                <span className="text-[12px] text-on-surface-variant">vs traditional middlemen</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-xs">
                <span className="text-[12px] text-on-surface-variant font-bold uppercase">Logistics Savings</span>
                <p className="text-[32px] font-extrabold text-secondary mt-1">23%</p>
                <span className="text-[12px] text-on-surface-variant">25.2 km route reduction</span>
              </div>
            </div>

            {/* Recent Marketplace Activity Table */}
            <div className="bg-white rounded-2xl border border-outline-variant p-5 shadow-xs flex flex-col gap-4">
              <h3 className="text-[18px] font-bold text-on-surface">Active Marketplace Orders</h3>
              <table className="w-full text-left border-collapse text-[14px]">
                <thead>
                  <tr className="border-b border-outline-variant text-[12px] text-on-surface-variant uppercase">
                    <th className="py-2.5">Order ID</th>
                    <th className="py-2.5">Buyer</th>
                    <th className="py-2.5">Produce</th>
                    <th className="py-2.5">Quantity</th>
                    <th className="py-2.5">Status</th>
                    <th className="py-2.5 text-right">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/50">
                    <td className="py-3 font-bold text-primary">#FF-2048</td>
                    <td className="py-3">Kolkata Wholesale Mandi</td>
                    <td className="py-3">Tomato (Grade A)</td>
                    <td className="py-3 font-bold">2,000 kg</td>
                    <td className="py-3"><span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-bold">In Transit</span></td>
                    <td className="py-3 text-right font-bold text-primary">₹59,000</td>
                  </tr>
                  <tr className="border-b border-outline-variant/50">
                    <td className="py-3 font-bold text-primary">#FF-1980</td>
                    <td className="py-3">FreshRetail Hypermarkets</td>
                    <td className="py-3">Potato (Jyoti)</td>
                    <td className="py-3 font-bold">1,200 kg</td>
                    <td className="py-3"><span className="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-full text-[11px] font-bold">Delivered</span></td>
                    <td className="py-3 text-right font-bold text-primary">₹21,600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="bg-white p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-on-surface">Regional Supply-Demand Heatmap</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-[13px]">
              <strong>AI Demand Forecast:</strong> Tomato shortage detected in Kolkata market (+21% demand predicted next week). FPO aggregation triggered in Singur & Hooghly.
            </div>
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="bg-white p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-on-surface">Logistics Control Center & Route Optimizer</h3>
            <div className="grid grid-cols-2 gap-4 text-[14px]">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="font-bold text-red-900">Uncoordinated Individual Routes</p>
                <p className="mt-1">Distance: 184 km • Vehicles: 6 • Cost: ₹18,400</p>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="font-bold text-emerald-900">OR-Tools Aggregated Route</p>
                <p className="mt-1">Distance: 132 km • Vehicles: 4 • Cost: ₹13,750</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
