import React from "react";
import { useState } from "react";
import {api} from "../../api"
import "./styles.css";

const EditorProfile = (params) => {
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [lead, setLead] = useState("");
  const [text, setText] = useState("");

  function handlePost() {
    api.post(
      "/news/create",
      { title: title, banner: banner, lead: lead, text: text, user: params.user },
      { headers: { Authorization: document.cookie } }
    );
  }

  return (
    <>
      <div className="containerB">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          type="text"
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          placeholder="Link para o banner"
        />
        <input
          type="text"
          value={lead}
          onChange={(e) => setLead(e.target.value)}
          placeholder="Lead"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Texto"
        />
        <button className="botaoA" onClick={() => handlePost()} type="button">
          Postar Notícia
        </button>
      </div>
    </>
  );
};

export default EditorProfile;
