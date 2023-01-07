import React, { Fragment } from "react";
import './styles.css'

const Home = () => {
  return (
    <Fragment>
      {/* <img
        src="../../../../../images/logo.png"
        title="logo"
        style="width: 250px;"
      /> */}

        <div id="menuPrincipal" className="menuPrincipal">
          <ul>
            <li>Inicio</li>
            <li>Colunas</li>
            <li>Noticias</li>
            <li>Eventos</li>
            <li>Entrar</li>
          </ul>
        </div>

        <div id="areaNoticias" className="areaNoticias">
          <div id="noticia" className="noticia"></div>
        </div>
        <div id="areaColunas" className="areaColunas">
          <div id="coluna" className="coluna"></div>
        </div>
        <div id="areaEventos" className="areaEventos">
          <div id="evento" className="evento"></div>
        </div>
    </Fragment>
  );
};

export default Home;
