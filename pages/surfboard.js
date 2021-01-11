import React from "react";
import Link from "next/link";

function surfboard() {
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
      <main></main>
      <footer></footer>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}

export default surfboard;
