import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "pages/home";
import { Layout } from "components/layout";

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
        element: <div>Hello world login!</div>,
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
