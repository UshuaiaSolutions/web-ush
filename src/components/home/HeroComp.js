import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;

  & .corte-exacto-desktop-chico {
    width: 100%;
  }

  ${breakpoints.min_tablet} {
    flex-direction: row;
    padding: 100px 0;

    & .corte-exacto-desktop-chico {
      min-width: fit-content;
    }
  }
`;

export const Image = styled.img`
  height: auto;
  width: 272px;
  margin-top: 40px;

  ${breakpoints.min_tablet} {
    width: 530px;
    margin-top: 0px;
  }
`;
