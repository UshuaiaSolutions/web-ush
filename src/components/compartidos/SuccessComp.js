import styled from "styled-components";

export const Fondo = styled.div`
  background: rgba(57, 57, 57, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
`;

export const Container = styled.div`
  border-radius: 66px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 22;
  background-color: ${(props) => props.theme.fondo};
  align-items: center;
  height: 364px;
  width: 269px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 769px) {
    height: 566px;
    width: 642px;
  }
`;

export const Close = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  height: 26px;
  width: 26px;
  transform: rotate(45deg);

  @media (min-width: 769px) {
    right: 70px;
    top: 35px;
  }

  @media (min-width: 1125px) {
    height: 38px;
    width: 38px;
  }
`;
