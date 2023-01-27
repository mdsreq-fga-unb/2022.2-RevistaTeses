import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../../api";
import "./styles.css";


const EditorProfile = (props) => {
  const cookies = new Cookies();

  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [lead, setLead] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  
  function handlePost() {
    const token = cookies.get("Authorization");
    api
    .post("/news/create", {
      title: title,
        banner: banner,
        lead: lead,
        text: text,
        user: props.user,
        token: token,
      })
      .then((data) => {
        navigate(`/verNoticia/${res.data._id}`);
      });
  }

  return (
    <>
      
        <button
          className="botaoVerNoticias" //Ver notícias
          type="button"
          onClick={() => {
            //Ver as notícias - colocar back
          }}
        >
          Ver minhas notícias
        </button>
      <div className="containerB">
        <h1 className="editorTitle">Postar Nova Notícia</h1>
        <input
          className="input100"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          className="input100"
          type="text"
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          placeholder="Link para o banner"
        />
        <input
          className="input100"
          type="text"
          value={lead}
          onChange={(e) => setLead(e.target.value)}
          placeholder="Lead"
        />
        <textarea
          className="input1000"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Texto"
          cols="36"
          rows="4"
        />
        <button className="botaoA" onClick={() => handlePost()} type="button">
          Postar Notícia
        </button>
      </div>
    </>
  );
};

export default EditorProfile;
