import { useState } from "react";
import useAddToCart from "../../hooks/useAddToCart";
import useAddProductToWishlist from "../../hooks/useAddProductToWishlist";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

function ProductCard({ id, image, title, price, description, brand, rating }) {
  const { mutate: addToCart } = useAddToCart();
  const { mutate: addItemToWishlist } = useAddProductToWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    addItemToWishlist(id);
    setIsWishlisted(!isWishlisted);
  };

  const starRating = Math.round(rating);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
      {/* IMAGE - FULL WIDTH NO PADDING */}
      <div className="relative w-full overflow-hidden bg-gray-100 aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* BRAND TAG - TOP LEFT */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#F5E6D3] bg-opacity-70 text-xs font-semibold rounded">
          {brand}
        </div>

        {/* WISHLIST - BOTTOM RIGHT */}
        <button
          onClick={handleWishlist}
          className="absolute bottom-4 right-4 p-2.5 rounded-lg bg-white shadow-md hover:shadow-lg transition"
          title="Add to wishlist"
        >
          {isWishlisted ? (
            <BsFillHeartFill size={20} className="text-rose-200" />
          ) : (
            <BsHeart size={20} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 flex flex-col flex-grow">
        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {title}
        </h3>

        {/* PRICE */}
        <p className="text-lg font-bold text-emerald-600 mb-2">
          ${price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {description}
        </p>

        {/* RATING & ACTION BUTTONS */}
        <div className="flex items-center justify-between gap-2">
          {/* RATING - LEFT SIDE */}
          <div className="flex items-center gap-1">
            <div className="text-yellow-400 text-sm">
              {"★".repeat(starRating)}
              {"☆".repeat(5 - starRating)}
            </div>
            <span className="text-xs text-gray-500">({rating})</span>
          </div>

          {/* ACTION BUTTONS - RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <Link
              to={`/productDetails/${id}`}
              className="p-2 rounded-lg bg-[#F5E6D3] hover:bg-red-200 transition shadow-md"
              title="View details"
            >
              <FaEye className="w-4 h-4" />
            </Link>

            <button
              onClick={() => addToCart(id)}
              className="p-2 rounded-lg bg-gray-900 text-white  hover:bg-red-200 transition shadow-md"
              title="Add to cart"
            >
              <BsCart3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;