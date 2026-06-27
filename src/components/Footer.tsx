import { Watch } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-16 px-4 sm:px-6 lg:px-8 text-stone-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <NavLink to="/" className="flex items-center gap-2 text-stone-50 mb-6">
            <Watch className="w-6 h-6" />
            <span className="font-display font-semibold text-xl tracking-tight">EliteWatches</span>
          </NavLink>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium timepieces designed for those who value elegance, performance, and sophistication.
          </p>
        </div>
        
        <div>
          <h4 className="text-stone-50 font-medium tracking-wide uppercase text-sm mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
             <li><NavLink to="/products" className="hover:text-stone-50 transition-colors">All Watches</NavLink></li>
             <li><NavLink to="/about" className="hover:text-stone-50 transition-colors">Our Story</NavLink></li>
             <li><NavLink to="/blog" className="hover:text-stone-50 transition-colors">Journal</NavLink></li>
             <li><NavLink to="/contact" className="hover:text-stone-50 transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-50 font-medium tracking-wide uppercase text-sm mb-6">Customer Care</h4>
          <ul className="space-y-4 text-sm">
             <li><a href="#" className="hover:text-stone-50 transition-colors">Shipping Policy</a></li>
             <li><a href="#" className="hover:text-stone-50 transition-colors">Returns & Exchanges</a></li>
             <li><a href="#" className="hover:text-stone-50 transition-colors">Warranty</a></li>
             <li><a href="#" className="hover:text-stone-50 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-50 font-medium tracking-wide uppercase text-sm mb-6">Stay Connected</h4>
          <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex border-b border-stone-700 pb-2">
             <input type="email" placeholder="Enter your email" className="bg-transparent text-stone-50 text-sm focus:outline-none w-full placeholder-stone-500" />
             <button type="button" className="uppercase text-xs tracking-widest text-stone-50 hover:text-stone-300">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} EliteWatches. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
           <a href="#" className="hover:text-stone-50 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-stone-50 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
