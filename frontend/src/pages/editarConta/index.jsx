import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import { api } from "../../api/index";
import Header from "../../components/Header";
import "./styles.css";

const cookies = new Cookies()
const token = cookies.get("Authorization");

const EditarConta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    api.post(
      "/user",
      { _id: "", token: token },
      )
      .then(function (res) {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
      });
  }, []);

  const handleEdit = async () => {
    await api
      .post(
        "/auth/verify",
        { password: password, token: token },
      )
      .then(async function (res) {
        setInvalid("");
        await api
          .patch(
            "/user/update",
            { name: name, email: email, password: password, token: token },
          )
          .then(function (res) {
            navigate("/perfil");
          })
          .catch((err) => {
            setInvalid("Email já utilizado");
            console.log(err);
          });
      })
      .catch((err) => {
        setInvalid("Senha incorreta");
      });
  };

  return (
    <>
      <Header />

      <div id="editar" data-testid="area_editar">
        <form className="editar">
          <span className="editarTitulo"> Edição de conta </span>

          <div className="areaInput">
            <input
              className="input100"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
          </div>

          <div className="areaInput">
            <input
              className="input100"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </div>

          <div
            className="areaSenha"
            data-validate="É necessário inserir uma senha"
          >
            <input
              className="input100"
              type="password"
              name="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </div>

          <div className="botao">
            <button
              className="botao"
              type="button"
              onClick={() => handleEdit()}
            >
              Atualizar
            </button>
          </div>

          <div className="textoAlerta">
            <span className="textoAlerta">{invalid}</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditarConta;
