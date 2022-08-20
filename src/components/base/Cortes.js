import styled from "styled-components";

export const CorteDesktop = styled.br`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const CorteMobile = styled.br`
  @media (min-width: 769px) {
    display: none;
  }
`;
