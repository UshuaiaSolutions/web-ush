import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.fondo};
  background: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 70px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  @media (min-width: 769px) {
    padding-left: 0;
    min-width: fit-content;
    width: 463px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Image = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 19px;

  @media (min-width: 1125px) {
    height: 27px;
    width: 27px;
    object-fit: scale-down;
  }
`;

export const RowDesktop = styled.div`
  margin-bottom: 20px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
  }
`;
