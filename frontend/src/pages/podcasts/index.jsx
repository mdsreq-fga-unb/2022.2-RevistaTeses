import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ListaNoticias from "../../components/ListaNoticias";
import { api } from "../../api";

const Podcasts = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    api.post("/news/", {type: "podcast"}).then((res) => {
      setNoticias(res.data.news);
    });
  }, []);

  return (
    <div id="body">
      <Header />

      <ListaNoticias noticias={noticias} />
    </div>
  );
};
export default Podcasts;
