import styles from "../styles/Contacts.module.css";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href='/'>
            <Image
              src='/images/logo-basso.png'
              alt='logo'
              width={50}
              height={50}
              className={styles.image}
            />
          </Link>
          <NavBar />
        </div>
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
          <div className={styles.contacts}>
              <a href='mailto:augustin.basso@gmail.com'>
                augustin.basso@gmail.com
              </a>
              <a className={styles.insta} href="https://www.instagram.com/basso_bijou/" target="_blank">
                <img alt='instagram' src='/images/instagram.svg' />
                <p>@basso_bijou</p>
              </a>
          </div>
        </div>
      </div>
    </>
  );
}
