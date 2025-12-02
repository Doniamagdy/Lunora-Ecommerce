import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toastify from "../utils/toastify";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();
function CartProvider({ children }) {
  const { userToken } = useContext(AuthContext); 
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cartId, setCartId] = useState("");
  const [cartOwnerId, setCartOwnerId] = useState("");

  const getNumberOfItemsInCart = async () => {
    if (!userToken) {
      setItemsInCart(0);
      return;
    }

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: userToken,
            "Content-Type": "application/json",
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
      toastify(error?.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    getNumberOfItemsInCart();
  }, [userToken]);

  return (
    <CartContext.Provider
      value={{ itemsInCart, getNumberOfItemsInCart, cartId, cartOwnerId }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
