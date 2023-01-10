import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// import Home from './pages/home/index'
import Login from './pages/login/index'
import Perfil from "./pages/perfil/index";

const router = createBrowserRouter([
  {
    path: "/perfil",
    element: <Perfil/>,
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    // element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
