import React from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dbConnect from "../../lib/dbConnect";
import Pelicula from "../../models/Pelicula";
import Image from "next/image";


export default function Home({ peliculas }) {
  console.log(peliculas);
  return  (
    <div>
      <Layout title="Lista de Películas | Animation TV"
      description="Lista de Películas Animadas en Español y Subtituladas">
        <main className="container separator">
          <h1>Lista de Películas </h1>
          <div className="row separator">
          {
              peliculas.map(({ _id, titulo, imageurl, }) => (
                <div className="col-md-2 col-sm-3 col-6" key={_id}>
                    <Link href={`${_id}`}>
                    <div className="card">

                      <Image className="card-img-top favoimg" src={imageurl} width={578} height={850} alt="1"></Image>
                      <div className="overlay">

                        <h4 className="favotext">{titulo}</h4>

                      </div>

                  </div>
                  </Link>
                  </div>
              ))
          }
          </div>
          
        </main>

      </Layout>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    await dbConnect();
    var mysort = { titulo: 1 };
    const result = await Pelicula.find({}).sort(mysort);
    const peliculas = result.map((doc) => {
      const pelicula = doc.toObject();
      pelicula._id = pelicula._id.toString();
      return pelicula;
    });
    return { props: { peliculas } };
  } catch(e) {
    console.log(e);
    throw e;
  }
}
