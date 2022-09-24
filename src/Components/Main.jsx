import React from "react";

import { Hero, About, Project, Contact } from "../Components";

export default function Main() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
