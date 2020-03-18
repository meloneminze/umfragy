import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          background-color: rgb(167, 166, 166);
          height: 100vh;
          color: black;
          font-family: monospace;
        }
      `}
    />

    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
