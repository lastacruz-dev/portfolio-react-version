import React from "react";

import { fb, youtube, github } from "../source";

export default function About() {
  return (
    <div className="app">
      <section className="about" id="about">
        <div className="container flow-content">
          <h2 className="align-left-title">About me</h2>
          <h3>Get to know me a little</h3>
          <p>
            Hi i am <span className="highlight">L</span>ouis{" "}
            <span className="highlight">A</span>ndrie{" "}
            <span className="highlight">Sta</span>.Ana{" "}
            <span className="highlight">Cruz</span>, an inspiring self taught
            web developer, building website is my absolute passion and
            happiness.
          </p>
          <div className="logos">
            <a href="https://www.facebook.com/LouiTzkie">
              <img src={fb} alt="facebook hand made logo" />
            </a>
            <a href="https://www.youtube.com/channel/UC8THsagfl48gTAB7HF_quLA">
              <img src={youtube} alt="youtube hand made logo " />
            </a>
            <a href="https://github.com/lastacruz-dev">
              <img src={github} alt="github hand made logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
