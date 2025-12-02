import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import toastify from "../utils/toastify";
import { AuthContext } from "./AuthProvider";

export const WishListContext = createContext();
function WishlistProvider({ children }) {
  const { userToken } = useContext(AuthContext);
  const [wishList, setWishList] = useState(0);

  const getWishList = async () => {
    if (!userToken) {
      setWishList(0);
      return;
    }

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: userToken,
            "Content-Type": "application/json",
          },
        }
      );

      setWishList(response?.data?.count || 0);
    } catch (error) {
      toastify(error?.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    getWishList();
  }, [userToken]);

  return (
    <WishListContext.Provider value={{ wishList, getWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishlistProvider;
