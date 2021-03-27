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
      <h2 className={styles.title}>{bijou.title}</h2>
      {/* <img
        alt='test'
        src={`https://basso-bijoux-backend.herokuapp.com${imagesArray[0].url}`}
      /> */}
      <div className={styles.content}>
        <div className={styles.imagesList}>
          {imagesArray.map((image, index) => {
            return (
              <li key={index}>
                <div className={styles.imageContainer}>
                  <img
                    alt={`${image.alternativeText}`}
                    src={`https://basso-bijoux-backend.herokuapp.com${image.url}`}
                  />
                  {/* <Image
                    alt={`${image.alternativeText}`}
                    height={600}
                    width={400}
                    src={`https://basso-bijoux-backend.herokuapp.com${image.url}`}
                  /> */}
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
