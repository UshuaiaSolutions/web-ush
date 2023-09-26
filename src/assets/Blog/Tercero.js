import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";
import ImgTercero from "./17.png";

function Tercero() {
  return <SVG src={ImgTercero} alt="Instagram publication" />;
}

const SVG = styled.img`
  width: 200px;
  height: 200px;

  ${breakpoints.min_desktop} {
    width: 345px;
    height: 345px;
    object-fit: cover;
  }
`;

export default Tercero;
