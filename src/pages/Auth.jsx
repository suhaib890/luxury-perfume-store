import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/profile');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 min-h-screen bg-zinc-50 flex justify-center items-center"
    >
      <div className="bg-white p-12 shadow-sm border border-zinc-100 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-headline italic mb-8 text-center">Sign In</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
            <input type="email" required className="border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none transition-colors" placeholder="your@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-body font-bold text-zinc-400 uppercase tracking-widest">Password</label>
            <input type="password" required className="border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none transition-colors" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-zinc-900 text-white py-4 font-body text-[11px] tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors mt-8">
            Enter
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Auth;
