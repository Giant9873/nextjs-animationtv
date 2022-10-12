import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Layout from "../components/Layout";
import Homecard from "./blog/homecard";
import Homeagregados from "./blog/homeagregados";

export default function Home() {
  return (
    <Layout
      title="Animation TV"
      description="Lo mejor de la animación en una sola web"
      imageog="/img/homepri.jpg"
    >
      <div className="topspace">
        <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12" >
            <h1 className="textprincipal"> Encuentra las mejores series y películas animadas en un solo lugar. </h1>
          </div>
          <div className="col-md-5 col-sm-12" >
            <br /><br />
            <Image src="/img/sukuna1.jpg" width={400} height={500} alt="1"></Image>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="container separator">
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
        </div>
      </div>
    </Layout>
  )
}
