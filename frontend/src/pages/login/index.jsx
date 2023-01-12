import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../api/index'
import Header from '../../components/Header';
import "../login/styles.css";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [invalid, setInvalid] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    await api.post("/auth/login", {email: email, password: password})
    .then(function(res){
      setInvalid("");
      navigate("/perfil")
      console.log(res.data)
    })
    .catch((err) => {
      setInvalid("E-mail ou senha incorreta");
    })
  }

  return (
    <>
      <Header />

      <div id="login" data-testid="area_login">
        <form className="login">
          <span className="loginTitulo"> Faça seu login </span>

          <div className="areaEmail" data-validate="É necessário um e-mail válido: ex@abc.xyz">
            <input className="input100" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          </div>

          <div className="areaSenha" data-validate="É necessário inserir uma senha">
            <input className="input100" type="password" name="senha" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
          </div>

          <div className="botao">
            <button className="botao" type="button" onClick={() => handleLogin()}>Entrar</button>
          </div>
          <div className="textoAlerta">

            <span className="textoAlerta">{invalid}</span>
          </div>

          <div className="textoCriar">
            <a className="textoCriar" href="/cadastro">Crie sua conta</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login
