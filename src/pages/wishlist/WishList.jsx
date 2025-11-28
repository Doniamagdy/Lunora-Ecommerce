import React from "react";
import ProductCard from "../../components/ui/ProductCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useDeleteItemFromWishList from "../../hooks/useDeleteItemFromWishList";
import { IoMdClose } from "react-icons/io";

function WishList() {
  const { mutate } = useDeleteItemFromWishList();

  const getWishlistItems = async () => {
    try {
      const token = localStorage.getItem("LunoraToken");
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response?.data?.data);

      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: getWishlistItems,
  });

  return (
    <div className="mt-[100px] pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((wishlistItem) => (
        <div key={wishlistItem.id} className="relative">
          <button
            type="button"
            onClick={() => mutate(wishlistItem._id)}
            className="absolute top-3 right-[15px] z-30  bg-white text-gray-700 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
          >
            <IoMdClose />
          </button>

          <ProductCard
            key={wishlistItem.id}
            id={wishlistItem._id}
            title={wishlistItem.title}
            price={wishlistItem.price}
            image={wishlistItem.imageCover}
            brand={wishlistItem.brand.name}
            rating={wishlistItem.ratingsAverage}
          />
        </div>
      ))}
    </div>
  );
}

export default WishList;
