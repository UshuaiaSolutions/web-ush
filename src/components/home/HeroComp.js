import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  padding: 24px 0;
  text-align: center;

  ${breakpoints.min_desktop} {
    text-align: start;
    flex-direction: row;
    align-items: start;
    padding: 144px 0 16px;
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
