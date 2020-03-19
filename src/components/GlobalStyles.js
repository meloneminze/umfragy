import React from "react";
import { Global, css } from "@emotion/core";
// import { ThemeProvider } from "emotion-theming";

// const theme = {
//   colors: {
//     primary: "azure",
//     second: "#93b2f8",
//     third: "#ffcce6"
//   }
// };

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;

          background: ${theme.colors.backgroundPrimary};
          height: 100vh;
          color: black;
          font-family: monospace;
        }
      `}
    />
  );
}

export default GlobalStyles;
