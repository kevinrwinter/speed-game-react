import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles";
import Buttons from "./components/Buttons";
import Overlay from "./components/Overlay";

class App extends Component {
  // Names must match props.firstname in View.js
  // state = {};

  startGame = () => {};
  endGame = () => {};
  reloadGame = () => {};

  //
  render() {
    return (
      <div className="container">
        <h1>SpeedGame (React)</h1>
        <p className="score-line">
          Your score: <span className="title-score">0</span>
        </p>

        <Circles />
        <Buttons />
        <Overlay />
      </div>
    );
  }
}

export default App;
