import styles from "../styles/NavBar.module.css";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <li>
          <Link href='/bijoux'>
            <a>bijoux</a>
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <a>à propos</a>
          </Link>
        </li>
        <li>
          <Link href='/presse'>
            <a>presse</a>
          </Link>
        </li>
      </nav>
    </div>
  );
};
