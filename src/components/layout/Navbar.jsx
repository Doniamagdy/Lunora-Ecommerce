import { Search, User } from "lucide-react";
import { GiShoppingCart } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { CartContext } from "../../context/CartProvider";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const { itemsInCart } = useContext(CartContext)

  return (
    <nav className="bg-[#FAFAFA] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-serif font-semibold text-[#C3A27B] tracking-wide">
          Iunora
        </h1>

        {/* Links (Hidden on small screens) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link
            to={"/home"}
            className="hover:text-[#C3A27B] transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/brands"}
            className="hover:text-[#C3A27B] transition duration-300 cursor-pointer"
          >
            Brands
          </Link>
          <Link
            to={"/categories"}
            className="hover:text-[#C3A27B] transition duration-300 cursor-pointer"
          >
            Categories
          </Link>
          
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-600">

        <Link to={"/wishlist"} className="relative inline-block">
            {" "}
            <BsHeart className="w-6 h-6 cursor-pointer hover:text-[#C3A27B]" />
           
          </Link>
        
          <Link to={"/cart"} className="relative inline-block">
            {" "}
            <GiShoppingCart className="w-7 h-7 cursor-pointer hover:text-[#C3A27B]" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[11px] 
      font-semibold w-6 h-6 flex items-center justify-center rounded-full 
      shadow-md border border-white">{itemsInCart}</span> 
          </Link>
          <Search className="w-6 h-6 cursor-pointer hover:text-[#C3A27B]" />
          <User className="w-6 h-6 cursor-pointer hover:text-[#C3A27B]" />
          <button type="button" className="cursor-pointer hover:text-[#C3A27B]" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>

      {/* Responsive Note: on mobile, only logo + icons appear */}
    </nav>
  );
};

export default Navbar;
