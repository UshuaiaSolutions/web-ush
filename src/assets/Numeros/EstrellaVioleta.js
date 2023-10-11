import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function EstrellaVioleta() {
  const theme = useTheme();

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
    >
      <path
        d="M0 51.0244C27.1623 44.145 44.0893 27.2008 51.0202 0.020752C57.8922 27.222 74.8634 44.0604 101.959 51.0281C74.8358 57.9406 57.9392 74.8057 51.0119 101.979C44.082 74.8397 27.2083 57.8974 0 51.0244Z"
        fill={theme.nombre === "light" ? "#F24607" : "#F2CB05"}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 13px;
  height: 13px;
  margin: 16px auto 0;

  ${breakpoints.min_desktop} {
    width: 101.959px;
    height: 101.959px;
    margin: 0;
  }
`;

export default EstrellaVioleta;
