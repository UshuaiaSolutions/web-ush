import styled from "styled-components";
import { Link } from "react-router-dom";

export const Fondo = styled.div`
  background: ${(props) =>
    props.theme.nombre === "light"
      ? "rgba(246, 243, 232, 0.95)"
      : "rgba(57, 57, 57, 0.95)"};
  width: 100vw;
  height: calc(100vh - 100px);
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  transition: 0.2s;
`;

export const Logo = styled.div`
  background-size: cover;
  height: 39px;
  width: 170px;
  background: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/USHLogoMenu.png);
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.texto};
  margin-bottom: 30px;
  text-decoration: none;
  transition: 0.2s;
`;

export const Follow = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.texto};
  transition: 0.2s;
`;

export const StyledBoton = styled.button`
  height: 32px;
  width: 254px;
  left: 0px;
  top: 240px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: ${(props) => props.theme.fondo};
  background-color: ${(props) => props.theme.contacto};
  transition: 0.2s;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 10px;
`;

export const ContainerRedesFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 34px;
`;
