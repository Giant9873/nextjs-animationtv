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
    <Link href="/animes/24Fall/Dandadan">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/Dandadan - poster.jpg" width={578} height={850} alt="1"></Image>
          <div className="overlay">
            <h4 className="favotext">Dandadan</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/24Summer/FairyTail100-nenQuest">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/fairy tail 100 - poster.jpg" width={578} height={850} alt="2"></Image>
          <div className="overlay">
            <h4 className="favotext">Fairy Tail: 100-nen Quest</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/24Fall/DragonBallDaima">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/dragonballdaima - poster.jpg" width={578} height={850} alt="3"></Image>
          <div className="overlay">
            <h4 className="favotext">Dragon Ball Daima</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/animes/6645853fab8f0d365431b30e">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/kaiju n8 - poster.jpg" width={578} height={850} alt="4"></Image>
          <div className="overlay">
            <h4 className="favotext">Kaiju No. 8</h4>
          </div>
        </div>
    </Link>
    </div>


  </div>
  </div>
  )
}
