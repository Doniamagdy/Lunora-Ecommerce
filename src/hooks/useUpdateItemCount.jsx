import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function useUpdateItemCount(options) {
  const updateCount = async ({ productId, newCount }) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: Number(newCount),
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

   

      return response?.data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: updateCount,
    mutationKey: ["updateCount"],
    ...options,
  });

  return mutation;
}

export default useUpdateItemCount;
