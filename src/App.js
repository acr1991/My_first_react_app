import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Visit <code>therowntree.com</code> This app was created with React
        </h1>
        <a
          className="App-link"
          href="https://therowntree.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit now!
        </a>
      </header>
    </div>
  );
}

export default App;
