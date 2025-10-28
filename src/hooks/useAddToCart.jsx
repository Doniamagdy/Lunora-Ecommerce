import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function useAddToCart() {
  const addProductToCart = async (productId) => {
    const token = localStorage.getItem("LunoraToken");
    console.log(token);

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
            token: `${token}`,
          },
        }
      );
      console.log("Product added successfully");

      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: addProductToCart,
    mutationKey: ["addProduct"],
  });

  return mutation;
}

export default useAddToCart;
