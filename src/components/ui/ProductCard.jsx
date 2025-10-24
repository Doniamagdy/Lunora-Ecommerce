import React from "react";

function ProductCard({
  image,
  title,
  price,
  description,
  brand,

}) {
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
        <div className="mt-4 flex items-center justify-between">
          <p className="text-[#C3A27B] text-lg font-semibold">${price}</p>
          <button className="px-4 py-2 bg-[#C3A27B] text-white text-sm rounded-full hover:brightness-105 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
