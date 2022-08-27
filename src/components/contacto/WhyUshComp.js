import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: 100%;
  color: ${(props) => props.theme.textonegro};
  padding: 50px 0px;

  @media (min-width: 769px) {
    padding: 90px 0;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  width: calc(178px - 4px);
  height: 200px;
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 769px) and (max-width: 1124px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(220px - 6px);
    padding: 55px 0px 75px;
    height: auto;
  }

  @media (min-width: 1125px) {
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
  background: ${(props) => props.theme.fondo};

  // TABLET
  @media (min-width: 769px) and (max-width: 1124px) {
    top: -30px;
    right: calc(50% - 56px / 2);
    width: calc(56px - 4px);
    height: calc(56px - 4px);
  }

  // PC
  @media (min-width: 1125px) {
    top: -60px;
    right: calc(50% - 120px / 2);
    width: calc(120px - 6px);
    height: calc(120px - 6px);
    border: 3px solid ${(props) => props.theme.textonegro};
    background: ${(props) => props.theme.fondo};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

  @media (min-width: 1125px) {
    width: 68px;
    height: 68px;
  }
`;

export const ContainerSwiper = styled.div`
  display: block;
  width: 100%;
  margin-top: 70px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    width: 100%;
  }
`;
