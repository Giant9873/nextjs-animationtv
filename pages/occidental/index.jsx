import React from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import Head from 'next/head';
import Image from "next/image";
import OccidentalList from "./occidentallist";


export default function Home() {
  return  (
    <div>
      <Layout title="Lista de Animes | Animation TV"
      description="Lista de Series Animadas en Español y Subtituladas">
        <main className="separator">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <h1>Lista de Series :</h1> <br /></div>
            <div className="col-md-6 col-sm-6 col-12">
              <button className="btnnext btnselect"> 1 </button>
              <Link href="/occidental">
              <button className="btnnext btnnoselect" > 2 </button></Link>
            </div>
          </div>
          <OccidentalList />

          <div className="row center">
            <div className="col-md-12 col-sm-12 col-12">
              <button className="btnnext btnselect"> 1 </button>
              <Link href="/occidental">
              <button className="btnnext btnnoselect" > 2 </button></Link>
            </div>
          </div>
          </div>

        </main>

      </Layout>
    </div>
  );
}
