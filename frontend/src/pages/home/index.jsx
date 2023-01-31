import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import Header from "../../components/Header";
import "./styles.css";

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/news/").then((res) => {
      setNoticias(res.data.news);
    });
  }, []);

  function handleNews() {
    const listaNoticias = noticias.map((news) => {
      return (
        <li key={news._id}>
          <div /*class="flex-container"*/ /*data-testid="home" id= {news._id? Number.parseInt(news._id, 10) : null}*/>
            <div id="areaNoticias" className="areaNoticias">
              <div id="noticia" className="noticia" >
                <div> 
                  <h3>{news.title}</h3>
                  <div className="imagensLaterais">
                    <img className="imagensThumb"
                      src={news.banner}
                      alt="banner"
                      onClick={() => {
                        navigate(`/verNoticia/${news._id}`);
                      }}
                    />
                  <span>{news.lead}</span>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return listaNoticias;
  }

  return (
    <div id="body">
      <Header />
    </div>
  );
};

export default Home;
