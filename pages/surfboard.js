import React from "react";
import Link from "next/link";
import { BASE_URL, surfboard_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";
import styles from "../styles/Surfboard.module.scss";
function surfboard(props) {
  return (
    <div className={styles["main-div"]}>
      <nav className={styles["navbar"]}>
        <img
          src="https://camo.githubusercontent.com/3dce3bc602f364173b522496e4d8239520c7da808298de30becd997ee2906f6f/68747470733a2f2f63646e2e66732e746561636861626c6563646e2e636f6d2f496d3765326f427a52634b304370466850363739"
          alt="surfboard_img"
          className={styles["navbar-logo"]}
          width="300"
        />
        <div className={styles["Nav-links"]}>
          <Link href="/surfboard">
            <button className={styles["Home-button"]}>Home</button>
          </Link>
          <Link href="/contentstack">
            <button>Contenstack</button>
          </Link>
          <Link href="/raw_engg">
            <button>Raw_Engineering</button>
          </Link>
        </div>
      </nav>
      {props.data.map((data) => (
        <main className={styles["main-content"]}>
          <img src={data.banner_img} className={styles["banner-img"]} />
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
      <style jsx>{`
        button {
          padding: 10px;
          border-radius: 20px;
          border: 1px solid black;
          cursor: pointer;
        }
        footer {
          background-color: #55b3b1;
        }
      `}</style>
    </div>
  );
}
surfboard.getInitialProps = async () => {
  let data = await fetchData(BASE_URL + surfboard_data);
  return {
    data,
  };
};

export default surfboard;
