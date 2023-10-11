import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Table,
  Content,
  EstrellaVerde,
  TableMobile,
} from "./MembershipsComp";
import Tala from "../../assets/Portfolio/Tala";
import Gala from "../../assets/Portfolio/Gala";
import Elia from "../../assets/Portfolio/Elia";
import { useTheme } from "styled-components";
import { colors } from "../base/breakpoints";

function Memberships() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Container>
        <Content>
          <div className="d-flex flex-column justify-center text-center">
            <h2 className="h2-web h3-mobile mb-40 mb-16-mobile">
              Our Memberships
            </h2>
            <p className="txt-regular-mobile destacado-regular mb-32-mobile mb-80 text-center">
              Networking and sharing experiences is the
              <CorteDesktop />
              <CorteMobile /> best way to improve both our services
              <CorteDesktop />
              <CorteMobile /> and the language industry as a whole.
            </p>
          </div>
          <Table>
            <Gala />
            <Tala />
            <Elia />
          </Table>
          <TableMobile>
            <Gala />
            <Elia />
            <Tala />
          </TableMobile>
          <EstrellaVerde
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M0 32.6103C17.05 28.292 27.6751 17.6561 32.0257 0.594971C36.3393 17.6693 46.9922 28.2389 64 32.6126C46.9749 36.9516 36.3688 47.5379 32.0205 64.595C27.6705 47.5593 17.0788 36.9245 0 32.6103Z"
              fill={theme.nombre === "light" ? colors.lilaush : colors.amarillo}
            />
          </EstrellaVerde>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default Memberships;
