import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect, useRef } from 'react';

const categories = [
  'paintings',
  'sculptures',
  'photography',
  'digital-art',
  'mixed-media'
];

const Navbar = ({ userData, onLogout }) => {
  const { cart } = useCart();
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Add console log to debug
  console.log('userData:', userData);

  // Get the display letter
  const getDisplayLetter = () => {
    if (!userData) return 'U';
    if (userData.role === 'artist' && userData.fullName) {
      return userData.fullName.charAt(0).toUpperCase();
    }
    if (userData.firstName) {
      return userData.firstName.charAt(0).toUpperCase();
    }
    return userData.email?.charAt(0).toUpperCase() || 'U';
  };

  // Get the display name
  const getDisplayName = () => {
    if (!userData) return '';
    if (userData.role === 'artist' && userData.fullName) {
      return userData.fullName;
    }
    return userData.firstName || userData.email;
  };

  // Add click outside handler
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-white">
                Art Gallery
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/gallery/${category}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  {category.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative p-2">
              <Link to="/cart" className="text-gray-300 hover:text-white relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center z-50 shadow">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* User Profile Icon */}
            {/* Replace the User Profile Icon section with: */}
            {userData && (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none"
                >
                  {/* Update the profile section */}
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {getDisplayLetter()}
                    </span>
                  </div>
                  <span className="hidden md:block">
                    {getDisplayName()}
                  </span>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      to={`/${userData.role}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/wishlist"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Wishlist
                    </Link>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onLogout();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Auth Links */}
            {!userData && (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
