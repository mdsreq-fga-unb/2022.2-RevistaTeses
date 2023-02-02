import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from '../../api/index'
import Header from '../../components/Header';
import "../verNoticia/styles.css";

const VerNoticia = (props) => {


//pelo navigate passar o id da noticia pra cá
// pegar o id da noticia recebida e pedir o titulo, lead, imagem, autores e texto pra api
// usar os dados recebidos na página

const {idNoticia} = useParams();

const [title, setTitle] = useState("")
const [lead, setLead] = useState("")
const [text, setText] = useState("")
const [banner, setBanner] = useState("")
// const [author, setAuthor] = useState("")

useEffect(() => {
    api.get(`/news/find/${idNoticia}`, { _id: idNoticia }, )
    .then((res) => {
        setTitle(res.data.news.title);
        setLead(res.data.news.lead);
        setText(res.data.news.text);
        setBanner(res.data.news.banner);
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });
}, []);;


return (
    <div>
        <Header />
        <div id= "noticia" className="noticiaContainerExt">
            <div id= "noticiaContainerInt" className="noticiaContainerInt"> 
                <h1 className="title">{title}</h1>
                <h2 className="lead">{lead}</h2> 
                <img className="imagensThumb"
                    src={banner}
                    alt="banner"
                    /> 
                {/* <h3>{author}</h3>  */}
                <div dangerouslySetInnerHTML={{__html: text}} />
            </div>
        </div>
    </div>

);
};

export default VerNoticia
