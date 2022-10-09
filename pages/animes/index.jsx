import React from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dbConnect from "../../lib/dbConnect";
import Anime from "../../models/Anime";
import Image from "next/image";


export default function Home({ animes }) {
  console.log(animes);
  return  (
    <div>
      <Layout title="Lista de Animes | Animation TV"
      description="Lista de Series Animadas en Español y Subtituladas">
        <main className="container separator">
          <h1>Lista de Animes </h1>
          <div className="row separator">
          {
              animes.map(({ _id, titulo, imageurl, sinopsis,  }) => (
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
    var findbytipo = { tipo: 'anime'};
    const result = await Anime.find({}).sort(mysort);
    const animes = result.map((doc) => {
      const anime = doc.toObject();
      anime._id = anime._id.toString();
      return anime;
    });
    return { props: { animes } };
  } catch(e) {
    console.log(e);
    throw e;
  }
}
