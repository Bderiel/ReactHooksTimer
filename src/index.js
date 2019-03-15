import React from "react";
import ReactDOM from "react-dom";
import { TimerClasses } from "./TimerClasses";
import { TimerHooks } from "./TimerHooks";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TimerClasses />
      <TimerHooks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
