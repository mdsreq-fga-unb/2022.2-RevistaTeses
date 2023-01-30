import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import { api } from "../../api/index";
import Header from "../../components/Header";
import "./styles.css";


const TrocarSenha = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  
  const cookies = new Cookies()
  
  const handleEdit = async () => {
    const token = cookies.get("Authorization");
    await api
    .post(
      "/auth/verify",
      { password: password, token: token }
      )
      .then(async function (res) {
        setInvalid("");
        if(newPassword === newPassword2){
          await api
          .patch(
            "/user/update",
            { password: newPassword, token: token }
          )
          .then(function (res) {
            navigate("/perfil");
          })
          .catch((err) => {
            console.log(err);
          });
        } else {
          setInvalid("A senha nova não foi digitada igual")
        }
      })
      .catch((err) => {
        setInvalid("Senha incorreta");
      });
  };

  return (
    <>
      <Header />

      <div id="editar" data-testid="area_trocar_senha">
        <form className="editar">
          <span className="editarTitulo"> Trocar a Senha </span>

          <div className="areaInput">
            <input
              className="input100"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha Atual"
            />
          </div>

          <div className="areaInput">
            <input
              className="input100"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Digite a nova senha"
            />
          </div>

          <div
            className="areaSenha"
            data-validate="É necessário inserir uma senha"
          >
            <input
              className="input100"
              type="password"
              name="newPassword2"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)}
              placeholder="Digite a nova senha novamente"
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

export default TrocarSenha;
