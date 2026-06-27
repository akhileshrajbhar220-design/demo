import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ChevronRight, Star } from 'lucide-react';

import heroWatchImg from '../assets/images/hero_watch_1781845165529.jpg';
import classicSeriesImg from '../assets/images/classic_series_1781845190424.jpg';
import sportSeriesImg from '../assets/images/sport_series_1781845205414.jpg';
import luxurySeriesImg from '../assets/images/luxury_gold_1781845150073.jpg';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
             src={heroWatchImg} 
             alt="Luxury watch"
             className="w-full h-full object-cover" 
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-semibold text-stone-50 mb-6 leading-tight"
          >
            Timeless Craftsmanship.<br/>Modern Precision.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Discover premium timepieces designed for those who value elegance, performance, and sophistication.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <NavLink to="/products" className="w-full sm:w-auto bg-stone-50 text-stone-900 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-200 transition-colors">
              Shop Collection
            </NavLink>
            <NavLink to="/products" className="w-full sm:w-auto border border-stone-50 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors">
              Explore New Arrivals
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Featured Collections</h2>
          <div className="w-16 h-[1px] bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Classic Series", desc: "Elegant watches inspired by timeless designs.", img: classicSeriesImg },
            { title: "Sport Series", desc: "Built for performance, durability, and adventure.", img: sportSeriesImg },
            { title: "Luxury Series", desc: "Premium materials and exceptional craftsmanship.", img: luxurySeriesImg }
          ].map((col, idx) => (
             <NavLink key={idx} to="/products" className="group block relative h-[450px] overflow-hidden">
               <div className="absolute inset-0 bg-stone-900">
                 <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-70" referrerPolicy="no-referrer" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent flex flex-col justify-end p-8">
                 <h3 className="font-display text-2xl text-stone-50 mb-2">{col.title}</h3>
                 <p className="text-stone-300 text-sm mb-4 max-w-60">{col.desc}</p>
                 <span className="flex items-center text-stone-50 text-sm uppercase tracking-widest group-hover:text-stone-300 transition-colors">
                   Discover <ChevronRight className="w-4 h-4 ml-1" />
                 </span>
               </div>
             </NavLink>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Why Choose EliteWatches?</h2>
             <div className="w-16 h-[1px] bg-stone-900 mx-auto"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-stone-900">
              <div className="flex flex-col items-center">
                 <ShieldCheck className="w-10 h-10 mb-4 stroke-1" />
                 <h4 className="font-medium uppercase tracking-wide text-sm mb-2">Premium Quality</h4>
                 <p className="text-sm text-stone-600">Swiss-inspired precision and top-tier materials.</p>
              </div>
              <div className="flex flex-col items-center">
                 <ShieldCheck className="w-10 h-10 mb-4 stroke-1" />
                 <h4 className="font-medium uppercase tracking-wide text-sm mb-2">2-Year Warranty</h4>
                 <p className="text-sm text-stone-600">International coverage on all our timepieces.</p>
              </div>
              <div className="flex flex-col items-center">
                 <Truck className="w-10 h-10 mb-4 stroke-1" />
                 <h4 className="font-medium uppercase tracking-wide text-sm mb-2">Free Shipping</h4>
                 <p className="text-sm text-stone-600">Complimentary worldwide shipping on all orders.</p>
              </div>
              <div className="flex flex-col items-center">
                 <CreditCard className="w-10 h-10 mb-4 stroke-1" />
                 <h4 className="font-medium uppercase tracking-wide text-sm mb-2">Secure Payments</h4>
                 <p className="text-sm text-stone-600">100% secure online transactions.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Customer Chronicles</h2>
          <div className="w-16 h-[1px] bg-stone-900 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: "James Anderson", quote: "The quality exceeded my expectations. My EliteWatches timepiece feels truly luxurious." },
             { name: "Sophia Carter", quote: "Elegant design and excellent customer service. Highly recommend." },
             { name: "Michael Brown", quote: "Perfect blend of style and functionality. It has become my everyday essential." }
           ].map((test, idx) => (
             <div key={idx} className="bg-white p-8 shadow-sm border border-stone-100 flex flex-col h-full">
               <div className="flex text-yellow-500 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
               </div>
               <p className="text-stone-700 italic flex-grow mb-6 leading-relaxed">"{test.quote}"</p>
               <p className="font-medium uppercase tracking-wider text-xs text-stone-900">— {test.name}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-950 py-24 px-4 text-center">
         <div className="max-w-2xl mx-auto text-stone-50">
            <h2 className="font-display text-3xl md:text-5xl mb-6">Upgrade Your Style Today</h2>
            <p className="text-stone-300 mb-10 max-w-lg mx-auto">Browse our latest collection and find the perfect watch for every occasion. Experience the perfect harmony of design and engineering.</p>
            <NavLink to="/products" className="inline-block bg-stone-50 text-stone-900 px-10 py-5 uppercase tracking-widest text-sm font-medium hover:bg-stone-200 transition-colors">
               Explore Collection
            </NavLink>
         </div>
      </section>
    </div>
  );
}
