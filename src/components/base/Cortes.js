import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const CorteMobile = () => {
  return <Mobile />;
};

export const CorteDesktop = () => {
  return <Desktop />;
};

export const Desktop = styled.div`
  content: "";
  display: none;

  ${breakpoints.min_desktop} {
    content: "\A"; /* Código de escape para salto de línea en CSS */
    white-space: pre;
    display: block;
  }
`;

const Mobile = styled.div`
  content: "\A"; /* Código de escape para salto de línea en CSS */
  white-space: pre;
  display: block;

  ${breakpoints.min_desktop} {
    content: "";
    display: none;
  }
`;
