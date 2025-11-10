import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const userToken = localStorage.getItem("LunoraToken");

  useEffect(() => {
    userToken ? setLoggedIn(true) : setLoggedIn(false);
    setLoading(false);
  }, []);

  function logout() {
    localStorage.removeItem("LunoraToken");
    navigate("/login");
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
