import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { WishListContext } from "../context/WishlistProvider";
import toastify from "../utils/toastify";

function useAddProductToWishlist() {
  const { getWishList } = useContext(WishListContext);
  const addItemToWishlist = async (productId) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          productId: productId,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      toastify("Product added successfully to the wishlist", "success");

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: addItemToWishlist,
    mutationKey: ["addItemToWishlist"],
    onSuccess: () => getWishList(),
  });

  return mutation;
}

export default useAddProductToWishlist;
