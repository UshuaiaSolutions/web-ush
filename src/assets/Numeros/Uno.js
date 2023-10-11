import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Uno() {
  const theme = useTheme();

  return (
    <SVG
      width="157"
      height="157"
      viewBox="0 0 157 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="76"
        cy="76"
        r="76"
        fill={theme.nombre === "light" ? "#F24607" : "#F2CB05"}
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
        d="M60.9641 62.3V43.9H91.7641V117H71.2641V62.3H60.9641Z"
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

export default Uno;
