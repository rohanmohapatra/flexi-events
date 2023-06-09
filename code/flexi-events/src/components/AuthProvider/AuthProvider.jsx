import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { login } from "services/auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("auth.token");
    if (token) {
      setToken(token);
    }
  }, []);

  const handleLogin = async (data) => {
    const token = await login(data);
    if (token) {
      setToken(token);
      localStorage.setItem("auth.token", token);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setToken(undefined);
    localStorage.removeItem("auth.token");
    localStorage.removeItem("zoom.token");
    localStorage.removeItem("signup.email");
  };
  const getToken = () => {
    const token = localStorage.getItem("auth.token");
    return token;
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
