import Head from "next/head";
import { TopBar } from "../components/TopBar";
import styles from "../styles/Bijoux.module.css";
import { fetchAPI } from "../api/api";
import Link from "next/link";

function Bijoux({ bijoux }) {
  console.log('bijoux props', bijoux);
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
              <li key={index}>
                <Link as={`/bijoux/${bijou.id}`} href={`/bijoux/[${bijou.id}]`}>
                  <a>{bijou.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [bijoux] = await Promise.all([fetchAPI("/bijouxes")]);
  console.log('bijoux', bijoux);
  return {
    props: {
      bijoux,
    },
  };
}

export default Bijoux;
