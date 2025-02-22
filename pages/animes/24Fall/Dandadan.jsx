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
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);

  return (
    <Fragment><div>
    <Layout title={"Descargar Dandadan - Sub. Español - 12/12"}
    description="Lista de Series Animadas en Español " imageog={"/img/banners/Dandadan - banner.jpg"}>
      <div className="topspace dandada fondoimg">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12"><br /><br />
              <h1 className="texttitulo">Dandadan</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">Momo Ayase es una chica de secundaria que cree en los fantasmas, pero no en los extraterrestres,
              mientras que su compañero de clase "Okarun" cree en los extraterrestres pero no en los fantasmas.
              En una apuesta para determinar quién tiene razón, los dos deciden visitar por separado lugares asociados con lo oculto
              y lo sobrenatural: Ayase visita al primero y el chico visita al segundo. Cuando los dos llegan a sus respectivos lugares,
              resulta que ninguno de ellos estaba equivocado y que tanto los extraterrestres como los fantasmas existen...
</p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> Shonen / Acción / Comedia / Sobrenatural </ul>
              <ul><b>Año de Estreno : </b> Oct. 04, 2024</ul>
              <ul><b>Capítulos : </b> 12/12</ul>
              <ul><b>Studio : </b> Science SARU</ul>
              <ul><b>Estado : </b> Finalizado / Completo</ul>
              <ul><b>Peso :</b> 350 MB</ul>
              <ul><b>Resolución :</b> 1080p Full HD</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> No Tiene</ul>
              <ul><b>Secuela : </b> No Tiene</ul>

              <br /><br />
              <p className="starpunt">★★★★★</p>
              <p className="puntumyanime">Puntuación en MyAnimeList : 8.61</p><br />
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ Dandadan - Enlaces de Descarga - 12/12 :</h1><br /><br /><br />
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
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={"https://fc-lc.xyz/WRlhuP"} rel="noopener noreferrer" target="_blank" >
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
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={"https://fc-lc.xyz/DOsaWE"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg"> Mega </button> </a>
              </div>
            </div>
            <br /><br /><br />


            <h1 className="textlist">☰ Dandadan - Lista de Capitulos - 12/12 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt="1" width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap01.jpg"} />
                  <h2 className="fontcap"> CAP 1 </h2> <a onClick={()=>{setShowModal(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="2" width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap02.jpg"} />
                  <h2 className="fontcap"> CAP 2 </h2> <a onClick={()=>{setShowModal2(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="3" width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap03.jpg"} />
                  <h2 className="fontcap"> CAP 3 </h2> <a onClick={()=>{setShowModal3(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="4" width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap04.jpg"} />
                  <h2 className="fontcap"> CAP 4 </h2> <a onClick={()=>{setShowModal4(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt="5" width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap05.jpg"} />
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
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap08.jpg"} />
                  <h2 className="fontcap"> CAP 8 </h2> <a onClick={()=>{setShowModal8(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap09.jpg"} />
                  <h2 className="fontcap"> CAP 9 </h2> <a onClick={()=>{setShowModal9(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap10.jpg"} />
                  <h2 className="fontcap"> CAP 10 </h2> <a onClick={()=>{setShowModal10(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap11.jpg"} />
                  <h2 className="fontcap"> CAP 11 </h2> <a onClick={()=>{setShowModal11(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/dandadancap12.jpg"} />
                  <h2 className="fontcap"> CAP 12 </h2> <a onClick={()=>{setShowModal12(true)}} >
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

            <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}
            videourl={"https://filemoon.to/e/ytmtb8qiqcjq"}>
            </Modal>

            <Modal isVisible={showModal9} onClose={() => setShowModal9(false)}
            videourl={"https://filemoon.to/e/806bov7zynna"}>
            </Modal>

            <Modal isVisible={showModal10} onClose={() => setShowModal10(false)}
            videourl={"https://filemoon.to/e/jii1xk186en4"}>
            </Modal>

            <Modal isVisible={showModal11} onClose={() => setShowModal11(false)}
            videourl={"https://filemoon.to/e/cw1b32cqy4f4"}>
            </Modal>

            <Modal isVisible={showModal12} onClose={() => setShowModal12(false)}
            videourl={"https://filemoon.to/e/yf5otrlbl6hw"}>
            </Modal>
          </div>

      </div>

    </Layout>
    </div></Fragment>
  )
}
