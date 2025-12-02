import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toastify from "../utils/toastify";

function useDeleteItemFromWishList(options) {
  const deleteItemFromWishlist = async (productId) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      toastify(response?.data?.message, "error");

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteItemFromWishlist,
    mutationKey: ["deleteItemFromWishlist"],
    ...options,
  });

  return mutation;
}

export default useDeleteItemFromWishList;
