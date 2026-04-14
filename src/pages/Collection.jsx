import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const Collection = () => {
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Woody', 'Floral', 'Citrus', 'Oriental', 'Fresh'];
  
  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen"
    >
      <header className="px-12 md:px-24 mb-16">
        <h1 className="font-headline text-6xl md:text-8xl mb-8 text-zinc-900">Collections</h1>
        <p className="font-body text-zinc-500 max-w-2xl text-lg leading-relaxed">
          Explore our curated selection of olfactory masterpieces, organized by their primary scent families. Each creation is a journey of its own.
        </p>
      </header>

      {/* Filter Bar */}
      <section className="px-12 md:px-24 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-100 pb-12 overflow-x-auto">
        <div className="flex gap-8 font-body text-[10px] uppercase tracking-[0.15em] text-zinc-400 whitespace-nowrap">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${filter === cat ? 'text-zinc-900 border-b border-zinc-900 font-semibold' : 'hover:text-zinc-600'} transition-all pb-1`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.15em] text-zinc-400">
          <span>{filteredProducts.length} Items</span>
        </div>
      </section>

      {/* Grid */}
      <section className="px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 mb-32">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-32">
          <p className="font-headline italic text-2xl text-zinc-400">No fragrances found in this category.</p>
        </div>
      )}
    </motion.div>
  );
};

export default Collection;
