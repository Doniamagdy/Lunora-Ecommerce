import { useMutation } from "@tanstack/react-query";
import axios from "axios";


function useAddProductToWishlist() {
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

      return response
    } catch (error) {
      console.log(error);
    }
  };

  const mutation=useMutation({
    mutationFn:addItemToWishlist,
    mutationKey:["addItemToWishlist"]
  })

  return mutation
}

export default useAddProductToWishlist;
