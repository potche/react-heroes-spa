import { createBrowserRouter, redirect } from "react-router-dom";

import { DC, Marvel } from "./heroes/pages";
import { Login } from "./auth/pages/Login";
import { Navbar } from "./ui/components";

const HOME_PATH = "/";
export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    Component: Navbar,
    children: [
      {
        path: "/marvel",
        element: <Marvel />,
      },
      {
        path: "/dc",
        element: <DC />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    id: "not-found",
    path: "*",
    loader: () => redirect(HOME_PATH),
  },
]);
