import React, { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "providers/auth";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const { username } = useAuthContext();

  return username ? <>{children}</> : <Navigate to="/login" replace />;
};
