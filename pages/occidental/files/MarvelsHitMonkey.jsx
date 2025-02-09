import Layout from "../../../components/Layout";
import Link from 'next/link';
import Image from "next/image";
import Favoritos from "../../../components/Favoritos";
import Modal from "../../../components/ModalPlay";
import { useState } from "react";
import { Fragment } from "react";

export default function HitMonkey() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);

  return (
    <Fragment><div>
    <Layout title={"Descargar Marvel's Hit-Monkey - Español Latino - 10/10"}
    description="Lista de Series Animadas en Español " imageog={"/img/Dandadan - banner.jpg"}>
      <div className="topspace dandada fondoimg">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12"><br /><br />
              <h1 className="texttitulo">Marvel's Hit-Monkey</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">Un mono de nieve japonés, ayudado por el fantasma de un asesino estadounidense, emprende una búsqueda
              de venganza a través del inframundo de Tokio y se convierte en el famoso "asesino de asesinos".
              </p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> Acción / Comedia Satírica / Sobrenatural / Superhéroes / Fantasía</ul>
              <ul><b>Año de Estreno : </b> Nov. 17, 2021</ul>
              <ul><b>Capítulos : </b> 10/10</ul>
              <ul><b>Studio : </b> Marvel Television</ul>
              <ul><b>Estado : </b> Finalizado</ul>
              <ul><b>Peso :</b> 400 MB</ul>
              <ul><b>Resolución :</b> 1080p Full HD</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> No Tiene</ul>
              <ul><b>Secuela : </b> Marvel's Hit-Monkey S2</ul>

              <br /><br />
              <p className="starpunt">★★★★★</p>
              <p className="puntumyanime">Puntuación en IMDb : 7.8</p><br />
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ Marvel's Hit-Monkey - Enlaces de Descarga - 10/10 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://ouo.io/C73XlAk"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://cuty.io/aFCe3UnD5Pe"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Mediafire </button> </a>
              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://shrinkme.ink/55Rbkbbv"} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> Mega </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://cuty.io/nRLK8pOv8k"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg"> Mega </button> </a>
              </div>

            </div>
            <br /><br /><br />


            <h1 className="textlist">☰ Marvel's Hit-Monkey - Lista de Capitulos - 10/10 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap01.jpg"} />
                  <h2 className="fontcap"> CAP 1 </h2> <a onClick={()=>{setShowModal(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap02.jpg"} />
                  <h2 className="fontcap"> CAP 2 </h2> <a onClick={()=>{setShowModal2(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap03.jpg"} />
                  <h2 className="fontcap"> CAP 3 </h2> <a onClick={()=>{setShowModal3(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap04.jpg"} />
                  <h2 className="fontcap"> CAP 4 </h2> <a onClick={()=>{setShowModal4(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap05.jpg"} />
                  <h2 className="fontcap"> CAP 5 </h2> <a onClick={()=>{setShowModal5(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap06.jpg"} />
                  <h2 className="fontcap"> CAP 6 </h2> <a onClick={()=>{setShowModal6(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap07.jpg"} />
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
                <Image className="card-img-top crop1" src={"/img/poster/loop7 kaime - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">Jujutsu Kaisen</h4>
                </div>
              </div></Link>
              <Link href={"/"}><div className="card" >
                <Image className="card-img-top crop1" src={"/img/poster/loop7 kaime - poster.jpg"} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center"></h4>
                </div>
              </div></Link>
              </div>
            </div>
            <Favoritos />

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}
            videourl={"https://filemoon.sx/e/4z5chxds0bgy/_A-TV_1080p__Dandadan_-_01"}>
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}
            videourl={"https://filemoon.sx/e/3wheur1im7nt/_A-TV_1080p__Dandadan_-_02"}>
            </Modal>

            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}
            videourl={"https://filemoon.sx/e/7c4yl3bvnz9g/_A-TV_1080p__Dandadan_-_03"}>
            </Modal>

            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}
            videourl={"https://filemoon.sx/e/osera4spn11i/_A-TV_1080p__Dandadan_-_04"}>
            </Modal>

            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}
            videourl={"https://filemoon.sx/e/55q0awigp9ji/_A-TV_1080p__Dandadan_-_05"}>
            </Modal>

            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}
            videourl={"https://filemoon.sx/e/aqz4jxe2yzji/_A-TV_1080p__Dandadan_-_06"}>
            </Modal>

            <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}
            videourl={"https://filemoon.sx/e/ro4cmazel8bc/_A-TV_1080p__Dandadan_-_07"}>
            </Modal>
          </div>

      </div>

    </Layout>
    </div></Fragment>
  )
}
