import React from "react";
import ReusableButton from "./ReusableButton";
import ReusableLink from "./ReusableLink";

function ProductCard({ id, image, title, price, description, brand }) {
  return (
    <div className="  inset-shadow-sm rounded-3xl shadow-xl hover:transition-all duration-300 overflow-hidden w-full max-w-xs mx-auto cursor-pointer">
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
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        {/* Price + Button */}

        <p className="text-[#C3A27B] text-lg font-semibold">EGP {price}</p>

        <div className="mt-4">
          <ReusableButton buttonText={"Add to Cart"} />
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
