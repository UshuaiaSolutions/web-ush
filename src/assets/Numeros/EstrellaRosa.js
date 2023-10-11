import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function EstrellaRosa() {
  const theme = useTheme();

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="65"
      viewBox="0 0 64 65"
      fill="none"
    >
      <path
        d="M0 32.5153C17.05 28.1971 27.6751 17.5611 32.0257 0.5C36.3393 17.5744 46.9922 28.1439 64 32.5176C46.9749 36.8566 36.3688 47.443 32.0205 64.5C27.6705 47.4643 17.0788 36.8295 0 32.5153Z"
        fill={theme.nombre === "light" ? colors.rosaush : colors.amarillo}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 20px;
  height: 21.405px;
  margin-left: 100%;
  margin-top: 16px;

  ${breakpoints.min_desktop} {
    width: 64px;
    height: 64px;
    margin-left: 0;
    margin-top: 0;
  }
`;

export default EstrellaRosa;
