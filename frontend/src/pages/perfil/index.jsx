import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

import EditorProfile from "../../components/EditorProfile";
import ChiefProfile from "../../components/ChiefProfile";
import Header from "../../components/Header";
import "./styles.css";

const Perfil = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState(0);
  const [accountTitle, setAccountTitle] = useState("Leitor");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(
        "/user",
        { _id: "" },
        { headers: { Authorization: document.cookie } }
      )
      .then(function (res) {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setAccount(res.data.user.account);
        setId(res.data.user._id)
        if (account === 10) {
          setAccountTitle("Editor-Chefe");
        } else if (account === 1) {
          setAccountTitle("Editor");
        } else {
          setAccountTitle("Leitor");
        }
      });
  }, );

  function handleLogout() {
    api
      .post(
        "/auth/logout",
        { _id: "" },
        { headers: { Authorization: document.cookie } }
      )
      .then(function (res) {
        navigate("/");
      });
  }

  function handleEditor() {
    if (account === 10 || account === 1) {
      return <EditorProfile user={id} />;
    }
  }

  function handleChief() {
    if (account === 10) {
      return <ChiefProfile />;
    }
  }

  return (
    <>
      <Header />
      <h2>Informações da conta</h2>
      <div className="containerA">
        <div className="textContainer">
          <span className="info">{name}</span>
        </div>
        <div className="textContainer">
          <span className="info">{email}</span>
        </div>
        <div className="textContainer">
          <span className="info">{accountTitle}</span>
        </div>
        <button
          className="botaoA"
          type="button"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
        <button
          className="botaoA"
          type="button"
          onClick={() => {
            navigate("/perfil/editar");
          }}
        >
          Editar Conta
        </button>
        <button
          className="botaoA"
          type="button"
          onClick={() => {
            navigate("/perfil/senha");
          }}
        >
          Trocar a Senha
        </button>
      </div>
      {handleEditor()}
      {handleChief()}
    </>
  );
};

export default Perfil;
