
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../CartContext';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-10 text-sm text-slate-500 dark:text-slate-400">
        <ol className="flex items-center space-x-2">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><Link to={`/category/${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="font-bold text-slate-900 dark:text-white">{product.name}</li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:h-[600px] scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className={`flex-shrink-0 w-24 h-28 rounded-xl overflow-hidden border-2 transition-all ${i === 1 ? 'border-secondary ring-2 ring-secondary ring-offset-2 dark:ring-offset-background-dark' : 'border-slate-200 dark:border-slate-700 hover:border-secondary'}`}>
                <img alt={`View ${i}`} className="w-full h-full object-cover" src={product.image} />
              </button>
            ))}
          </div>
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xl group">
            <img alt={product.name} className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105" src={product.image} />
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-md">
                Best Seller
              </div>
            )}
            <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur text-slate-800 dark:text-white p-2 rounded-full cursor-pointer">
              <span className="material-icons-outlined text-xl">zoom_in</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-10 lg:mt-0">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons-outlined text-sm">{i < Math.floor(product.rating) ? 'star' : 'star_outline'}</span>
                ))}
              </div>
              <p className="text-sm text-slate-500 underline decoration-secondary decoration-2 underline-offset-4 cursor-pointer">{product.reviews} reviews</p>
            </div>
            <div className="flex items-baseline space-x-4">
              <p className="text-3xl font-bold text-primary dark:text-secondary">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-lg text-slate-400 line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10">{product.description}</p>

          <div className="space-y-10">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Color</h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all p-0.5 ${selectedColor === color ? 'border-secondary ring-2 ring-secondary ring-offset-2 dark:ring-offset-background-dark' : 'border-transparent hover:border-slate-300'}`}
                  >
                    <span className="block w-full h-full rounded-full" style={{ backgroundColor: color }}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Size</h3>
                <button className="text-sm font-bold text-primary dark:text-secondary flex items-center gap-1 hover:underline">
                  <span className="material-icons-outlined text-sm">straighten</span> Size guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 rounded-xl text-sm font-bold border transition-all ${selectedSize === size ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden h-14 w-full sm:w-36">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 h-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-xl font-bold">-</button>
                <span className="px-4 font-bold text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex-1 h-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-xl font-bold">+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary hover:bg-accent text-white rounded-xl h-14 font-bold uppercase tracking-wider shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-0.5"
              >
                Add to Bag — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            <button className="w-full border-2 border-primary text-primary dark:text-secondary dark:border-secondary h-14 rounded-xl font-bold uppercase tracking-wider hover:bg-primary dark:hover:bg-secondary hover:text-white transition-all">
              <span className="material-icons-outlined mr-2 align-middle">favorite_border</span> Save for later
            </button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <section className="mt-24">
        <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">Product Specifications</h3>
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <dl className="divide-y divide-slate-100 dark:divide-slate-700">
            {[
              { label: 'Fabric Material', value: '88% Recycled Polyester, 12% Spandex' },
              { label: 'Care Instructions', value: 'Machine wash cold with like colors. Tumble dry low.' },
              { label: 'Fit', value: 'Athletic fit. True to size. Model is 5\'9" wearing size S.' },
              { label: 'Origin', value: 'Designed in California, Made in Portugal' }
            ].map((spec, i) => (
              <div key={spec.label} className={`px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ${i % 2 !== 0 ? 'bg-slate-50/50 dark:bg-slate-800/50' : ''}`}>
                <dt className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{spec.label}</dt>
                <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400 sm:col-span-2 sm:mt-0">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
