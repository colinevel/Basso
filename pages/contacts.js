import Head from "next/head";
import styles from "../styles/Contacts.module.css";
import { TopBar } from "../components/TopBar";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>A propos</title>
          <link rel='icon' href='/images/logo-basso.png' />
        </Head>
        <div className={styles.topBar}>
          <TopBar />
        </div>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <p>
              Depuis une formation à l'AFEDAP en 2015 et un stage en prototypage
              et fabrication au sein d'un atelier parisien, j'imagine,
              conceptionne et fabrique mes bijoux dans mon atelier à Paris.
              <br />
              Chaque bijou est réalisé sur commande, à la main.
            </p>
            <p>
              Je sous-traite certaines étapes de la fabrication, comme la dorure
              par électrolyse ou la fonte cire perdue à des ateliers parisiens
              spécialisés.
            </p>
            <p>
              Je réponds régulièrement à des demandes personnelles et commandes
              spéciales. N'hésitez pas à me contacter pour en discuter.
            </p>
            <p>Augustin Basso</p>
            <p>Since graduating from AFEDAP Jewellery School in 2016 and interning in prototype manufacturing at a Parisian workshop, I have been creating, designing and making my own jewellery in my workshop.</p>
            <p>I do, however, rely on other artisans for some of the more technical step of the process, such as the electrolyctic gildind and lost wax casting, which I commission from specialised workshops around the city.</p>
            <p>Appart from my own collections, I also regularly work on special orders. Feel free to contact me for any requests you might have or just to chat.</p>
            <p>Augustin Basso</p>
            <div className={styles.contacts}>
              <a href='mailto:augustin.basso@gmail.com'>
                augustin.basso@gmail.com
              </a>
              <a
                className={styles.insta}
                href='https://www.instagram.com/basso_bijou/'
                target='_blank'
              >
                <img alt='instagram' src='/images/instagram.svg' />
                <p>@basso_bijou</p>
              </a>
            </div>
          </div>
          <div>
            <Image
              className={styles.portrait}
              src='/images/Portrait-Augustin-Basso.jpg'
              alt='Augustin Bassp'
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
