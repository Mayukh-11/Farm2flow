import React, { useState } from 'react';
import { CartItem, Order } from '@/types';
import { getCropPhoto } from '@/data/cropImages';
import {
  PLATFORM_CONVENIENCE_FEE_PER_KG,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  createOrderFromCart
} from '@/services/api';

interface ConsumerCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  buyerName: string;
  buyerAddress: string;
  onOrderPlaced: (order: Order) => void;
}

type PaymentMethodType = 'cash' | 'card' | 'online';

export const ConsumerCartDrawer: React.FC<ConsumerCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  buyerName,
  buyerAddress,
  onOrderPlaced,
}) => {
  const [showCheckoutStep, setShowCheckoutStep] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>('cash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOnlinePaid, setIsOnlinePaid] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantityKg, 0);
  const farmerBaseTotal = cart.reduce((acc, item) => acc + item.quantityKg * item.pricePerKg, 0);
  const totalConvenienceFee = totalItemsCount * PLATFORM_CONVENIENCE_FEE_PER_KG;
  const consumerGrandTotal = farmerBaseTotal + totalConvenienceFee;
  const estimatedMarketRetailPrice = Math.round(consumerGrandTotal * 1.25);
  const totalSavings = estimatedMarketRetailPrice - consumerGrandTotal;

  const handlePlaceCombinedOrder = (method: PaymentMethodType) => {
    if (cart.length === 0) return;
    setIsProcessing(true);

    const paymentLabel =
      method === 'cash' ? 'Cash on Delivery' :
      method === 'card' ? 'Card Payment' : 'Online (UPI/QR)';

    setTimeout(() => {
      const order = createOrderFromCart(
        cart,
        buyerName,
        paymentLabel,
        buyerAddress
      );
      setIsProcessing(false);
      setShowCheckoutStep(false);
      setIsOnlinePaid(false);
      onOrderPlaced(order);
      onClose();
    }, method === 'online' ? 700 : 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      <div className="w-full max-w-[430px] bg-slate-50 h-full flex flex-col shadow-2xl border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* Header - Flipkart style */}
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-black text-slate-900 leading-none">
                  My Cart
                </h2>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                  {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5 truncate max-w-[240px]">
                Deliver to: <span className="font-bold text-slate-700">{buyerAddress || 'Salt Lake, Kolkata'}</span>
              </p>
            </div>
          </div>

          {cart.length > 0 && !showCheckoutStep && (
            <button
              onClick={() => clearCart()}
              className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 py-1 rounded-lg transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* CART CONTENT */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
          {cart.length === 0 ? (
            /* Empty Cart View */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[48px] text-emerald-600">
                  remove_shopping_cart
                </span>
              </div>
              <h3 className="text-[18px] font-black text-slate-800">Your Cart is Empty!</h3>
              <p className="text-[12px] text-slate-500 mt-1 max-w-[240px]">
                Explore fresh fruits & vegetables directly from farm harvests and add them to your cart.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-xl text-[13px] shadow-lg shadow-emerald-700/20 active:scale-95 transition-all"
              >
                Shop Fresh Harvests Now
              </button>
            </div>
          ) : !showCheckoutStep ? (
            /* Items List & Price Summary */
            <>
              {/* Deliver To Banner (Flipkart Style) */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="material-symbols-outlined text-[20px] text-emerald-600 shrink-0">location_on</span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-slate-800 truncate">Deliver to: {buyerName}</p>
                    <p className="text-[11px] text-slate-500 truncate">{buyerAddress}</p>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg shrink-0">
                  Direct Farm Express
                </span>
              </div>

              {/* Cart Items List */}
              <div className="flex flex-col gap-2.5">
                {cart.map(item => {
                  const photoUrl = item.image || getCropPhoto(item.cropName);
                  const itemFarmerRate = item.pricePerKg;
                  const itemConsumerRate = itemFarmerRate + PLATFORM_CONVENIENCE_FEE_PER_KG;
                  const itemSubtotal = item.quantityKg * itemConsumerRate;

                  return (
                    <div
                      key={item.produceId}
                      className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs flex flex-col gap-2.5 relative group"
                    >
                      <div className="flex gap-3 items-center">
                        {/* Animated Crop Graphic */}
                        <div className="w-18 h-18 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-100">
                          <img
                            src={photoUrl}
                            alt={item.cropName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-extrabold text-slate-900 text-[14px] leading-tight truncate">
                              {item.cropName}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.produceId)}
                              className="text-slate-400 hover:text-rose-600 transition-colors p-0.5"
                              title="Remove item"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                          
                          <p className="text-[11px] text-slate-500 font-medium truncate">
                            {item.variety} • <span className="text-emerald-700 font-bold">{item.grade}</span>
                          </p>

                          <p className="text-[10px] text-slate-600 font-medium mt-0.5 truncate">
                            🧑‍🌾 {item.farmerName} ({item.farmerLocation})
                          </p>

                          <div className="flex items-center justify-between mt-1.5 pt-1">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-[15px] font-black text-slate-900">
                                ₹{itemSubtotal.toLocaleString()}
                              </span>
                              <span className="text-[11px] text-slate-400 line-through">
                                ₹{Math.round(itemSubtotal * 1.25).toLocaleString()}
                              </span>
                              <span className="text-[10px] text-emerald-700 font-extrabold">
                                (₹{itemConsumerRate}/kg)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Stepper (Flipkart Style: - [Qty kg] +) */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                        <span className="text-slate-500 font-semibold">
                          Max Available: <strong className="text-slate-700">{item.maxAvailableKg} kg</strong>
                        </span>

                        <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                          <button
                            onClick={() => updateCartQuantity(item.produceId, item.quantityKg - (item.quantityKg > 10 ? 5 : 1))}
                            className="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 active:scale-95 text-slate-800 flex items-center justify-center font-black transition-all shadow-2xs"
                            title="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 text-[13px] font-black text-slate-900">
                            {item.quantityKg} kg
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.produceId, item.quantityKg + (item.quantityKg >= 10 ? 5 : 1))}
                            disabled={item.quantityKg >= item.maxAvailableKg}
                            className="w-7 h-7 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 active:scale-95 text-white flex items-center justify-center font-black transition-all shadow-2xs"
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price Details Breakdown (Flipkart Style) */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col gap-2.5">
                <h4 className="text-[13px] font-black text-slate-900 border-b border-slate-100 pb-2 uppercase tracking-wide">
                  Price Details ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})
                </h4>

                <div className="flex justify-between text-[12px] text-slate-600">
                  <span>Total Harvest Weight</span>
                  <span className="font-bold text-slate-800">{totalItemsCount} kg</span>
                </div>

                <div className="flex justify-between text-[12px] text-slate-600">
                  <span>Direct Farm Produce Total</span>
                  <span className="font-bold text-slate-800">₹{farmerBaseTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[12px] text-slate-600">
                  <span className="flex items-center gap-1">
                    <span>Convenience & Logistics Fee</span>
                    <span className="text-[10px] text-slate-400">(₹3/kg)</span>
                  </span>
                  <span className="font-bold text-slate-800">₹{totalConvenienceFee.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[12px] text-emerald-700 font-bold">
                  <span>Middlemen Markup Discount</span>
                  <span>- ₹{totalSavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[12px] text-emerald-700 font-bold">
                  <span>Farm-to-Door Delivery</span>
                  <span className="uppercase">Free</span>
                </div>

                <div className="pt-2.5 border-t border-dashed border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-[14px] font-black text-slate-900 block">Total Amount</span>
                    <span className="text-[10px] text-slate-500 font-medium">Inclusive of all direct farm charges</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[18px] font-black text-emerald-700 block leading-tight">
                      ₹{consumerGrandTotal.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through">
                      ₹{estimatedMarketRetailPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-50 text-emerald-800 text-[11px] font-extrabold p-2.5 rounded-xl border border-emerald-200 text-center">
                  🎉 You will save ₹{totalSavings.toLocaleString()} on this direct farm order!
                </div>
              </div>
            </>
          ) : (
            /* Checkout & Multi-item Payment Selection */
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col gap-4 animate-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-[15px] font-black text-slate-900">Select Payment Method</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Order all {cart.length} harvest items altogether</p>
                </div>
                <button
                  onClick={() => setShowCheckoutStep(false)}
                  className="text-[11px] font-bold text-emerald-700 hover:underline"
                >
                  ← Edit Cart
                </button>
              </div>

              {/* Order Quick Summary Header */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[12px] flex justify-between items-center">
                <div>
                  <span className="text-slate-500 font-medium block">Total Payable</span>
                  <span className="text-[16px] font-black text-slate-900">
                    ₹{consumerGrandTotal.toLocaleString()}
                  </span>
                </div>
                <span className="text-[11px] font-black bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  {totalItemsCount} kg Total
                </span>
              </div>

              {/* Payment Methods (Cash on Delivery, Card, Online UPI QR) */}
              <div className="grid grid-cols-3 gap-2 text-[12px]">
                <button
                  onClick={() => {
                    setSelectedPayment('cash');
                    setIsOnlinePaid(false);
                  }}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedPayment === 'cash'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-emerald-700">payments</span>
                  <span>Cash</span>
                  <span className="text-[9px] opacity-75">(On Delivery)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedPayment('card');
                    setIsOnlinePaid(false);
                  }}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedPayment === 'card'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-blue-700">credit_card</span>
                  <span>Card</span>
                  <span className="text-[9px] opacity-75">(Debit/Credit)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedPayment('online');
                    setIsOnlinePaid(false);
                  }}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedPayment === 'online'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-amber-600">qr_code_scanner</span>
                  <span>UPI / QR</span>
                  <span className="text-[9px] opacity-75">(Instant Scan)</span>
                </button>
              </div>

              {/* Cash Flow */}
              {selectedPayment === 'cash' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col gap-2 text-[12px]">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Cash on Delivery Selected</span>
                  </div>
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    You can pay <strong>₹{consumerGrandTotal.toLocaleString()}</strong> in cash directly to our delivery personnel when all {cart.length} produce lots arrive at {buyerAddress}.
                  </p>
                  <button
                    onClick={() => handlePlaceCombinedOrder('cash')}
                    disabled={isProcessing}
                    className="w-full mt-1 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-black text-[13px] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>{isProcessing ? 'Placing All Orders...' : `Place Combined Order • ₹${consumerGrandTotal.toLocaleString()}`}</span>
                  </button>
                </div>
              )}

              {/* Card Flow */}
              {selectedPayment === 'card' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 flex flex-col gap-2.5 text-[12px]">
                  <div className="flex items-center gap-1.5 text-blue-900 font-bold">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                    <span>Enter Card Details</span>
                  </div>
                  <input
                    type="text"
                    defaultValue="4111 2233 4455 9988"
                    placeholder="Card Number"
                    className="w-full px-3 py-2 bg-white border border-blue-200 rounded-lg text-[12px] font-mono"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      defaultValue="12/28"
                      placeholder="MM/YY"
                      className="px-3 py-2 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                    />
                    <input
                      type="password"
                      defaultValue="786"
                      placeholder="CVV"
                      maxLength={3}
                      className="px-3 py-2 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                    />
                  </div>
                  <button
                    onClick={() => handlePlaceCombinedOrder('card')}
                    disabled={isProcessing}
                    className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-black text-[13px] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">check</span>
                    <span>{isProcessing ? 'Authorizing Card...' : `Pay ₹${consumerGrandTotal.toLocaleString()} & Place Order`}</span>
                  </button>
                </div>
              )}

              {/* Online UPI QR Scanner Flow */}
              {selectedPayment === 'online' && (
                <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col items-center gap-3">
                  <div className="text-center">
                    <span className="text-[12px] font-black text-emerald-400 uppercase tracking-wider block">
                      Live Bharat UPI QR
                    </span>
                    <span className="text-[10px] text-slate-400">Scan via GPay, PhonePe, Paytm or BHIM</span>
                  </div>

                  <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center gap-2 border-2 border-emerald-500/60">
                    <div className="w-36 h-36 bg-white relative flex items-center justify-center">
                      <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="5" y="5" width="28" height="28" fill="#0f172a" rx="3" />
                        <rect x="9" y="9" width="20" height="20" fill="white" rx="1" />
                        <rect x="13" y="13" width="12" height="12" fill="#047857" rx="1" />

                        <rect x="67" y="5" width="28" height="28" fill="#0f172a" rx="3" />
                        <rect x="71" y="9" width="20" height="20" fill="white" rx="1" />
                        <rect x="75" y="13" width="12" height="12" fill="#047857" rx="1" />

                        <rect x="5" y="67" width="28" height="28" fill="#0f172a" rx="3" />
                        <rect x="9" y="71" width="20" height="20" fill="white" rx="1" />
                        <rect x="13" y="75" width="12" height="12" fill="#047857" rx="1" />

                        <rect x="38" y="10" width="5" height="5" fill="#0f172a" />
                        <rect x="48" y="10" width="5" height="5" fill="#0f172a" />
                        <rect x="58" y="10" width="5" height="5" fill="#0f172a" />
                        <rect x="38" y="25" width="5" height="5" fill="#0f172a" />
                        <rect x="48" y="25" width="5" height="5" fill="#0f172a" />
                        <rect x="58" y="25" width="5" height="5" fill="#0f172a" />
                        <rect x="10" y="45" width="5" height="5" fill="#0f172a" />
                        <rect x="30" y="45" width="5" height="5" fill="#0f172a" />
                        <rect x="50" y="45" width="5" height="5" fill="#0f172a" />
                        <rect x="70" y="45" width="5" height="5" fill="#0f172a" />

                        <circle cx="50" cy="50" r="10" fill="#047857" />
                        <text x="50" y="54" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">₹</text>
                      </svg>
                      <div className="absolute inset-x-2 h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse pointer-events-none" />
                    </div>
                    <span className="text-[10px] text-slate-800 font-black tracking-wider uppercase">
                      UPI ID: farm2flow@icici
                    </span>
                  </div>

                  <p className="text-[12px] font-extrabold text-white text-center">
                    Pay ₹{consumerGrandTotal.toLocaleString()}
                  </p>

                  {!isOnlinePaid ? (
                    <button
                      onClick={() => {
                        setIsProcessing(true);
                        setTimeout(() => {
                          setIsProcessing(false);
                          setIsOnlinePaid(true);
                        }, 800);
                      }}
                      disabled={isProcessing}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98"
                    >
                      <span className="material-symbols-outlined text-[16px]">qr_code</span>
                      <span>{isProcessing ? 'Verifying Scanner...' : 'Simulate Scan & Approve Payment'}</span>
                    </button>
                  ) : (
                    <div className="w-full space-y-2 animate-in zoom-in duration-200">
                      <div className="bg-emerald-950 border border-emerald-500/80 rounded-xl p-2.5 flex items-center justify-center gap-2 text-emerald-300 font-bold text-[12px]">
                        <span className="material-symbols-outlined text-[20px] text-emerald-400 animate-bounce">verified</span>
                        <span>UPI Payment Verified Successfully!</span>
                      </div>
                      <button
                        onClick={() => handlePlaceCombinedOrder('online')}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-[13px] transition-all shadow-lg active:scale-98 flex items-center justify-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>Confirm & Place All Orders</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* BOTTOM STICKY BAR (Flipkart style 'PLACE ORDER' / 'CONTINUE') */}
        {cart.length > 0 && !showCheckoutStep && (
          <div className="p-3.5 bg-white border-t border-slate-200 flex items-center justify-between shadow-lg sticky bottom-0 z-10">
            <div>
              <span className="text-[18px] font-black text-slate-900 block leading-tight">
                ₹{consumerGrandTotal.toLocaleString()}
              </span>
              <button
                onClick={() => setShowCheckoutStep(true)}
                className="text-[11px] font-extrabold text-emerald-700 hover:underline flex items-center gap-0.5"
              >
                <span>View Price Breakup</span>
                <span className="material-symbols-outlined text-[14px]">expand_less</span>
              </button>
            </div>

            <button
              onClick={() => setShowCheckoutStep(true)}
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-black rounded-xl text-[14px] shadow-lg shadow-emerald-700/25 transition-all flex items-center gap-2"
            >
              <span>Place Order ({cart.length})</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
