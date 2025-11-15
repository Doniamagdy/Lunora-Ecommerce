import axios from "axios";
import { useState , useEffect, createContext} from "react";

export const AddressContext = createContext();

function AddressProvider({children}) {

const [address, setAddress] = useState()

const getAddress = async () => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response?.data?.data[0].details);

      setAddress(response?.data?.data[0].details)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{ getAddress() }, [])




  return <AddressContext value={{address}}>{children}</AddressContext>
}

export default AddressProvider



