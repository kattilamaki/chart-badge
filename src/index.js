import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart";
import "./styles.css";
import Latest from "./Latest";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="card">
      <Latest value="500K" />
      <div className="bars">
        <Chart heights={[40, 20, 5, 25, 20, 39, 30, 50, 30, 20, 40, 50]} />
      </div>
    </div>
  </React.StrictMode>,

  rootElement
);
