import { TopBar } from "../../components/TopBar";
import styles from "../../styles/Bijou.module.css";
import { fetchAPI } from "../../api/api.js";
import Image from "next/link";

function Bijou({ bijou }) {
  const description = bijou.description;
  const imagesArray = bijou.images;

  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.titleContainer}>
          <h2 className={styles.title}>{bijou.title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.imagesList}>
          {imagesArray.map((image, index) => {
            return (
              <li key={index}>
                <div className={styles.imageContainer}>
                  <img alt={image.alternativeText} src={image.url} />
                </div>
                {image.caption && <p>{image.caption}</p>}
              </li>
            );
          })}
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
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
