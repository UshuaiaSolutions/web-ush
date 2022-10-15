import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 60px 0 0;
  color: ${(props) => props.theme.fondo};
  background: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    padding: 70px 0 0;
  }

  ${breakpoints.min_xl} {
    padding: 100px 0 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  ${breakpoints.min_tablet} {
    padding-left: 0;
  }

  ${breakpoints.min_desktop} {
    min-width: fit-content;
    width: 463px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${breakpoints.min_tablet} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Image = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 19px;

  ${breakpoints.min_desktop} {
    height: 27px;
    width: 27px;
    object-fit: scale-down;
  }
`;

export const RowDesktop = styled.div`
  margin-bottom: 20px;

  ${breakpoints.min_tablet} {
    margin-bottom: 0px;
    display: flex;
    justify-content: space-evenly;
  }

  ${breakpoints.min_desktop} {
    justify-content: space-between;
  }
`;

export const StyledLink = styled(Link)`
  ${breakpoints.only_tablet} {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;
