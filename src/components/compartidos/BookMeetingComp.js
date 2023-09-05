import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  color: ${(props) => props.theme.textonegro};
  background-color: ${(props) => props.theme.fondoblanco};
  width: 100%;
  padding: 45px 0;
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaFormGrandeNew.png);
  background-repeat: inherit;

  ${breakpoints.min_tablet} {
    padding: 140px 0;
  }
`;

export const MediaContainer = styled.div`
  flex-direction: column;

  ${breakpoints.min_tablet} {
    flex-direction: row;
  }
`;

export const FirstContainer = styled.div`
  width: 100%;

  ${breakpoints.min_tablet} {
    width: auto;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;

  ${breakpoints.min_tablet} {
    width: 50%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin-bottom: 10px;

  ${breakpoints.min_tablet} {
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

  ${breakpoints.min_desktop} {
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

  ${breakpoints.min_tablet} {
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
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
  transition: all 0.3s ease-in-out;
  width: 100%;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.textonegro};
    color: ${(props) => props.theme.amarillo};
  }

  ${breakpoints.min_tablet} {
    width: fit-content;
    padding: 8px 40px;
  }

  ${breakpoints.min_desktop} {
    padding: 18px 48px;
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    border: 4px solid ${(props) => props.theme.textonegro};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.rojoush};
  font-size: 12px;
  padding-left: 5px;
`;
