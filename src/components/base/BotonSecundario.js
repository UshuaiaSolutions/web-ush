import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "./breakpoints";

export const StyledBoton = styled.button`
  padding: 8px 24px;
  background-color: ${colors.fondoblanco};
  color: ${colors.textonegro};
  transition: all 0.3s ease-in-out;
  width: fit-content;
  border: 2px solid ${(props) => props.theme.texto};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme.contacto};
    background-color: ${(props) => props.theme.contacto};
    color: ${(props) => props.theme.fondo};
  }

  ${breakpoints.min_desktop} {
    padding: 13.5px 51.5px;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 3px solid ${(props) => props.theme.texto};

    &:hover {
      border: 3px solid ${(props) => props.theme.contacto};
    }
  }
`;

function BotonSecundario({ children, className, props }) {
  return (
    <StyledBoton className={className} {...props}>
      {children}
    </StyledBoton>
  );
}

export default BotonSecundario;
