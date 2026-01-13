
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-icons-outlined text-secondary text-2xl">sports_golf</span>
              <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                GOLF<span className="text-secondary">MEETS</span>BEAUTY
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Redefining the modern golfer's lifestyle through high-performance apparel and curated beauty essentials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-icons-outlined">facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-icons-outlined">photo_camera</span>
              </a> 
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-icons-outlined">alternate_email</span>
              </a> 
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category/Apparel" className="hover:text-secondary transition-colors">Women's Apparel</Link></li>
              <li><Link to="/category/Apparel" className="hover:text-secondary transition-colors">Men's Apparel</Link></li>
              <li><Link to="/category/Beauty" className="hover:text-secondary transition-colors">Beauty & Skincare</Link></li>
              <li><Link to="/category/Accessories" className="hover:text-secondary transition-colors">Accessories</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-secondary text-sm mt-0.5">email</span>
                <span>hello@golfmeetsbeauty.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-secondary text-sm mt-0.5">phone</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-secondary text-sm mt-0.5">location_on</span>
                <span>123 Fairway Drive,<br/>Scottsdale, AZ 85251</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Golf Meets Beauty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
