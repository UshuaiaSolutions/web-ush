import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 0 0 70px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  & .mySwiper {
    width: 100%;
  }

  ${breakpoints.min_tablet} {
    padding: 0 0 100px;
  }
`;

export const ContainerSwiper = styled.div`
  display: block;
  width: 100%;

  ${breakpoints.min_tablet} {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 21px;
  padding: 32px 24px;
  width: calc(178px - 48px);
  height: auto;
  color: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_tablet} {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    padding: 0 30px;
    height: 415px;
    width: calc(513px - 60px - 6px);
    display: flex;
    justify-content: center;
  }

  ${breakpoints.only_tablet} {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    padding: 0 20px;
    height: 300px;
    width: calc(398px - 40px - 6px);
    display: flex;
    justify-content: center;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  ${breakpoints.min_tablet} {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  display: none;
  ${breakpoints.min_tablet} {
    display: block;
  }
`;

export const Logo = styled.img`
  ${breakpoints.min_tablet} {
    height: auto;
    width: 232px;
  }
`;
