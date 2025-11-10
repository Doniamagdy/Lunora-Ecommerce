import React from "react";
import ReusableButton from "./ReusableButton";
import ReusableLink from "./ReusableLink";
import useAddToCart from "../../hooks/useAddToCart";
import useAddProductToWishlist from "../../hooks/useAddProductToWishlist";

import { BsFillHeartFill } from "react-icons/bs";


function ProductCard({ id, image, title, price, description, brand }) {
  const newTitle = title.split(" ").slice(0, 2).join(" ");

  const { mutate: addToCart } = useAddToCart();
  const { mutate: addItemToWishlist } = useAddProductToWishlist();

  return (
    <div className="inset-shadow-sm rounded-3xl shadow-xl hover:transition-all duration-300 overflow-hidden w-full max-w-xs mx-auto ">


      {/* Product Image */}
      <div className="relative p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
        />
        {/* Brand Label */}
        <span className="absolute top-4 left-4 bg-[#F5E6D3]/90 text-[#333333] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
          {brand}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {newTitle}
          </h3>
          <BsFillHeartFill
            className="mt-2 me-6 w-5 h-5 text-red-400 cursor-pointer"
            onClick={() => addItemToWishlist(id)}
          />
        </div>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        {/* Price + Button */}

        <p className="text-[#C3A27B] text-lg font-semibold">EGP {price}</p>

        <div className="mt-4">
          <ReusableButton
            buttonText={"Add to Cart"}
            onClick={() => addToCart(id)}
          />
        </div>
        <div className="mt-4">
          <ReusableLink
            path={`/productDetails/${id}`}
            linkText="View Details"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
