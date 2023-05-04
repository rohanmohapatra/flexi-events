import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { fakeAuth } from "services/fake.auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("auth.token");
    if (token) {
      setToken(token);
    }
  }, []);

  const handleLogin = async (data) => {
    console.log(data);
    const token = await fakeAuth();
    setToken(token);
    localStorage.setItem("auth.token", token);
    return true;
  };

  const handleLogout = () => {
    setToken(undefined);
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
