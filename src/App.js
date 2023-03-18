import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project is coded by Kristin Andreska and is{" "}
          <a
            href="https://github.com/kandreska/react-project-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
