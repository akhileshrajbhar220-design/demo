import { ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import imgClassicSilver from '../assets/images/classic_silver_1781845016495.jpg';
import imgSportPro from '../assets/images/sport_pro_1781845131342.jpg';
import imgLuxuryGold from '../assets/images/luxury_gold_1781845150073.jpg';
import imgMidnightBlack from '../assets/images/midnight_black_1781845031097.jpg';
import imgHeritageAuto from '../assets/images/heritage_automatic_1781845047655.jpg';

const products = [
  {
    id: 1,
    name: "Elite Classic Silver",
    price: 199,
    description: "A timeless stainless-steel watch with a minimalist dial design.",
    features: ["Stainless Steel Case", "Water Resistant 50M", "Quartz Movement", "Sapphire Crystal Glass"],
    image: imgClassicSilver
  },
  {
    id: 2,
    name: "Elite Sport Pro",
    price: 299,
    description: "Built for active lifestyles with superior durability.",
    features: ["Chronograph Function", "Silicone Strap", "Water Resistant 100M", "Shock Resistant"],
    image: imgSportPro
  },
  {
    id: 3,
    name: "Elite Luxury Gold",
    price: 499,
    description: "Premium luxury watch crafted with refined detailing.",
    features: ["Gold-Plated Stainless Steel", "Automatic Movement", "Sapphire Crystal", "Water Resistant 50M"],
    image: imgLuxuryGold
  },
  {
    id: 4,
    name: "Elite Midnight Black",
    price: 349,
    description: "Bold and sophisticated design for modern professionals.",
    features: ["Black Stainless Steel", "Luminous Hands", "Date Display", "Water Resistant 100M"],
    image: imgMidnightBlack
  },
  {
    id: 5,
    name: "Elite Heritage Automatic",
    price: 599,
    description: "Classic craftsmanship combined with modern engineering.",
    features: ["Automatic Movement", "Genuine Leather Strap", "Exhibition Case Back", "Sapphire Crystal"],
    image: imgHeritageAuto
  }
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">Our Collection</h1>
        <div className="w-16 h-[1px] bg-stone-900 mx-auto mb-8"></div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Explore our range of meticulously crafted timepieces, designed to suit every lifestyle and occasion.
        </p>
      </div>

      {/* Filter / Sort Bar (Visual Only) */}
      <div className="flex justify-between items-center mb-12 border-b border-stone-200 pb-4">
         <span className="text-sm text-stone-500 uppercase tracking-wider">{products.length} Products</span>
         <button className="flex items-center text-sm font-medium uppercase tracking-wider text-stone-900 gap-2 hover:text-stone-600">
            Sort By <ChevronDown className="w-4 h-4" />
         </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                 <button 
                   onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}
                   className="w-full bg-stone-900 text-stone-50 py-3 uppercase text-xs tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
                 >
                   <ShoppingBag className="w-4 h-4" /> Add To Cart
                 </button>
              </div>
            </div>
            
            <div className="flex flex-col flex-grow">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-lg font-medium text-stone-900">{product.name}</h3>
                 <span className="text-lg text-stone-900 font-display">${product.price}</span>
               </div>
               <p className="text-stone-500 text-sm mb-4 leading-relaxed line-clamp-2">
                 {product.description}
               </p>
               <div className="mt-auto pt-4 border-t border-stone-100">
                 <ul className="text-xs text-stone-400 space-y-1.5 uppercase tracking-wide">
                   {product.features.map((feature, idx) => (
                     <li key={idx}>• {feature}</li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
