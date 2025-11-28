import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Decode JWT token
  const decodeToken = () => {
    const token = localStorage.getItem("LunoraToken");
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload;
    } catch (error) {
      console.log("Invalid Token", error);
      return null;
    }
  };

  useEffect(() => {
    const payload = decodeToken();

    if (payload) {
      setUserId(payload.id);
      setUserEmail(payload.email);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userId, userEmail, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
