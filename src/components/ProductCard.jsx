import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product, addToCart }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-zinc-50 mb-6 rounded-lg">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={product.image} 
        />
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <Heart size={14} className={inWishlist ? "text-red-500" : "text-zinc-600"} fill={inWishlist ? "currentColor" : "none"} />
        </button>
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
          <button 
            onClick={() => addToCart(product)}
            className="bg-white text-zinc-900 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] shadow-lg hover:bg-zinc-900 hover:text-white transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <span className="scent-chip mb-3 inline-block">{product.category}</span>
          <h3 className="font-headline text-xl mb-1">{product.name}</h3>
          <p className="font-body text-[11px] text-zinc-400 italic mb-2 tracking-wide truncate px-4">
            {product.description}
          </p>
          <p className="font-body text-sm text-zinc-900 tracking-widest font-semibold">₹{product.price}</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
