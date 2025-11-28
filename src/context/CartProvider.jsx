import axios from "axios";
import  { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cartId, setCartId] = useState();
  const [cartOwnerId, setCartOwnerId] = useState();
  const [productCount, setProductCount] = useState(0)

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

      

      setCartId(response?.data?.cartId);

      let LunoraCartOwnerId = response?.data?.data.cartOwner;
      localStorage.setItem("LunoraCartOwnerId", LunoraCartOwnerId);
      setCartOwnerId(LunoraCartOwnerId);

      const productsArray = response?.data?.data?.products;
      const total = productsArray.reduce((acc, prod) => acc + prod.count, 0);
      setItemsInCart(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNumberOfItemsInCart();
  }, []);


 

  return (
    <CartContext.Provider
      value={{ itemsInCart, getNumberOfItemsInCart, cartId, cartOwnerId  }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
