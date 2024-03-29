import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  & .mySwiper {
    width: 100%;
  }

  ${breakpoints.min_desktop} {
    padding: 112px 0 0;
  }
`;

export const ContainerSwiper = styled.div`
  display: block;
  width: 100%;

  ${breakpoints.min_desktop} {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.texto};
  border-radius: 21px;
  padding: 32px 24px;
  width: calc(178px - 48px);
  height: auto;
  color: ${(props) => props.theme.texto};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.texto};
    border-radius: 32px;
    padding: 0 30px;
    height: 415px;
    width: calc(513px - 60px - 6px);
    display: flex;
    justify-content: center;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  display: none;
  ${breakpoints.min_desktop} {
    display: block;
  }
`;

export const Logo = styled.img`
  ${breakpoints.min_desktop} {
    height: auto;
    width: 232px;
  }
`;
