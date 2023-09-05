import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

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
  background-color: ${(props) => props.theme.fondoblanco};
  align-items: center;
  height: 364px;
  width: 269px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${breakpoints.min_tablet} {
    height: 566px;
    width: 642px;
  }
`;

export const Close = styled.img`
  position: absolute;
  right: 35px;
  top: 25px;
  height: 26px;
  width: 26px;
  object-fit: scale-down;

  ${breakpoints.min_tablet} {
    right: 70px;
    top: 35px;
    height: 38px;
    width: 38px;
  }
`;

export const Img = styled.img`
  height: 48px;
  width: 48px;
  margin-bottom: 25px;

  ${breakpoints.min_tablet} {
    height: 90px;
    width: 90px;
    margin-bottom: 30px;
  }
`;
