import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, Tag } from 'lucide-react';

const AddFragrance = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 min-h-screen bg-zinc-50"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-headline italic mb-4">Add to Collection</h1>
          <p className="text-zinc-500 font-body text-sm tracking-widest uppercase">Olfactory Archive Entry No. 124</p>
        </header>

        <form className="bg-white p-12 shadow-sm border border-zinc-100 rounded-lg space-y-12">
          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-100 py-16 px-8 rounded-lg hover:border-zinc-300 transition-colors cursor-pointer group">
            <Upload size={32} className="text-zinc-300 group-hover:text-zinc-900 transition-colors mb-4" />
            <p className="text-zinc-400 font-body text-[10px] tracking-widest uppercase">Upload Fragrance Portrait</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Fragrance Name</label>
              <input type="text" className="border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none transition-colors" placeholder="e.g. Midnight Oud" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Brand / House</label>
              <input type="text" className="border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none transition-colors" placeholder="e.g. Essence d'Art" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Olfactory Journal Entry</label>
            <textarea className="border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none transition-colors min-h-[100px]" placeholder="Describe your memories and impressions of this scent..."></textarea>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Scent Profiles</label>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="px-4 py-2 border border-zinc-100 text-zinc-400 text-[10px] font-body tracking-widest uppercase hover:border-zinc-900 hover:text-zinc-900 transition-all rounded-full">
                Woody
              </button>
              <button type="button" className="px-4 py-2 border border-zinc-100 text-zinc-400 text-[10px] font-body tracking-widest uppercase hover:border-zinc-900 hover:text-zinc-900 transition-all rounded-full">
                Floral
              </button>
              <button type="button" className="px-4 py-2 border border-zinc-100 text-zinc-400 text-[10px] font-body tracking-widest uppercase hover:border-zinc-900 hover:text-zinc-900 transition-all rounded-full">
                Ambery
              </button>
              <button type="button" className="flex items-center gap-2 px-4 py-2 bg-zinc-50 text-zinc-400 text-[10px] font-body tracking-widest uppercase rounded-full border border-transparent">
                <Plus size={12} /> Add Tag
              </button>
            </div>
          </div>

          <button className="w-full bg-zinc-900 text-white py-5 font-body text-[11px] tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors">
            Preserve in Archive
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddFragrance;
