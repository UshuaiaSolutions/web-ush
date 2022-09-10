import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 100px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;

    & div {
      width: 50%;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: self-start;

  @media (min-width: 769px) {
    margin-bottom: 40px;
  }

  & h3 {
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 19px;
  align-items: flex-start;
  line-height: 16px;

  @media (min-width: 769px) {
    width: 28px;
    height: 28px;
    line-height: 28px;
  }
`;

export const DesktopRow = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    .exacto-desktop {
      min-width: fit-content;
      width: 50%;
    }
  }
`;
