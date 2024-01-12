import styles from "@/styles/About.module.css"
import Image from "next/image"
import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>

                <title>About | Nantawat</title>
                <mata name="keyword" content="Nantawat,หล่อมากๆ,หล่อมากมาย" />

            </Head>

                <div className={styles.container}>

                    <h1 className={styles.title}>
                        Nantawat Basic about page
                    </h1>
                    <Image src="/about.svg" width={400} height={400} alt="logo" />
                    <p> welcome to Nantawat Basic NextJS</p>

                </div>

        </>
    )
}