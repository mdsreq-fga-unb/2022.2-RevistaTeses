import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../../api";
import "./styles.css";

const EditorProfile = (props) => {
  const cookies = new Cookies();

  const [formTitle, setFormTitle] = useState("Postar Nova Notícia");
  const [formButton, setFormButton] = useState("Postar Notícia");
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [lead, setLead] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.id) {
      setTitle(props.title);
      setBanner(props.banner);
      setLead(props.lead);
      setText(props.text);
      setFormTitle("Editar Notícia")
      setFormButton("Editar")
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
        token: token,
      })
      .then((data) => {
        navigate(`/verNoticia/${data._id}`);
      });
  }

  async function handleEdit() {
    const token = cookies.get("Authorization");
    await api.patch("/news/update", {
      _id: props.id,
      title: title,
      banner: banner,
      lead: lead,
      text: text,
      token: token,
    }).then((res) => {
      console.log(res)
      navigate(`/verNoticia/${props.id}`)
    });
  }

  return (
    <>
      <button
        className="botaoVerNoticias" //Ver notícias
        type="button"
        onClick={() => navigate("/minhasNoticias")}
      >
        Ver minhas notícias
      </button>

      <button
        className="botaoPostarNoticia" //Postar nova notícia dropdown
        type="button"
        onClick={() => {
          //dropdown a aparece área de postar notícia
        }}
      >
        + Postar Nova Notícia
      </button>
      <div className="containerB">
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
        <textarea
          className="input1000"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Texto"
          cols="36"
          rows="4"
        />
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
    </>
  );
};

export default EditorProfile;
