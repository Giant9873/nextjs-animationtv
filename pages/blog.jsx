import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function blog() {
  return (
    <Layout>

      <h1> Blog 2.0 </h1><br />
      <Link href="/">
        <a>Regresar</a>
      </Link><br /><br />
      <Image src="/img/1.jpg" width={600} height={600} alt="1"></Image>
    </Layout>

    )
}
