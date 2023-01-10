import React, { useState } from "react";
import { api } from '../../api/index'
import "../login/styles.css";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    await api.post("/auth/login", {email: email, password: password})
    .then(function(res){
      console.log(res.data)
    })
  }

  return (
    <div id="login">
      <h2 className="login">Faça seu login</h2>

      <form>
        <div id="campoEmail" class="campoEmail">
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email'/>
        </div>

        <div id="campoSenha" class="campoSenha">
          <label htmlFor="password"><b>Senha</b></label>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password'/>
        </div>

        <button type="button" onClick={() => handleLogin()} className="botaoEntrar">Entrar</button>
      </form>

      <h3 className="cadastro">Ainda não tem uma conta? <a href="#">Cadastre-se aqui!</a></h3>
    </div>
  );
};

export default Login
