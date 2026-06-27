import imgChoosingWatch from '../assets/images/choosing_watch_1781845070170.jpg';
import imgAutoVsQuartz from '../assets/images/automatic_vs_quartz_1781845086457.jpg';
import imgWatchCare from '../assets/images/watch_care_1781844992396.jpg';
import imgWatchTrends from '../assets/images/watch_trends_1781845100405.jpg';
import imgWatchInvestment from '../assets/images/watch_investment_1781845244832.jpg';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "How to Choose the Perfect Watch",
      date: "March 10, 2025",
      excerpt: "Selecting the right watch depends on your lifestyle, preferences, and budget. Whether you're looking for a dress watch, sports watch, or luxury timepiece, understanding movement types and materials is essential.",
      category: "Guides",
      image: imgChoosingWatch
    },
    {
      id: 2,
      title: "Automatic vs Quartz Watches",
      date: "April 5, 2025",
      excerpt: "Automatic watches use mechanical movements powered by motion, while quartz watches rely on battery-powered precision. Each has unique advantages depending on your needs.",
      category: "Education",
      image: imgAutoVsQuartz
    },
    {
      id: 3,
      title: "Watch Care Tips for Long-Lasting Performance",
      date: "May 12, 2025",
      excerpt: "Regular cleaning, proper storage, and scheduled maintenance can significantly extend the life of your watch.",
      category: "Maintenance",
      image: imgWatchCare
    },
    {
      id: 4,
      title: "Top Watch Trends in 2025",
      date: "June 1, 2025",
      excerpt: "This year, minimalist dials, sustainable materials, and vintage-inspired designs are dominating the watch industry.",
      category: "Trends",
      image: imgWatchTrends
    },
    {
      id: 5,
      title: "Why Luxury Watches Are a Smart Investment",
      date: "June 20, 2025",
      excerpt: "Many luxury watches retain value over time and can even appreciate, making them both stylish accessories and investment pieces.",
      category: "Investment",
      image: imgWatchInvestment
    }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="font-display text-4xl md:text-6xl text-stone-900 mb-6">The Journal</h1>
        <div className="w-16 h-[1px] bg-stone-900 mx-auto mb-8"></div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Insights, guides, and stories from the world of horology and EliteWatches.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-24">
         <div className="group block relative h-[60vh] min-h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-stone-900">
               <img src={articles[0].image} alt="Featured" className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent flex flex-col justify-end p-8 md:p-16">
               <span className="uppercase text-xs tracking-widest text-stone-300 mb-4">{articles[0].category} • {articles[0].date}</span>
               <h2 className="font-display text-3xl md:text-5xl text-stone-50 mb-6 max-w-3xl">{articles[0].title}</h2>
               <p className="text-stone-300 text-lg mb-8 max-w-2xl hidden md:block">{articles[0].excerpt}</p>
               <button className="uppercase text-sm tracking-widest font-medium text-stone-50 inline-flex items-center hover:text-stone-300 self-start border-b border-stone-50 pb-1">
                 Read Article
               </button>
            </div>
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
        {articles.slice(1).map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-stone-100">
               <img 
                 src={article.image} 
                 alt={article.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 uppercase text-[10px] uppercase tracking-widest font-medium">
                  {article.category}
               </div>
            </div>
            
            <div>
               <span className="text-xs text-stone-500 uppercase tracking-widest mb-3 block">{article.date}</span>
               <h3 className="font-display text-2xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">
                 {article.title}
               </h3>
               <p className="text-stone-600 leading-relaxed mb-6 line-clamp-3">
                 {article.excerpt}
               </p>
               <span className="uppercase text-xs tracking-widest font-medium text-stone-900 inline-flex items-center border-b border-stone-900 pb-1 group-hover:text-stone-600 group-hover:border-stone-600 transition-colors">
                 Continue Reading
               </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
