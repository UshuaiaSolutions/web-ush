import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  position: relative;
  padding: 50px 0 0;
  height: calc(100vh - 50px);

  & .desktop-404 {
    display: none;
  }

  @media (min-width: 769px) {
    height: calc(100vh - 100px);
    padding: 0;

    & .desktop-404 {
      position: absolute;
      width: 50%;
      height: 100%;
      right: 0;
      top: 0;
      object-fit: cover;
      display: block;
    }
  }
`;

export const Content = styled.div`
  padding: 0 19px;
  width: calc(100% - 38px);
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & div {
    max-width: 100%;
    width: 320px;
  }

  & .mobile-404 {
    display: block;
    height: 325px;
    max-width: 100%;
    width: 320px;
    bottom: 0;
    object-fit: cover;
    position: absolute;
  }

  @media (min-width: 769px) {
    height: 100%;
    padding: 25px;
    width: calc(100% - 50px);

    & .mobile-404 {
      display: none;
    }

    & div {
      margin-top: 100px;
      width: 100%;
      max-width: auto;
    }
  }

  @media (min-width: 1125px) {
    padding: 25px 65px;
    width: calc(100% - 130px);
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
    width: 1314px;
  }
`;
