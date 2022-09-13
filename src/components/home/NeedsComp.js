import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fondo};

  & .swiper-wrapper {
    align-items: baseline;
  }

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
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

  &.first {
    height: auto;
    width: 31px;
  }

  &.second {
    height: auto;
    width: 24px;
  }

  &.third {
    height: auto;
    width: 23px;
  }

  @media (min-width: 769px) {
    &.first {
      height: 52px;
      width: 69px;
    }

    &.second {
      height: 48px;
      width: 57px;
    }

    &.third {
      height: 60.02px;
      width: 49.34px;
    }
  }
`;
