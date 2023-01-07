import React from "react";
import "../login/styles.css";

const Login = () => {
  return (
    <div id="login">
      <h1 className="title">Portal Teses</h1>
      <div>
        <background />
        <div className="container">
          <h2 className="subtitle">Faça seu login</h2>
          <form action="/auth/login" method="post">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" required />
            </div>
            <button type="submit" className="button">
              Entrar
            </button>
          </form>
          <h3 className="subtitle">Ainda não tem uma conta? Cadastre-se</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
