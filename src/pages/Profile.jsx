import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth');
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isLoggedIn) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 min-h-screen bg-background px-6"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-zinc-100 pb-12 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-headline italic mb-4">Your Profile</h1>
            <p className="text-zinc-500 font-body text-sm tracking-widest uppercase">Welcome back</p>
          </div>
          <button onClick={handleLogout} className="text-[10px] font-body uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors">
            Logout
          </button>
        </header>

        <section>
          <h2 className="text-2xl font-headline mb-8">Order History</h2>
          <div className="bg-white p-12 shadow-sm border border-zinc-100 rounded-lg text-center">
             <p className="text-zinc-400 font-body text-sm italic">You haven't placed any orders yet.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Profile;
