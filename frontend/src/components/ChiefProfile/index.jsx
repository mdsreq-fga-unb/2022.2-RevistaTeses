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
        console.log(users)
      });
  }, []);

  function handleUsers() {
    const listaUsers = users.map((user) => {
      if (user.account === 1 || user.account === 0) {
        return (
          <>
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.account}</td>
              <td><button className="botaoA" onClick={() => handleAccountChange(user)}>Editar</button></td>
            </tr>
          </>
        );
      }
    });
    return listaUsers;
  }

  function handleAccountChange(user) {
    let troca = 0
    if(user.account === 1){
        troca = 0
    } 
    if(user.account === 0){
        troca = 1
    }
    api.patch("/user/update", { _id: user._id, account: troca, }, {headers:{'Authorization':document.cookie}})
    .then((res) => {
        console.log(res)
        navigate(0)
    }).catch((err) => {
        console.log(err)
    })
  }

  function tableConstruction() {
    return (
      <>
        <table>
            <tbody>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Conta</th>
            <th>Editar Conta</th>
          </tr>

          {handleUsers()}
          </tbody>
        </table>
      </>
    );
  }

  return <div className="containerB">{tableConstruction()}</div>;
};

export default ChiefProfile;
