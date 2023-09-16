import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../base/breakpoints";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textonegro};
  text-decoration: none;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  align-items: center;
`;

export const Content = styled.div`
  padding: 55px 0;
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  text-align: center;
  width: fit-content;
  flex-direction: column-reverse;
  display: flex;
  margin: 55px 0 0;
  width: 100%;

  ${breakpoints.min_desktop} {
    flex-direction: column;
    max-width: 517px;
  }
`;

export const ContainerRedesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 24px 25px;

  ${breakpoints.min_desktop} {
    margin: 0;
  }
`;

export const Column = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 236px;
  }
`;

export const ColumnSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    align-items: end;
  }
`;

export const Arrow = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 6px;

  ${breakpoints.min_desktop} {
    margin-right: 16px;
  }
`;

export const ContainerRed = styled.a`
  flex-direction: column;
  margin-right: 0px;

  ${breakpoints.min_desktop} {
    flex-direction: row;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textonegro};
    text-decoration: none;
    margin-right: 40px;
  }
`;

export const RedImage = styled.svg`
  width: 26px;
  height: 26px;
  margin-bottom: 5px;

  ${breakpoints.min_desktop} {
    margin-bottom: 0px;
    margin-right: 7px;
    width: 28px;
    height: 28px;
  }
`;

export const ContainerMobile = styled.div`
  display: block;

  ${breakpoints.min_desktop} {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: block;
  }
`;

export const RowDesktop = styled.div`
  display: flex;
  justify-content: space-between;
`;
