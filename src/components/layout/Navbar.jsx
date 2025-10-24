import { ShoppingBag, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#FAFAFA] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-serif font-semibold text-[#C3A27B] tracking-wide">
          Iunora
        </h1>

        {/* Links (Hidden on small screens) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-[#C3A27B] transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-[#C3A27B] transition duration-300 cursor-pointer">Shop</li>
          <li className="hover:text-[#C3A27B] transition duration-300 cursor-pointer">Categories</li>
          <li className="hover:text-[#C3A27B] transition duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-600">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#C3A27B]" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#C3A27B]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#C3A27B]" />
        </div>
      </div>

      {/* Responsive Note: on mobile, only logo + icons appear */}
    </nav>
  );
};

export default Navbar;
