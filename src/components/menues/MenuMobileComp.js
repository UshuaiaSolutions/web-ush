import styled from "styled-components";
import { Link } from "react-router-dom";

export const Fondo = styled.div`
  background: rgba(246, 243, 232, 0.9);
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
`;

export const Logo = styled.div`
  background-size: cover;
  height: 46px;
  width: 169px;
  background: url(/logos/ush-mobile-open.png);
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.textonegro};
  margin-bottom: 30px;
  text-decoration: none;
`;

export const Follow = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.textonegro};
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
  background: ${(props) => props.theme.lilaush};
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

export const Red = styled.p`
  text-decoration: underline;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
`;

export const ContainerRed = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textonegro};
  flex-direction: column;
  margin-right: 0px;
`;

export const RedImage = styled.img`
  width: 23px;
  height: 23px;
  margin-bottom: 8px;
`;
