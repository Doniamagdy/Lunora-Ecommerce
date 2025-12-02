import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function useDeleteAddress() {
  const queryClient = useQueryClient();

  const deleteAddress = async (id) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteAddress,
    mutationKey: ["deleteAddress"],
    onSuccess: () => {
      queryClient.invalidateQueries(["getAddress"]);
    },
  });

  return mutation;
}

export default useDeleteAddress;
