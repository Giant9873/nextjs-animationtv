import Head from "next/head";
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children , title, description, imageog }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={"https://nextjs-animationtv.vercel.app/"+imageog} />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.defaulProps = {
    title: "Animation TV",
    description: "Lo mejor de la animación en una sola web",
    imageog: "/img/home-animesbg.jpg" 
};
