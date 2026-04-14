import React, { useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, X, Heart } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
  const { searchTerm, setSearchTerm, isSearchOpen, toggleSearch, closeSearch } = useSearch();
  const { isLoggedIn } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search when route changes
  useEffect(() => {
    closeSearch();
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== '/collection') {
      navigate('/collection');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 shadow-sm dark:shadow-none transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
            luxury-perfume-store
          </Link>
          <div className={`hidden lg:flex gap-6 font-serif tracking-widest uppercase text-xs transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}>
            <Link to="/" className="text-zinc-900 dark:text-zinc-50 border-b border-zinc-900 dark:border-zinc-50 pb-1">
              Fragrances
            </Link>
            <Link to="/collection" className="text-zinc-500 dark:text-zinc-400 pb-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300">
              Collections
            </Link>
            <Link to="/archive" className="text-zinc-500 dark:text-zinc-400 pb-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300">
              The House
            </Link>
            <Link to="/stores" className="text-zinc-500 dark:text-zinc-400 pb-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300">
              Stores
            </Link>
          </div>

          {/* Search Input Area */}
          <div className={`flex items-center transition-all duration-500 ease-in-out ${isSearchOpen ? 'opacity-100 w-64 md:w-96 translate-x-0' : 'opacity-0 w-0 -translate-x-4 pointer-events-none'} overflow-hidden ml-4`}>
             <input 
               ref={searchInputRef}
               type="text" 
               placeholder="Search by name, category..." 
               value={searchTerm}
               onChange={handleSearchChange}
               className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-1 font-body text-xs focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-100 transition-colors placeholder:text-zinc-400"
             />
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <button onClick={toggleSearch} className="text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity">
            {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
          </button>
          
          <Link to="/wishlist" className="relative text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity block">
            <Heart size={20} strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity flex items-center gap-2">
            <div className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          
          <Link to={isLoggedIn ? "/profile" : "/auth"} className="text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity">
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

