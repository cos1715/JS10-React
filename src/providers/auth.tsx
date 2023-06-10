import React, { ReactNode, createContext, useContext, useState } from "react";

interface IAuthContext {
  username: string;
  setAuth: (arg: string) => void;
}

const Auth = createContext<IAuthContext>({
  username: "",
  setAuth: () => null,
});

export const useAuthContext = () => useContext(Auth);

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const authLogin = localStorage.getItem("authLogin");
  const [auth, setAuth] = useState(authLogin || "");

  return (
    <Auth.Provider value={{ username: auth, setAuth }}>
      {children}
    </Auth.Provider>
  );
};
