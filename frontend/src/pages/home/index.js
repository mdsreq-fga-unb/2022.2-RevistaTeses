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
    <header>
      <nav>
        <a class="logo" href="#">Portal Teses</a>
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>

        <ul class="nav-list">
          <li><a href="#">Início</a></li>
          <li><a href="#">Colunas</a></li>
          <li><a href="#">Notícias</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Entrar</a></li>
        </ul>
      </nav>
    </header>
    <main></main>
    <script src="mobile-navbar.js"></script>
  </body>
</html>
  )
}

export default Home