import Head from "next/head";
import { TopBar } from "../components/TopBar";
import styles from "../styles/Bijoux.module.css";
import { fetchAPI } from "../api/api";
import Link from "next/link";
import Image from "next/image";

function Bijoux({ bijoux }) {
  console.log("bijoux props", bijoux);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Bijoux</title>
          <link rel='icon' href='/images/logo-basso.png' />
        </Head>
        <TopBar />
        <ul className={styles.list}>
          {bijoux.map((bijou) => {
            return bijou.mainImage ? (
              <div key={bijou.id} className={styles.ImgContainer}>
                <>
                  <Image
                    className={styles.bijouList}
                    src={bijou.mainImage.url}
                    alt='logo'
                    width={220}
                    height={220}
                  />
                  <Link
                    as={`/bijoux/${bijou.id}`}
                    href={`/bijoux/[${bijou.id}]`}
                  >
                    <div className={styles.ImgOverlay}>Plus d'infos</div>
                  </Link>
                </>
              </div>
            ) : null;
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [bijoux] = await Promise.all([fetchAPI("/bijouxes")]);
  console.log("bijoux", bijoux);
  return {
    props: {
      bijoux,
    },
  };
}

export default Bijoux;
