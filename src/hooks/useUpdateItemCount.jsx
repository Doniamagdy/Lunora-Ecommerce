import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'


function useUpdateItemCount() {
  const updateCount = async ({productId, currentCount , action}) => {

let newCount = Number(currentCount);

if(action === "increase"){
  newCount = currentCount +1 
}if(action === "decrease" && currentCount > 1){
  newCount = currentCount -1 

}


    
    
  const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: newCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      console.log("coming from hook",productId)
         

      console.log("count increased");
      console.log("response from useAddItem", response?.data?.data?.products);
      
      
      return response?.data?.data?.products;
    } catch (error) {
      console.log(error);

    }
  };


  const mutation = useMutation({
    mutationFn: updateCount,
    mutationKey:["updateCount"],
  })
  
  return mutation
}

export default useUpdateItemCount;
