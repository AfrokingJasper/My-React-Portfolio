import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Index.css";

// const
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.querySelector("#root"));
