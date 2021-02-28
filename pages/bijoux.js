import { TopBar } from "../components/TopBar";
import styles from "../styles/Bijoux.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Bijoux() {
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <ul className={styles.list}>
          <li>
            <Link href='/bijoux/stella'>
              <div>
                <h2>stella</h2>
                <Image
                  src='/images/bijoux/Stella.jpg'
                  alt='stella'
                  width={20}
                  height={20}
                  layout='responsive'
                  className={styles.bijou}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href='/bijoux/phantom'>
              <div>
                <h2>phantom</h2>
                <Image
                  src='/images/bijoux/phantom.png'
                  alt='phantom'
                  width={100}
                  height={100}
                  layout='responsive'
                  className={styles.bijou}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href='/bijoux/tadaa'>
              <div>
                <h2>tadaa</h2>
                <Image
                  src='/images/bijoux/Tadaa.jpg'
                  alt='tadaa'
                  width={100}
                  height={100}
                  layout='responsive'
                  className={styles.bijou}
                />
              </div>
            </Link>
          </li>
          <li>O2</li>
          <li>wilmaukee</li>
          <li>petite wilmaukee</li>
          <li>moto</li>
          <li>milwaukee</li>
          <li>manchette milwaukee</li>
          <li>coquille</li>
        </ul>
      </div>
    </>
  );
}
