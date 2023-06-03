import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import { Layout } from "components/layout";
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
        element: <div>Hello world user!</div>,
      },
      {
        path: ROUTES.userList,
        element: <div>Hello world uselist!</div>,
      },
    ],
  },
]);

// interface IRoutes {
//   children: ReactNode;
// }

export const Routes: React.FC = () => <RouterProvider router={router} />;
