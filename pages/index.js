import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basso Bijoux</title>
        <link rel='icon' href='/images/logo-basso.png' />
      </Head>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1>BASSO</h1>
          <p>bijoux</p>
        </div>
        <NavBar />
        <Image
          src='/images/LogoB-transparent.png'
          alt='logo'
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}
