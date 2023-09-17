import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function EstrellaVerde() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="103"
      viewBox="0 0 102 103"
      fill="none"
    >
      <path
        d="M0 51.5244C27.1623 44.645 44.0893 27.7008 51.0202 0.520752C57.8922 27.722 74.8634 44.5604 101.959 51.5281C74.8358 58.4406 57.9392 75.3057 51.0119 102.479C44.082 75.3397 27.2083 58.3974 0 51.5244Z"
        fill="#72F285"
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

export default EstrellaVerde;
