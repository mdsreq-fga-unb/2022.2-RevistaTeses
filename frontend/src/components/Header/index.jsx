import React from "react";
import "./styles.css"

const Header = () => {

    return(
        <>
        <img src="./images/logo.svg" alt="logo"/>
        <div className="headerContainer">
            <ul className="opcoes">
                <li>Inicio</li>
                <li>Colunas</li>  
                <li>Noticias</li>  
                <li>Eventos</li>  
                <li>Entrar</li>
            </ul>
        </div>
        </>
    );
}

export default Header;