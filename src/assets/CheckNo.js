import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../components/base/breakpoints";

function CheckNo({ handleClick }) {
  const theme = useTheme();

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      onClick={handleClick}
    >
      <circle cx="20" cy="20" r="18.5" stroke={theme.texto} strokeWidth="3" />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 32px;
  height: 32px;

  & circle {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 40px;
    height: 40px;
  }
`;

export default CheckNo;
