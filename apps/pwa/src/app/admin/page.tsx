'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getOrders, updateOrderStatus, getStoredProduce, getCompanyFinancialMetrics } from '@/services/api';
import { Order, Produce } from '@/types';
import { getCropPhoto } from '@/data/cropImages';

export default function CompanyAdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [produceList, setProduceList] = useState<Produce[]>([]);
  const [adminUser, setAdminUser] = useState<{ name: string; identifier: string; role: string } | null>(null);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'transactions' | 'inventory' | 'telemetry'>('transactions');
  const router = useRouter();

  // Route Guard: Only allow Company Admin
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionStr = localStorage.getItem('farm2flow_user_session');
      if (!sessionStr) {
        router.push('/login');
        return;
      }
      try {
        const session = JSON.parse(sessionStr);
        if (session.role !== 'admin') {
          // Reject regular farmer or consumer from accessing internal admin portal
          alert('Access Denied: Only authorized Farm2Flow company staff can access this portal.');
          if (session.role === 'consumer' || session.role === 'buyer') {
            router.push('/buyer');
          } else {
            router.push('/farmer');
          }
          return;
        }
        setAdminUser(session);
      } catch {
        router.push('/login');
      }
    }
  }, [router]);

  // Load live data and subscribe to real-time events
  useEffect(() => {
    const refreshData = () => {
      setOrders(getOrders());
      setProduceList(getStoredProduce());
    };

    refreshData();

    const handleProduceUpdated = () => refreshData();
    const handleOrdersUpdated = () => refreshData();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'farm2flow_orders' || e.key === 'farm2flow_produce_items') {
        refreshData();
      }
    };

    window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
    window.addEventListener('farm2flow_orders_updated', handleOrdersUpdated);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
      window.removeEventListener('farm2flow_orders_updated', handleOrdersUpdated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Financial Telemetry Calculations
  const metrics = useMemo(() => {
    const totalGmv = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    const totalFarmerPayout = orders.reduce((sum, o) => sum + (o.farmerPayoutAmount || 0), 0);
    const totalPlatformFee = orders.reduce((sum, o) => sum + (o.totalPlatformFee || (o.totalQuantityKg * 3)), 0);
    const totalVolumeKg = orders.reduce((sum, o) => sum + (o.totalQuantityKg || 0), 0);
    const pendingFulfill = orders.filter(o => o.status === 'Confirmed' || o.status === 'In Transit').length;
    const deliveredCount = orders.filter(o => o.status === 'Delivered').length;
    const directFarmersCount = new Set(orders.flatMap(o => o.items.map(i => i.farmerName))).size;

    return {
      totalGmv,
      totalFarmerPayout,
      totalPlatformFee,
      totalVolumeKg,
      pendingFulfill,
      deliveredCount,
      directFarmersCount,
      orderCount: orders.length,
      avgOrderValue: orders.length > 0 ? Math.round(totalGmv / orders.length) : 0
    };
  }, [orders]);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      const matchStatus = selectedStatusFilter === 'All' || o.status === selectedStatusFilter;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        o.orderNumber.toLowerCase().includes(q) ||
        o.buyerName.toLowerCase().includes(q) ||
        o.destination.toLowerCase().includes(q) ||
        o.items.some(i => i.cropName.toLowerCase().includes(q) || i.farmerName.toLowerCase().includes(q));
      return matchStatus && matchSearch;
    });
  }, [orders, selectedStatusFilter, searchQuery]);

  // Handle status update by admin
  const handleUpdateStatus = (orderId: string, newStatus: Order['status'], newPaymentStatus?: Order['paymentStatus']) => {
    const updated = updateOrderStatus(orderId, newStatus, newPaymentStatus);
    setOrders(updated);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({
        ...selectedOrder,
        status: newStatus,
        ...(newPaymentStatus ? { paymentStatus: newPaymentStatus } : {})
      });
    }
    showToast(`Order status updated to "${newStatus}"`);
  };

  // Simulate a live buyer transaction across India
  const handleSimulateLiveOrder = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const demoCrops = [
        { crop: 'Tomato', variety: 'Roma Plump', price: 29, farmer: 'Suhas Biswas', loc: 'Barasat, WB' },
        { crop: 'Potato', variety: 'Jyoti Golden', price: 17, farmer: 'Bimal Halder', loc: 'Tarakeswar, Hooghly' },
        { crop: 'Onion', variety: 'Nashik Red Prime', price: 26, farmer: 'Vasantrao Patil', loc: 'Lasalgaon, Nashik' },
        { crop: 'Cucumber', variety: 'Malini Crisp', price: 20, farmer: 'Animesh Biswas', loc: 'Ranaghat, Nadia' },
        { crop: 'Dragon Fruit', variety: 'Kamalam Red', price: 120, farmer: 'Bharatbhai Vala', loc: 'Kutch, Gujarat' }
      ];

      const chosen = demoCrops[Math.floor(Math.random() * demoCrops.length)];
      const buyers = ['Priyanka Sen', 'Debojyoti Banerjee', 'Ananya Roy', 'Amitava Bose', 'Sarmistha Ganguly'];
      const buyerChosen = buyers[Math.floor(Math.random() * buyers.length)];
      const qty = Math.floor(10 + Math.random() * 40);
      const farmerPayout = qty * chosen.price;
      const platformFee = qty * 3; // ₹3/kg fee
      const totalAmount = farmerPayout + platformFee;

      const liveSimOrder: Order = {
        id: `ord-sim-${Date.now()}`,
        orderNumber: `FF-${Math.floor(5000 + Math.random() * 4999)}`,
        buyerId: 'b-live-sim',
        buyerName: buyerChosen,
        destination: 'Action Area 1, New Town, Kolkata',
        items: [
          {
            produceId: `sim-${Date.now()}`,
            cropName: chosen.crop,
            farmerName: chosen.farmer,
            quantityKg: qty,
            pricePerKg: chosen.price + 3,
            subtotal: totalAmount
          }
        ],
        totalQuantityKg: qty,
        totalAmount,
        platformFeePerKg: 3,
        totalPlatformFee: platformFee,
        farmerPayoutAmount: farmerPayout,
        savingsRealized: Math.round(totalAmount * 0.18),
        status: 'Confirmed',
        expectedDelivery: 'Tomorrow, 3:00 PM',
        createdAt: new Date().toISOString(),
        routeId: 'route-admin-live-sim',
        paymentMethod: Math.random() > 0.4 ? 'Online (UPI/QR)' : 'Cash on Delivery',
        paymentStatus: Math.random() > 0.4 ? 'Paid' : 'Pending Cash on Delivery'
      };

      const current = getOrders();
      const next = [liveSimOrder, ...current];
      localStorage.setItem('farm2flow_orders', JSON.stringify(next));
      window.dispatchEvent(new CustomEvent('farm2flow_orders_updated', { detail: { orders: next } }));
      setOrders(next);
      setIsSimulating(false);
      showToast(`⚡ Live Transaction Streamed: ${liveSimOrder.orderNumber} (₹${liveSimOrder.totalAmount})`);
    }, 600);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('farm2flow_user_session');
    }
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#050d18] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* TOP EXECUTIVE APEX HEADER */}
      <header className="sticky top-0 z-40 bg-[#071324]/90 backdrop-blur-xl border-b border-cyan-900/40 shadow-2xl px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-amber-950/50">
              <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[17px] font-black tracking-tight text-white">Farm2Flow</span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 tracking-wider">
                  Company Mission Control
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Network
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                National Direct-From-Farm Clearinghouse & Real-Time Financial Telemetry
              </p>
            </div>
          </div>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleSimulateLiveOrder}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-[12px] flex items-center gap-1.5 shadow-md shadow-emerald-950/40 active:scale-95 transition-all cursor-pointer"
              title="Simulate a live buyer order to watch real-time stream"
            >
              <span className={`material-symbols-outlined text-[16px] ${isSimulating ? 'animate-spin' : ''}`}>
                bolt
              </span>
              <span className="hidden sm:inline">Simulate Live Order</span>
            </button>

            {/* Admin Profile Pill */}
            <div className="hidden md:flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-amber-500/30 text-amber-300 flex items-center justify-center font-black text-[11px]">
                A
              </div>
              <div className="text-left">
                <p className="text-[11px] font-black text-slate-200 leading-tight">{adminUser?.name || 'Company Admin'}</p>
                <p className="text-[9px] text-amber-400 font-bold leading-tight">Master Authorized</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 border border-slate-700/60 hover:border-rose-500/40 text-[12px] font-bold flex items-center gap-1 transition-all cursor-pointer"
              title="Sign Out of Company Admin"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* TOAST POPUP */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-emerald-300 border border-emerald-500/60 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-[12px] font-black animate-in fade-in slide-in-from-top-3">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MAIN BODY CONTAINER */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">

        {/* FINANCIAL & OPERATIONAL TELEMETRY METRIC CARDS */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* GMV Metric */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#0a1b2e] to-[#0d223a] border border-cyan-800/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black uppercase tracking-wider text-cyan-300">
                Gross Merchandise (GMV)
              </span>
              <span className="material-symbols-outlined text-cyan-400 text-[20px]">currency_rupee</span>
            </div>
            <div className="mt-3">
              <h3 className="text-[26px] sm:text-[32px] font-black text-white tracking-tight leading-none">
                ₹{metrics.totalGmv.toLocaleString()}
              </h3>
              <p className="text-[11px] text-cyan-200/70 font-medium mt-1">
                Total transacted via Farm2Flow Direct
              </p>
            </div>
          </div>

          {/* Company Revenue (@ ₹3/kg Platform Convenience Fee) */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#12231c] to-[#0c3120] border border-emerald-700/50 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black uppercase tracking-wider text-emerald-300">
                Company Platform Earnings
              </span>
              <span className="material-symbols-outlined text-emerald-400 text-[20px]">payments</span>
            </div>
            <div className="mt-3">
              <h3 className="text-[26px] sm:text-[32px] font-black text-emerald-300 tracking-tight leading-none">
                ₹{metrics.totalPlatformFee.toLocaleString()}
              </h3>
              <p className="text-[11px] text-emerald-200/80 font-bold mt-1">
                Net Margin @ ₹3/kg convenience fee
              </p>
            </div>
          </div>

          {/* Farmer Payout Amount */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#23170a] to-[#36220b] border border-amber-700/50 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-all pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black uppercase tracking-wider text-amber-300">
                Farmer Direct Payouts
              </span>
              <span className="material-symbols-outlined text-amber-400 text-[20px]">agriculture</span>
            </div>
            <div className="mt-3">
              <h3 className="text-[26px] sm:text-[32px] font-black text-amber-300 tracking-tight leading-none">
                ₹{metrics.totalFarmerPayout.toLocaleString()}
              </h3>
              <p className="text-[11px] text-amber-200/70 font-medium mt-1">
                Zero middleman cuts • 100% farm-gate price
              </p>
            </div>
          </div>

          {/* Tonnage / Volume Dispatched */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#1b1226] to-[#2b1740] border border-purple-800/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/15 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black uppercase tracking-wider text-purple-300">
                Harvest Tonnage
              </span>
              <span className="material-symbols-outlined text-purple-400 text-[20px]">scale</span>
            </div>
            <div className="mt-3">
              <h3 className="text-[26px] sm:text-[32px] font-black text-white tracking-tight leading-none">
                {metrics.totalVolumeKg.toLocaleString()} <span className="text-[16px] font-medium text-purple-300">kg</span>
              </h3>
              <p className="text-[11px] text-purple-200/70 font-medium mt-1">
                Across {metrics.orderCount} nationwide shipments
              </p>
            </div>
          </div>
        </section>

        {/* TABS & NAVIGATION CONTROL */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 w-fit">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`px-4 py-2 rounded-xl text-[12px] font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'transactions'
                  ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              <span>Live Transactions ({orders.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 rounded-xl text-[12px] font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'inventory'
                  ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              <span>Farmer Supply Lots ({produceList.length})</span>
            </button>
          </div>

          {/* Quick Filter Bar */}
          {activeTab === 'transactions' && (
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Filter order #, buyer, farmer, crop..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-[12px] text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-extrabold bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                {['All', 'Confirmed', 'In Transit', 'Delivered'].map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatusFilter(status)}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      selectedStatusFilter === status
                        ? 'bg-amber-500 text-black font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* TRANSACTIONS STREAM VIEW */}
        {activeTab === 'transactions' && (
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-black text-white flex items-center gap-2">
                <span>Real-Time Transaction Ledger</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {filteredOrders.length} records
                </span>
              </h2>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                Click any transaction row to inspect financial margins & dispatch status
              </span>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="py-16 text-center rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-slate-600 text-[40px]">search_off</span>
                <p className="text-[14px] font-bold text-slate-400">No transactions match the selected criteria</p>
                <button
                  onClick={() => { setSelectedStatusFilter('All'); setSearchQuery(''); }}
                  className="text-amber-400 text-[12px] font-bold underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#081324] shadow-2xl">
                <table className="w-full text-left text-[12px]">
                  <thead className="bg-slate-900/90 text-slate-400 font-black uppercase tracking-wider text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Order ID</th>
                      <th className="py-3.5 px-4">Timestamp</th>
                      <th className="py-3.5 px-4">Buyer & Destination</th>
                      <th className="py-3.5 px-4">Items & Crops</th>
                      <th className="py-3.5 px-4 text-right">Volume</th>
                      <th className="py-3.5 px-4 text-right">Farmer Payout</th>
                      <th className="py-3.5 px-4 text-right">Platform Fee</th>
                      <th className="py-3.5 px-4 text-right">Total GMV</th>
                      <th className="py-3.5 px-4 text-center">Status</th>
                      <th className="py-3.5 px-4 text-center">Fulfill Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {filteredOrders.map(order => {
                      const isSelected = selectedOrder?.id === order.id;
                      const timeStr = new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
                      const dateStr = new Date(order.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' });

                      return (
                        <tr
                          key={order.id}
                          onClick={() => setSelectedOrder(order)}
                          className={`hover:bg-slate-800/40 cursor-pointer transition-colors ${
                            isSelected ? 'bg-amber-500/10' : ''
                          }`}
                        >
                          {/* Order ID */}
                          <td className="py-3.5 px-4 font-mono font-black text-amber-400 whitespace-nowrap">
                            {order.orderNumber}
                          </td>

                          {/* Timestamp */}
                          <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap">
                            <span className="block font-bold">{timeStr}</span>
                            <span className="text-[10px] text-slate-500">{dateStr}</span>
                          </td>

                          {/* Buyer */}
                          <td className="py-3.5 px-4">
                            <p className="font-extrabold text-white">{order.buyerName}</p>
                            <p className="text-[10px] text-slate-400 truncate max-w-[160px]">{order.destination}</p>
                          </td>

                          {/* Items */}
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col gap-0.5">
                              {order.items.slice(0, 2).map((item, idx) => (
                                <span key={idx} className="text-slate-200 truncate max-w-[180px]">
                                  <strong>{item.cropName}</strong> ({item.quantityKg}kg) • {item.farmerName}
                                </span>
                              ))}
                              {order.items.length > 2 && (
                                <span className="text-[10px] text-amber-400 font-bold">
                                  +{order.items.length - 2} more lots
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Volume */}
                          <td className="py-3.5 px-4 text-right font-extrabold text-slate-200 whitespace-nowrap">
                            {order.totalQuantityKg} kg
                          </td>

                          {/* Farmer Payout */}
                          <td className="py-3.5 px-4 text-right font-extrabold text-amber-300 whitespace-nowrap">
                            ₹{(order.farmerPayoutAmount || (order.totalAmount - (order.totalPlatformFee || (order.totalQuantityKg * 3)))).toLocaleString()}
                          </td>

                          {/* Platform Fee */}
                          <td className="py-3.5 px-4 text-right font-black text-emerald-400 whitespace-nowrap">
                            +₹{(order.totalPlatformFee || (order.totalQuantityKg * 3)).toLocaleString()}
                          </td>

                          {/* Total GMV */}
                          <td className="py-3.5 px-4 text-right font-black text-white text-[13px] whitespace-nowrap">
                            ₹{order.totalAmount.toLocaleString()}
                          </td>

                          {/* Status Badge */}
                          <td className="py-3.5 px-4 text-center whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                                order.status === 'Delivered'
                                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/50'
                                  : order.status === 'In Transit'
                                  ? 'bg-sky-950/80 text-sky-300 border border-sky-600/50 animate-pulse'
                                  : 'bg-amber-950/80 text-amber-300 border border-amber-600/50'
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                              <span>{order.status}</span>
                            </span>
                          </td>

                          {/* Quick Admin Action dropdown */}
                          <td className="py-3.5 px-4 text-center whitespace-nowrap" onClick={e => e.stopPropagation()}>
                            <select
                              value={order.status}
                              onChange={e => handleUpdateStatus(order.id, e.target.value as any)}
                              className="bg-slate-900 text-slate-200 text-[11px] font-bold border border-slate-700 rounded-lg px-2 py-1 outline-none focus:border-amber-500 cursor-pointer"
                            >
                              <option value="Confirmed">Confirmed</option>
                              <option value="In Transit">In Transit</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* INVENTORY / FARM SUPPLY RADAR TAB */}
        {activeTab === 'inventory' && (
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-black text-white flex items-center gap-2">
                <span>National Farmer Supply Registry</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {produceList.length} Active Lots
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {produceList.map(item => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 shadow-lg hover:border-slate-700 transition-all"
                >
                  <img
                    src={getCropPhoto(item.cropName)}
                    alt={item.cropName}
                    className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-white text-[14px] truncate">{item.cropName}</h4>
                      <span className="text-emerald-400 font-black text-[13px]">₹{item.expectedPricePerKg}/kg</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{item.variety} • {item.grade}</p>
                    <p className="text-[11px] text-slate-300 mt-1 truncate">👨‍🌾 {item.farmerName}</p>
                    <p className="text-[10px] text-slate-500 truncate">📍 {item.farmerLocation}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800 text-[10px]">
                      <span className="text-slate-400">Available: <strong>{item.quantityKg} kg</strong></span>
                      <span className={`font-bold px-1.5 py-0.2 rounded ${item.quantityKg > 0 ? 'bg-emerald-950 text-emerald-300' : 'bg-rose-950 text-rose-300'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* TRANSACTION INSPECTOR DRAWER / MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#0c182b] border border-cyan-800/60 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-slate-100 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-black uppercase text-amber-400 font-mono tracking-wider">
                  Transaction Audit Record
                </span>
                <h3 className="text-[20px] font-black text-white leading-tight">
                  {selectedOrder.orderNumber}
                </h3>
                <p className="text-[11px] text-slate-400">Placed on {new Date(selectedOrder.createdAt).toLocaleString()}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Financial Margin Waterfall Breakdown */}
            <div className="p-4 rounded-2xl bg-[#07111f] border border-slate-800 flex flex-col gap-2.5">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
                Financial Settlement Breakdown
              </span>

              <div className="flex justify-between items-center text-[13px]">
                <span className="text-slate-300">Consumer Paid (Gross):</span>
                <span className="font-black text-white text-[15px]">₹{selectedOrder.totalAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-[12px] text-amber-300 pl-3 border-l-2 border-amber-500">
                <span>Farmer Payout (Farm-Gate):</span>
                <span className="font-black">₹{(selectedOrder.farmerPayoutAmount || (selectedOrder.totalAmount - (selectedOrder.totalPlatformFee || (selectedOrder.totalQuantityKg * 3)))).toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-[12px] text-emerald-400 pl-3 border-l-2 border-emerald-500">
                <span>Company Margin (@ ₹3/kg fee):</span>
                <span className="font-black">+₹{(selectedOrder.totalPlatformFee || (selectedOrder.totalQuantityKg * 3)).toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Payment Mode:</span>
                <span className="font-bold text-slate-200">{selectedOrder.paymentMethod} • {selectedOrder.paymentStatus}</span>
              </div>
            </div>

            {/* Buyer & Delivery Details */}
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-1 text-[12px]">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Buyer Details</span>
              <p className="font-black text-white text-[13px]">{selectedOrder.buyerName}</p>
              <p className="text-slate-300">📍 Destination: {selectedOrder.destination}</p>
              <p className="text-slate-400 text-[11px]">Expected Delivery: {selectedOrder.expectedDelivery}</p>
            </div>

            {/* Line Items */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
                Harvest Line Items ({selectedOrder.items.length})
              </span>
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex justify-between items-center">
                    <div>
                      <p className="font-black text-white text-[13px]">{item.cropName}</p>
                      <p className="text-[11px] text-slate-400">🧑‍🌾 {item.farmerName}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-amber-300 text-[13px]">₹{item.subtotal}</p>
                      <p className="text-[10px] text-slate-400">{item.quantityKg} kg @ ₹{item.pricePerKg}/kg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Change Status */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => handleUpdateStatus(selectedOrder.id, 'In Transit')}
                className="flex-1 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-black text-[12px] transition-all cursor-pointer"
              >
                Mark In Transit 🚚
              </button>
              <button
                onClick={() => handleUpdateStatus(selectedOrder.id, 'Delivered', 'Paid')}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[12px] transition-all cursor-pointer"
              >
                Mark Delivered & Paid ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
