import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.fondo};
  background-color: ${(props) => props.theme.azulush};
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaExploreHowWe.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 100px 0;
  }
`;

export const Dropdown = styled.div`
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  border-radius: 32px;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 30px 0;
  }
`;

export const Item = styled.div`
  padding: 10px 0;
  width: calc(100% - 36px);
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.textonegro};
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 769px) and (max-width: 1124px) {
    width: calc(100% - 160px);
    height: auto;
    min-height: 136px;
    padding: 0 20px;
  }

  @media (min-width: 1125px) {
    width: calc(1089px - 120px - 120px);
    height: auto;
    min-height: 136px;
    padding: 0 60px;
  }
`;

export const ItemTitle = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    width: 80%;
  }

  @media (min-width: 769px) {
    height: 136px;
  }
`;

export const IconToggle = styled.img`
  height: 8px;
  width: 8px;
  transition: all 0.3s linear;
  transform: ${(props) => (props.isOpen ? "" : "rotate(45deg)")};
  cursor: pointer;

  @media (min-width: 769px) {
    height: 20px;
    width: 20px;
    object-fit: scale-down;
  }
`;

export const RowDesktop = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    & .ancho-exacto {
      max-width: 400px;
      width: 50%;
    }
  }

  @media (min-width: 1125px) {
    & .ancho-exacto {
      width: 529px;
      max-width: 529px;
    }
  }
`;
