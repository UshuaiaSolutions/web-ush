import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  padding: 18px 52px;
  background-color: ${(props) => props.theme.lilaush};
  color: ${(props) => props.theme.fondo};
  border: none;
  border-radius: 60px;
  transition: 0.3s;
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.azulush};
    box-shadow: inset 4px 4px 8px rgba(57, 57, 57, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
`;

function BotonPrincipal({ children }) {
  return <StyledBoton>{children}</StyledBoton>;
}

export default BotonPrincipal;
