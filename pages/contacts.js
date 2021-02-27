import styles from "../styles/Home.module.css";

export default function Contacts() {
  return (
    <>
      <div className={styles.container}>
        <p>
          Depuis une formation à l'AFEDAP en 2015 et un stage en prototypage et
          fabrication au sein d'un atelier parisien, j'imagine, conceptionne et
          fabrique mes bijoux dans mon atelier à Paris.
          <br />
          Chaque bijou est réalisé sur commande, à la main
        </p>
        <p>
          Je sous-traite certaines étapes de la fabrication, comme la dorure par
          électrolyse ou la fonte cire perdue à des ateliers parisiens
          spécialisés.
        </p>
        <p>
          Je réponds régulièrement à des demandes personnelles et commandes
          spéciales. N'hésitez pas à me contacter pour en discuter
        </p>
        <p>Augustin Basso</p>
        <div>
          <a>augustin.basso@gmail.com</a>
        </div>
      </div>
    </>
  );
}
