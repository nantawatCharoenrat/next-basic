import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Product.module.css"
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  console.log(data);
  return {
    props: { products: data.products },
  };
}

export default function Index(props) {
  const { products } = props;

  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด | Nantawat</title>
        <meta name="keyword" content="Nantawat,หล่อมากๆ,หล่อมากมาย" />
      </Head>
      <div className={styles.container}>
        {products.map((item) => (
          <div key={item.id}>
            <Link href={'/products/'+item.id} className={styles.LLL}>
              <h2 className={styles.title}>{item.id} . {item.title} | {item.price}$</h2>
              <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
            </Link>

          </div>
        ))}
      </div>
    </>
  );
}
