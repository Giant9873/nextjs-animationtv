import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Homecard from "./blog/homecard";
import Homeagregados from "./blog/homeagregados";

export default function Home() {
  return (
    <Layout
      title="Animation TV"
      description="Lo mejor de la animación en una sola web"
      imageog="/img/homepri.jpg"
    >
      <div className="homeportada">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12" >
              <h1 className="textprincipal"> Encuentra las mejores series y películas animadas en un solo lugar. </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" separator"><div className="container ">
          <div className="row">
            <div className="col-md-12 col-sm-12" >
              <h1 className="titulospri"> Animes de Temporada :  </h1>
              <Homecard />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12" >
              <h1 className="titulospri"> Últimas Actualizaciones :  </h1>
              <Homeagregados />
            </div>
          </div>
        </div></div>
      </div>
    </Layout>
  )
}
