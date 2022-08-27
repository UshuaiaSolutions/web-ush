import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 100px 0;
  }
`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  @media (min-width: 1125px) {
    height: 68px;
    width: 68px;
  }
`;
