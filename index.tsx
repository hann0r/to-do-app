import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyCusVBw4V8t0__A-52qnweaDpcuXGs34Fo",
  authDomain: "to-do-app-56d9a.firebaseapp.com",
  projectId: "to-do-app-56d9a",
  storageBucket: "to-do-app-56d9a.appspot.com",
  messagingSenderId: "977469462064",
  appId: "1:977469462064:web:1c735e34ebb8ebf50dbff5",
  measurementId: "G-JMLV3PS4SH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
