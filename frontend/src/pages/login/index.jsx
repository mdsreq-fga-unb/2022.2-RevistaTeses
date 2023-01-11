import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../api/index'
import Header from "../../components/Header";
import "../login/styles.css";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    await api.post("/auth/login", {email: email, password: password})
    .then(function(res){
      navigate("/perfil")
      console.log(res.data)
    })
  }

  return (
    <>
      <Header />

      <div id="login" data-testid="area_login">
        <form class="login">
          <span class="loginTitulo"> Faça seu login </span>

          <div class="areaEmail" data-validate="É necessário um e-mail válido: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="E-mail" />
          </div>

          <div class="areaSenha" data-validate="É necessário inserir uma senha">
            <input class="input100" type="password" name="senha" placeholder="Senha" />
          </div>

          <div class="botao">
            <button class="botao">Entrar</button>
          </div>

          <div class="textoEsqueci">
            <a class="textoEsqueci" href="#"> Esqueci usuário/senha </a>
          </div>

          <div class="textoCriar">
            <a class="textoCriar" href="#">Crie sua conta</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login
