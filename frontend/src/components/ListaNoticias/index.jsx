import { useNavigate } from 'react-router-dom';
import './styles.css'

const ListaNoticias = (props) => {
  const navigate = useNavigate();

  function handleNews(noticias) {
    const listaNoticias = noticias.map((news) => {
      return (
        <li key={news._id}>
          <div>
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

  return <ul>{handleNews(props.noticias)}</ul>;
};

export default ListaNoticias;
