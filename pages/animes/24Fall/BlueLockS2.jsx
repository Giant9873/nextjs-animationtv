import Layout from "../../../components/Layout";
import Link from 'next/link';
import Image from "next/image";
import Favoritos from "../../../components/Favoritos";
import Modal from "../../../components/ModalPlay";
import { useState } from "react";
import { Fragment } from "react";

export default function BlueLockS2() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);

  return (
    <Fragment>
    <div>
    <Layout title={"Descargar Blue Lock S2 - Vs. U-20 Japan - Sub. Español - 07/14"}
    description="Lista de Series Animadas en Español " imageog={"/img/bluelocks2banner.jpg"}>
      <div className="topspace blocks2 fondoimg">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12"><br /><br />
              <h1 className="texttitulo">Blue Lock S2 - Vs. U-20 Japan</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">La siguiente fase del controvertido proyecto Blue Lock está en marcha y el grupo de candidatos se ha reducido
              a solo 35. De los delanteros restantes, solo unos pocos serán elegidos para jugar en un próximo partido de exhibición contra el actual
              equipo de fútbol japonés sub-20. Jugar en este partido tiene una salvedad: ganar otorgará a los jugadores el derecho a representar a
              la nación como el nuevo equipo sub-20, pero perder significará el fin de Blue Lock en su totalidad. Entre los que quedan en carrera
              se encuentra Yoichi Isagi, quien está tratando de aceptar sus propias habilidades.
              </p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> Shonen / Sports </ul>
              <ul><b>Año de Estreno : </b> Oct. 06, 2024</ul>
              <ul><b>Capítulos : </b> 07/14</ul>
              <ul><b>Studio : </b> 8bit</ul>
              <ul><b>Estado : </b> En Emisión</ul>
              <ul><b>Peso :</b> 350 MB</ul>
              <ul><b>Resolución :</b> 1080p Full HD</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> Blue Lock</ul>
              <ul><b>Secuela : </b> No Tiene</ul>

              <br /><br />
              <p className="starpunt">★★★★☆</p>
              <p className="puntumyanime">Puntuación en MyAnimeList : 6.72</p><br />
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ Blue Lock S2 - Vs. U-20 Japan - Enlaces de Descarga - 07/14 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://cuty.io/5QVbA"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Fireload </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://ouo.io/4QS2nrq"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> Fireload </button> </a>
              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={"https://cuty.io/BmQW31Ux"} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> Mega </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={"https://stfly.biz/7ykSF"} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg"> Mega </button> </a>
              </div>



            </div>
            <br /><br /><br />


            <h1 className="textlist">☰ Blue Lock S2 - Vs. U-20 Japan - Lista de Capitulos - 07/14 :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap01.jpg"} />
                  <h2 className="fontcap"> CAP 1 </h2> <a onClick={()=>{setShowModal(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap02.jpg"} />
                  <h2 className="fontcap"> CAP 2 </h2> <a onClick={()=>{setShowModal2(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap03.jpg"} />
                  <h2 className="fontcap"> CAP 3 </h2> <a onClick={()=>{setShowModal3(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap04.jpg"} />
                  <h2 className="fontcap"> CAP 4 </h2> <a onClick={()=>{setShowModal4(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap05.jpg"} />
                  <h2 className="fontcap"> CAP 5 </h2> <a onClick={()=>{setShowModal5(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap06.jpg"} />
                  <h2 className="fontcap"> CAP 6 </h2> <a onClick={()=>{setShowModal6(true)}} >
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={"/img/caps/blocks2cap07.jpg"} />
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
                  <h4 className="card-title center">Slam Dunk</h4>
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
            videourl={"https://filemoon.sx/e/ccn559lqun4v/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_01"}>
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}
            videourl={"https://filemoon.sx/e/57if2zt2c0vu/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_02"}>
            </Modal>

            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}
            videourl={"https://filemoon.sx/e/k0472vuf4pum/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_03"}>
            </Modal>

            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}
            videourl={"https://filemoon.sx/e/oawdzvw605r6/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_04"}>
            </Modal>

            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}
            videourl={"https://filemoon.sx/e/peyzii8jip1l/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_05"}>
            </Modal>

            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}
            videourl={"https://filemoon.sx/e/b81djvo6soxo/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_06"}>
            </Modal>

            <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}
            videourl={"https://filemoon.sx/e/hmkiw4d7bn54/_A-TV_1080p__Blue_Lock_S2_-_Vs_U-20_Japan_-_07"}>
            </Modal>
          </div>

      </div>

    </Layout>
    </div></Fragment>
  )
}
