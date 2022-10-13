import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondo};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

export const ImageDesktop = styled.img`
  display: none;

  @media (min-width: 769px) {
    width: 509px;
    display: block;
  }
`;

export const ImageMobile = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Content = styled.div`
  @media (min-width: 769px) {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  @media (min-width: 769px) {
    & .corte-exacto-desktop-medio {
      min-width: fit-content;
    }
  }
`;

export const Reverse = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 40px;
  }
`;

export const Areas = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 769px) {
    margin-top: 0px;
    flex-wrap: wrap;
    justify-content: center;

    & p {
      margin-bottom: 30px;
      width: 50%;
    }
  }
`;
