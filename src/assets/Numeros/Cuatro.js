import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Cuatro() {
  const theme = useTheme();

  return (
    <SVG
      width="157"
      height="156"
      viewBox="0 0 157 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="76"
        cy="76"
        r="76"
        fill={theme.nombre === "light" ? "#7839C4" : "#F2CB05"}
      />
      <circle
        cx="81"
        cy="80"
        r="75"
        stroke={theme.texto}
        stroke-width="2"
        stroke-dasharray="6 6"
      />
      <path
        d="M44.5297 99V82.8L75.2297 39H96.7297V82H104.43V99H96.7297V111H76.9297V99H44.5297ZM78.4297 61.1L64.6297 82H78.4297V61.1Z"
        fill={theme.fondo}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 48px;
  height: 48px;

  ${breakpoints.min_desktop} {
    width: 152px;
    height: 152px;
  }
`;

export default Cuatro;
