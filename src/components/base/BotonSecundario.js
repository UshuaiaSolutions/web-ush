import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  padding: 8px 0px;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  transition: 0.3s;
  width: 100%;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 1389px;

  &:hover {
    background-color: ${(props) => props.theme.rosaush};
    box-shadow: inset 4px 4px 4px rgb(57 57 57 / 40%);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 10px 40px;
    width: fit-content;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    border: 2px solid ${(props) => props.theme.textonegro};
    border-radius: 60px;
  }

  @media (min-width: 1025px) {
    padding: 18px 48px;
    width: fit-content;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    border: 4px solid ${(props) => props.theme.textonegro};
    border-radius: 60px;
  }
`;

function BotonSecundario({ children, className }) {
  return <StyledBoton className={className}>{children}</StyledBoton>;
}

export default BotonSecundario;
