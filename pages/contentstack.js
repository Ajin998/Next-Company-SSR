import { useEffect } from "react";
import Link from "next/link";
import { BASE_URL, contentstack_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";
import styles from "../styles/Contentstack.module.scss";

function contentstack(props) {
  return (
    <div className={styles["main-div"]}>
      <nav className={styles["navbar"]}>
        <img
          src="https://camo.githubusercontent.com/56e71e3403b2c78b63007bf8f542f7b06c71f95542ae7154fe40f6a8b6b9e8a1/68747470733a2f2f63646e2e66732e746561636861626c6563646e2e636f6d2f72355937716a6271543036476a4d533451413057"
          alt="Contentstack_img"
          width="300"
        />
        <div className={styles["Nav-links"]}>
          <Link href="/contentstack">
            <button className={styles["Home-button"]}>Home</button>
          </Link>
          <Link href="/raw_engg">
            <button>Raw_Engineering</button>
          </Link>
          <Link href="/surfboard">
            <button>Surfboard</button>
          </Link>
        </div>
      </nav>
      {props.data.map((data) => (
        <main className={styles["main-content"]}>
          <img src={data.banner_img} className={styles["banner-img"]} />
          <h1>{data.company_title}</h1>
          <p>{data.company_para}</p>

          <button className={styles["content-button"]}>TRY FOR FREE</button>

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
      `}</style>
    </div>
  );
}

//For fetching all the data from REST Api and passing props to our main function
contentstack.getInitialProps = async () => {
  let data = await fetchData(BASE_URL + contentstack_data);
  return {
    data,
  };
};

export default contentstack;
