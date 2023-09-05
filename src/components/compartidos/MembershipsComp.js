import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_xl} {
    padding: 100px 0;
  }
`;

export const StyledImgAASL = styled.img`
  height: 20.88px;
  width: 64.27px;

  ${breakpoints.min_tablet} {
    width: 120.79px;
    max-height: 50px;
    height: auto;
  }

  ${breakpoints.min_desktop} {
    width: 140.79px;
    max-height: 50px;
    height: auto;
  }
`;

export const StyledImgGALA = styled.img`
  height: 36.43px;
  width: 57.72px;

  ${breakpoints.min_tablet} {
    width: 106.44px;
    max-height: 80px;
    height: auto;
  }

  ${breakpoints.min_desktop} {
    width: 126.44px;
    max-height: 80px;
    height: auto;
  }
`;

export const StyledImgELIA = styled.img`
  height: 30.29px;
  width: 55.27px;

  ${breakpoints.min_tablet} {
    width: 91.06px;
    max-height: 70px;
    height: auto;
  }

  ${breakpoints.min_desktop} {
    width: 121.06px;
    max-height: 70px;
    height: auto;
  }
`;

export const StyledImgLast = styled.img`
  height: 31.11px;
  width: 150.66px;

  ${breakpoints.min_tablet} {
    height: auto;
    max-height: 70px;
    width: 300px;
    margin-left: 15px;
  }

  ${breakpoints.min_desktop} {
    height: auto;
    max-height: 70px;
    width: 330px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    flex-direction: row;
    align-items: center;

    & .corte-exacto-medio {
      min-width: fit-content;
    }
  }

  ${breakpoints.min_desktop} {
    & .content-images {
      width: 495px;
    }
  }
`;
