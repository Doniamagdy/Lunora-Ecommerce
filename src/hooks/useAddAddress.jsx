import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toastify from "../utils/toastify";

function useAddAddress() {
  const queryClient = useQueryClient();

  const addNewAddress = async ({ name, details, phone, city }) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          name: name,
          details: details,
          phone: phone,
          city: city,
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      
      toastify("New address has been added successfully", "success");
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: addNewAddress,
    mutationKey: ["addNewAddress"],
    onSuccess: () => {
      queryClient.invalidateQueries(["getAddress"]);
    },
  });

  return mutation;
}

export default useAddAddress;
