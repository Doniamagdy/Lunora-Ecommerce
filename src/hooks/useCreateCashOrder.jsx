import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import CartProvider from "../context/CartProvider";

function useCreateCashOrder() {
  const token = localStorage.getItem("LunoraToken");

  const { cartId } = useContext(CartProvider)

  const createOrder = async (data) => {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        {
          shippingAddress: {
            details: data.details,
            phone: data.phone,
            city: data.city,
          },
        },
        {
            headers:{
 token: token,
            }
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };


const mutation = useMutation({
    mutationFn: createOrder,
    mutationKey:["createOrder"]
})



  return mutation;
}

export default useCreateCashOrder;
