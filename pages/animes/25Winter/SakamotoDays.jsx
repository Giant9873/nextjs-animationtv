import Layout from "../../../components/Layout";
import Link from 'next/link';
import Image from "next/image";
import Favoritos from "../../../components/Favoritos";
import Modal from "../../../components/ModalPlay";
import { useState } from "react";
import { Fragment } from "react";

export default function Dandadan() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);


  return (
    <Fragment><div>
    <Layout title={"Descargar Sakamoto Days - Sub. Español - 07/11"}
    description="Lista de Series Animadas en Español " imageog={"/img/banners/Sakadays - banner.jpg"}>
      <div className="topspace sakadays fondoimg">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12"><br /><br />
              <h1 className="texttitulo">Sakamoto Days</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">Tarou Sakamoto fue considerado el mejor asesino a sueldo de todos los tiempos. Temido por muchos, estaba en la cima del mundo clandestino hasta que conoció y se enamoró de una mujer. Como resultado, Sakamoto abandonó su vida criminal y ahora trabaja como dependiente de una tienda. Dejar atrás su turbio pasado resulta más difícil de lo que Sakamoto imaginaba en un principio. Muchos de sus antiguos rivales y socios no creen que haya dejado realmente el negocio y aparecen con la esperanza de acabar con él. Con la prohibición de matar, Sakamoto deberá encontrar formas creativas de someter a sus enemigos y evitar que hagan daño a su familia, a su tienda y a la pequeña ciudad en la que reside. </p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> Shonen / Acción / Comedia / Crimen Organizado </ul>
              <ul><b>Año de Estreno : </b> Ene. 04, 2025</ul>
              <ul><b>Capítulos : </b> 07/11</ul>
              <ul><b>Studio : </b> TMS Entertainment</ul>
              <ul><b>Estado : </b> En Emisión</ul>
              <ul><b>Peso :</b> 350 MB</ul>
              <ul><b>Resolución :</b> 1080p Full HD</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> No Tiene</ul>
              <ul><b>Secuela : </b> No Tiene</ul>

              <br /><br />
              <p className="starpunt">★★★★☆</p>
              <p className="puntumyanime">Puntuación en MyAnimeList : 7.80</p><br />
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ Sakamoto Days - Enlaces de Descarga - 07/11 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://ouo.io/VEYEVX"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://cuty.io/ZfXMiN"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>


            </div><br /><br /><br />


            <h1 className="textlist">☰ Sakamoto Days - Lista de Capitulos - 07/11 :</h1><br /><br />
            <h3 className="textlist">**Al abrir esperar unos segundos a que cargue el reproductor.</h3><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt="1" width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap01.jpg"} />
                  <h2 className="fontcap"> CAP 1 </h2> <a onClick={()=>{setShowModal(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="2" width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap02.jpg"} />
                  <h2 className="fontcap"> CAP 2 </h2> <a onClick={()=>{setShowModal2(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="3" width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap03.jpg"} />
                  <h2 className="fontcap"> CAP 3 </h2> <a onClick={()=>{setShowModal3(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="4" width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap04.jpg"} />
                  <h2 className="fontcap"> CAP 4 </h2> <a onClick={()=>{setShowModal4(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="5" width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap05.jpg"} />
                  <h2 className="fontcap"> CAP 5 </h2> <a onClick={()=>{setShowModal5(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap06.jpg"} />
                  <h2 className="fontcap"> CAP 6 </h2> <a onClick={()=>{setShowModal6(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/sakadayscap07.jpg"} />
                  <h2 className="fontcap"> CAP 7 </h2> <a onClick={()=>{setShowModal7(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>



            </div>
            </div>
            <div className="col-md-1 col-sm-6 col-12"></div>
            <div className="col-md-3 col-sm-12 col-12">
              <h2 className=""> También te puede interesar :</h2><br />
              <Link href={"/animes/24Fall/DragonBallDaima"}><div className="card" >
                <Image className="card-img-top crop1" src={"/img/poster/dragonballdaima - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">Dragon Ball Daima</h4>
                </div>
              </div></Link>
              <Link href={"/"}><div className="card" >
                <Image className="card-img-top crop1" src={"/img/poster/solo s2 - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">Solo Leveling S2: Arise from the Shadow</h4>
                </div>
              </div></Link>
              <Link href={"/"}><div className="card" >
                <Image className="card-img-top crop1" src={"/img/poster/fairy tail 100 - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">Fairy Tail: 100-nen Quest</h4>
                </div>
              </div></Link>
              </div>
            </div>
            <Favoritos />

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}
            videourl={"https://filemoon.to/e/719r9xur72f9/_A-TV_1080p__Sakamoto_Days_-_01"}>
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}
            videourl={"https://filemoon.to/e/e0q2xplpqfht/_A-TV_1080p__Sakamoto_Days_-_02"}>
            </Modal>

            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}
            videourl={"https://filemoon.to/e/0mpikbwfbyxt/_A-TV_1080p__Sakamoto_Days_-_03"}>
            </Modal>

            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}
            videourl={"https://filemoon.to/e/afe1o1a2uhl4/_A-TV_1080p__Sakamoto_Days_-_04"}>
            </Modal>

            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}
            videourl={"https://filemoon.to/e/tgduub3fi27i/_A-TV_1080p__Sakamoto_Days_-_05"}>
            </Modal>

            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}
            videourl={"https://filemoon.to/e/fkuh06ucry7n/_A-TV_1080p__Sakamoto_Days_-_06"}>
            </Modal>

            <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}
            videourl={"https://filemoon.to/e/4vmu268pv5ea/_A-TV_1080p__Sakamoto_Days_-_07"}>
            </Modal>


          </div>

      </div>

    </Layout>
    </div></Fragment>
  )
}
