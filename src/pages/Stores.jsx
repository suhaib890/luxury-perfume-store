import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye, Play } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Stores = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Curated lists from existing data
  const exclusivePicks = products.slice(0, 3);
  const bestSellers = products.slice(3, 7);
  const luxuryCollection = products.filter(p => p.price > 8000).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen"
    >
      {/* 1. Store Story Hero */}
      <section className="relative pt-40 pb-32 px-6 md:px-12 lg:px-24 border-b border-zinc-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-8"
          >
            <span className="font-serif italic text-white text-2xl">S</span>
          </motion.div>
          <span className="label-text mb-6 inline-block tracking-[0.3em] text-zinc-400">The Gallery Experience</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl mb-8 text-zinc-900 mx-auto max-w-4xl leading-tight">
            Welcome to <span className="newsreader-italic">Suhaib Fragrance Gallery</span>
          </h1>
          <p className="font-body text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Where luxury meets identity. An immersive curation of the world's most evocative olfactory artistry.
          </p>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-zinc-50/50 blur-3xl -z-10 mix-blend-multiply pointer-events-none" />
      </section>

      {/* 2. Exclusive Store Picks (Interactive Feature) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-zinc-900">Exclusive Store Picks</h2>
          <span className="hidden md:block label-text text-zinc-400 border-b border-zinc-900 pb-1">Curated Daily</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exclusivePicks.map((product) => (
            <div 
              key={product.id}
              className="relative aspect-[3/4] group overflow-hidden bg-zinc-50 rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105 group-hover:brightness-75"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="label-text text-white/70 mb-2">{product.category}</p>
                <h3 className="font-headline text-2xl text-white mb-4">{product.name}</h3>
                
                <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex items-center gap-2 text-[10px] font-body uppercase tracking-widest text-white hover:text-zinc-300"
                  >
                    <Eye size={14} /> Quick View
                  </Link>
                  <span className="text-white/30">|</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="text-[10px] font-body uppercase tracking-widest text-white hover:text-zinc-300"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Try Before You Buy Experience */}
      <section className="py-24 bg-zinc-900 text-white my-16 max-w-[1440px] mx-auto rounded-3xl overflow-hidden mx-6 md:mx-12 lg:mx-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43QDNYgKhvQQe8j36TMqTgzVtRWftyFLGWkqSrE-YtRUQI0IkTbAnNfyOJLOxXmheRGTpRMrWQWgIuWdq2rToOEtketuSOSfuh7iSQ6Bbluqxp_GbiIO1hhX_NI0EMB4Q-OsGZzKUzW2HEwiqpKq2qxHA_sVLxRAuxq2QFYpzfMKlWsJUL5Rb9XG9iQuy9YkHlwof5-Gpga1PC2PBrCss1HVzAmwQiY6QBEDxs5pGeAlvGVaON0I6NuY3VZxA1kehwkJlLdwop9w" className="w-full h-full object-cover grayscale mix-blend-overlay" alt="texture" />
        </div>
        <div className="relative z-10 px-12 md:px-24 flex flex-col items-center text-center max-w-3xl mx-auto">
          <Sparkles className="mb-8 opacity-50" size={32} />
          <h2 className="font-headline text-4xl md:text-5xl italic mb-6">"Try Before You Buy"</h2>
          <p className="font-body text-zinc-400 mb-12 text-lg leading-relaxed font-light">
            Discover your signature scent without the commitment. Order our exclusive Discovery Set to experience authentic gallery samples from the comfort of your home.
          </p>
          <button className="bg-white text-zinc-900 px-8 py-4 font-body text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center gap-4 group rounded-sm">
            Explore Discovery Sets
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 4. Store Categories: Best Sellers & Luxury */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="mb-24">
          <h2 className="font-headline text-4xl mb-12 text-zinc-900 border-b border-zinc-100 pb-6 flex justify-between items-end">
            Best Sellers <Link to="/collection" className="label-text text-zinc-400 hover:text-zinc-900">View All</Link>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="group text-center">
                <div className="aspect-square bg-zinc-50 rounded-full overflow-hidden mb-6 p-4">
                   <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-headline text-lg mb-1">{product.name}</h4>
                <p className="label-text text-zinc-500 font-semibold">₹{product.price}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-4xl mb-12 text-zinc-900 border-b border-zinc-100 pb-6 flex justify-between items-end">
            The Luxury Collection <Link to="/collection" className="label-text text-zinc-400 hover:text-zinc-900">View All</Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {luxuryCollection.slice(0,2).map(product => (
               <Link to={`/product/${product.id}`} key={product.id} className="group relative aspect-[16/9] bg-zinc-50 rounded-lg overflow-hidden flex items-center p-8">
                 <div className="z-10 w-1/2">
                   <span className="label-text text-zinc-500 mb-4 inline-block">{product.category}</span>
                   <h3 className="font-headline text-3xl mb-4 group-hover:text-zinc-600 transition-colors">{product.name}</h3>
                   <span className="font-body text-xs text-zinc-900 tracking-widest border border-zinc-200 px-4 py-2 rounded-full hidden sm:inline-block">Discover</span>
                 </div>
                 <div className="absolute right-0 top-0 w-2/3 h-full mix-blend-multiply origin-right group-hover:scale-105 transition-transform duration-700">
                    <img src={product.image} className="w-full h-full object-cover object-left" alt={product.name} />
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Stores;
