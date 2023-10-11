import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../../components/base/breakpoints";

function Dos() {
  const theme = useTheme();

  return (
    <SVG
      width="157"
      height="157"
      viewBox="0 0 157 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="76" cy="76" r="76" fill={colors.verdeush} />
      <circle
        cx="81"
        cy="80"
        r="75"
        stroke={theme.texto}
        stroke-width="2"
        stroke-dasharray="6 6"
      />
      <path
        d="M53.3332 101.3C59.7999 96.2333 65.0999 91.8667 69.2332 88.2C73.3665 84.5333 76.8332 80.7667 79.6332 76.9C82.4332 72.9667 83.8332 69.2333 83.8332 65.7C83.8332 63.5667 83.3332 61.9 82.3332 60.7C81.3999 59.5 79.9999 58.9 78.1332 58.9C76.1999 58.9 74.6999 59.7333 73.6332 61.4C72.5665 63 72.0665 65.3667 72.1332 68.5H53.1332C53.3332 62.5667 54.6332 57.6667 57.0332 53.8C59.4332 49.8667 62.5665 47 66.4332 45.2C70.2999 43.3333 74.5999 42.4 79.3332 42.4C87.5332 42.4 93.6332 44.4333 97.6332 48.5C101.633 52.5667 103.633 57.8333 103.633 64.3C103.633 71.2333 101.3 77.7333 96.6332 83.8C92.0332 89.8667 86.2665 95.3 79.3332 100.1H104.333V116H53.3332V101.3Z"
        fill={colors.textonegro}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 48px;
  height: 48px;

  & circle {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 152px;
    height: 152px;
  }
`;

export default Dos;
