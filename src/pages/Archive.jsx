import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';

const Archive = () => {
  const archiveItems = [
    {
      brand: "Le Labo",
      name: "Santal 33",
      notes: ["Sandalwood", "Papyrus"],
      date: "OCT 2023",
      journal: "Reminds me of rainy mornings in Soho; sophisticated yet raw.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAetkb5SKIoX2YvoRKZGljdviYMaPsGlE8qP5JNL2978aVfVOadmVPNsEUP-wONSzBD_lDd8VGb0qmOL0tJkm_GWSXrf9xQQcegkBCtFVFCa-jlDFqei96WGRMy_EW34q1I8-FL2Sy-JDw4Qhw5LUIdszFcbELhyn56nmloWBsmmObFfVuEkFhdq3VzBdUfsVp69yrwEH2lqlD2vJMlK-kC_4CxOBZZVHEFqdXY8PRHNtE-_U5qwO3jkjDc4dTniAeMBkXNCe9Os9g"
    },
    {
      brand: "Byredo",
      name: "Gypsy Water",
      notes: ["Bergamot", "Pine"],
      date: "JUNE 2023",
      journal: "The scent of a nomadic soul. Worn during the summer in Provence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgKrqEMOnCQ1jebdlQerd4mxyh6vvTwUMU6sFC0pYjfu4fQRBgKJa-ZcgRRcL9CChBN6waJlh2_V0nt9yHHdz_T5EJV95vG4VlqfABY_je_RgJUlDtBik3lvrHinWjgb4p43i6UOnfuidGX5QFrWfJuVrhlNOZdbkN-gqdOjDa3BljwnDZA5zu2Y3KrTG3IPMTM8QAjZeLJGe_TXnHkpsbtOaRDiN9mKIVIhxEd-HXe4bxsmuqG-UxEWPT_M4VEchDEAb7AYoFIcc"
    },
    {
      brand: "Diptyque",
      name: "Philosykos",
      notes: ["Fig Leaf", "Cedar"],
      date: "MARCH 2024",
      journal: "A sudden burst of green. My favorite companion for early spring.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNZppbOY6ut5mheo0D5EziAaaBLvxEs0r-DyqDUtsjK0sd7nVH5u4s9RPvNuNCRrKqujeFIek2nPySdpAbAmYNmhOden4KTBKwPUS5jWb1koN6dT5hbd9g0J2lxoxry531uDwnoj4rscvkg7TCsghvkMdbEMwxWQ5RJ7Fp9bXR87lsk77jKvhWQoAj-Fp9LBvWU20aCuQa0XWLZkkCf8H1Repntk5HZWLUMpVdSPcOu93kd_-QyypYiaabVFkUe2dz6b0gKHxSxz0"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 min-h-screen bg-surface"
    >
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-headline italic tracking-tighter leading-tight mb-6 text-zinc-900">The Private Archive</h1>
          <p className="text-zinc-500 font-headline text-xl italic tracking-wide">A curated journey of olfactory memories.</p>
        </div>
      </header>

      {/* Actions Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-zinc-100">
          <div className="flex items-center gap-12">
            <button className="group flex items-center gap-3 transition-all duration-500 ease-in-out">
              <span className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                <Plus size={20} />
              </span>
              <span className="text-[11px] tracking-[0.2em] font-body font-bold uppercase text-zinc-900">Add New Fragrance</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] tracking-[0.15em] text-zinc-400 uppercase font-bold">Sort</span>
              <div className="flex gap-6">
                <button className="text-xs font-body tracking-wide border-b border-zinc-900 font-bold text-zinc-900">Recent</button>
                <button className="text-xs font-body tracking-wide border-b border-transparent hover:border-zinc-900 transition-all text-zinc-400">A-Z</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {archiveItems.map((item, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${index === 1 ? 'lg:mt-12' : ''}`}
            >
              <div className="aspect-[3/4] bg-zinc-50 mb-8 overflow-hidden relative rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={item.image} alt={item.name} />
                <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-headline italic text-zinc-900 border-b border-zinc-900/40">View Journal</span>
                </div>
              </div>
              <div className="space-y-4 text-center px-4">
                <div className="space-y-1">
                  <p className="text-[10px] tracking-[0.2em] text-zinc-400 font-body uppercase">{item.brand}</p>
                  <h3 className="text-2xl font-headline italic tracking-tight text-zinc-800">{item.name}</h3>
                </div>
                <div className="flex justify-center gap-2">
                  {item.notes.map((note, nIndex) => (
                    <span key={nIndex} className="px-3 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-body tracking-wider uppercase rounded-full">
                      {note}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <p className="text-[9px] tracking-[0.1em] text-zinc-400 font-body uppercase">ACQUIRED: {item.date}</p>
                  <p className="text-sm font-headline italic text-zinc-600 leading-relaxed">"{item.journal}"</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Signature Editorial Quote */}
      <section className="mt-48 mb-24 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-headline italic text-zinc-300 leading-relaxed font-light">
          "Fragrance is the most intense form of memory. In each bottle, a fragment of time is preserved, waiting to be exhaled."
        </h2>
      </section>
    </motion.div>
  );
};

export default Archive;
