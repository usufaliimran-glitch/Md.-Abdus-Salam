
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { products } from '../data';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const recommendations = products.slice(0, 4);

  const shipping = cartTotal > 150 ? 0 : 15;
  const tax = cartTotal * 0.09;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 px-4">
        <span className="material-icons-outlined text-slate-300 text-8xl">shopping_cart</span>
        <h2 className="text-3xl font-display font-bold">Your cart is empty</h2>
        <p className="text-slate-500 max-w-sm text-center">Looks like you haven't added anything to your cart yet. Let's find something you love!</p>
        <Link to="/category/Apparel" className="px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">Your Shopping Cart</h1>
        <p className="mt-2 text-lg text-slate-500">Ready to hit the green in style? Review your items below.</p>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        {/* Cart Items */}
        <section className="lg:col-span-7">
          <ul className="border-t border-b border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
            {cart.map((item) => (
              <li key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex py-10">
                <div className="flex-shrink-0">
                  <img alt={item.name} className="h-24 w-24 rounded-xl object-cover border border-slate-100 dark:border-slate-700 sm:h-32 sm:w-32" src={item.image} />
                </div>
                <div className="ml-6 flex-1 flex flex-col justify-between">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link to={`/product/${item.id}`} className="font-bold text-slate-800 dark:text-white hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-xs text-slate-500 uppercase tracking-widest font-bold">
                        <p>{item.selectedSize}</p>
                        <p className="ml-4 pl-4 border-l border-slate-200">Selected</p>
                      </div>
                      <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded-lg w-max bg-white dark:bg-slate-800">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="px-3 py-1 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                        >-</button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="px-3 py-1 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                        >+</button>
                      </div>
                      <div className="absolute top-0 right-0">
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                          className="-m-2 p-2 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <span className="material-icons-outlined">delete_outline</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 flex text-sm text-green-600 space-x-2">
                    <span className="material-icons-outlined text-base">check_circle</span>
                    <span className="font-medium">In stock</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <section className="mt-16 bg-white dark:bg-slate-800 rounded-2xl px-6 py-8 sm:p-8 lg:mt-0 lg:col-span-5 shadow-xl border border-slate-100 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-8">Order Summary</h2>
          <dl className="space-y-6">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-slate-500">Subtotal</dt>
              <dd className="text-sm font-bold text-slate-900 dark:text-white">${cartTotal.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
              <dt className="flex items-center text-sm text-slate-500">
                <span>Shipping estimate</span>
                <span className="material-icons-outlined text-sm ml-2 text-slate-300">help_outline</span>
              </dt>
              <dd className="text-sm font-bold text-slate-900 dark:text-white">${shipping.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
              <dt className="text-sm text-slate-500">Tax estimate</dt>
              <dd className="text-sm font-bold text-slate-900 dark:text-white">${tax.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
              <dt className="text-xl font-bold text-slate-900 dark:text-white">Order Total</dt>
              <dd className="text-xl font-bold text-primary dark:text-secondary">${total.toFixed(2)}</dd>
            </div>
          </dl>

          <div className="mt-10 space-y-4">
            <button className="w-full bg-[#FFC439] hover:bg-[#F4BB2A] text-slate-900 h-14 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
              <span className="text-sm">Checkout with</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            </button>
            <Link to="/checkout" className="w-full bg-primary hover:bg-accent text-white h-14 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all flex items-center justify-center group">
              Proceed to Checkout
              <span className="material-icons-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="mt-10 border-t border-slate-100 dark:border-slate-700 pt-6">
            <div className="flex gap-2">
              <input className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 text-sm focus:ring-secondary" placeholder="Discount code" type="text" />
              <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">Apply</button>
            </div>
          </div>
        </section>
      </div>

      {/* Recommendations */}
      <section className="mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Completing the Look</h2>
          <Link to="/category/Accessories" className="text-secondary hover:text-primary font-bold text-sm flex items-center">
            See all recommendations <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {recommendations.map((prod) => (
            <div key={prod.id} className="group relative">
              <div className="w-full h-80 bg-slate-100 rounded-xl overflow-hidden group-hover:opacity-75 transition-all">
                <img alt={prod.name} className="w-full h-full object-cover" src={prod.image} />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    <Link to={`/product/${prod.id}`}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {prod.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{prod.subCategory}</p>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">${prod.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cart;
