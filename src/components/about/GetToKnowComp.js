import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1500px) {
    padding: 0 0 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 136px;
  height: 136px;

  @media (min-width: 769px) {
    width: 240px;
    height: 240px;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
`;
