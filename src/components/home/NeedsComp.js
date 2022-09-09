import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fondo};

  @media (min-width: 769px) {
    padding: 100px 0;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
