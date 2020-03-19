import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;

          background: ${theme.colors.backgroundPrimary};
          height: 100vh;
          color: ${theme.colors.textPrimary};
          font-family: monospace;
        }
      `}
    />
  );
}

export default GlobalStyles;
