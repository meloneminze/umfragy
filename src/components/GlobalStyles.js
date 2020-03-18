import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
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
  );
}

export default GlobalStyles;
