import { useMutation } from "@tanstack/react-query";
import axios from "axios";


function useDeleteAddress() {
  const deleteAddress = async (id) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
        {
          headers: {
            token: token,
          },
        }
      );

      console.log(response.data);
      return response.data

    } catch (error) {
      console.log(error);
    }
  };


const mutation = useMutation({
  mutationFn: deleteAddress,
  mutationKey:['deleteAddress'],
//   onSuccess: ()=> getAddress()
})

  return mutation
}

export default useDeleteAddress;
