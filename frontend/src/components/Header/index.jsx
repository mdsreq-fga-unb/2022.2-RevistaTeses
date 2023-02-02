import React from "react";
import Cookies from "universal-cookie";

import "./styles.css";

const Header = () => {
  const cookies = new Cookies();

  function handleLogPro() {
    const token = cookies.get("Authorization");
    if (!token) {
      return (
        <a href="/auth">ENTRAR</a>
      );
    } else {
      return (
        <a href="/perfil">PERFIL</a>
      );
    }
  }
  return (
    <div className="header" data-testid="header">
      

      <div className="headerContainer">
        <ul className="opcoes">
          <li key="inicio">
            <a href="/">INÍCIO</a>
          </li>
          <li key="noticias">
            <a href="/noticias">NOTÍCIAS</a>
          </li>
          <li key="colunas">
            <a href="/colunas">COLUNAS</a>
          </li>
          <li key="eventos">
            <a href="/eventos">EVENTOS</a>
          </li>
          <li key="podcast">
            <a href="/podcasts">PODCASTS</a>
          </li>
          <li key={Math.random()}>{handleLogPro()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
