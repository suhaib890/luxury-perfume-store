import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen px-6 md:px-12 lg:px-24 mb-32 bg-background"
    >
      <header className="mb-16 border-b border-zinc-100 pb-12 w-full max-w-[1200px] mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl mb-4 text-zinc-900">Your Bag</h1>
      </header>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center w-full max-w-[1200px] mx-auto">
           <p className="font-headline italic text-3xl text-zinc-400 mb-8">Your cart is empty.</p>
           <Link to="/collection" className="bg-zinc-900 border border-zinc-900 text-white px-10 py-4 text-[10px] font-body uppercase tracking-[0.2em] hover:bg-transparent hover:text-zinc-900 transition-colors duration-500">
             Return to Shop
           </Link>
        </div>
      ) : (
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 border-b border-zinc-100 pb-8 relative group">
                <div className="w-full sm:w-32 aspect-[4/5] bg-zinc-50 rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[10%]" />
                </div>
                
                <div className="flex flex-col justify-between flex-grow py-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 block mb-1">{item.category}</span>
                    <h3 className="font-headline text-2xl text-zinc-900 mb-2">{item.name}</h3>
                    <p className="font-body text-xs text-zinc-500 italic max-w-sm truncate">{item.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 sm:mt-0">
                    <div className="flex items-center border border-zinc-200 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center font-body text-xs">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    
                    <p className="font-body text-sm font-medium tracking-widest">₹{item.price * item.quantity}</p>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-0 right-0 sm:top-2 hover:bg-zinc-100 p-2 rounded-full transition-colors text-zinc-400 hover:text-red-500"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary Panel */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-50 p-8 rounded-lg sticky top-32">
              <h3 className="font-headline text-2xl mb-8 border-b border-zinc-200 pb-4">Order Summary</h3>
              
              <div className="flex justify-between items-center mb-4 font-body text-sm text-zinc-500">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              
              <div className="flex justify-between items-center mb-8 font-body text-sm text-zinc-500">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              
              <div className="flex justify-between items-center mb-8 pt-4 border-t border-zinc-200 font-body">
                <span className="uppercase tracking-widest text-xs font-bold">Total</span>
                <span className="text-lg font-bold tracking-widest">₹{totalPrice}</span>
              </div>

              <button className="w-full bg-zinc-900 text-white py-5 flex items-center justify-center gap-4 hover:bg-zinc-800 transition-colors group">
                <span className="text-[10px] uppercase tracking-[0.2em]">Proceed to Checkout</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      )}
    </motion.div>
  );
};

export default Cart;
