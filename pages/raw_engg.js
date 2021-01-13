import React from "react";
import Link from "next/link";
import { BASE_URL, raw_engg_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";

function raw_engg(props) {
  return (
    <div className="main-div">
      <nav className="navbar">
        <img
          src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt9ddbb23089ee681c/5e2ec39e07e2907e353a0ad5/default-logo-1.png?format=pjpg"
          width="180"
        />
        <div className="Nav-links">
          <Link href="/raw_engg">
            <button className="Home-button">Home</button>
          </Link>
          <Link href="/contentstack">
            <a>Contentstack</a>
          </Link>
          <Link href="/surfboard">
            <a>Surfboard</a>
          </Link>
        </div>
      </nav>
      {props.data.map((data) => (
        <main className="main-content">
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
        .main-div {
          // height: 100vh;
          width: 100%;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          background-color: black;
          color: white;
        }
        .Nav-links {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .Home-button {
          background-color: #35b0a6;
          width: 25%;
          border-radius: 50px;
          color: white;
          padding: 20px;
          border: 1px solid black;
        }
        .main-content {
          background-image: url("https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt573767a4004d6b02/5e3138cb5b0dbe756af01636/DevOps_&_Cloud_Management_resized.png?format=pjpg&width=590");
          background-repeat: no-repeat;
          background-size: cover;
          font-family: "Montserrat", sans-serif;
          color: white;
          height: 80vh;
          text-align: center;
          padding-top: 10%;
        }
        .main-content h1 {
          margin-top: 0;
          font-size: 80px;
        }
        footer {
          background-color: black;
        }
      `}</style>
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
