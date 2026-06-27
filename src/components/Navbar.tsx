import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Watch, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <Watch className="w-8 h-8 text-stone-900" />
              <span className="font-display font-semibold text-2xl tracking-tight text-stone-900">EliteWatches</span>
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-wide uppercase transition-colors hover:text-stone-900 ${
                    isActive ? 'text-stone-900 font-medium' : 'text-stone-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-6">
             <div className="relative cursor-pointer text-stone-900 group">
               <ShoppingBag className="w-5 h-5 group-hover:text-stone-600 transition-colors" />
               {cartCount > 0 && (
                 <span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-stone-50 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                   {cartCount}
                 </span>
               )}
             </div>
             <NavLink to="/products" className="bg-stone-900 text-stone-50 px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-stone-800 transition-colors">
               Shop Now
             </NavLink>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <div className="relative cursor-pointer text-stone-900 group">
               <ShoppingBag className="w-5 h-5" />
               {cartCount > 0 && (
                 <span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-stone-50 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                   {cartCount}
                 </span>
               )}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-4 text-base tracking-widest uppercase text-center border-b border-stone-100 ${
                      isActive ? 'text-stone-900 font-medium' : 'text-stone-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex justify-center">
                <NavLink to="/products" onClick={() => setIsOpen(false)} className="bg-stone-900 text-stone-50 px-8 py-3 w-full text-center text-sm uppercase tracking-wider">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
