import React from 'react'

const Home = () => {
  return (
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portal Teses</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <img src="../2022.2-RevistaTeses/images/logo.png" title="logo" style="width: 250px;"/>

    <header>
      <div id="menuPrincipal" class="menuPrincipal">
        <ul>
          <li>Inicio</li>
          <li>Colunas</li>
          <li>Noticias</li>
          <li>Eventos</li>
          <li>Entrar</li>
        </ul>
      </div>
    </header>

    <main>
      <div id="areaNoticias" class="areaNoticias">
        <div id="noticia" class="noticia">

        </div>
      </div>
      <div id="areaColunas" class="areaColunas">
        <div id="coluna" class="coluna">

        </div>
      </div>
      <div id="areaEventos" class="areaEventos">
        <div id="evento" class="evento">

        </div>
      </div>
    </main>
  </body>
</html>
  )
}

export default Home