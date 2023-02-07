import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import Cookies from "universal-cookie";

import "react-quill/dist/quill.snow.css";
import { api } from "../../api";
import "./styles.css";

const EditorProfile = (props) => {
  const cookies = new Cookies();

  const [formTitle, setFormTitle] = useState("Nova postagem");
  const [formButton, setFormButton] = useState("Postar");
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [lead, setLead] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState("noticia");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.id) {
      setTitle(props.title);
      setBanner(props.banner);
      setLead(props.lead);
      setText(props.text);
      setType(props.type);
      setFormTitle("Editar Notícia");
      setFormButton("Editar");
    }
  }, []);

  async function handlePost() {
    const token = cookies.get("Authorization");
    await api
      .post("/news/create", {
        title: title,
        banner: banner,
        lead: lead,
        text: text,
        user: props.user,
        type: type,
        token: token,
      })
      .then((data) => {
        navigate(`/verNoticia/${data._id}`);
      });
  }

  async function handleEdit() {
    const token = cookies.get("Authorization");
    await api
      .patch("/news/update", {
        _id: props.id,
        title: title,
        banner: banner,
        lead: lead,
        text: text,
        type: type,
        token: token,
      })
      .then((res) => {
        console.log(res);
        navigate(`/verNoticia/${props.id}`);
      });
  }

  return (
    <div className="bodyPerfilEditor">
      <div className="containerPostar">
        <h1 className="editorTitle">{formTitle}</h1>
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
        <ReactQuill className="textForm" theme="snow" value={text} onChange={setText} placeholder="Digite algo..."/>

        <div onChange={(e) => setType(e.target.value)}>
          <input
            type="radio"
            id="noticia"
            name="type"
            value="noticia"
            checked={type === "noticia"}
          />
          <label for="noticia">Notícia</label>

          <input
            type="radio"
            id="coluna"
            name="type"
            value="coluna"
            checked={type === "coluna"}
          />
          <label for="coluna">Coluna</label>

          <input
            type="radio"
            id="podcast"
            name="type"
            value="podcast"
            checked={type === "podcast"}
          />
          <label for="podcast">Podcast</label>

          <input
            type="radio"
            id="evento"
            name="type"
            value="evento"
            checked={type === "evento"}
          />
          <label for="evento">Evento</label>
        </div>

        <button
          className="botaoA"
          onClick={() => {
            if (props.id) {
              handleEdit();
            } else {
              handlePost();
            }
          }}
          type="button"
        >
          {formButton}
        </button>
      </div>
      <button
        className="botaoVerPostagens" //Ver notícias
        type="button"
        onClick={() => navigate("/minhasPostagens")}
      >
        Ver minhas postagens
      </button>
    </div>
  );
};

export default EditorProfile;
