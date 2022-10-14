import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 100px 0;
    position: relative;
  }
`;

export const Image = styled.img`
  margin-top: 40px;
  height: auto;
  width: 320px;
  max-width: 100%;
  border-radius: 0px;

  @media (min-width: 769px) {
    position: absolute;
    width: 50%;
    max-width: 679px;
    height: auto;
    right: 0;
    top: 0;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(178px - 4px);
  padding: 40px 0;
  position: relative;

  @media (min-width: 769px) {
    width: calc(421px - 6px);
    height: calc(370px - 6px);
    padding: 0;
    justify-content: inherit;
    border: 3px solid ${(props) => props.theme.textonegro};
  }
`;

export const Circle = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 56px;

  @media (min-width: 769px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(120px - 6px);
    top: -60px;
    left: calc(50% - 120px / 2);
    height: calc(120px - 6px);
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

  @media (min-width: 769px) {
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

export const Column = styled.div`
  @media (min-width: 769px) {
    display: flex;
    margin-bottom: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;

    & .text {
      width: 100%;
    }
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    width: 50%;
    height: 485px;
  }
`;

export const ContainerMobile = styled.div`
  margin-left: calc((100% - 276px) / 2);
  width: calc(100% - ((100% - 276px) / 2));

  & .swiper-wrapper {
    align-items: baseline;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
