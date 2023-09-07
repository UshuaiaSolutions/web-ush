import React from "react";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const StyledBoton = styled.button`
  padding: 8px 24px;
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
  transition: all 0.3s ease-in-out;
  width: fit-content;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  &:hover {
    background-color: ${(props) => props.theme.verdeush};
  }

  ${breakpoints.min_desktop} {
    padding: 13.5px 51.5px;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 3px solid ${(props) => props.theme.textonegro};
  }
`;

function BotonSecundario({ children, className }) {
  return <StyledBoton className={className}>{children}</StyledBoton>;
}

export default BotonSecundario;
