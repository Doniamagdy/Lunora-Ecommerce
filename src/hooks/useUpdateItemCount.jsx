import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useUpdateItemCount(options) {


  const updateCount = async ({productId , newCount}) => {

  const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: Number(newCount),
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

        console.log(newCount);
        
        let productCount = response?.data?.data?.products
        console.log(productCount);
        
// productCount.map((prodCount)=>console.log(prodCount.count))
     
      return response?.data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  };


  const mutation = useMutation({
    mutationFn: updateCount,
    mutationKey:["updateCount"],
    ...options,
  })
  
  return mutation
}

export default useUpdateItemCount;
