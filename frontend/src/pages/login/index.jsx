import React from "react";
import "../login/styles.css";

const Login = () => {
  return (
    <div id="login">
      <h2 className="login">Faça seu login</h2>

      <form id="form" action="/auth/login" method="post">
        <div id="campoEmail" class="campoEmail">
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" name="email" id="email" required />
        </div>

        <div id="campoSenha" class="campoSenha">
          <label htmlFor="password"><b>Senha</b></label>
          <input type="password" name="password" id="password" required />
        </div>

        <button type="submit" className="botaoEntrar">Entrar</button>
      </form>

      <h3 className="cadastro">Ainda não tem uma conta? <a href="#">Cadastre-se aqui!</a></h3>
    </div>
  );
};

export default Login;
