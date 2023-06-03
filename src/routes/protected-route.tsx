import React, { ReactNode } from "react";
import { Navigate } from "react-router";
import { useProfileSelector } from "store/slice/profile";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const { data } = useProfileSelector();

  return !data ? <Navigate to="/login" replace /> : <>{children}</>;
};
