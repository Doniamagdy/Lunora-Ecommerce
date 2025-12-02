import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [userToken, setUserToken] = useState(
    localStorage.getItem("LunoraToken")
  ); // اضف ده

  useEffect(() => {
    userToken ? setLoggedIn(true) : setLoggedIn(false);
    setLoading(false);
  }, [userToken]);

  function updateToken(token) {
    setUserToken(token);
  }

  function logout() {
    localStorage.removeItem("LunoraToken");
    localStorage.removeItem("LunoraUserEmail");
    localStorage.removeItem("LunoraUserName");
    localStorage.removeItem("LunoraCartId");
    localStorage.removeItem("LunoraCartOwnerId");
    setUserToken(null); // اضف ده

    navigate("/");
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        logout,
        setLoggedIn,
        userToken,
        updateToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
