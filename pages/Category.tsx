
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';

const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeSize, setActiveSize] = useState('S');

  const filteredProducts = categoryId 
    ? products.filter(p => p.category === categoryId) 
    : products;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-primary overflow-hidden py-16">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 L40 0 L60 0 L100 100 Z" fill="#29abe2"></path>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            The {categoryId || 'Fairway'} Collection
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Elevate your game with performance wear designed for movement, style, and confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Category</h3>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/category/Apparel" className={`flex items-center hover:text-primary transition-colors ${categoryId === 'Apparel' ? 'text-secondary font-bold' : ''}`}>
                  <span className="material-icons-outlined text-sm mr-2">chevron_right</span> Apparel
                </Link></li>
                <li><Link to="/category/Beauty" className={`flex items-center hover:text-primary transition-colors ${categoryId === 'Beauty' ? 'text-secondary font-bold' : ''}`}>
                  <span className="material-icons-outlined text-sm mr-2">chevron_right</span> Beauty & Skincare
                </Link></li>
                <li><Link to="/category/Accessories" className={`flex items-center hover:text-primary transition-colors ${categoryId === 'Accessories' ? 'text-secondary font-bold' : ''}`}>
                  <span className="material-icons-outlined text-sm mr-2">chevron_right</span> Accessories
                </Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`px-3 py-2 border rounded text-sm transition-all ${
                      activeSize === size 
                      ? 'bg-primary text-white border-primary' 
                      : 'border-slate-300 dark:border-slate-600 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Color</h3>
              <div className="flex flex-wrap gap-3">
                {['#1e2a63', '#29abe2', '#FFFFFF', '#000000', '#F472B6'].map(color => (
                  <button 
                    key={color}
                    className={`w-8 h-8 rounded-full border border-slate-200 hover:scale-110 transition-transform ${color === '#FFFFFF' ? 'bg-white' : ''}`}
                    style={{ backgroundColor: color !== '#FFFFFF' ? color : undefined }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm" placeholder="Min" type="number" />
                <span className="text-slate-400">-</span>
                <input className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm" placeholder="Max" type="number" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-4 border-b border-slate-200 dark:border-slate-700">
              <p className="text-slate-500 text-sm mb-4 sm:mb-0">Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProducts.length}</span> results</p>
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="sort">Sort by:</label>
                <select className="block w-full pl-3 pr-10 py-2 text-sm border-slate-300 dark:border-slate-600 dark:bg-slate-800 rounded-md focus:ring-secondary focus:border-secondary" id="sort">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Sellers</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-700">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden">
                    <img alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.image} />
                    {product.isNew && (
                      <span className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm">NEW</span>
                    )}
                    {product.originalPrice && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm">SALE</span>
                    )}
                    <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-700/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-slate-800 dark:text-white hover:text-secondary">
                      <span className="material-icons-outlined text-xl">favorite_border</span>
                    </button>
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-secondary transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-1">{product.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-primary dark:text-white">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="flex gap-1.5">
                        {product.colors.map(c => (
                          <span key={c} className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: c }}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">Previous</button>
                <button className="px-4 py-2 rounded-md bg-primary text-white text-sm font-bold">1</button>
                <button className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">2</button>
                <button className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">3</button>
                <button className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">Next</button>
              </nav>
            </div>
          </main>
        </div>
      </div>

      {/* Join the Club CTA */}
      <section className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-display font-bold mb-2">Join the Club</h2>
            <p className="text-cyan-100 text-lg">Sign up for exclusive access to new arrivals and 15% off your first order.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input className="px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-64" placeholder="Enter your email" type="email" />
            <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Category;
