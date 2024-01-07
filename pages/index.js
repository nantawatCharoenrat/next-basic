import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Nantawat Basic home page
      </h1>
      <Image src="/shopping.svg" width={300} height={300} alt="logo"/>
      <p> welcome to Nantawat Basic NextJS</p>
      <Link href="/products" className={styles.btn}>
        all products
      </Link>
    </div>
  );
}
