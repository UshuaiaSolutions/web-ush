import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

export const StyledImgAASL = styled.img`
  height: 20.88px;
  width: 64.27px;

  @media (min-width: 769px) {
    width: 140.79px;
    height: fit-content;
  }
`;

export const StyledImgGALA = styled.img`
  height: 36.43px;
  width: 57.72px;

  @media (min-width: 769px) {
    width: 126.44px;
    height: fit-content;
  }
`;

export const StyledImgELIA = styled.img`
  height: 30.29px;
  width: 55.27px;

  @media (min-width: 769px) {
    width: 121.06px;
    height: fit-content;
  }
`;

export const StyledImgLast = styled.img`
  height: 31.11px;
  width: 150.66px;

  @media (min-width: 769px) {
    height: fit-content;
    width: 330px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;

    & .corte-exacto-medio {
      min-width: fit-content;
    }
  }

  @media (min-width: 1125px) {
    & .content-images {
      width: 495px;
    }
  }
`;
