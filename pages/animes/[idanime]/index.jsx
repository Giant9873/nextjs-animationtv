import Layout from "../../../components/Layout";
import dbConnect from "../../../lib/dbConnect";
import Anime from "../../../models/Anime";
import Link from 'next/link';
import Image from "next/image";
import Favoritos from "../../../components/Favoritos";

const AnimePage = ({ success, error, anime }) => {
  console.log(success);
  console.log(error);
  console.log(anime);

  if (!success) {
      return(
        <Layout>
        <div className="container separator">
          <h1>  {error} </h1>
          <Link href="/animes">
            <a>Volver...</a>
          </Link>
        </div>
        </Layout>
      )
  }

  return (
    <div>
    <Layout title={"Descargar "+anime.titulo+" - Sub. Español - "+anime.capitulos}
    description="Lista de Series Animadas en Español " imageog={anime.imagecap5}>
      <div className="topspace ">


      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="">
              <Image className="border-gradient border-gradient-purple" src={anime.imageurl} alt="1" width="100%" height="140" layout="responsive" /> <br />
              <p className="starpunt">{anime.estrellas}</p><br />
              <p className="puntumyanime">Puntuación en MAL : {anime.myanimelist}</p><br />
            </div>
          </div>

          <div className="col-md-9 col-sm-6 col-12">
              <h1 className="texttitulo">{anime.titulo}</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">{anime.sinopsis}</p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> {anime.genero} </ul>
              <ul><b>Año de Estreno : </b> {anime.fecha}</ul>
              <ul><b>Capítulos : </b> {anime.capitulos}</ul>
              <ul><b>Studio : </b> {anime.studio}</ul>
              <ul><b>Estado : </b> {anime.estado}</ul>
              <ul><b>Peso :</b> {anime.peso}</ul>
              <ul><b>Resolución :</b> {anime.calidad}</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> <Link href={anime.liprecuela} className="linkcss3">
                                      {anime.precuela}
                                    </Link> </ul>
              <ul><b>Secuela : </b> <Link href={anime.lisecuela} className="linkcss3">
                                      {anime.secuela}
                                    </Link> </ul>
            </div>
          </div>


        </div>
      </div>

      </div>

      <div className="separator">
      <div className="container"><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
            <h1 className="textlist">⟱ {anime.titulo} - Enlaces de Descarga - {anime.capitulos} :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={anime.links1x1} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {anime.servidor1} </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={anime.links1x2} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {anime.servidor1} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={anime.links1x3} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {anime.servidor1} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 04</h3><br />
                <a href={anime.links1x4} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {anime.servidor1} </button> </a>
              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={anime.links2x1} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> {anime.servidor2} </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={anime.links2x2} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg center"> {anime.servidor2} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={anime.links2x3} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg center"> {anime.servidor2} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6 ">
                <h3>Part. 04</h3><br />
                <a href={anime.links2x4} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg center"> {anime.servidor2} </button> </a>
              </div>
            </div>
            <br /><br /><br />


            <h1 className="textlist">☰ {anime.titulo} - Lista de Capitulos - {anime.capitulos} :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap1} />
                  <h2 className="fontcap"> CAP 1 </h2> <a href={anime.online1} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap2} />
                  <h2 className="fontcap"> CAP 2 </h2> <a href={anime.online2} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap3} />
                  <h2 className="fontcap"> CAP 3 </h2> <a href={anime.online3} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap4} />
                  <h2 className="fontcap"> CAP 4 </h2> <a href={anime.online4} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap5} />
                  <h2 className="fontcap"> CAP 5 </h2> <a href={anime.online5} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap6} />
                  <h2 className="fontcap"> CAP 6 </h2> <a href={anime.online6} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap7} />
                  <h2 className="fontcap"> CAP 7 </h2> <a href={anime.online7} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap8} />
                  <h2 className="fontcap"> CAP 8 </h2> <a href={anime.online8} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap9} />
                  <h2 className="fontcap"> CAP 9 </h2> <a href={anime.online9} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap10} />
                  <h2 className="fontcap"> CAP 10 </h2> <a href={anime.online10} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap11} />
                  <h2 className="fontcap"> CAP 11 </h2> <a href={anime.online11} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap12} />
                  <h2 className="fontcap"> CAP 12 </h2> <a href={anime.online12} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap13} />
                  <h2 className="fontcap"> CAP 13 </h2> <a href={anime.online13} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap14} />
                  <h2 className="fontcap"> CAP 14 </h2> <a href={anime.online14} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap15} />
                  <h2 className="fontcap"> CAP 15 </h2> <a href={anime.online15} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap16} />
                  <h2 className="fontcap"> CAP 16 </h2> <a href={anime.online16} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap17} />
                  <h2 className="fontcap"> CAP 17 </h2> <a href={anime.online17} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap18} />
                  <h2 className="fontcap"> CAP 18 </h2> <a href={anime.online18} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap19} />
                  <h2 className="fontcap"> CAP 19 </h2> <a href={anime.online19} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap20} />
                  <h2 className="fontcap"> CAP 20 </h2> <a href={anime.online20} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap21} />
                  <h2 className="fontcap"> CAP 21 </h2> <a href={anime.online21} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap22} />
                  <h2 className="fontcap"> CAP 22 </h2> <a href={anime.online22} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap23} />
                  <h2 className="fontcap"> CAP 23 </h2> <a href={anime.online23} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap24} />
                  <h2 className="fontcap"> CAP 24 </h2> <a href={anime.online24} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap25} />
                  <h2 className="fontcap"> CAP 25 </h2> <a href={anime.online25} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap26} />
                  <h2 className="fontcap"> CAP 26 </h2> <a href={anime.online26} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap27} />
                  <h2 className="fontcap"> CAP 27 </h2> <a href={anime.online27} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div  className="card"> <Image alt=" " width="100%" height="56" layout="responsive" src={anime.imagecap28} />
                  <h2 className="fontcap"> CAP 28 </h2> <a href={anime.online28} rel="noopener noreferrer" target="_blank">
                  <div className="overlay"> <h2 className="fontgr">‣ </h2> </div> </a>
                </div>
              </div>

            </div>
            </div>
            <div className="col-md-1 col-sm-6 col-12"></div>
            <div className="col-md-3 col-sm-12 col-12">
              <h2 className=""> También te puede interesar :</h2><br />
              <Link href={anime.lireco1}><div className="card" >
                <Image className="card-img-top crop1" src={anime.imgreco1} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{anime.namereco1}</h4>
                </div>
              </div></Link>
              <Link href={anime.lireco2}><div className="card" >
                <Image className="card-img-top crop1" src={anime.imgreco2} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{anime.namereco2}</h4>
                </div>
              </div></Link>
              <Link href={anime.lireco3}><div className="card" >
                <Image className="card-img-top crop1" src={anime.imgreco3} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{anime.namereco3}</h4>
                </div>
              </div></Link>
              </div>
            </div>
            <Favoritos />
          </div>

      </div>

    </Layout>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();

    const anime = await Anime.findById(params.idanime).lean();

    if (!anime) {
      return { props: { success: false, error: "Anime no encontrado" } };
    }
    console.log(anime);
    anime._id = `${anime._id}`;

    return { props: { success: true, anime } };
  } catch(error) {
    console.log(error);
    if (error.kind === 'ObjectId') {
        return { props: { success: false, error: 'Id no válido' } };
    }
    return { props: { success: false, error: 'Error de Servidor' } };
  }
}

export default AnimePage;
