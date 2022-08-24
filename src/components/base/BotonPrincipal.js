import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  padding: 18px 48px;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  border: 4px solid ${(props) => props.theme.textonegro};
  border-radius: 60px;
  transition: all 0.3s ease-in-out;
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.textonegro};
    color: ${(props) => props.theme.rosaush};
  }

  @media (max-width: 1024px) {
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
