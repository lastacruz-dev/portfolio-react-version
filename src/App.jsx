import React from "react";

import style from "../src/css/style.css";

import { Navigation, Main } from "./Components";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}
