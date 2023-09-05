import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../base/breakpoints";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.fondoblanco};
  text-decoration: none;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Relative = styled.div`
  z-index: 11;

  ${breakpoints.min_tablet} {
    position: relative;
  }
`;

export const ContainerTop = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondoblanco};
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  padding: 55px 0;

  ${breakpoints.min_tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 55px 25px;
    width: calc(100% - 50px);
  }

  ${breakpoints.min_desktop} {
    padding: 55px 65px;
    width: calc(100% - 130px);
  }

  ${breakpoints.min_xl} {
    margin: 0 auto;
    width: 1314px;
  }

  ${breakpoints.min_xxl} {
    margin: 0 auto;
    width: 1514px;
  }
`;

export const ContainerText = styled.div`
  max-width: 500px;
  text-align: center;
  width: fit-content;
  flex-direction: column-reverse;
  display: flex;

  ${breakpoints.min_tablet} {
    flex-direction: column;
  }

  ${breakpoints.min_desktop} {
    max-width: 517px;
  }
`;

export const ContainerRedesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  ${breakpoints.min_tablet} {
    margin-top: 45px;
    margin-bottom: 0;
  }
`;

export const Red = styled.p`
  color: ${(props) => props.theme.fondoblanco};
  text-decoration: underline;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  margin-right: 0px;

  ${breakpoints.min_desktop} {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
  }
`;

export const Column = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const ColumnSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_tablet} {
    align-items: end;
  }
`;

export const Logo = styled.img`
  height: 46px;
  width: 154px;

  ${breakpoints.min_tablet} {
    height: 84px;
    width: 330px;
    margin-bottom: 50px;
    object-fit: scale-down;
  }

  ${breakpoints.min_desktop} {
    height: 104px;
    width: 350px;
    object-fit: none;
  }
`;

export const Iso = styled.img`
  height: 22px;
  width: 46px;
  margin-top: 30px;

  ${breakpoints.min_tablet} {
    height: 42px;
    width: 103px;
    margin-top: 0px;
  }
`;

export const Arrow = styled.img`
  height: auto;
  width: 7px;
  image-rendering: pixelated;

  ${breakpoints.min_tablet} {
    height: 12px;
  }
`;

export const ContainerRed = styled.a`
  flex-direction: column;
  margin-right: 0px;

  ${breakpoints.min_tablet} {
    flex-direction: row;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.fondoblanco};
    text-decoration: none;
    margin-right: 10px;
  }
`;

export const RedImage = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 5px;

  ${breakpoints.min_tablet} {
    margin-bottom: 0px;
    margin-right: 7px;
  }

  ${breakpoints.min_desktop} {
    width: 28px;
    height: 28px;
  }
`;
