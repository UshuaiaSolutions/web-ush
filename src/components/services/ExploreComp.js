import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.textonegro};
  background-color: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Dropdown = styled.div`
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
`;

export const Item = styled.div`
  padding: 10px 16px 16px;
  width: calc(100% - 32px);
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.textonegro};
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:first-child {
    border-bottom: 1px solid ${(props) => props.theme.rosaush};
  }

  &:nth-child(2) {
    border-bottom: 1px solid ${(props) => props.theme.lilaush};
  }

  &:nth-child(3) {
    border-bottom: 1px solid ${(props) => props.theme.amarillo};
  }

  &:nth-child(4) {
    border-bottom: 1px solid ${(props) => props.theme.verdeush};
  }

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.rojoush};
  }

  ${breakpoints.min_desktop} {
    padding: 0 24px;
    width: calc(100% - 48px);

    &:first-child {
      border-bottom: 2px solid ${(props) => props.theme.rosaush};
    }

    &:nth-child(2) {
      border-bottom: 2px solid ${(props) => props.theme.lilaush};
    }

    &:nth-child(3) {
      border-bottom: 2px solid ${(props) => props.theme.amarillo};
    }

    &:nth-child(4) {
      border-bottom: 2px solid ${(props) => props.theme.verdeush};
    }

    &:last-child {
      border-bottom: 2px solid ${(props) => props.theme.rojoush};
    }
  }
`;

export const ItemTitle = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    width: 80%;
  }

  ${breakpoints.min_desktop} {
    height: 136px;
  }
`;

export const RowDesktop = styled.div`
  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;

    & h2,
    & p {
      width: 50%;
    }
  }
`;
