import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondo};
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaFormChicaNew.png);
  background-repeat: inherit;
  width: 100%;

  @media (min-width: 769px) {
    padding: 100px 0;
  }
`;

export const Column = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;
