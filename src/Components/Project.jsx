import React from "react";

import { Image1, Image2, Image3, Image4 } from "../source";

export default function Project() {
  return (
    <div className="app">
      <section className="project" id="project">
        <div className="container">
          <h2 className="align-left-title">Project</h2>
          <div className="wrapper grid">
            {/* first project */}
            <div className="flow-content">
              <img src={Image1} alt="" />
              <h3>Easybank</h3>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <a
                href="https://bank-landing-page-project-03.netlify.app"
                className="btn"
              >
                Live demo
              </a>
            </div>
            {/* seconde project */}
            <div className="flow-content">
              <img src={Image2} alt="" />
              <h3>Fylo</h3>
              <p>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family.
              </p>
              <a
                href="https://fylo-landing-page-project-05.netlify.app"
                className="btn"
              >
                Live demo
              </a>
            </div>
            {/* third project */}
            <div className="flow-content">
              <img src={Image3} alt="" />
              <h3>Manage</h3>
              <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <a
                href="https://manage-landing-page-project-02.netlify.app/"
                className="btn"
              >
                Live demo
              </a>
            </div>
            {/* fourth project */}
            <div className="flow-content">
              <img src={Image4} alt="" />
              <h3>Insure</h3>
              <p>
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure youand your loved ones are protected.
              </p>
              <a
                href="https://insurance-landing-page-06.netlify.app"
                className="btn"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
