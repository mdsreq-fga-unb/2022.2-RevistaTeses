import React from "react";

const Header = () => {
    return(
        <div className="headerContainer">
            <ul>
                <li><a href="/">Inicio</a></li>
                {/* <li><a>Colunas</a></li> */}
                {/* <li><a>Noticias</a></li> */}
                {/* <li><a>Eventos</a></li> */}
                <li><a href="/">Entrar</a></li>
            </ul>
        </div>
    );
}

export default Header;