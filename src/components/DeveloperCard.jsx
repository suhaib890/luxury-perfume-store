import React from 'react';
import { motion } from 'framer-motion';

const DeveloperCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-screen-2xl mx-auto"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-sm border border-zinc-300 dark:border-zinc-700 font-serif flex items-center justify-center text-zinc-500 italic text-xs">
          S&A
        </div>
        <div>
          <p className="font-serif text-sm text-zinc-900 dark:text-zinc-100 italic tracking-wide">Developed by Suhaib and Auj</p>
          <p className="font-body text-[10px] uppercase tracking-widest text-zinc-900 dark:text-zinc-100 font-semibold mt-1">Suhaib Fragrance Gallery</p>
          <p className="font-body text-[9px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">Crafted with passion for luxury fragrances</p>
        </div>
      </div>
      
      <div className="flex gap-6 font-body text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        <a href="mailto:suhaib@email.com" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:scale-105 transition-all duration-300">
          Email
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:scale-105 transition-all duration-300">
          WhatsApp
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:scale-105 transition-all duration-300">
          Instagram
        </a>
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
