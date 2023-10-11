import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Content = styled.div`
  padding: 56px 0 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${(props) => props.theme.texto};

  ${breakpoints.min_desktop} {
    padding: 144px 0 65px;
  }
`;
