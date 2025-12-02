import axios from "axios";
import { useState, useEffect, createContext } from "react";
import toastify from "../utils/toastify";

export const AddressContext = createContext();

function AddressProvider({ children }) {
  const [address, setAddress] = useState([]);
  const [addressDetails, setAddressDetails] = useState("");
  const [addressPhoneNumber, setAddressPhoneNumber] = useState("");
  const [addressCity, setAddressCity] = useState("");

  const token = localStorage.getItem("LunoraToken");

  const getAddress = async () => {
    if (!token) {
      setAddress([]);
      return;
    }

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      setAddressDetails(response?.data?.data?.details || "");
      setAddressCity(response?.data?.data?.city || "");
      setAddressPhoneNumber(response?.data?.data?.phone || "");
      setAddress(response?.data?.data || []);
    } catch (error) {
      toastify(error?.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <AddressContext.Provider
      value={{ address, addressDetails, addressPhoneNumber, addressCity }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export default AddressProvider;
