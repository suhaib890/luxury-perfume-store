import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Radio, Leaf } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-12 md:px-24 mb-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
          <div className="md:col-span-7 z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-sm tracking-widest text-zinc-500 mb-6 max-w-xs leading-relaxed"
            >
              Buy Popular Colognes on Sale at a Discount
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-[10vw] md:text-[8rem] leading-[0.85] tracking-tighter text-zinc-900 mb-12"
            >
              World <br /> <span className="newsreader-italic ml-[10%]">Class</span> <br /> Fragrance
            </motion.h1>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-center group cursor-pointer"
            >
              <Link to="/collection" className="bg-zinc-900 text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-transform duration-500 hover:scale-105">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Shop Collection</span>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    alt="preview" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-JbvlriowEI3bv6JXPeoe30rliD09J4b5sXIBh3FvHH-91LhSm38BIhaIR9HSaec0HLCJEU6dxWEVe5JjLGZjoBHqWJZJr0qkA0JN1q2hIcp1wNrDDeUZxIhgmZlmMw8ipuiQ83SO2xL4F3xYS29obhV6L1JGlsy9Q8u36gSpsPSV_-ghU99oXH4Cx1D4Mm_v-R53u_3DgZT97K1IbW-z8CmJwiYZsBHd4l_ZxNedDnpEDcSxUvlcT-6kHKEoUqPxmFmmrngrhw" 
                  />
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="md:col-span-5 relative flex justify-center md:justify-end items-center"
          >
            <div className="relative w-[300px] md:w-[450px] aspect-[3/4] oval-mask overflow-hidden shadow-2xl">
              <img 
                alt="Featured Fragrance" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-JbvlriowEI3bv6JXPeoe30rliD09J4b5sXIBh3FvHH-91LhSm38BIhaIR9HSaec0HLCJEU6dxWEVe5JjLGZjoBHqWJZJr0qkA0JN1q2hIcp1wNrDDeUZxIhgmZlmMw8ipuiQ83SO2xL4F3xYS29obhV6L1JGlsy9Q8u36gSpsPSV_-ghU99oXH4Cx1D4Mm_v-R53u_3DgZT97K1IbW-z8CmJwiYZsBHd4l_ZxNedDnpEDcSxUvlcT-6kHKEoUqPxmFmmrngrhw" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="px-12 md:px-24 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-zinc-100 pt-20">
          <div className="md:w-1/2">
            <h2 className="font-headline text-5xl md:text-6xl leading-tight mb-8 text-zinc-900">
                A Fragrance Is A Smell, <br /> Usually A Pleasant Or <br />
                <span className="inline-flex items-center gap-4">
                  <span className="w-12 h-6 rounded-full bg-zinc-900"></span>
                  <span className="newsreader-italic">Sweet Smell.</span>
                </span>
            </h2>
            <div className="grid grid-cols-2 gap-12 mt-16">
              <div className="flex flex-col gap-4">
                <Radio className="text-zinc-900" size={32} />
                <p className="font-body text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">
                    A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances. If you like the fragrance.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Leaf className="text-zinc-900" size={32} />
                <p className="font-body text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">
                    The Fragrance is a pleasant-smelling liquid which people put on their bodies to make themselves smell nice.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-12">
            <div className="relative overflow-hidden aspect-square rounded-2xl bg-zinc-50 p-8 flex items-center justify-center">
              <img 
                alt="product spotlight" 
                className="w-2/3 object-contain hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo3AEdXaCM3LBBAdjHUptl5FEhUZPmD8_XQVdGiJrivUrMK9qzEKIhbtIu2CHUWp7KjqVi8TF8u6Lp7-wrPEGF4sybUQAO0IsxwywNm9ASvCNlg1c2oLnNTJTmYrDZghAkxsS8kkyX_-_dRiLRJhB9j7fSN5Zgy21l39maloIYk29nzoRGJOckAYgOgIdjne3M5jft6XkMUng144Q-WtnWdBn0B0Zup3tuHfRxBeYbk5sf6ARQoymeqbEKODQXHIycMGDdw5xASz8" 
              />
            </div>
            <div className="text-center">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">Signature Series</p>
              <p className="font-headline text-xl italic text-zinc-700 font-light">"A fragrance is a smell, usually a pleasant or sweet smell."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Header */}
      <section className="px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-100 pb-12">
        <div>
          <h2 className="font-headline text-4xl mb-4 text-zinc-900">The Collection</h2>
          <div className="flex flex-wrap gap-8 font-body text-[10px] uppercase tracking-[0.15em] text-zinc-500">
            <button className="text-zinc-900 border-b border-zinc-900 pb-1 font-semibold">All Scents</button>
            <button className="hover:text-zinc-900 transition-colors">Woody</button>
            <button className="hover:text-zinc-900 transition-colors">Floral</button>
            <button className="hover:text-zinc-900 transition-colors">Citrus</button>
            <button className="hover:text-zinc-900 transition-colors">Fresh</button>
            <button className="hover:text-zinc-900 transition-colors">Oriental</button>
          </div>
        </div>
        <div className="flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.15em] text-zinc-500">
          <span>Sort by:</span>
          <select className="bg-transparent border-none focus:ring-0 p-0 text-[10px] uppercase tracking-[0.15em] cursor-pointer text-zinc-900 font-semibold">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 mb-32">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>

      {/* Editorial Moment */}
      <section className="mt-32 py-32 bg-zinc-50 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="mx-auto text-zinc-900 mb-8" size={40} strokeWidth={1} />
          <h2 className="font-headline text-5xl mb-8 leading-tight italic text-zinc-900">
            "Perfume is the most intense form of memory."
          </h2>
          <p className="font-body text-zinc-500 text-lg mb-12 max-w-xl mx-auto">
            Join our inner circle for early access to limited edition olfactory compositions and gallery exhibitions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              className="bg-transparent border-b border-zinc-300 focus:border-zinc-900 focus:ring-0 w-full md:w-80 font-body text-[10px] tracking-widest py-3" 
              placeholder="YOUR EMAIL ADDRESS" 
              type="email" 
            />
            <button className="bg-zinc-900 text-white px-10 py-3 text-[10px] font-body uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
