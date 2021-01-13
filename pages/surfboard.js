import React from "react";
import Link from "next/link";
import { BASE_URL, surfboard_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";

function surfboard(props) {
  return (
    <div className="main-div">
      <nav className="navbar">
        <img
          src="https://camo.githubusercontent.com/3dce3bc602f364173b522496e4d8239520c7da808298de30becd997ee2906f6f/68747470733a2f2f63646e2e66732e746561636861626c6563646e2e636f6d2f496d3765326f427a52634b304370466850363739"
          alt="surfboard_img"
          width="300"
        />
        <div className="Nav-links">
          <Link href="/surfboard">
            <button className="Home-button">Home</button>
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
        <main className="main-content">
          <img src={data.banner_img} className="banner-img" />
          <h1>{data.company_title}</h1>
          <p>{data.company_para}</p>

          <button className="content-button">TRY FOR FREE</button>
          <br />

          <a className="content-anchor"> Request a Demo</a>
        </main>
      ))}
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap");
        .navbar {
          padding: 10px;
          border-bottom: 1px solid black;
          display: flex;
          justify-content: space-between;
        }
        .Nav-links {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        button {
          padding: 10px;
          border-radius: 20px;
          border: 1px solid black;
          cursor: pointer;
        }
        .Home-button {
          background-color: #2bcade;
          width: 20%;
          border-radius: 20px;
          border: 1px solid black;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-image: url("https://images.assetsdelivery.com/compings_v2/olgaivolga/olgaivolga1512/olgaivolga151200160.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          font-family: "Montserrat", sans-serif;
          padding: 5% 0;
        }
        .main-content h1 {
          font-size: 50px;
        }
        .main-content p {
          width: 80%;
          text-align: center;
        }
        .banner-img {
          width: 50%;
          border-radius: 20px;
        }
        .content-button {
          margin: 2%;
          background-color: #55b3b1;
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
