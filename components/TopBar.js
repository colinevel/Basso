import { NavBar } from "../components/NavBar";
import styles from "../styles/TopBar.module.css";
import Link from "next/link";
import Image from "next/image";

export const TopBar = () => {
  return (
    <>
      <div className={styles.topBar}>
        <Link href='/'>
          <div>
            <Image
              src='/images/logo-basso-transparent.png'
              alt='logo'
              width={80}
              height={80}
              className={styles.image}
            />
          </div>
        </Link>
        <NavBar />
      </div>
    </>
  );
};
