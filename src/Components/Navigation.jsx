import React from "react";

export default function Navigation() {
  // const openBtn = document.querySelector("#openBtn");
  // const closeBtn = document.querySelector("#closeBtn");
  // const navUl = document.querySelector(".navUl");

  // openBtn.addEventListener("click", () => navUl.classList.add("reveal"));
  // closeBtn.addEventListener("click", () => navUl.classList.remove("reveal"));

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="index.html" className="logo">
              Lastacruz
            </a>
            <button className="btn btn-open" id="btnOpen">
              &#9776;
            </button>
            <ul className="navUl">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <button className="btn btn-close" id="btnClose">
                &#9776;
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
