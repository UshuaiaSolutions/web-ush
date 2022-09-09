import styled from "styled-components";

export const Relative = styled.div`
  z-index: 11;

  @media (min-width: 769px) {
    position: relative;
  }
`;

export const ContainerTop = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondo};
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  padding: 55px 0;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 55px 25px;
    width: calc(100% - 50px);
  }

  @media (min-width: 1125px) {
    padding: 55px 65px;
    width: calc(100% - 130px);
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
    width: 1314px;
  }

  @media (min-width: 1800px) {
    margin: 0 auto;
    width: 1514px;
  }
`;

export const ContainerText = styled.div`
  max-width: 500px;
  text-align: center;
  width: fit-content;
  flex-direction: column-reverse;
  display: flex;

  @media (min-width: 769px) {
    flex-direction: column;
  }

  @media (min-width: 1125px) {
    max-width: 517px;
  }
`;

export const ContainerRedesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  @media (min-width: 769px) {
    margin-top: 45px;
    margin-bottom: 0;
  }
`;

export const Red = styled.p`
  text-decoration: underline;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  margin-right: 0px;

  @media (min-width: 1125px) {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
  }
`;

export const Column = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ColumnSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    align-items: end;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 158px;

  @media (min-width: 1125px) {
    height: 104px;
    width: 350px;
    margin-bottom: 50px;
    object-fit: none;
  }
`;

export const Iso = styled.img`
  height: auto;
  width: 46px;
  object-fit: cover;

  @media (min-width: 1125px) {
    height: 42px;
    width: 103px;
  }
`;

export const Arrow = styled.img`
  height: auto;
  width: 7px;
  image-rendering: pixelated;

  @media (min-width: 769px) {
    height: 12px;
  }
`;

export const ContainerRed = styled.a`
  flex-direction: column;
  margin-right: 0px;

  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.fondo};
    text-decoration: none;
    margin-right: 10px;
  }
`;

export const RedImage = styled.img`
  width: 18px;
  height: 18px;
  margin-bottom: 5px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }

  @media (min-width: 1125px) {
    width: 28px;
    height: 28px;
  }
`;
