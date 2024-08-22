import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  align-items: center;
  display: flex;
  align-items: center;

  ${breakpoints.min_desktop} {
    margin-left: 16px;
    margin-right: 0px;
  }
`;

export const DropdownToggle = styled.button`
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  border-radius: 60px;
  cursor: pointer;
  color: ${(props) => props.theme.texto};
  border: ${(props) => `1px solid ${props.theme.texto}`};
  width: 60px;
  transition: 0.2s;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.min_desktop} {
    font-size: 16px;
    width: 80px;
    padding: 8px 12px;
    height: 41px;
    border: ${(props) => `2px solid ${props.theme.texto}`};
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.fondo};
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 105px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: 0.2s;
  font-size: 12px;

  ${breakpoints.min_desktop} {
    width: 150px;
    font-size: 16px;
  }
`;

export const DropdownItem = styled.li`
  padding: 5px 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.texto};
    color: ${(props) => props.theme.fondo};
  }

  ${breakpoints.min_desktop} {
    padding: 8px 12px;
  }
`;
