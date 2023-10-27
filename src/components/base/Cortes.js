import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const CorteMobile = () => {
  return <Mobile />;
};

export const CorteDesktop = () => {
  return <Desktop />;
};

export const Desktop = styled.br`
  content: " ";

  ${breakpoints.min_desktop} {
    content: "\A"; /* Código de escape para salto de línea en CSS */
    white-space: pre;
  }
`;

const Mobile = styled.div`
  content: "\A"; /* Código de escape para salto de línea en CSS */
  white-space: pre;
  display: block;

  ${breakpoints.min_desktop} {
    content: " ";
  }
`;
