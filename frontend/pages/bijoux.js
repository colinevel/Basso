import Head from "next/head";
import { TopBar } from "../components/TopBar";
import styles from "../styles/Bijoux.module.css";
import { fetchAPI } from "../api/api";
import Link from "next/link";

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
          {bijoux.map((bijou, index) => {
            return (
              <Link
                as={`/bijoux/${bijou.id}`}
                href={`/bijoux/[${bijou.id}]`}
                key={index}
              >
                <li>
                  <h2>{bijou.title}</h2>
                  <div className={styles.imageContainer}>
                    <img
                      alt={`${bijou.image1[0].alternativeText}`}
                      src={`http://localhost:1337${bijou.image1[0].url}`}
                    />
                  </div>
                </li>
              </Link>
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
