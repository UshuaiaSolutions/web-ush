import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.rosaush};
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaFormChico.png);
  width: 100%;
  color: ${(props) => props.theme.textonegro};

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
