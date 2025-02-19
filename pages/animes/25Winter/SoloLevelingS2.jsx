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
    <Layout title={"Descargar Solo Leveling S2: Arise from the Shadow - Sub. Español - 07/11"}
    description="Lista de Series Animadas en Español " imageog={"/img/Dandadan - banner.jpg"}>
      <div className="topspace sololevs2 fondoimg">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12"><br /><br />
              <h1 className="texttitulo">Solo Leveling S2: Arise from the Shadow</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">Cuando Jin-Woo y algunos otros cazadores de bajo rango son los únicos sobrevivientes de una mazmorra que resulta ser un desafío
              mayor de lo esperado inicialmente, llama la atención una vez más y los gremios de cazadores se interesan cada vez más en él. Mientras tanto, un extraño
              cazador que ha estado perdido durante diez años regresa con una terrible advertencia sobre un evento catastrófico inminente. A medida que la calamidad se
              acerca, Jin-Woo debe seguir subiendo de nivel para asegurarse de que nada le impida alcanzar su objetivo final: salvar la vida de su madre. </p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> Shonen / Acción / Aventura / Fantasía </ul>
              <ul><b>Año de Estreno : </b> Ene. 05, 2025</ul>
              <ul><b>Capítulos : </b> 07/13</ul>
              <ul><b>Studio : </b> A-1 Pictures</ul>
              <ul><b>Estado : </b> En Emisión</ul>
              <ul><b>Peso :</b> 350 MB</ul>
              <ul><b>Resolución :</b> 1080p Full HD</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> Solo Leveling</ul>
              <ul><b>Secuela : </b> No Tiene</ul>

              <br /><br />
              <p className="starpunt">★★★★★</p>
              <p className="puntumyanime">Puntuación en MyAnimeList : 8.85</p><br />
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ Solo Leveling S2 - Enlaces de Descarga - 07/13 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://cuty.io/kPxYnbc17Xz7"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://stfly.biz/7NFgy"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>

            </div><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://ouo.io/ixrHdnP"} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> Fireload </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://shrinkme.ink/CX10SRc"} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> Fireload </button> </a> <br /><br />
              </div>

            </div> <br /><br /><br />


            <h1 className="textlist">☰ Solo Leveling S2 - Lista de Capitulos - 07/13 :</h1><br /><br />
            <h3 className="textlist">**Al abrir esperar unos segundos a que cargue el reproductor.</h3><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt="1" width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap01.jpg"} />
                  <h2 className="fontcap"> CAP 1 </h2> <a onClick={()=>{setShowModal(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="2" width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap02.jpg"} />
                  <h2 className="fontcap"> CAP 2 </h2> <a onClick={()=>{setShowModal2(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="3" width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap03.jpg"} />
                  <h2 className="fontcap"> CAP 3 </h2> <a onClick={()=>{setShowModal3(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="4" width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap04.jpg"} />
                  <h2 className="fontcap"> CAP 4 </h2> <a onClick={()=>{setShowModal4(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="5" width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap05.jpg"} />
                  <h2 className="fontcap"> CAP 5 </h2> <a onClick={()=>{setShowModal5(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap06.jpg"} />
                  <h2 className="fontcap"> CAP 6 </h2> <a onClick={()=>{setShowModal6(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/sololevs2cap07.jpg"} />
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
              <Link href={"/animes/25Winter/SakamotoDays"}><div className="card" >
                <Image className="card-img-top crop1" src={"/img/poster/sakamoto days - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">Sakamoto Days</h4>
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
            videourl={"https://filemoon.to/e/iy2baghv6s48/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_01"}>
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}
            videourl={"https://filemoon.to/e/1aux7zvi70tn/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_02"}>
            </Modal>

            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}
            videourl={"https://filemoon.to/e/tp2fl7s5uhcc/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_03"}>
            </Modal>

            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}
            videourl={"https://filemoon.to/e/96dfzn30934o/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_04"}>
            </Modal>

            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}
            videourl={"https://filemoon.to/e/anryn8fombqo/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_05"}>
            </Modal>

            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}
            videourl={"https://filemoon.to/d/gxt1rd0t3qk6/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_06"}>
            </Modal>

            <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}
            videourl={"https://filemoon.to/d/fd752jadp8fu/_A-TV_1080p__Solo_Leveling_S2_-_Arise_from_the_Shadow_-_07"}>
            </Modal>


          </div>

      </div>

    </Layout>
    </div></Fragment>
  )
}
