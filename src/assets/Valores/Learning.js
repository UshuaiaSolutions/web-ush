import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Learning() {
  const theme = useTheme();

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="47"
      viewBox="0 0 60 47"
      fill="none"
    >
      <path
        d="M30 8.9375C25.7576 8.9375 22.2727 12.4215 22.2727 16.6629C22.2727 20.9043 25.7576 24.3884 30 24.3884C34.2424 24.3884 37.7273 20.9043 37.7273 16.6629C37.7273 12.4215 34.2424 8.9375 30 8.9375ZM30 19.9955C28.1818 19.9955 26.6667 18.4807 26.6667 16.6629C26.6667 14.8452 28.1818 13.3304 30 13.3304C31.8182 13.3304 33.3334 14.8452 33.3334 16.6629C33.3334 18.4807 31.8182 19.9955 30 19.9955Z"
        fill={theme.texto}
      />
      <path
        d="M30.0001 -7.28523e-07C20.7577 -1.13252e-06 13.3334 7.42246 13.3334 16.6627C13.3334 25.9029 20.7577 33.3253 30.0001 33.3253C39.2425 33.3253 46.6667 25.9029 46.6667 16.6627C46.6667 7.57394 39.2425 -3.24524e-07 30.0001 -7.28523e-07ZM30.0001 28.9325C23.3334 28.9325 17.7274 23.4792 17.7274 16.6627C17.7274 9.84612 23.1819 4.39288 30.0001 4.39288C36.8183 4.39288 42.2728 9.84612 42.2728 16.6627C42.2728 23.4792 36.6667 28.9325 30.0001 28.9325Z"
        fill={theme.texto}
      />
      <path
        d="M51.0606 16.6626C51.0606 28.3265 41.6667 37.7181 30 37.7181C18.3333 37.7181 8.93939 28.3265 8.93939 16.6626L0 16.6626C-7.21727e-07 33.1738 13.4848 46.6554 30 46.6554C46.5151 46.6554 60 33.1738 60 16.6626L51.0606 16.6626Z"
        fill={theme.texto}
      />
    </SVG>
  );
}
const SVG = styled.svg`
  width: 60px;
  height: 60px;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 95.643px;
    height: 123px;
  }
`;

export default Learning;
