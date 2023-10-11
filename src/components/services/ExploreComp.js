import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background-color: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Dropdown = styled.div`
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;
`;

export const Item = styled.div`
  padding: 10px 8px 16px;
  width: calc(100% - 16px);
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.texto};
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.borde};
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 0 24px;
    width: calc(100% - 48px);
    border-bottom: 2px solid ${(props) => props.theme.borde};
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
