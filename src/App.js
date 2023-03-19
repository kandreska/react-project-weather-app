import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />

        <footer>
          This project is coded by Kristin Andreska and is{" "}
          <a
            href="https://github.com/kandreska/react-project-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Sourced on GitHub hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
