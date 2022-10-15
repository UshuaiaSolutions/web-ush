import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    padding: 100px 0;
    position: relative;
  }
`;

export const Image = styled.img`
  margin-top: 40px;
  height: auto;
  width: 320px;
  max-width: 100%;
  border-radius: 0px;

  ${breakpoints.min_tablet} {
    position: absolute;
    width: 50%;
    max-width: 679px;
    height: auto;
    right: 0;
    top: 0;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(178px - 4px);
  padding: 40px 0;
  position: relative;

  ${breakpoints.min_tablet} {
    width: calc(331px - 6px);
    height: calc(280px - 6px);
    padding: 0;
    justify-content: inherit;
    border: 3px solid ${(props) => props.theme.textonegro};
  }

  ${breakpoints.min_desktop} {
    width: calc(421px - 6px);
    height: calc(370px - 6px);
  }
`;

export const Circle = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 56px;

  ${breakpoints.min_tablet} {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(56px - 6px);
    height: calc(56px - 6px);
    top: -30px;
    left: calc(50% - 56px / 2);
  }

  ${breakpoints.min_desktop} {
    width: calc(120px - 6px);
    top: -60px;
    left: calc(50% - 120px / 2);
    height: calc(120px - 6px);
  }
`;

export const Icon = styled.img`
  &.first {
    width: 30px;
    height: 30px;
  }

  &.second {
    width: 29px;
    height: 30px;
  }

  &.third {
    width: 35px;
    height: auto;
  }

  ${breakpoints.min_desktop} {
    &.first {
      width: 60px;
      height: 60px;
    }

    &.second {
      height: 60px;
      width: 58px;
    }

    &.third {
      height: 51px;
      width: 81px;
    }
  }
`;

export const Column = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    margin-bottom: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;

    & .text {
      width: 100%;
    }
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  ${breakpoints.min_tablet} {
    display: flex;
    width: 50%;
    height: 405px;
  }

  ${breakpoints.min_desktop} {
    height: 485px;
  }
`;

export const ContainerMobile = styled.div`
  margin-left: calc((100% - 276px) / 2);
  width: calc(100% - ((100% - 276px) / 2));

  & .swiper-wrapper {
    align-items: baseline;
  }
  ${breakpoints.min_tablet} {
    display: none;
  }
`;
