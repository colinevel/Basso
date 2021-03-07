import { TopBar } from "../../components/TopBar";
import styles from "../../styles/Bijou.module.css";
import { fetchAPI } from "../../api/api.js";

function Bijou({ bijou }) {

  return (
    <div className={styles.container}>
      <TopBar />    
      <h2>{bijou.title}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const bijoux = await fetchAPI("/bijouxes");

  const paths = bijoux.map((bijou) => ({
    params: { bijou: bijou.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const bijou = await fetchAPI(`/bijouxes/${params.bijou}`);

  return {
    props: { bijou },
  };
}

export default Bijou;
