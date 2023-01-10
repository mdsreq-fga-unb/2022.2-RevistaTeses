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

  return ( 
    <>
      <Header/>
      <div>
        <h2>Informações da conta</h2>
        <span>{name}</span>
        <span>{email}</span>
        <span>{account}</span>
        <a href="/"><button type="button">Editar</button></a>
      </div>
    </>
  );
}

export default Perfil;
