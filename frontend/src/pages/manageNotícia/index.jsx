import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";

import { api } from "../../api";
import Header from "../../components/Header";
import "./styles.css";

const cookies = new Cookie();
const token = cookies.get("Authorization");

const ManageNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const navigate = useNavigate();
  
  function handleDelete(id) {
    api.put("/news/delete", {_id: id , token: token})
    .then((res) => {
      console.log(res)
      navigate(0)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleEdit(item) {
    navigate('/perfil', {state: {id: item.id, title: item.title, banner: item.banner, lead: item.lead, text: item.text, type: item.type}})
  }
  
  useEffect(() => {
    api
      .post("/news/findByUser", { token: token })
      .then((res) => {
        setNoticias(res.data.news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleNews() {
    const listaNoticias = noticias.map((news) => {
      return (
        <li key={news._id}>
          <div /*class="flex-container"*/ /*data-testid="home" id= {news._id? Number.parseInt(news._id, 10) : null}*/
          >
            <div id="editNews">
              <div id="news">
                <div>
                  <h3>{news.title}</h3>
                  <div className="images">
                    <img
                      className="imageThumb"
                      src={news.banner}
                      alt="banner"
                      onClick={() => {
                        navigate(`/verNoticia/${news._id}`);
                      }}
                    />
                    <span>{news.lead}</span>
                    <button type="button" onClick={() => handleDelete(news._id)}>
                      Del
                    </button>
                    <button type="button" onClick={() => handleEdit({id: news._id, title: news.title, banner: news.banner, lead: news.lead, text: news.text, type: news.type})}>
                      Edit
                    </button>
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

      <ul>{handleNews()}</ul>
    </div>
  );
};
export default ManageNoticias;
