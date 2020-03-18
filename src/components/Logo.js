import React from "react";
import styled from "@emotion/styled";
import icon from "./icon.png";

const Img = styled.img`
  height: 40px;
`;

function Logo(props) {
  return <Img src={icon} alt="Logo" {...props} />;
}

export default Logo;
