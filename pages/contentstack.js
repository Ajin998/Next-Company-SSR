import { useEffect } from "react";
import Link from "next/link";
import { BASE_URL, contentstack_data } from "../constants/endpoint";
import fetchData from "../services/fetchData";
import Footer from "../components/Footer";

function contentstack(props) {
  return (
    <div className="main-div">
      <nav className="navbar">
        <img
          src="https://camo.githubusercontent.com/56e71e3403b2c78b63007bf8f542f7b06c71f95542ae7154fe40f6a8b6b9e8a1/68747470733a2f2f63646e2e66732e746561636861626c6563646e2e636f6d2f72355937716a6271543036476a4d533451413057"
          alt="Contentstack_img"
          width="300"
        />
        <div className="Nav-links">
          <Link href="/contentstack">
            <button className="Home-button">Home</button>
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
        <main className="main-content">
          <img src={data.banner_img} className="banner-img" />
          <h1>{data.company_title}</h1>
          <p>{data.company_para}</p>

          <button className="content-button">TRY FOR FREE</button>

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
          width: 100vw;
          background-image: linear-gradient(
            to left bottom,
            #3c3c83,
            #5a3b87,
            #763788,
            #903284,
            #a82c7d
          );
        }
        .navbar {
          padding: 10px;
          // border-bottom: 2px solid black;
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
          background-color: #ee5644;
          width: 20%;
          border-radius: 20px;
          color: white;
          border: 1px solid black;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: white;
          font-family: "Montserrat", sans-serif;
        }
        .banner-img {
          width: 50%;
          border: 2px solid black;
          border-radius: 10px;
          margin-top: 2rem;
          box-shadow: 5px 10px 20px #9d64a9;
        }
        .main-content h1 {
          font-size: 80px;
        }
        .main-content p {
          font-weight: 300;
        }
        .content-button {
          background-color: #ee5644;
          color: white;
          margin: 40px;
        }
        footer {
          margin-top: 20px;
          border-top: 2px solid black;
        }
        @media (max-width: );
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
