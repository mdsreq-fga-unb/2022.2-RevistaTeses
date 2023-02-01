import React from "react";
import "./styles.css";

const Header = () => {
  function handleLogPro() {
    if (!document.cookie) {
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
          <li key="colunas">
            <a href="/">COLUNAS</a>
          </li>
          <li key="noticias">
            <a href="/noticias">NOTÍCAS</a>
          </li>
          <li key="eventos">
            <a href="/">EVENTOS</a>
          </li>
          <li key={Math.random()}>{handleLogPro()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
