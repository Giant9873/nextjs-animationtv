import Head from "next/head";
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children , title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.defaulProps = {
    title: "Animation TV",
    description: "Lo mejor de la animación en una sola web"
};
