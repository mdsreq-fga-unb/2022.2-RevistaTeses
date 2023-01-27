import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'

import { api } from '../../api/index'
import Header from '../../components/Header';
import "../login/styles.css";

const Login = () => {

  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies()

  function handleRegister(){
    api.post("/user/register", {name: name, email: email, password: password})
    .then(async (res) => {
      await api.post("/auth/login", {email: email, password: password}).then((res) => {
        cookies.set('Authorization', res.data.token, {path: '/', maxAge: 86400, secure: true, sameSite: 'none'})
      })
      navigate("/perfil")
    })
    .catch((err) => {
      if(err.response.data.error === "Email already registered"){
        setInvalid("Email já registrado")
      } else if(err.response.data.error === "Invalid Email"){
        setInvalid("Email inválido")
      }
    })
  }

  const handleLogin = async () => {
    await api.post("/auth/login", {email: email, password: password})
    .then(function(res){
      setInvalid("");
      cookies.set('Authorization', res.data.token, {path: '/', maxAge: 86400, secure: true, sameSite: 'none'})
      navigate("/perfil")
    })
    .catch((err) => {
      console.log(err)
      setInvalid("E-mail ou senha incorreta");
    })
  }

  useEffect(() => {
    document.getElementById('deslizaLogin').addEventListener('click', () =>{
      const cobertura = document.getElementById('cobertura');
      cobertura.classList.add('left');
      cobertura.classList.remove('right');
  
      const login = document.getElementById('deslizanteLogin');
      login.classList.add('esconde');
  
      const cadastro = document.getElementById('deslizanteCadastro');
      cadastro.classList.remove('esconde');

      setInvalid("")
    })
  
    document.getElementById('deslizaCadastro').addEventListener('click', () => {
      const cobertura = document.getElementById('cobertura');
      cobertura.classList.add('right');
      cobertura.classList.remove('left');
  
      const login = document.getElementById('deslizanteLogin');
      login.classList.remove('esconde');
  
      const cadastro = document.getElementById('deslizanteCadastro');
      cadastro.classList.add('esconde');

      setInvalid("")
    })
  });
  
  return (
    <>
      <Header />
      
      <div className="body">
      <div className="abaFormularios">

        <section className="formulario" id="cadastro">
          <h1 className="titulo">Criar Conta</h1>
          <div className="campoPreenchimento">
          <input className="campoFormulario" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
          <input className="campoFormulario" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input className="campoFormulario" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
          <div className="botao">
              <button className="botaoCadastro" onClick={() => handleRegister()}>CRIAR CONTA</button>
            <span>{invalid}</span>
          </div>
          </div>
        </section>

        <section className="formulario" id="login">
          <h1 className="titulo">Entrar</h1>
          <div className="campoPreenchimento">
            <input className="campoFormulario" type="text" value={emailLog} onChange={(e) => setEmailLog(e.target.value)} placeholder="Email"/>
            <input className="campoFormulario" type="password" value={passwordLog} onChange={(e) => setPasswordLog(e.target.value)} placeholder="Senha"/>
            <div className="botao">
              <button className="botaoLogin" onClick={() => handleLogin()}>ENTRAR</button>
            </div>
            <span>{invalid}</span>
          </div>
        </section>

        <section className="deslizante" id="deslizanteCadastro">
          <h1 className="titulo">Olá, colega!</h1>
          <span className="subtitulo">Insira algumas informações e comece <br></br> a sua jornada conosco!</span>
          <button className="botaoDeslizante" id="deslizaCadastro"> Já tenho conta!</button>
        </section>

        <section className="deslizante" id="deslizanteLogin">
          <h1 className="titulo">Bem-Vindo de Volta!</h1>
          <span className="subtitulo">Mantenha-se conectado fazendo login <br></br> com as suas informações!</span>
          <button className="botaoDeslizante" id="deslizaLogin">Quero criar uma conta</button>
        </section>

        <div id="cobertura"></div>

      </div>

      
      </div>

    </>
  );
};

export default Login
