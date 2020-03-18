import styled from "@emotion/styled";
import React from "react";

const CardQuestionCSS = styled.div`
  background-color: azure;
  border-radius: 10px;
  height: 150px;
  width: 200px;

  font-family: monospace;
`;

function CardQuestion(props) {
  return <CardQuestionCSS>{props.children}</CardQuestionCSS>;
}

export default CardQuestion;
