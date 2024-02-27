import React from "react";
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Favoritos() {
  return (
  <div>
  <div className="row" >

    <h1 className="texfavorito center">LOS MÁS POPULARES</h1>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/65cc5ae6bcafa61cb5f8a78b">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/sokushi cheat - poster.jpg" width={578} height={850} alt="1"></Image>
          <div className="overlay">
            <h4 className="favotext">Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/64b05412562efda8c077b78f">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/jkaisens2 - poster.jpg" width={578} height={850} alt="2"></Image>
          <div className="overlay">
            <h4 className="favotext">Jujutsu Kaisen S2</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/654d4b28a45dd1106d007411">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/sousou no frieren - poster.jpg" width={578} height={850} alt="3"></Image>
          <div className="overlay">
            <h4 className="favotext">Sousou no Frieren</h4>
          </div>
        </div>
    </Link>
    </div>

    <div className="col-md-3 col-sm-3 col-6" >
    <Link href="/65b30b770ecbfa1255690a54">
        <div className="card">
          <Image className="card-img-top favoimg" src="/img/poster/classroom s3 - poster.jpg" width={578} height={850} alt="4"></Image>
          <div className="overlay">
            <h4 className="favotext">Classroom of the Elite III</h4>
          </div>
        </div>
    </Link>
    </div>


  </div>
  </div>
  )
}
