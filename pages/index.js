import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Nantawat</title>
      <mata name="keyword" content="Nantawat,หล่อมากๆ,หล่อมากมาย"/> 
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Nantawat Basic home page
      </h1>
      <Image src="/shopping.svg" width={400} height={400} alt="logo"/>
      <p> welcome to Nantawat Basic NextJS</p>
      <Link href="/products" className={styles.btn}>
        all products
      </Link>
    </div>
    </>
  );
}
