import React from "react";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const StyledBoton = styled.button`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  padding: 8px 0px;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  transition: all 0.3s ease-in-out;
  width: 100%;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.textonegro};
    color: ${(props) => props.theme.amarillo};
  }

  ${breakpoints.min_tablet} {
    width: fit-content;
    padding: 8px 40px;
  }

  ${breakpoints.min_desktop} {
    padding: 18px 48px;
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    border: 4px solid ${(props) => props.theme.textonegro};
  }
`;
const BotonPrincipal = ({ onClick, children }) => {
  return <StyledBoton onClick={onClick()}>{children}</StyledBoton>;
};

export default BotonPrincipal;
