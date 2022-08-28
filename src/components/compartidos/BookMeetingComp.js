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

export const Boton = styled.button`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  padding: 8px 0px;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  transition: all 0.3s ease-in-out;
  width: 100%;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.textonegro};
    color: ${(props) => props.theme.rosaush};
  }

  @media (min-width: 769px) {
    width: fit-content;
    padding: 8px 40px;
  }

  @media (min-width: 1125px) {
    padding: 18px 48px;
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    border: 4px solid ${(props) => props.theme.textonegro};
  }
`;
