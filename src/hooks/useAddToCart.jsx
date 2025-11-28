import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import toastify from "../utils/toastify";

function useAddToCart() {
  const { getNumberOfItemsInCart } = useContext(CartContext);

  const addProductToCart = async (productId) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          //body
          productId: productId,
        },
        {
          //headers
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );
      toastify("Product added successfully to the cart", "success");

      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: addProductToCart,
    mutationKey: ["addProduct"],
    onSuccess: () => getNumberOfItemsInCart(),
  });

  return mutation;
}

export default useAddToCart;
