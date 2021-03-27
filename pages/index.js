import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
// import { TopBar } from "../components/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basso Bijoux</title>
        <link rel='icon' href='/images/logo-basso.png' />
      </Head>
      <div className={styles.leftside}>
        <Image
          className={styles.logo}
          src='/images/logo-basso-transparent.png'
          alt='logo'
          width={150}
          height={150}
        />
        <div className={styles.brand_title}>
          <h1>BASSO</h1>
          <h2>bijoux</h2>
        </div>
      </div>
      <div className={styles.rightside}>
        <NavBar />
        <div className={styles.contacts}>
          <a
            className={styles.insta}
            href='https://www.instagram.com/basso_bijou/'
            target='_blank'
          >
            <img alt='instagram' src='/images/instagram.svg' />
            <p>@basso_bijou</p>
          </a>
          <a href='mailto:augustin.basso@gmail.com'>augustin.basso@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
