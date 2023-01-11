import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api";

import Header from "../../components/Header";
import './styles.css'

const Perfil = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState(0);  

  useEffect(() => {
    api.get('/user', {_id:""}, {headers: {'Authorization': document.cookie}})
      .then(function(res){
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setAccount(res.data.user.account);
      })
  })

  function handleLogout() {
    api.post("/auth/logout", {_id:""}, {headers: {'Authorization': document.cookie}})
      .then(function(res){
        console.log(res)
      })
  }

  return ( 
    <>
      <Header/>
      <div>
        <h2>Informações da conta</h2>
        <span>{name}</span>
        <span>{email}</span>
        <span>{account}</span>
        <button type="button" onClick={() => {handleLogout()}}>Editar</button>
      </div>
    </>
  );
}

export default Perfil;
