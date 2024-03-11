import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import QuestionProvider from "./QuestionProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"//css
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"//js


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </BrowserRouter>
);
