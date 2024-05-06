import Layout from "../../../components/Layout";
import dbConnect from "../../../lib/dbConnect";
import Pelicula from "../../../models/Pelicula";
import Link from 'next/link';
import Image from "next/image";
import Favoritos from "../../../components/Favoritos";

const PeliculaPage = ({ success, error, pelicula }) => {
  console.log(success);
  console.log(error);
  console.log(pelicula);

  if (!success) {
      return(
        <Layout>
        <div className="container separator">
          <h1>  {error} </h1>
          <Link href="/peliculas">
            <a>Volver...</a>
          </Link>
        </div>
        </Layout>
      )
  }

  return (
    <div>
    <Layout title={"Descargar "+pelicula.titulo+" - Sub. Español - "+pelicula.calidad}
    description="Películas Animadas Subtituladas al Español " imageog={pelicula.imageurl}>
      <div className="topspace ">

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="">
              <Image className="border-gradient border-gradient-purple" src={pelicula.imageurl} alt="1" width="100%" height="140" layout="responsive" /> <br />
              <p className="starpunt">{pelicula.estrellas}</p><br />
              <p className="puntumyanime">Puntuación en MAL : {pelicula.myanimelist}</p><br />
            </div>
          </div>

          <div className="col-md-9 col-sm-6 col-12">
              <h1 className="texttitulo">{pelicula.titulo}</h1>
              <hr className="hrestilo1"/><br />
              <p className="textsino">{pelicula.sinopsis}</p><br />
            <div className="textdetalles">
              <ul><b>Género :</b> {pelicula.genero} </ul>
              <ul><b>Año de Estreno : </b> {pelicula.fecha}</ul>
              <ul><b>Duración : </b> {pelicula.duracion}</ul>
              <ul><b>Studio : </b> {pelicula.studio}</ul>
              <ul><b>Peso :</b> {pelicula.peso}</ul>
              <ul><b>Resolución :</b> {pelicula.calidad}</ul>
              <ul><b>Clave para Descomprimir :</b> AnimationTV</ul>
              <ul><b>Precuela :</b> <Link href={pelicula.liprecuela} className="linkcss3">
                                      {pelicula.precuela}
                                    </Link> </ul>
              <ul><b>Secuela : </b> <Link href={pelicula.lisecuela} className="linkcss3">
                                      {pelicula.secuela}
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
            <h1 className="textlist">⟱ {pelicula.titulo} - Enlaces de Descarga - {pelicula.calidad} :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={pelicula.links1x1} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {pelicula.servidor1} </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={pelicula.links1x2} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {pelicula.servidor1} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={pelicula.links1x3} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-warning btn-lg"> {pelicula.servidor1} </button> </a>
              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 01</h3><br />
                <a href={pelicula.links2x1} rel="noopener noreferrer" target="_blank">
                <button type="button" className="btn btn-danger btn-lg center"> {pelicula.servidor2} </button> </a> <br /><br />
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 02</h3><br />
                <a href={pelicula.links2x2} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg center"> {pelicula.servidor2} </button> </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <h3>Part. 03</h3><br />
                <a href={pelicula.links2x3} rel="noopener noreferrer" target="_blank" >
                <button type="button" className="btn btn-danger btn-lg center"> {pelicula.servidor2} </button> </a>
              </div>
            </div>
            <br /><br /><br />


            <h1 className="textlist">☰ {pelicula.titulo} - Ver Online - {pelicula.duracion} :</h1><br /><br /><br />
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
              <div className="iframe-16-9">
                  <iframe  title="Overlord"  src={pelicula.animeonline} frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>

            </div><br /><br />
            </div>
            <div className="col-md-1 col-sm-6 col-12"></div>
            <div className="col-md-3 col-sm-12 col-12">
              <h2 className=""> También te puede interesar :</h2><br />
            <div className="card" >
                <Image className="card-img-top crop1" src={pelicula.imgreco1} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{pelicula.namereco1}</h4>
                </div>
              </div>
              <div className="card" >
                <Image className="card-img-top crop1" src={pelicula.imgreco2} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{pelicula.namereco2}</h4>
                </div>
              </div>
              <div className="card" >
                <Image className="card-img-top crop1" src={pelicula.imgreco3} width={600} height={600} alt="1" />
                <div className="card-body">
                  <h4 className="card-title center">{pelicula.namereco3}</h4>
                </div>
              </div>
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

    const pelicula = await Pelicula.findById(params.idpelicula).lean();

    if (!pelicula) {
      return { props: { success: false, error: "Pelicula no encontrada u.u" } };
    }
    console.log(pelicula);
    pelicula._id = `${pelicula._id}`;

    return { props: { success: true, pelicula } };
  } catch(error) {
    console.log(error);
    if (error.kind === 'ObjectId') {
        return { props: { success: false, error: 'Id no válido' } };
    }
    return { props: { success: false, error: 'Error de Servidor' } };
  }
}

export default PeliculaPage;
