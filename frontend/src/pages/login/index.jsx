import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../api/index'
import Header from '../../components/Header';
import "../login/styles.css";
import { useEffect } from "react";

const Login = () => {

  useEffect(() => {
    document.getElementById('deslizaLogin').addEventListener('click', () =>{
      const cobertura = document.getElementById('cobertura');
      cobertura.classList.add('left');
      cobertura.classList.remove('right');
  
      const login = document.getElementById('deslizanteLogin');
      login.classList.add('esconde');
  
      const cadastro = document.getElementById('deslizanteCadastro');
      cadastro.classList.remove('esconde');
    })
  
    document.getElementById('deslizaCadastro').addEventListener('click', () => {
      const cobertura = document.getElementById('cobertura');
      cobertura.classList.add('right');
      cobertura.classList.remove('left');
  
      const login = document.getElementById('deslizanteLogin');
      login.classList.remove('esconde');
  
      const cadastro = document.getElementById('deslizanteCadastro');
      cadastro.classList.add('esconde');
    })
  });
  
  return (
    <>
      <Header />
      
      <div className="body">
      <div className="abaFormularios">

        <section className="formulario" id="login">
          <h1 className="titulo">Entrar</h1>
          <div className="campoPreenchimento">
            <input className="campoFormulario" type="text" placeholder="Email"/>
            <input className="campoFormulario" type="password" placeholder="Senha"/>
            <div className="botao">
              <button className="botaoLogin">ENTRAR</button>
            </div>
          </div>
        </section>

        <section className="formulario" id="cadastro">
          <h1 className="titulo">Criar Conta</h1>
          <div className="campoPreenchimento">
            <input className="campoFormulario" type="text" placeholder="Nome"/>
            <input className="campoFormulario" type="text" placeholder="Email"/>
            <input className="campoFormulario" type="password" placeholder="Senha"/>
            <div className="botao">
              <button className="botaoCadastro">CRIAR CONTA</button>
            </div>
          </div>
        </section>

        <section className="deslizante" id="deslizanteLogin">
          <h1 className="titulo">Bem-Vindo de Volta!</h1>
          <span className="subtitulo">Mantenha-se conectado fazendo login <br></br> com as suas informações!</span>
          <button className="botaoDeslizante" id="deslizaLogin">Já tenho conta!</button>
        </section>

        <section className="deslizante" id="deslizanteCadastro">
          <h1 className="titulo">Olá, colega!</h1>
          <span className="subtitulo">Insira algumas informações e comece <br></br> a sua jornada conosco!</span>
          <button className="botaoDeslizante" id="deslizaCadastro"> Quero criar uma conta</button>
        </section>

        <div id="cobertura"></div>

      </div>

      
      </div>

    </>
  );
};

export default Login
