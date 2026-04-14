import React from 'react';
import { motion } from 'framer-motion';

const Developers = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center"
    >
      <h1 className="font-headline text-5xl md:text-6xl mb-12 text-zinc-900 border-b border-zinc-200 pb-8 tracking-wide">
        Developers
      </h1>
      <div className="flex flex-col gap-6">
        <p className="font-serif italic text-2xl md:text-3xl text-zinc-700">
          Suhaib Ashraf
        </p>
        <p className="font-serif italic text-2xl md:text-3xl text-zinc-700">
          Auj Khan
        </p>
      </div>
    </motion.div>
  );
};

export default Developers;
