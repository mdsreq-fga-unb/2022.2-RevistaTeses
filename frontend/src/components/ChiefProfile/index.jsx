import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import "./styles.css";

const ChiefProfile = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(
        "/user/all",
        { _id: "" },
        { headers: { Authorization: document.cookie } }
      )
      .then((res) => {
        setUsers(res.data.users);
        console.log(users);
      });
  }, []);

  function handleUsers() {
    const listaUsers = users.map((user) => {
      if (user.account === 1 || user.account === 0) {
        return (
          <>
            <tr key={user._id}>
              <td className="column">{user.name}</td>
              <td className="column">{user.email}</td>
              <td className="column">{user.account}</td>
              <td className="column">
                <button
                  className="botaoA"
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
        { _id: user._id, account: troca },
        { headers: { Authorization: document.cookie } }
      )
      .then((res) => {
        console.log(res);
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
              <th className="column">Nome</th>
              <th className="column">Email</th>
              <th className="column">Conta</th>
              <th className="column">Atualizar Permissão</th>
            </tr>

            {handleUsers()}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <div className="containerB">
      <h1 className="chiefTitle">Lista de Usuários</h1>
      {tableConstruction()}
    </div>
  );
};

export default ChiefProfile;
