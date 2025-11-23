import { Search, User } from "lucide-react";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { BsHeart } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { CartContext } from "../../context/CartProvider";
import { AddressContext } from "../../context/AddressProvider";
import { WishListContext } from "../../context/WishlistProvider";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const { itemsInCart } = useContext(CartContext);
  const { address } = useContext(AddressContext);
  const { wishList } = useContext(WishListContext);

  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className=" mx-2 px-4 py-6 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-6">
          {/* LOGO */}
          <span className="text-2xl font-serif font-semibold text-[#C3A27B] tracking-wide">
            Lunora
          </span>

          {/* DELIVERY TEXT */}
          <span className="text-[#6b5e54] text-sm  flex items-center gap-2 mt-1">
            <span className="text-[#C3A27B] font-semibold">Deliver to:</span>
            <select
              onChange={handleChange}
              value={selected}
              className=" text-gray-700  focus:outline-none "
            >
              <option>Select address..</option>
              {address?.map((chosenAddress) => (
                <option key={chosenAddress._id}>
                  {chosenAddress.details}{" "}
                </option>
              ))}
            </select>
          </span>
        </div>
        {/* Links (Hidden on small screens) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link
            to={"/home"}
            className="hover:text-[#C3A27B] transition duration-300 cursor-pointer"
          >
            Home
          </Link>

           <Link
            to={"/products"}
            className="hover:text-[#C3A27B] transition duration-300 cursor-pointer"
          >
           Products
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
          <Search className="w-6 h-6 cursor-pointer hover:text-[#C3A27B]" />
          <Link to={"/profile"}>
            <User className="w-6 h-6 cursor-pointer hover:text-[#C3A27B]" />
          </Link>

          <Link to={"/wishlist"} className="relative inline-block">
            {" "}
            <BsHeart className="w-6 h-8 cursor-pointer hover:text-[#C3A27B]" />
            <span
              className="absolute -top-2 -right-3 bg-red-500 text-white text-[11px] 
      font-semibold w-6 h-6 flex items-center justify-center rounded-full 
      shadow-md border border-white"
            >
              {wishList}
            </span>
          </Link>

          <Link to={"/cart"} className="relative inline-block">
            {" "}
            <LiaShoppingBagSolid className="w-7 h-8 cursor-pointer hover:text-[#C3A27B]" />
            <span
              className="absolute -top-2 -right-3 bg-red-500 text-white text-[11px] 
      font-semibold w-6 h-6 flex items-center justify-center rounded-full 
      shadow-md border border-white"
            >
              {itemsInCart}
            </span>
          </Link>

          <button
            type="button"
            className="cursor-pointer hover:text-[#C3A27B]"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Responsive Note: on mobile, only logo + icons appear */}
    </nav>
  );
};

export default Navbar;
