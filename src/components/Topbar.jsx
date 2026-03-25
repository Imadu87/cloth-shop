import { FaPhoneAlt, FaUser, FaShoppingCart } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-700 text-sm">
      <div className="flex justify-between items-center px-6 py-3">
        
        {/* Left Side - Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-xs" />
          <a href="tel:+923020629393" className="hover:text-black">
            +92 302 0629393
          </a>
        </div>

        {/* Right Side - Sign In & Cart */}
        <div className="flex items-center gap-6"> 
          
          {/* Sign In */}
          <button className="flex items-center gap-1 hover:text-black cursor-pointer">
            <FaUser className="text-xs" />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-1 hover:text-black relative cursor-pointer">
            <FaShoppingCart />
            <span className="hidden sm:inline">Cart</span>

            {/* Optional cart badge */}
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full px-1">
              0
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Topbar;