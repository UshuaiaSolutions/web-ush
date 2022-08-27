import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${(props) => props.theme.rosaush};
  width: 100%;
  padding: 45px 0;

  @media (min-width: 769px) {
    padding: 140px 0;
  }
`;

export const MediaContainer = styled.div`
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const FirstContainer = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    width: auto;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    width: 50%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    width: 48%;
    margin-bottom: 0px;
  }
`;

export const ColumnInput = styled.div`
  flex-direction: column;
  margin-bottom: 0;

  @media (min-width: 769px) {
    margin-bottom: 30px;
    flex-direction: row;
  }
`;
