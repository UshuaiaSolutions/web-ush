import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondoblanco};
  width: 100%;
  padding: 50px 0px;

  & .swiper-wrapper {
    align-items: baseline;
  }

  ${breakpoints.min_tablet} {
    padding: 90px 0;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondoblanco};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  width: calc(178px - 4px);
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${breakpoints.only_tablet} {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(220px - 6px);
    padding: 55px 0px 75px;
    height: auto;
  }

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.textonegro};
    height: calc(404px - 95px - 6px);
    width: calc(342px - 6px);
    padding: 95px 0 0;
  }
`;

export const Circle = styled.div`
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 60px;
  border: 2px solid ${(props) => props.theme.textonegro};
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondoblanco};

  // TABLET
  ${breakpoints.only_tablet} {
    top: -30px;
    right: calc(50% - 56px / 2);
    width: calc(56px - 4px);
    height: calc(56px - 4px);
  }

  // PC
  ${breakpoints.min_desktop} {
    top: -60px;
    right: calc(50% - 120px / 2);
    width: calc(120px - 6px);
    height: calc(120px - 6px);
    border: 3px solid ${(props) => props.theme.textonegro};
    background: ${(props) => props.theme.fondoblanco};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

  &.first {
    height: 26px;
    width: 31px;
  }

  &.second {
    height: 18px;
    width: 35px;
  }

  &.third {
    height: 30px;
    width: 30px;
  }

  ${breakpoints.min_desktop} {
    &.first {
      height: 50px;
      width: 61px;
    }

    &.second {
      height: 40px;
      width: 81px;
    }

    &.third {
      height: 60px;
      width: 60px;
    }
  }
`;

export const ContainerSwiper = styled.div`
  display: block;
  margin-top: 70px;
  margin-left: calc((100% - 276px) / 2);
  width: calc(100% - ((100% - 276px) / 2));

  ${breakpoints.min_tablet} {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  ${breakpoints.min_tablet} {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    width: 100%;
  }
`;
