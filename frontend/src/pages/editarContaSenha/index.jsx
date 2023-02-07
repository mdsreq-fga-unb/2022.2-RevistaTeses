import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../../api/index";
import Header from "../../components/Header";
import "./styles.css";

const EditarContaSenha = () => {

  const [passwordVerify, setPasswordVerify] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  const token = cookies.get("Authorization")


  const handleEditPassword = async () => {
    const token = cookies.get("Authorization");
    await api
      .post("/auth/verify", { password: passwordVerify, token: token })
      .then(async function (res) {
        setInvalid("");
        if (newPassword === newPassword2) {
          await api
            .patch("/user/update", { password: newPassword, token: token })
            .then(function (res) {
              navigate("/perfil");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setInvalid("A senha nova não foi digitada igual");
        }
      })
      .catch((err) => {
        setInvalid("Senha incorreta");
      });
  };

  async function handleEditAccount() {
    await api
      .post("/auth/verify", { password: password, token: token })
      .then(async function (res) {
        setInvalid("");
        await api
          .patch("/user/update", { 
            name: name,
            email: email,
            password: password,
            token: token,
          })
          .then(function (res) {
            navigate("/perfil");
          })
          .catch((err) => {
            if (err.response.data.error === "Email already registered") {
              setInvalid("Email já registrado");
            } else if (err.response.data.error === "Invalid Email") {
              setInvalid("Email inválido");
            }
          });
      });
  }

  useEffect(() => {
    api.post(
      "/user",
      { _id: "", token: token },
      )
      .then(function (res) {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
      });

    document.getElementById("deslizaDados").addEventListener("click", () => {
      setInvalid("");

      const cobertura = document.getElementById("cobertura");
      cobertura.classList.add("right");
      cobertura.classList.remove("left");

      const login = document.getElementById("deslizanteDados");
      login.classList.add("esconde");

      const cadastro = document.getElementById("deslizanteSenha");
      cadastro.classList.remove("esconde");

      setInvalid("");
    });

    document.getElementById("deslizaSenha").addEventListener("click", () => {
      setInvalid("");

      const cobertura = document.getElementById("cobertura");
      cobertura.classList.add("left");
      cobertura.classList.remove("right");

      const login = document.getElementById("deslizanteDados");
      login.classList.remove("esconde");

      const cadastro = document.getElementById("deslizanteSenha");
      cadastro.classList.add("esconde");

      setInvalid("");
    });
  },[]);

  return (
    <>
      <Header />

      <div className="forms">
        <div className="abaFormularios">
          <section className="formulario" id="cadastro">
            <h1 className="titulo">Senha</h1>
            <div className="campoPreenchimento">
              <input
                className="campoFormulario"
                type="password"
                name="passwordVerify"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
                placeholder="Digite a senha atual"
              />
              <input
                className="campoFormulario"
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Digite a nova senha"
              />
              <input
                className="campoFormulario"
                type="password"
                name="newPassword2"
                value={newPassword2}
                onChange={(e) => setNewPassword2(e.target.value)}
                placeholder="Digite a nova senha novamente"
              />
              <div className="botao">
                <button className="botaoEditPassword" onClick={() => handleEditPassword()}>
                  TROCAR A SENHA
                </button>
                <span>{invalid}</span>
              </div>
            </div>
          </section>

          <section className="formulario" id="login">
            <h1 className="titulo">Dados</h1>
            <div className="campoPreenchimento">
              <input
                className="campoFormulario"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
              <input
                className="campoFormulario"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="campoFormulario"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a sua senha"
              />
              <div className="botao">
                <button className="botaoEditAccount" onClick={() => handleEditAccount()}>
                  EDITAR
                </button>
              </div>
              <span>{invalid}</span>
            </div>
          </section>

          <section className="deslizante esconde" id="deslizanteSenha">
            <h1 className="titulo">Mudar a senha</h1>
            <span className="subtitulo">
              Deseja mudar a senha? <br></br> Sem problema, digite sua senha atual,<br></br> em seguida a nova senha nos campos seguintes
            </span>
            <button className="botaoDeslizante" id="deslizaSenha">
              Mudar os meus dados
            </button>
          </section>

          <section className="deslizante" id="deslizanteDados">
          <h1 className="titulo">Edição de informações</h1>
            <span className="subtitulo">
              Aqui estão os seus dados atuais, <br></br>fique a vontade para trocar os seus dados,<br></br> em seguida confirme com a sua senha
            </span>
            <button className="botaoDeslizante" id="deslizaDados">
              Quero mudar a senha
            </button>
          </section>

          <div id="cobertura"></div>
        </div>
      </div>
    </>
  );
};

export default EditarContaSenha;
