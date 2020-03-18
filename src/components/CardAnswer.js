import styled from "@emotion/styled";
import React from "react";

const CardAnswer = styled.div`
  // background-color: azure;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 10px;
  height: 50px;
  width: 200px;
  margin-bottom: 10px;
`;

// function CardAnswer(props) {
//   return <CardAnswerCSS>{props.children}</CardAnswerCSS>;
// }

export default CardAnswer;
