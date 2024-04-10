import React from "react";
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Favoritos() {
  return (
  <div>
  <div className="separator row" >

    <h1 className="texfavorito center">LOS MÁS POPULARES</h1>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/652b0a5d8d6e45d6108cb8ef">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/shangrila - poster.jpg" width={578} height={850} alt="1"></Image>
          <div className="overlay">
            <h4 className="favotext">Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/65aedac9435545c9110a98aa">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/mashle s2 - poster.jpg" width={578} height={850} alt="2"></Image>
          <div className="overlay">
            <h4 className="favotext">Mashle: Shinkakusha Kouho Senbatsu Shiken-hen</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/654d4b28a45dd1106d007411">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/sousou no frieren - poster.jpg" width={578} height={850} alt="3"></Image>
          <div className="overlay">
            <h4 className="favotext">Sousou no Frieren</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/65ad9a8e2ee1f261eb618584">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/sololeveling - poster.jpg" width={578} height={850} alt="4"></Image>
          <div className="overlay">
            <h4 className="favotext">Solo Leveling</h4>
          </div>
        </div>
    </Link>
    </div>


  </div>
  </div>
  )
}
