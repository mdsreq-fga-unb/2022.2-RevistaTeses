import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from './pages/home/index'
import Login from './pages/login/index'
import Perfil from "./pages/perfil/index";
import Cadastro from "./pages/cadastro";
import Noticias from "./pages/notícia";
import VerNoticia from "./pages/verNoticia";
import EditarConta from "./pages/editarConta";
import TrocarSenha from "./pages/trocarSenha";

const router = createBrowserRouter([
  {
    path: "/perfil",
    element: <Perfil/>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/noticias",
    element: <Noticias />
  },
  {
    path: "/verNoticia/:idNoticia",
    element: <VerNoticia />
  },
  {
    path: "/perfil/editar",
    element: <EditarConta/>
  },
  {
    path: "/perfil/senha",
    element: <TrocarSenha/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
