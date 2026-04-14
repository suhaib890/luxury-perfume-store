import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Truck, Lightbulb, Activity, Moon } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 bg-background min-h-screen"
    >
      {/* Product Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        {/* Left: Imagery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] bg-zinc-50 overflow-hidden rounded-lg">
            <img 
              className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.2,0,0,1)]" 
              src={product.image} 
              alt={product.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square bg-zinc-50 overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pi4zHuFz2tVmcukuHofsfSdtQj-XGMcHiCQORxQQ43oRgWepbSuDEMC_L7ZBMhOW4HzEdopqJI0bivcXEzc0Om7lrDWHRxIwLisKv0yGA24seqYjMAqrVcVEujf3r4iWm3jdQh0gKj4Et9FqYSsr_Xuz9Csdg367Zb2Vq6m1dNuydFaMdrEFNrZD3UCjo1NdfMynRNBVqz632yYRIip-x-oQyAOfxB3HcjyFn_DJez7IIFfEJHPgwCIZpuztq67chEIhsNlwDyU" 
                alt="Detail 1"
              />
            </div>
            <div className="aspect-square bg-zinc-50 overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43QDNYgKhvQQe8j36TMqTgzVtRWftyFLGWkqSrE-YtRUQI0IkTbAnNfyOJLOxXmheRGTpRMrWQWgIuWdq2rToOEtketuSOSfuh7iSQ6Bbluqxp_GbiIO1hhX_NI0EMB4Q-OsGZzKUzW2HEwiqpKq2qxHA_sVLxRAuxq2QFYpzfMKlWsJUL5Rb9XG9iQuy9YkHlwof5-Gpga1PC2PBrCss1HVzAmwQiY6QBEDxs5pGeAlvGVaON0I6NuY3VZxA1kehwkJlLdwop9w" 
                alt="Detail 2"
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 flex flex-col justify-start pt-4 lg:pt-12">
          <nav className="label-text mb-8 text-zinc-400 flex gap-2">
            <span>Fragrance</span>
            <span>/</span>
            <span>{product.category} Series</span>
          </nav>
          <h1 className="serif-display text-5xl md:text-7xl font-light mb-4 text-zinc-900">{product.name}</h1>
          <p className="text-xl serif-display italic text-secondary mb-8">{product.type} — {product.size}</p>
          <p className="text-2xl font-light mb-10 text-zinc-900">₹{product.price}</p>
          
          <div className="mb-12">
            <p className="text-zinc-500 leading-relaxed font-light mb-8 max-w-md">
              {product.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-zinc-900 text-white py-5 label-text text-sm hover:bg-zinc-800 transition-all duration-500"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`w-16 h-16 flex items-center justify-center border border-zinc-200 transition-colors duration-500 ${inWishlist ? 'bg-zinc-50 text-red-500 hover:text-red-600' : 'hover:bg-zinc-50 text-zinc-900'}`}
              >
                <Heart size={20} strokeWidth={1} fill={inWishlist ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2 text-zinc-400 label-text text-[9px]">
              <Truck size={14} />
              <span>Complimentary delivery on all orders over ₹5000</span>
            </div>
          </div>

          {/* Notes Peek */}
          <div className="mt-20 border-t border-zinc-100 pt-12">
            <h3 className="label-text mb-6">Signature Accords</h3>
            <div className="flex flex-wrap gap-3">
              {product.accords?.map((accord, i) => (
                <span key={i} className="bg-zinc-100 text-zinc-600 px-4 py-2 text-[10px] uppercase tracking-widest rounded-full">
                  {accord}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-zinc-50 py-32 mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGOGtc1IMqS7IKTJUttnbYd_yM423YDDOvZILyYboNbwPB27F8yje-OTwLlwiC4sb5zdUfHHmodjMgIFN3mNp4ptPUsc9nuIJjylzITpPJlSNzBonWyod0BGxxV6E5Q4rKK2dCRmLGoYwjgeKr2-3uuJAZPCH89xTpfmeV-MYz8k3s307eySrg2o87-pUbLrGFksJ0ULiSiMDI9Mq8Z_8bEmr6H6jFulsmYv3o3btdo2eN1rIqezfxy1O7q6l7xxcbm6tsdCihKYM" 
                alt="Atmosphere"
              />
            </div>
            <div className="absolute -bottom-12 -right-6 lg:-right-12 bg-white p-10 max-w-xs hidden md:block shadow-xl border border-zinc-100">
              <p className="serif-display italic text-lg leading-relaxed text-zinc-800">
                "The evolution of this scent on the skin is like watching a story unfold in the moonlight."
              </p>
            </div>
          </div>
          <div>
            <h2 className="serif-display text-4xl mb-8 text-zinc-900">The Experience</h2>
            <div className="space-y-6 text-zinc-500 font-light leading-relaxed max-w-lg">
              <p>
                {product.name} is not merely a fragrance; it is an olfactory ritual. It begins with the clarity of {product.notes?.top[0]}, quickly softened by the warmth of {product.notes?.top[1]}.
              </p>
              <p>
                As the heart reveals itself, the romanticism of {product.notes?.heart[0]} intertwines with the primal depth of {product.notes?.heart[1]}. It is a complex dialogue that lingers on the skin.
              </p>
              <p>
                The dry-down is where the mystery solidifies. {product.notes?.base[0]} and {product.notes?.base[1]} create a balsamic finish that anchors the scent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scent Pyramid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-48">
        <div className="text-center mb-24">
          <span className="label-text">The Olfactory Pyramid</span>
          <h2 className="serif-display text-5xl mt-4 text-zinc-900">Scent Composition</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-0">
          <div className="flex flex-col items-center text-center px-12 md:border-r border-zinc-100">
            <Lightbulb className="text-zinc-400 mb-6" size={32} strokeWidth={1} />
            <h4 className="label-text mb-4 text-secondary">Top Notes</h4>
            {product.notes?.top.map((n, i) => <p key={i} className="serif-display text-2xl mb-1 text-zinc-800">{n}</p>)}
            <p className="text-[9px] uppercase tracking-widest text-zinc-400 mt-6 max-w-[180px]">The initial impression, radiant and fleeting.</p>
          </div>
          <div className="flex flex-col items-center text-center px-12 md:border-r border-zinc-100">
            <Activity className="text-zinc-400 mb-6" size={32} strokeWidth={1} />
            <h4 className="label-text mb-4 text-secondary">Heart Notes</h4>
            {product.notes?.heart.map((n, i) => <p key={i} className="serif-display text-2xl mb-1 text-zinc-800">{n}</p>)}
            <p className="text-[9px] uppercase tracking-widest text-zinc-400 mt-6 max-w-[180px]">The core identity, emotive and deep.</p>
          </div>
          <div className="flex flex-col items-center text-center px-12">
            <Moon className="text-zinc-400 mb-6" size={32} strokeWidth={1} />
            <h4 className="label-text mb-4 text-secondary">Base Notes</h4>
            {product.notes?.base.map((n, i) => <p key={i} className="serif-display text-2xl mb-1 text-zinc-800">{n}</p>)}
            <p className="text-[9px] uppercase tracking-widest text-zinc-400 mt-6 max-w-[180px]">The lasting memory, rich and grounded.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;
