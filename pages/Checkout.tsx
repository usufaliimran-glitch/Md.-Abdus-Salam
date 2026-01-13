
import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, cartTotal } = useCart();
  const shipping = cartTotal > 150 ? 0 : 12;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        {/* Form Steps */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-10 uppercase tracking-tight">Checkout</h1>
          
          <div className="space-y-8">
            {/* Step 1: Contact */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center uppercase tracking-wider">
                  <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3">1</span>
                  Contact Information
                </h2>
                <a href="#" className="text-sm text-secondary font-bold hover:underline">Log in</a>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2" htmlFor="email">Email address</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700 dark:text-white" id="email" placeholder="you@example.com" type="email" />
                </div>
                <div className="flex items-center gap-3">
                  <input className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-secondary cursor-pointer" id="newsletter" type="checkbox" />
                  <label className="text-sm text-slate-600 dark:text-slate-400 font-medium" htmlFor="newsletter">Keep me up to date on exclusive golf events and new beauty drops.</label>
                </div>
              </div>
            </section>

            {/* Step 2: Shipping */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 border border-slate-100 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center uppercase tracking-wider mb-6">
                <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First name</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last name</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700" type="text" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Address</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">City</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Postal code</label>
                  <input className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-slate-700" type="text" />
                </div>
              </div>
            </section>

            {/* Step 3: Payment */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 border border-slate-100 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center uppercase tracking-wider mb-6">
                <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3">3</span>
                Payment
              </h2>
              <div className="space-y-6">
                <div className="p-6 border-2 border-secondary bg-blue-50/50 dark:bg-blue-900/10 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <input checked className="h-6 w-6 text-primary focus:ring-secondary mt-1" type="radio" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">PayPal</p>
                        <p className="text-sm text-slate-500">Safe payment online. Credit card needed.</p>
                      </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                  </div>
                  <p className="text-sm font-bold text-secondary">You will be redirected to PayPal to complete your purchase securely.</p>
                </div>
                
                <button className="w-full bg-[#FFC439] hover:bg-[#F4BB35] h-14 rounded-full font-bold text-primary shadow-lg transition-all flex items-center justify-center gap-2">
                  Pay with <span className="italic">PayPal</span>
                </button>
                <div className="text-center text-slate-400 text-xs flex items-center justify-center gap-2">
                  <span className="material-icons-outlined text-sm">lock</span>
                  Secure 256-bit SSL encrypted payment
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Summary Sidebar */}
        <aside className="lg:col-span-5 mt-10 lg:mt-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden sticky top-24">
            <div className="p-8 bg-gradient-to-r from-primary to-accent">
              <h2 className="text-xl font-display font-bold text-white tracking-wider uppercase">Order Summary</h2>
              <p className="text-blue-100 text-sm mt-1">Review your items before payment</p>
            </div>
            <div className="p-8">
              <ul className="divide-y divide-slate-100 dark:divide-slate-700 mb-8">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                      <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col justify-between">
                      <div className="flex justify-between text-base font-bold text-slate-900 dark:text-white">
                        <h3 className="line-clamp-1">{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <p>Qty {item.quantity}</p>
                        <p className="uppercase text-[10px] font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">{item.selectedSize}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-slate-100 dark:border-slate-700 pt-8">
                <div className="flex justify-between text-sm text-slate-500 font-medium">
                  <p>Subtotal</p>
                  <p className="text-slate-900 dark:text-white font-bold">${cartTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-slate-500 font-medium">
                  <p>Shipping</p>
                  <p className="text-slate-900 dark:text-white font-bold">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-slate-500 font-medium">
                  <p>Taxes (estimated)</p>
                  <p className="text-slate-900 dark:text-white font-bold">${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">Total</p>
                  <p className="text-3xl font-bold text-primary dark:text-secondary">${total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-start gap-3">
                <span className="material-icons-outlined text-secondary">local_shipping</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {total > 150 
                    ? "Congratulations! Your order qualifies for free shipping." 
                    : `Add $${(150 - cartTotal).toFixed(2)} more to qualify for FREE shipping.`}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
