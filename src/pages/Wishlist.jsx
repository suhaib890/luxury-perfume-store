import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen px-12 md:px-24 mb-32"
    >
      <header className="mb-16 border-b border-zinc-100 pb-12 w-full max-w-[1440px] mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl mb-4 text-zinc-900">Your Wishlist</h1>
        <p className="font-body text-zinc-500 max-w-2xl text-sm leading-relaxed tracking-wide uppercase">
          Curated olfactory masterpieces saved for later.
        </p>
      </header>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
           <p className="font-headline italic text-3xl text-zinc-400 mb-8">Your wishlist is empty.</p>
           <Link to="/collection" className="bg-zinc-900 border border-zinc-900 text-white px-10 py-4 text-[10px] font-body uppercase tracking-[0.2em] hover:bg-transparent hover:text-zinc-900 transition-colors duration-500">
             Explore Collection
           </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 w-full max-w-[1440px] mx-auto">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      )}
    </motion.div>
  );
};

export default Wishlist;
