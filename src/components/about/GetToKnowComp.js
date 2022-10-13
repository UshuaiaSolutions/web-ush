import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  & .position-mobile {
    margin-left: calc((100% - 276px) / 2);
    width: calc(100% - ((100% - 276px) / 2));
  }

  @media (min-width: 1500px) {
    padding: 0 0 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-wrap: wrap;

    &:last-child {
      width: calc(((100% - 223px - 223px - 223px) / 3) + 223px + 223px);
      justify-content: space-around;
      margin: auto;
    }
  }
`;

export const Card = styled.div`
  width: 136px;
  height: 136px;
  position: relative;

  & .info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(217, 217, 217, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.textonegro};
    justify-content: space-between;
    padding: 30px 0;
    text-align: center;
  }

  &:hover .info {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 769px) {
    width: 223px;
    height: 223px;
  }
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Row = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
`;

export const Info = styled.div`
  display: none;

  @media (min-width: 769px) {
  }
`;
