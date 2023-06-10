import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import { Layout } from "components/layout";
import { ProtectedRoute } from "./protected-route";
import { Home } from "pages/home";
import { Login } from "pages/login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.login,
        element: <Login />,
      },
      {
        path: ROUTES.user,
        element: (
          <ProtectedRoute>
            <div>Hello world user!</div>
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.userList,
        element: (
          <ProtectedRoute>
            <div>Hello world uselist!</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);


export const Routes: React.FC = () => <RouterProvider router={router} />;
