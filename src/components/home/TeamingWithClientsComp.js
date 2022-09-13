import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 30px 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.fondo};

  @media (min-width: 1500px) {
    padding: 0 0 100px;
  }

  @media (min-width: 769px) {
    & .container-content {
      display: flex;
      justify-content: space-between;

      .second-col {
        width: 50%;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    & .mySwiper {
      width: 50%;
    }
  }
`;
