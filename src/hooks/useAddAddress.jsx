import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function useAddAddress() {
  const addNewAddress = async ({name, details, phone, city}) => {
    try {
      const token = localStorage.getItem("LunoraToken");

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
          },
        }
      );

      console.log(response?.data);
      return response?.data
      
    } catch (error) {
      console.log(error);
    }
  };


  const mutation = useMutation({
    mutationFn:addNewAddress,
    mutationKey:['addNewAddress']
  })

  return mutation;
}

export default useAddAddress;
