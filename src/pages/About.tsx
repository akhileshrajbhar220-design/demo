import { Target, TrendingUp, Heart, Leaf } from 'lucide-react';
import imgWatchmaker from '../assets/images/watchmaker_about_1781844973571.jpg';

export default function About() {
  return (
    <div className="py-16 md:py-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <h1 className="font-display text-4xl md:text-6xl text-stone-900 mb-6">Our Story</h1>
        <div className="w-16 h-[1px] bg-stone-900 mx-auto mb-8"></div>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Founded with a passion for precision and design, EliteWatches was created to offer premium-quality watches that combine timeless elegance with modern innovation.
        </p>
        <p className="text-lg text-stone-600 leading-relaxed mt-6 max-w-2xl mx-auto">
          We believe a watch is more than just a timekeeping device—it is a statement of personality, confidence, and achievement.
        </p>
      </div>

      {/* Image breakout */}
      <div className="w-full h-[50vh] min-h-[400px] mb-20 relative">
         <img 
           src={imgWatchmaker}
           alt="Watch making"
           className="w-full h-full object-cover"
           referrerPolicy="no-referrer"
         />
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-6">Our Mission</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                To deliver exceptional timepieces that inspire confidence and elevate everyday style. We are dedicated to uncompromising quality, continuously pushing the boundaries of accessible luxury.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-6">Our Vision</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                To become a globally recognized watch brand known strictly for quality, relentless innovation, and supreme customer satisfaction. We aim to craft pieces that are passed down through generations.
              </p>
            </div>
         </div>
      </div>

      {/* Core Values */}
      <div className="bg-stone-100 py-24 px-4 sm:px-6 lg:px-8 mb-24">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Core Values</h2>
              <div className="w-16 h-[1px] bg-stone-900 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { icon: Target, title: "Quality", desc: "Every single watch undergoes rigorous quality testing before it leaves our facility." },
                 { icon: TrendingUp, title: "Innovation", desc: "Masterfully combining traditional craftsmanship with modern technological engineering." },
                 { icon: Heart, title: "Customer First", desc: "Providing outstanding, personalized customer support and unparalleled service." },
                 { icon: Leaf, title: "Sustainability", desc: "Committed to using responsible sourcing practices and materials whenever possible." }
               ].map((value, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-6 shadow-sm">
                       <value.icon className="w-6 h-6 text-stone-900 stroke-[1.5]" />
                    </div>
                    <h3 className="uppercase tracking-widest text-sm font-medium mb-4 text-stone-900">{value.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{value.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Milestones */}
      <div className="max-w-4xl mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Milestones</h2>
            <div className="w-16 h-[1px] bg-stone-900 mx-auto"></div>
         </div>
         <div className="space-y-12 pl-4 md:pl-0">
            {[
              { year: "2018", event: "EliteWatches Founded" },
              { year: "2020", event: "Expanded International Shipping" },
              { year: "2022", event: "Launched Luxury Collection" },
              { year: "2024", event: "Served Over 50,000 Customers Worldwide" }
            ].map((milestone, idx) => (
               <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative">
                  <div className="hidden md:block w-32 text-right font-display text-2xl text-stone-400">
                    {milestone.year}
                  </div>
                  <div className="absolute left-[13px] md:static md:w-auto h-full md:h-auto border-l md:border-none border-stone-300 pt-8 md:pt-0">
                     <div className="w-3 h-3 bg-stone-900 rounded-full md:-ml-1.5 absolute -left-[7px] top-[9px] md:relative md:top-0 md:left-0 z-10 border-4 border-stone-50 ring-1 ring-stone-900" />
                  </div>
                  <div className="pl-8 md:pl-0">
                    <span className="md:hidden block font-display text-xl text-stone-400 mb-1">{milestone.year}</span>
                    <h3 className="text-lg md:text-xl text-stone-900 font-medium">{milestone.event}</h3>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
