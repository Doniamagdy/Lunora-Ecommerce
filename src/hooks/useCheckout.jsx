import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';


function useCheckout() {

const token = localStorage.getItem("LunoraToken");
const { cartId } = useContext(CartContext)


const checkout = async (data)=>{
    try{
            // id is cart id

    const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
 {
          shippingAddress: {
            details:data?.details,
            phone: data?.phone,
            city: data?.city,
          },
        },
        {
            headers:{
 token: token,
            }
        }
    )

    console.log(response?.data?.session?.url);
    
    return window.location.href  = response?.data?.session?.url
globalThis
    }catch(error){
        console.log(error);
    }
}

const mutation = useMutation({
    mutationFn: checkout,
    mutationKey:['checkout']
})

  return mutation
}

export default useCheckout
