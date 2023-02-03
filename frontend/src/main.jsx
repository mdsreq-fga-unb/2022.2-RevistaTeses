import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from './pages/home/index'
import LoginCadastro from './pages/LoginCadastro/index'
import Perfil from "./pages/perfil/index";
import Noticias from "./pages/notícia";
import VerNoticia from "./pages/verNoticia";
import ManageNoticias from "./pages/manageNotícia"
import Colunas from "./pages/colunas";
import Eventos from "./pages/eventos";
import Podcasts from "./pages/podcasts";
import EditarContaSenha from "./pages/editarContaSenha";

const router = createBrowserRouter([
  {
    path: "/perfil",
    element: <Perfil/>,
  },
  {
    path: "/auth",
    element: <LoginCadastro />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/noticias",
    element: <Noticias />
  },
  {
    path: "/colunas",
    element: <Colunas />
  },
  {
    path: "/eventos",
    element: <Eventos />
  },
  {
    path: "/podcasts",
    element: <Podcasts />
  },
  {
    path: "/minhasNoticias",
    element: <ManageNoticias/>
  },
  {
    path: "/verNoticia/:idNoticia",
    element: <VerNoticia />
  },
  {
    path: "/perfil/editar",
    element: <EditarContaSenha/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
