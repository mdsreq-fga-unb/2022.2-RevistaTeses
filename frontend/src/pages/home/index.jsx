import React from 'react'
import { useEffect } from 'react'
import { api } from '../../api'
import Header from '../../components/Header'
import './styles.css'

const Home = () => {
  useEffect(() => {
    api.get("/news/").then((res) => {
      console.log(res.data)
    })
  })
  
  return (
  <div >

    <Header/>

      <div id="areaNoticias" className="areaNoticias">
        <div id="noticia" className="noticia">

        </div>
      </div>
      <div id="areaColunas" className="areaColunas">
        <div id="coluna" className="coluna">

        </div>
      </div>
      <div id="areaEventos" className="areaEventos">
        <div id="evento" className="evento">

        </div>
      </div>

  </div>
  )
}

export default Home