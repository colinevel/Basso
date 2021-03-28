import Head from "next/head";
import { TopBar } from "../components/TopBar";
import styles from "../styles/Bijoux.module.css";
import { fetchAPI } from "../api/api";
import Link from "next/link";
import Image from "next/image";

function Bijoux({ bijoux }) {
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
            return (
              <div key={bijou.id} className={styles.ImgContainer}>
                <>
                  <Image
                    className={styles.bijouList}
                    src={bijou.mainImage.url}
                    alt='logo'
                    width={250}
                    height={250}
                  />
                  <Link as={`/bijoux/${bijou.id}`} href={`/bijoux/[bijou]`}>
                    <a>
                      <div className={styles.ImgOverlay}>
                        Plus d'infos sur {bijou.title}
                      </div>
                    </a>
                  </Link>
                </>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [bijoux] = await Promise.all([fetchAPI("/bijouxes")]);
  return {
    props: {
      bijoux,
    },
  };
}

export default Bijoux;
