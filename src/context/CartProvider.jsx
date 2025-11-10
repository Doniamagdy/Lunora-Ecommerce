import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(0);

  const getNumberOfItemsInCart = async () => {
    try {
      const token = localStorage.getItem("LunoraToken");

      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      
    
      const productsArray =response?.data?.data?.products 
      const total= productsArray.reduce((acc, prod) => acc +(prod.count),0)
      setItemsInCart(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getNumberOfItemsInCart()}, []);

  return (
    <CartContext.Provider value={{ itemsInCart, getNumberOfItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
