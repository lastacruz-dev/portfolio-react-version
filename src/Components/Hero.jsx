import React from "react";
import image from "../source/illustration.svg";
import resume from "../source/Resume.docx";

export default function Hero() {
  return (
    <div className="App">
      <section className="hero" id="hero">
        <div className="container flexbox">
          <div className="flow-content">
            <h1 className="hero__title">Don't have website in 2022?</h1>
            <p className="hero__body">
              You're on the right place and time i will help you build your
              bussiness and attracted potential customer.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={resume} download="Resume" className="btn btn-secondary">
              Download CV
            </a>
          </div>
          <div className="flow-content">
            <img src={image} alt="This is illustration of people talking" />
          </div>
        </div>
      </section>
    </div>
  );
}
