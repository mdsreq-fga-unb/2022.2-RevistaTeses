import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../../api";
import "./styles.css";


const ChiefProfile = () => {
  const cookies = new Cookies();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = cookies.get("Authorization");
  
  useEffect(() => {
    const getAllInfo = async () => {
      api.post("/user/all", { _id: "", token: token }).then((res) => {
        setUsers(res.data.users);
      });
    };
    getAllInfo();
  }, []);

  function handleUsers() {
    let conta = ""
    const listaUsers = users.map((user) => {
      if (user.account === 1 || user.account === 0) {
        if(user.account === 1){
          conta = "Editor"
        } else if(user.account === 0){
          conta = "Leitor"
        }
        return (
          <>
            <tr key={user._id}>
              <td className="column" id="nome">{user.name}</td>
              <td className="column" id="email">{user.email}</td>
              <td className="column" id="tipoConta">{user.account}</td>
              <td className="column" id="atualizarConta">
                <button
                  className="botaoAtualizar"
                  onClick={() => handleAccountChange(user)}
                >
                  Atualizar
                </button>
              </td>
            </tr>
          </>
        );
      }
    });
    return listaUsers;
  }

  function handleAccountChange(user) {
    let troca = 0;
    if (user.account === 1) {
      troca = 0;
    }
    if (user.account === 0) {
      troca = 1;
    }
    api
      .patch(
        "/user/update",
        { _id: user._id, account: troca, token: token },
      )
      .then((res) => {
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tableConstruction() {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th className="column" id="nome">Nome</th>
              <th className="column" id="email">Email</th>
              <th className="column" id="tipoConta">Conta</th>
              <th className="column" id="atualizarPetrmissao">Atualizar Permissão</th>
            </tr>

            {handleUsers()}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <div className="listaUsuarios">
      <h1 className="chiefTitle">Lista de Usuários</h1>
      {tableConstruction()}
    </div>
  );
};

export default ChiefProfile;
