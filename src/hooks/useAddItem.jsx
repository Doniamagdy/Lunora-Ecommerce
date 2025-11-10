import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'


function useAddItem() {
  const addItem = async (productId) => {
    
  const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: 1,
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
    mutationFn: addItem,
    mutationKey:["addItem"],
  })
  
  return mutation
}

export default useAddItem;
