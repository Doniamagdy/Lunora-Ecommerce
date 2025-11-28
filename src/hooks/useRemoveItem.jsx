import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function useRemoveItem(options) {
  const token = localStorage.getItem("LunoraToken");

  const removeItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${itemId}`,
        {
          headers: {
            token: token,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: removeItem,
    mutationKey: ["removeItem"],
    ...options
  });

  return mutation;
}

export default useRemoveItem;
