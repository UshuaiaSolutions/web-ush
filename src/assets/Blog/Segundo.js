import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";
import ImgSegundo from "./15.png";

function Segundo() {
  return <SVG src={ImgSegundo} alt="Instagram publication" />;
}

const SVG = styled.img`
  width: 200px;
  height: 200px;

  ${breakpoints.min_desktop} {
    margin: 0 16px;
    width: 345px;
    height: 345px;
    object-fit: cover;
  }
`;

export default Segundo;
