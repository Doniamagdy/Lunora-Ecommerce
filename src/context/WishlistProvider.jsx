import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const WishListContext = createContext()
function WishlistProvider({children}) {

    const [wishList , setWishList]= useState()

    const getWishList = async ()=>{
        const token = localStorage.getItem("LunoraToken")
        try{
            const response = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",
                {
                    headers:{
                        token:token
                    }
                }
            )
            console.log(response?.data?.count);
            setWishList(response?.data?.count)

        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{getWishList()} ,[])

  return <WishListContext.Provider value={{wishList}} >{children}</WishListContext.Provider>
}

export default WishlistProvider
