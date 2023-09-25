import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Table = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    padding: 0 139.28px;
  }
`;

export const TableMobile = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 68px;

  ${breakpoints.min_desktop} {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    align-items: center;
  }
`;

export const EstrellaVerde = styled.svg`
  width: 20px;
  height: 20px;
  margin: 24px auto 0;

  ${breakpoints.min_desktop} {
    width: 64px;
    height: 64px;
    margin-top: 150px;
  }
`;
