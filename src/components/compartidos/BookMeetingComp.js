import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  color: ${(props) => props.theme.textonegro};
  background-color: ${(props) => props.theme.fondoblanco};
  width: 100%;
  padding: 56px 0 0;
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaFormGrandeNew.png);
  background-repeat: inherit;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const MediaContainer = styled.div`
  flex-direction: column;

  ${breakpoints.min_desktop} {
    flex-direction: row;
  }
`;

export const FirstContainer = styled.div`
  width: 100%;

  ${breakpoints.min_desktop} {
    width: auto;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;

  ${breakpoints.min_desktop} {
    width: 50%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin-bottom: 16px;

  ${breakpoints.min_desktop} {
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
    background: #f6f3e8;
  }

  & .react-datepicker__input-container input:focus,
  & .react-datepicker__input-container input:focus-visible {
    outline: none;
  }

  ${breakpoints.min_desktop} {
    margin-bottom: 24px;

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

  ${breakpoints.min_desktop} {
    margin-bottom: 24px;
    flex-direction: row;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.rojoush};
  font-size: 12px;
  padding-left: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & label {
    margin-right: 8px;
  }

  & svg {
    margin-right: 16px;
    cursor: pointer;
  }

  & div {
    display: flex;
    align-items: center;
  }
`;
