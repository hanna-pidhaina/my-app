import React from "react";
import "./Footer.css";
import ukraine from "./ukraine.png";
export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/hanna-pidhaina/my-app"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>{" "}
      by{" "}
      <a
        href="https://www.instagram.com/hanna_pidhaina/"
        target="_blank"
        rel="noreferrer"
      >
        Hanna Pidhaina
      </a>
      <br />
      Stand with Ukraine <img src={ukraine} alt="map-ukraine" width="40" />
    </div>
  );
}
