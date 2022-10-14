import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fondo};
  background-color: ${(props) => props.theme.textonegro};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;
