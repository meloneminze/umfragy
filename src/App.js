import React from "react";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import monotonous from "./themes/monotonous";
import colorful from "./themes/colorful";

const Main = styled.main`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = React.useState(colorful);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppHeader
          onSwitchColorButtonClick={() => {
            setTheme(theme === monotonous ? colorful : monotonous);
          }}
        />
        <Main>
          <Switch>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
            <Route path="/polls/:pollId/vote">
              <Vote />
            </Route>
            <Route exact path="/">
              <Add />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
export default App;
