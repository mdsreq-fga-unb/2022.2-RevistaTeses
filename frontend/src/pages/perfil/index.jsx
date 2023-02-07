import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import { api } from "../../api";

import EditorProfile from "../../components/EditorProfile";
import Header from "../../components/Header";
import "./styles.css";

const Perfil = () => {
  const { state } = useLocation();
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState(0);
  const [accountTitle, setAccountTitle] = useState("Leitor");
  const navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("Authorization");
    console.log({ state });
    api.post("/user", { token: token }).then((res) => {
      setName(res.data.user.name);
      setEmail(res.data.user.email);
      setAccount(res.data.user.account);
      setUserId(res.data.user._id);
      if (account === 10) {
        setAccountTitle("Editor-Chefe");
      } else if (account === 1) {
        setAccountTitle("Editor");
      } else {
        setAccountTitle("Leitor");
      }
    });
  });

  async function handleDelete() {
    const token = cookies.get("Authorization");

    await api
      .post("/user/delete", { token: token })
      .then(function (res) {
        cookies.remove("Authorization");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    const token = cookies.get("Authorization");

    api.post("/auth/logout", { _id: "", token: token }).then(function (res) {
      cookies.remove("Authorization");
      navigate("/");
    });
  }

  function handleEditor() {
    if (account === 10 || account === 1) {
      if (state) {
        const { id, title, banner, lead, text, type } = state;
        return (
          <EditorProfile
            user={userId}
            id={id}
            title={title}
            banner={banner}
            lead={lead}
            text={text}
            type={type}
          />
        );
      }
      return <EditorProfile user={userId} />;
    }
  }

  function handleChief() {
    if (account === 10) {
      return (
        <button
          className="botaoListaUsuarios" //Ver notícias
          type="button"
          onClick={() => navigate("/perfil/listaUsuarios")}
        >
          Lista de usuários
        </button>
      );
    }
  }

  return (
    <>
      <Header />
      <div className="bodyPerfil">
        <div className="containerPerfil">
          <h3 className="tipoConta">{accountTitle}</h3>
          <svg
            className="iconePerfil"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="130"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="130"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="05d83ffb06">
                <path
                  d="M 45.460938 45.460938 L 329.710938 45.460938 L 329.710938 329.710938 L 45.460938 329.710938 Z M 45.460938 45.460938 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#05d83ffb06)">
              <path
                fill="#e7e7e7"
                d="M 288.078125 87.085938 C 261.234375 60.242188 225.542969 45.460938 187.582031 45.460938 C 149.621094 45.460938 113.929688 60.242188 87.085938 87.085938 C 60.242188 113.929688 45.460938 149.621094 45.460938 187.582031 C 45.460938 225.542969 60.242188 261.234375 87.085938 288.078125 C 113.929688 314.921875 149.621094 329.703125 187.582031 329.703125 C 225.542969 329.703125 261.234375 314.921875 288.078125 288.078125 C 314.921875 261.234375 329.703125 225.542969 329.703125 187.582031 C 329.703125 149.621094 314.921875 113.929688 288.078125 87.085938 Z M 93.535156 93.535156 C 118.65625 68.414062 152.054688 54.578125 187.582031 54.578125 C 223.109375 54.578125 256.507812 68.414062 281.628906 93.535156 C 306.75 118.65625 320.585938 152.054688 320.585938 187.582031 C 320.585938 217.113281 311.015625 245.171875 293.359375 268.234375 C 279.308594 248.585938 256.867188 236.976562 232.5 236.976562 L 142.664062 236.976562 C 118.296875 236.976562 95.859375 248.585938 81.804688 268.234375 C 64.148438 245.171875 54.578125 217.113281 54.578125 187.582031 C 54.578125 152.054688 68.414062 118.65625 93.535156 93.535156 Z M 187.582031 229.484375 C 224.097656 229.484375 253.804688 199.777344 253.804688 163.261719 C 253.804688 126.746094 224.097656 97.039062 187.582031 97.039062 C 151.066406 97.039062 121.359375 126.746094 121.359375 163.261719 C 121.359375 199.777344 151.066406 229.484375 187.582031 229.484375 Z M 187.582031 229.484375 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <h2 className="nome">{name}</h2>
          <h3 className="email">{email}</h3>

          <button
            className="botaoA" //editarConta
            type="button"
            onClick={() => {
              navigate("/perfil/editar");
            }}
          >
            Editar Conta
          </button>
          <button
            className="botaoA" //editarSenha
            type="button"
            onClick={() => {
              navigate("/perfil/senha");
            }}
          >
            Trocar a Senha
          </button>
          <button
            className="botaoA" //logout
            type="button"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
          <button
            className="botaoExcluir" //excluirConta
            type="button"
            onClick={() => handleDelete()}
          >
            Excluir Conta
          </button>
        </div>
        {handleEditor()}
        {handleChief()}
      </div>
    </>
  );
};

export default Perfil;
