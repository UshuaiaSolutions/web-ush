import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../base/breakpoints";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.texto};
  text-decoration: none;
  margin-bottom: 30px;
  transition: 0.2s;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  align-items: center;
  transition: 0.2s;
  flex-direction: column;

  & .work {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .scroll-to-top {
    background: ${(props) => props.theme.fondo};
    color: ${(props) => props.theme.texto};
    transition: 0.2s;

    & path {
      transition: 0.2s;
    }
  }
`;

export const Content = styled.div`
  padding: 0 0 55px;
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 0 0 50px;
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
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    flex-direction: row;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.texto};
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

  & path {
    transition: 0.2s;
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

export const ButtonHover = styled.span`
  padding: 8px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.contacto};
    color: ${(props) => props.theme.fondo};
  }
`;
