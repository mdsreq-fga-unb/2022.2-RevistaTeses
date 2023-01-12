import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './styles.css'

import Header from "../../components/Header";
import { api } from "../../api";

const Cadastro = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();

  function handleRegister(){
    api.post("/user/register", {name: name, email: email, password: password})
    .then(async (res) => {
      await api.post("/auth/login", {email: email, password: password})
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

  return (
    <>
      <Header />
      <div className="container" data-testid="area_cadastro">
        <div className="container-layout">
            <form className="login-form">
              <span className="login-form-title"> Criar Conta </span>

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <span className="textoAlerta">{invalid}</span>

              <div className="container-login-form-btn">
                <button type="button" onClick={() => handleRegister()} className="login-form-btn">Registrar</button>
              </div>

              <div className="text-center">
                <span className="txt1">Já possui conta? </span>
                <Link className="txt2" to="/login">
                Acessar com Email e Senha.
                </Link>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default Cadastro;
