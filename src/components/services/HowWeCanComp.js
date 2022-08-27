import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0 0 40px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 0 0 100px;
  }
`;

export const Image = styled.img`
  height: 232px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 35px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-bottom: 30px;
  }
`;

export const ContentDesktop = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;

    & .desktop-chico-exacto {
      min-width: 400px;
      width: 50%;
    }
  }

  @media (min-width: 1125px) {
    & .desktop-chico-exacto {
      width: 531px;
    }
  }
`;
