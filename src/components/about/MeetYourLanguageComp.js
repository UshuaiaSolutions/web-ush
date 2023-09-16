import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 40px 0 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Card = styled.div`
  display: flex;
  height: calc(232px - (8px * 2));
  width: calc(226px - (16px * 2));
  padding: 8px 16px;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    width: calc(348px - (21px * 2));
    height: calc(376px - (32px + 8px));
    padding: 32px 21px 8;
  }
`;

export const Circle = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondoblanco};
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 56px;

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(56px - 6px);
    height: calc(56px - 6px);
    top: -30px;
    left: calc(50% - 56px / 2);
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

export const Partnership = styled.svg`
  width: 28.946px;
  height: 18.316px;

  ${breakpoints.min_desktop} {
    width: 57.892px;
    height: 36.63px;
  }
`;

export const Technology = styled.svg`
  width: 20.977px;
  height: 24.141px;

  ${breakpoints.min_desktop} {
    width: 41.954px;
    height: 48.281px;
  }
`;

export const Experience = styled.svg`
  width: 18.69px;
  height: 17.078px;

  ${breakpoints.min_desktop} {
    width: 38.69px;
    height: 37.078px;
  }
`;
