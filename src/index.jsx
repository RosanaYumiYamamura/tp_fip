import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./Style.css";
import Home from "./routes/Home";
import Nosotros from "./routes/Nosotros";
import Productos from "./routes/Productos";
import Service from "./routes/Service";
import Recetas1 from "./routes/Recetas1";
import ErrorPage from "./routes/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "recetas",
        element: <Recetas1 />,
      },
      {
        path: "productos",
        element: <Productos />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);