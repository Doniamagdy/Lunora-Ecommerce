import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
function useDeleteItemFromWishList() {
  const deleteItemFromWishlist = async (productId) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: {
            token: token,
          },
        }
      );

      return response
    } catch (error) {
      console.log(error);
    }
  };

const mutation = useMutation({
    mutationFn:deleteItemFromWishlist,
    mutationKey:["deleteItemFromWishlist"]
})

  return mutation
}

export default useDeleteItemFromWishList;
