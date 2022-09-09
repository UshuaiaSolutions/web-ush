import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.rosaush};
  width: 100%;
  padding: 45px 0;
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaFormGrande.png);

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

export const DateContainer = styled.div`
  width: 100%;

  & .react-datepicker__input-container input {
    padding: 4px;
    border: 2px solid #393939;
    height: calc(31px - 8px);
    border-radius: 8px;
    width: calc(100% - 8px - 4px);
  }

  & .react-datepicker__input-container input:focus,
  & .react-datepicker__input-container input:focus-visible {
    outline: none;
  }

  @media (min-width: 1125px) {
    & .react-datepicker__input-container input {
      background: #f6f3e8;
      border: 3px solid #393939;
      border-radius: 8px;
      height: 27px;
      padding: 8px;
      font-family: "Poppins", sans-serif;
      width: calc(100% - 16px - 6px);
    }

    & .react-datepicker__input-container input,
    & .react-datepicker__input-container input:focus,
    & .react-datepicker__input-container input:focus-visible {
      outline: none;
    }
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