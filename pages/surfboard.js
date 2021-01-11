import React from "react";
import Link from "next/link";

function surfboard() {
  return (
    <div>
      <img
        src="https://camo.githubusercontent.com/3dce3bc602f364173b522496e4d8239520c7da808298de30becd997ee2906f6f/68747470733a2f2f63646e2e66732e746561636861626c6563646e2e636f6d2f496d3765326f427a52634b304370466850363739"
        alt="surfboard_img"
        width="300"
      />
      <Link href="/surfboard">Home</Link>
      <Link href="/raw_engg">Raw_Engineering</Link>
      <Link href="/contentstack"> Contenstack</Link>
    </div>
  );
}

export default surfboard;
