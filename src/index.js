import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { quizData } from "./Data";


export const MyContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext.Provider value={quizData}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
