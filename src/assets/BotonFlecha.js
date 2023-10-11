import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../components/base/breakpoints";

function BotonFlecha({ isOpen, isServices }) {
  const theme = useTheme();

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      isOpen={isOpen}
      isServices={isServices}
    >
      <g clip-path="url(#clip0_6_9043)">
        <circle
          cx="40.0002"
          cy="40.6184"
          r="38.5"
          transform="rotate(-45 40.0002 40.6184)"
          stroke={theme.texto}
          stroke-width="3"
          fill={isOpen ? colors.verdeush : theme.fondo}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.9292 24.5791L23.9292 24.5791L23.9292 26.5791L23.9292 54.8633L27.9292 54.8633L27.9292 31.4074L54.7278 58.206L57.5562 55.3775L30.7578 28.5791L54.2135 28.5791L54.2135 24.5791L25.9292 24.5791Z"
          fill={isOpen ? colors.textonegro : theme.texto}
        />
      </g>
      <defs>
        <clipPath id="clip0_6_9043">
          <rect
            width="80"
            height="80"
            fill="white"
            transform="translate(0 0.618408)"
          />
        </clipPath>
      </defs>
    </SVG>
  );
}

const SVG = styled.svg`
  width: ${(props) => (props.isServices ? "26px" : "40px")};
  height: ${(props) => (props.isServices ? "26px" : "40px")};
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: all 0.1s;

  & path,
  & circle {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 80px;
    height: 80px;
  }

  &:hover {
    transform: rotate(180deg);

    & circle {
      fill: ${colors.verdeush};
    }

    & path {
      fill: ${colors.textonegro};
    }
  }
`;

export default BotonFlecha;
