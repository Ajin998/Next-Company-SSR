import React from "react";
import Link from "next/link";
function raw_engg() {
  return (
    <div className="main-div">
      <img
        src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt9ddbb23089ee681c/5e2ec39e07e2907e353a0ad5/default-logo-1.png?format=pjpg"
        width="180"
      />
      <div className="Nav-links">
        <Link href="/raw_engg">
          <a>Home</a>
        </Link>
        <Link href="/contentstack">
          <a>Contentstack</a>
        </Link>
        <Link href="/surfboard">
          <a>Surfboard</a>
        </Link>
      </div>

      <style jsx>{`
        .main-div {
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

      `}</style>
    </div>
  );
}

export default raw_engg;
