import React from "react";
import { AuthContext } from "./AuthContext";
import { fakeAuth } from "services/fake.auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(undefined);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
