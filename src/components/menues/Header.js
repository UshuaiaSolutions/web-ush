import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import {
  Content,
  StyledLink,
  StyledBoton,
  ContainerMenu,
  Toggle,
  Row,
  SVGModo,
} from "./HeaderComp";
import Container from "../base/Container";
import Logo from "../../assets/USH-logo";
import { useTheme } from "styled-components";
import { colors } from "../base/breakpoints";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "./ToogleLanguage";

function Header({ toggler }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let location = useLocation();

  const theme = useTheme();

  const { language, text, changeLanguage } = useContext(TranslationContext);

  const languages = [
    { value: "EN", label: "English" },
    { value: "ES", label: "Español ES" },
    { value: "LATAM", label: "Español LATAM" },
    { value: "CA", label: "Català" },
    { value: "PT", label: "Português" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <Content>
      <Container>
        <Row>
          <Link to="/" aria-label="Homepage">
            <Logo />
          </Link>
          <div className="mob">
            <ContainerMenu className="d-flex align-center">
              <StyledLink to="/about" selected={location.pathname === "/about"}>
                {text.HEADER.ABOUT}
              </StyledLink>
              <StyledLink
                to="/services"
                selected={location.pathname === "/services"}
              >
                {text.HEADER.SERVICES}
              </StyledLink>
              <StyledLink
                to="/expertise"
                selected={location.pathname === "/expertise"}
              >
                {text.HEADER.EXPERTISE}
              </StyledLink>
              <StyledLink
                to="/ush-blog"
                selected={location.pathname === "/ush-blog"}
              >
                {text.HEADER.BLOG}
              </StyledLink>
              <Link to="/contact">
                <StyledBoton>{text.HEADER.GET_IN_TOUCH}</StyledBoton>
              </Link>
            </ContainerMenu>
            <DropdownContainer>
              <DropdownToggle onClick={toggleDropdown}>
                {language}
              </DropdownToggle>
              <DropdownMenu isOpen={isOpen}>
                {languages.map((language) => (
                  <DropdownItem
                    key={language.value}
                    onClick={() => selectLanguage(language.value)}
                  >
                    {language.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </DropdownContainer>
            <div
              type="button"
              tabIndex={0}
              onClick={toggler}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggler();
                }
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              {theme.nombre === "light" ? (
                <SVGModo
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="78"
                    height="38"
                    rx="19"
                    fill={colors.fondoblanco}
                    stroke="#393939"
                    strokeWidth="2"
                  />
                  <circle cx="20" cy="20" r="12" fill={colors.textonegro} />
                  <path
                    d="M60 12.8C59.6956 12.8 59.4036 12.6791 59.1884 12.4638C58.9731 12.2486 58.8522 11.9566 58.8522 11.6522V9.14783C58.8522 8.8434 58.9731 8.55145 59.1884 8.33619C59.4036 8.12093 59.6956 8 60 8C60.3044 8 60.5964 8.12093 60.8116 8.33619C61.0269 8.55145 61.1478 8.8434 61.1478 9.14783V11.6522C61.1478 11.9566 61.0269 12.2486 60.8116 12.4638C60.5964 12.6791 60.3044 12.8 60 12.8ZM60 32C59.6956 32 59.4036 31.8791 59.1884 31.6638C58.9731 31.4485 58.8522 31.1566 58.8522 30.8522V28.3478C58.8522 28.0434 58.9731 27.7514 59.1884 27.5362C59.4036 27.3209 59.6956 27.2 60 27.2C60.3044 27.2 60.5964 27.3209 60.8116 27.5362C61.0269 27.7514 61.1478 28.0434 61.1478 28.3478V30.8522C61.1478 31.1566 61.0269 31.4485 60.8116 31.6638C60.5964 31.8791 60.3044 32 60 32ZM65.903 15.2449C65.676 15.2448 65.4541 15.1775 65.2654 15.0514C65.0767 14.9253 64.9296 14.7461 64.8427 14.5364C64.7558 14.3268 64.733 14.096 64.7773 13.8734C64.8215 13.6508 64.9307 13.4463 65.0911 13.2857L66.8619 11.515C67.0781 11.3044 67.3685 11.1874 67.6703 11.1894C67.9721 11.1914 68.261 11.3122 68.4744 11.5256C68.6878 11.739 68.8086 12.0279 68.8106 12.3297C68.8126 12.6314 68.6956 12.9219 68.485 13.1381L66.7143 14.9089C66.6078 15.0155 66.4814 15.1001 66.3421 15.1578C66.2029 15.2155 66.0537 15.2451 65.903 15.2449ZM52.3263 28.8216C52.0992 28.8215 51.8773 28.7542 51.6886 28.628C51.4998 28.5019 51.3527 28.3226 51.2659 28.1128C51.179 27.903 51.1563 27.6722 51.2007 27.4496C51.245 27.2269 51.3544 27.0224 51.515 26.8619L53.2857 25.0911C53.3918 24.9822 53.5184 24.8955 53.6583 24.8359C53.7981 24.7764 53.9484 24.7452 54.1004 24.7442C54.2524 24.7432 54.4031 24.7724 54.5438 24.8301C54.6844 24.8878 54.8121 24.9729 54.9196 25.0804C55.0271 25.1879 55.1122 25.3156 55.1699 25.4562C55.2276 25.5969 55.2568 25.7476 55.2558 25.8996C55.2548 26.0516 55.2236 26.2019 55.1641 26.3417C55.1045 26.4816 55.0178 26.6082 54.9089 26.7143L53.1381 28.485C53.0316 28.5919 52.9051 28.6766 52.7658 28.7343C52.6264 28.7921 52.4771 28.8217 52.3263 28.8216ZM70.8522 21.1478H68.3478C68.0434 21.1478 67.7514 21.0269 67.5362 20.8116C67.3209 20.5964 67.2 20.3044 67.2 20C67.2 19.6956 67.3209 19.4036 67.5362 19.1884C67.7514 18.9731 68.0434 18.8522 68.3478 18.8522H70.8522C71.1566 18.8522 71.4485 18.9731 71.6638 19.1884C71.8791 19.4036 72 19.6956 72 20C72 20.3044 71.8791 20.5964 71.6638 20.8116C71.4485 21.0269 71.1566 21.1478 70.8522 21.1478ZM51.6522 21.1478H49.1478C48.8434 21.1478 48.5514 21.0269 48.3362 20.8116C48.1209 20.5964 48 20.3044 48 20C48 19.6956 48.1209 19.4036 48.3362 19.1884C48.5514 18.9731 48.8434 18.8522 49.1478 18.8522H51.6522C51.9566 18.8522 52.2486 18.9731 52.4638 19.1884C52.6791 19.4036 52.8 19.6956 52.8 20C52.8 20.3044 52.6791 20.5964 52.4638 20.8116C52.2486 21.0269 51.9566 21.1478 51.6522 21.1478ZM67.6737 28.8216C67.5229 28.8217 67.3736 28.7921 67.2342 28.7343C67.0949 28.6766 66.9684 28.5919 66.8619 28.485L65.0911 26.7143C64.8806 26.4981 64.7636 26.2076 64.7656 25.9058C64.7676 25.604 64.8883 25.3152 65.1017 25.1017C65.3152 24.8883 65.604 24.7676 65.9058 24.7656C66.2076 24.7636 66.4981 24.8806 66.7143 25.0911L68.485 26.8619C68.6456 27.0224 68.755 27.2269 68.7993 27.4496C68.8437 27.6722 68.821 27.903 68.7341 28.1128C68.6473 28.3226 68.5002 28.5019 68.3114 28.628C68.1227 28.7542 67.9008 28.8215 67.6737 28.8216ZM54.097 15.2449C53.9463 15.2452 53.7971 15.2156 53.6578 15.158C53.5186 15.1003 53.3921 15.0156 53.2857 14.9089L51.515 13.1381C51.3044 12.9219 51.1874 12.6314 51.1894 12.3297C51.1914 12.0279 51.3122 11.739 51.5256 11.5256C51.739 11.3122 52.0279 11.1914 52.3297 11.1894C52.6314 11.1874 52.9219 11.3044 53.1381 11.515L54.9089 13.2857C55.0693 13.4463 55.1785 13.6508 55.2227 13.8734C55.267 14.096 55.2442 14.3268 55.1573 14.5364C55.0704 14.7461 54.9233 14.9253 54.7346 15.0514C54.5459 15.1775 54.324 15.2448 54.097 15.2449ZM60 25.3217C58.9475 25.3217 57.9186 25.0096 57.0434 24.4249C56.1682 23.8401 55.4861 23.009 55.0834 22.0365C54.6806 21.0641 54.5752 19.9941 54.7805 18.9618C54.9859 17.9295 55.4927 16.9812 56.237 16.237C56.9812 15.4927 57.9295 14.9859 58.9618 14.7805C59.9941 14.5752 61.0641 14.6806 62.0365 15.0834C63.009 15.4861 63.8401 16.1682 64.4249 17.0434C65.0096 17.9186 65.3217 18.9475 65.3217 20C65.3201 21.4109 64.7589 22.7635 63.7612 23.7612C62.7635 24.7589 61.4109 25.3201 60 25.3217Z"
                    fill="#393939"
                  />
                </SVGModo>
              ) : (
                <SVGModo
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="78"
                    height="38"
                    rx="19"
                    fill="#393939"
                    stroke={colors.fondoblanco}
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="60"
                    cy="20"
                    rx="12"
                    ry="12"
                    fill={colors.fondoblanco}
                  />
                  <path
                    d="M20.4285 32C17.1323 32 13.971 30.6906 11.6402 28.3598C9.30943 26.029 8 22.8677 8 19.5715C8 14.5358 10.8928 10.0208 15.3719 8.07138C15.5298 8.00258 15.7047 7.98293 15.8739 8.01497C16.0431 8.04702 16.1987 8.12929 16.3205 8.25105C16.4422 8.37281 16.5245 8.52843 16.5565 8.69762C16.5886 8.86681 16.5689 9.04173 16.5001 9.19959C15.9858 10.3803 15.7142 11.8926 15.7142 13.5715C15.7142 19.4794 20.5206 24.2858 26.4285 24.2858C28.1074 24.2858 29.6197 24.0142 30.8004 23.4999C30.9583 23.4311 31.1332 23.4114 31.3024 23.4435C31.4716 23.4755 31.6272 23.5578 31.749 23.6795C31.8707 23.8013 31.953 23.9569 31.985 24.1261C32.0171 24.2953 31.9974 24.4702 31.9286 24.6281C29.9792 29.1072 25.4642 32 20.4285 32Z"
                    fill={colors.fondoblanco}
                  />
                </SVGModo>
              )}
            </div>
          </div>

          <Toggle
            isOpen={openMobile}
            onClick={() => setOpenMobile((prevOpenMobile) => !prevOpenMobile)}
            aria-label="Toggle mobile menu"
          >
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </Toggle>
        </Row>

        {openMobile && <MenuMobile func={setOpenMobile} />}
      </Container>
    </Content>
  );
}

export default Header;
