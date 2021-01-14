import React from "react";
import Link from "next/link";
import { BASE_URL, raw_engg_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";
import styles from "../styles/Raw.module.scss";
function raw_engg(props) {
  return (
    <div className={styles["main-div"]}>
      <nav className={styles["navbar"]}>
        <img
          src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt9ddbb23089ee681c/5e2ec39e07e2907e353a0ad5/default-logo-1.png?format=pjpg"
          width="180"
        />
        <div className={styles["Nav-links"]}>
          <Link href="/raw_engg">
            <button className={styles["Home-button"]}>Home</button>
          </Link>
          <Link href="/contentstack">
            <button>Contentstack</button>
          </Link>
          <Link href="/surfboard">
            <button>Surfboard</button>
          </Link>
        </div>
      </nav>
      {props.data.map((data) => (
        <main className={styles["main-content"]}>
          <h1>{data.company_title}</h1>
          <p>{data.company_para}</p>

          <button className={styles["content-button"]}>TRY FOR FREE</button>
          <br />

          <a className={styles["content-anchor"]}> Request a Demo</a>
        </main>
      ))}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
raw_engg.getInitialProps = async () => {
  let data = await fetchData(BASE_URL + raw_engg_data);
  return {
    data,
  };
};

export default raw_engg;
