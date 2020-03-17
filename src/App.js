import React from "react";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import styled from "@emotion/styled";

const Main = styled.main`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <AppHeader />
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
  );
}
export default App;
