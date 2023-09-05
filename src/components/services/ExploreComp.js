import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 60px 0;
  background-color: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondoblanco};
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/TramaExploreHowWe.png);
  background-repeat: inherit;
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    padding: 100px 0;
  }
`;

export const Dropdown = styled.div`
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
  border-radius: 32px;
  padding: 15px 0;

  ${breakpoints.min_tablet} {
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

  ${breakpoints.only_tablet} {
    width: calc(100% - 160px);
    height: auto;
    min-height: 136px;
    padding: 0 20px;
  }

  ${breakpoints.min_desktop} {
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

  ${breakpoints.min_tablet} {
    height: 136px;
  }
`;

export const IconToggle = styled.img`
  height: 8px;
  width: 8px;
  transition: all 0.3s linear;
  transform: ${(props) => (props.isOpen ? "" : "rotate(45deg)")};
  cursor: pointer;

  ${breakpoints.min_tablet} {
    height: 20px;
    width: 20px;
    object-fit: scale-down;
  }
`;

export const RowDesktop = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    & .ancho-exacto {
      max-width: 400px;
      width: 50%;
    }
  }

  ${breakpoints.min_desktop} {
    & .ancho-exacto {
      width: 529px;
      max-width: 529px;
    }
  }
`;
