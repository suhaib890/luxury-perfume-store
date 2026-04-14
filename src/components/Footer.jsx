import React from 'react';
import { Link } from 'react-router-dom';
import DeveloperCard from './DeveloperCard';

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="flex flex-col px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="text-xl font-black text-zinc-900 dark:text-zinc-50 mb-4 block">luxury-perfume-store</span>
            <p className="font-serif text-[11px] tracking-tight text-zinc-500 dark:text-zinc-400">
              © 2024 luxury-perfume-store PARFUMERIE. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-serif text-[11px] tracking-tight">
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Sustainability</Link>
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Shipping & Returns</Link>
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Contact Us</Link>
            <Link to="/developers" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Developers</Link>
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Privacy Policy</Link>
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 hover:underline transition-all">Terms of Service</Link>
          </div>
        </div>
        
        <DeveloperCard />
      </div>
    </footer>
  );
};

export default Footer;
