import React from "react";

import Container from "../base/Container";
import { CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Content,
  Card,
  CardContainer,
  SVGContainer,
  Scalability,
  Quality,
  Experience,
} from "./WhyUSHComp";
import { useTheme } from "styled-components";
import { colors } from "../base/breakpoints";

function WhyUSH() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Container>
        <Content>
          <h2 className="h2-web h3-mobile mb-40 mb-0-mobile text-center ">
            Why USH?
          </h2>
          <CardContainer>
            <Card>
              <SVGContainer className="mb-35 mb-16-mobile">
                <Scalability
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="40"
                  viewBox="0 0 34 40"
                  fill="none"
                >
                  <path
                    d="M7.07863 39.3599H2.69221C1.43894 39.3599 0.446777 38.3671 0.446777 37.113V16.1071C0.446777 14.853 1.43894 13.8602 2.69221 13.8602H7.07863C8.33189 13.8602 9.32406 14.853 9.32406 16.1071V37.113C9.37628 38.3148 8.33189 39.3599 7.07863 39.3599Z"
                    fill={
                      theme.nombre === "light"
                        ? colors.azulush
                        : colors.verdeush
                    }
                  />
                  <path
                    d="M19.1934 39.3599H14.807C13.5537 39.3599 12.5615 38.3671 12.5615 37.113V9.78449C12.5615 8.53041 13.5537 7.5376 14.807 7.5376H19.1934C20.4466 7.5376 21.4388 8.53041 21.4388 9.78449V37.113C21.4388 38.3149 20.4466 39.3599 19.1934 39.3599Z"
                    fill={
                      theme.nombre === "light"
                        ? colors.azulush
                        : colors.verdeush
                    }
                  />
                  <path
                    d="M31.2559 39.3599H26.8695C25.6162 39.3599 24.624 38.3671 24.624 37.113V2.93928C24.624 1.6852 25.6162 0.692383 26.8695 0.692383H31.2559C32.5091 0.692383 33.5013 1.6852 33.5013 2.93928V37.0608C33.5535 38.3148 32.5091 39.3599 31.2559 39.3599Z"
                    fill={
                      theme.nombre === "light"
                        ? colors.azulush
                        : colors.verdeush
                    }
                  />
                </Scalability>
              </SVGContainer>
              <h3 className="title-card mb-35 body-bold-mobile mb-16-mobile">
                Scalability
              </h3>
              <p className="texto-regular text-center txt-regular-mobile">
                We have the capacity to build and
                <CorteMobile /> maintain on-site dedicated teams
                <CorteMobile /> which can adapt to any
                <CorteMobile /> technology or platform you use.
              </p>
            </Card>
            <Card>
              <SVGContainer className="mb-35 mb-16-mobile">
                <Quality
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <path
                    d="M3.23263 31.5756C3.37572 31.0109 3.63508 30.2443 3.75645 29.456C4.01197 27.7836 3.52393 26.3195 2.3511 25.0943C2.07258 24.803 1.76087 24.5449 1.48236 24.2523C0.427064 23.1459 0.421911 21.577 1.47082 20.4706C1.79149 20.1321 2.15692 19.8319 2.46738 19.4869C3.66832 18.148 4.07332 16.5881 3.68877 14.8314C3.60828 14.4609 3.47285 14.1019 3.36425 13.7378C2.88899 12.1267 3.76537 10.6651 5.39686 10.2193C6.24646 9.98801 7.12547 9.73629 7.87158 9.29169C9.12873 8.54046 9.79437 7.32424 10.1176 5.89078C10.6376 3.5911 11.9139 2.82452 14.1727 3.53103C15.7518 4.0229 17.2389 3.92963 18.6353 3.10302C19.1885 2.77596 19.6574 2.28027 20.1135 1.81651C21.5891 0.326831 23.1657 0.283418 24.5659 1.84208C25.565 2.95104 26.7263 3.73031 28.2147 3.79291C29.0592 3.82868 29.9382 3.65751 30.7622 3.43265C32.6378 2.92161 34.093 3.68815 34.5005 5.58666C34.8404 7.17599 35.5009 8.54178 36.928 9.36455C37.6281 9.76699 38.4457 9.99439 39.234 10.2116C40.9536 10.683 41.7892 12.0999 41.2973 13.8119C41.181 14.2181 41.0201 14.6167 40.9511 15.0294C40.6483 16.8448 41.121 18.424 42.4446 19.7271C42.626 19.906 42.8177 20.0746 42.9991 20.2535C44.3418 21.5796 44.338 23.169 42.962 24.4849C42.2223 25.1927 41.5286 25.9056 41.1734 26.9123C40.7199 28.1963 40.8144 29.4317 41.2117 30.7068C41.8352 32.71 40.9868 34.1562 38.9389 34.5638C37.4939 34.8513 36.2776 35.4888 35.4804 36.7229C35.0632 37.3822 34.7608 38.1076 34.5861 38.868C34.0866 40.9863 32.7514 41.864 30.6588 41.215C29.0975 40.7295 27.5925 40.7193 26.1808 41.5306C25.5688 41.8793 25.0425 42.407 24.5404 42.9155C23.1057 44.3694 21.5176 44.4179 20.1352 42.8912C19.1132 41.7656 17.9391 40.9748 16.4302 40.9147C15.587 40.879 14.7105 41.0719 13.8852 41.298C12.0557 41.7912 10.5878 41.0195 10.1917 39.1529C9.81738 37.3937 9.02272 35.9589 7.39123 35.1362C6.74094 34.8078 5.99351 34.6673 5.28189 34.4667C4.04901 34.1141 3.21602 33.0486 3.23263 31.5756ZM38.9887 22.3551C38.9887 13.3046 31.5697 5.88056 22.6534 5.73875C13.3167 5.58927 5.8402 13.2433 5.72905 22.1379C5.61918 30.9022 12.6166 38.9153 22.2739 38.983C31.4764 39.0533 38.9887 31.5372 38.9887 22.3551Z"
                    fill={
                      theme.nombre === "light" ? colors.rojoush : colors.rosaush
                    }
                  />
                  <path
                    d="M22.3265 36.231C14.707 36.2157 8.43011 29.9095 8.46844 22.3052C8.50676 14.701 14.7798 8.46375 22.361 8.47781C29.9806 8.49186 36.2868 14.8006 36.2114 22.4036C36.1347 30.11 29.9972 36.1607 22.3265 36.231ZM19.5797 24.0083C18.3737 22.7945 17.2238 21.6409 16.0778 20.4846C15.4096 19.8101 14.6073 19.4779 13.6644 19.6184C12.5414 19.7845 11.7621 20.422 11.4005 21.5054C11.0249 22.6271 11.3571 23.5956 12.1671 24.4094C13.9319 26.1861 15.7026 27.956 17.4794 29.7191C18.7646 30.9967 20.3501 31.0158 21.6456 29.7319C24.8106 26.5983 27.962 23.4499 31.0998 20.2866C32.3288 19.0473 32.348 17.32 31.1994 16.2085C30.0508 15.097 28.3887 15.1864 27.1661 16.3976C25.9434 17.6087 24.7297 18.825 23.5172 20.0387C22.2141 21.3419 20.9225 22.6527 19.5797 24.0083Z"
                    fill={
                      theme.nombre === "light" ? colors.rojoush : colors.rosaush
                    }
                  />
                </Quality>
              </SVGContainer>
              <h3 className="title-card mb-35 body-bold-mobile mb-16-mobile">
                Quality
              </h3>
              <p className="texto-regular text-center txt-regular-mobile">
                Our workflow complies with the
                <CorteMobile /> requirements of the ISO 17100
                <CorteMobile /> International Standards.
                <CorteMobile /> We provide confidential
                <CorteMobile /> information management.
              </p>
            </Card>
            <Card>
              <SVGContainer className="mb-35 mb-16-mobile">
                <Experience
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                >
                  <path
                    d="M26.8357 11.4178L37.2864 13.0376C38.645 13.2467 39.1675 14.9188 38.1747 15.9116L30.4935 23.2271C30.0755 23.5928 29.9187 24.1676 30.0232 24.6902L31.6953 35.1408C31.9043 36.4994 30.4935 37.5445 29.2394 36.8652L19.9383 31.8489C19.468 31.5876 18.8932 31.5876 18.3707 31.8489L8.96507 36.7084C7.71098 37.3355 6.30014 36.2904 6.56141 34.9318L8.44253 24.5334C8.54704 24.0109 8.39028 23.4361 7.97225 23.0703L0.500009 15.5458C-0.492806 14.553 0.0819815 12.8809 1.44057 12.7241L11.9435 11.3133C12.466 11.261 12.9363 10.8952 13.1976 10.425L18.0049 0.914843C18.632 -0.33924 20.4086 -0.286985 20.9834 0.967097L25.5817 10.5295C25.7907 10.9998 26.261 11.3655 26.8357 11.4178Z"
                    fill={
                      theme.nombre === "light"
                        ? colors.lilaush
                        : colors.amarillo
                    }
                  />
                </Experience>
              </SVGContainer>
              <h3 className="title-card mb-35 body-bold-mobile mb-16-mobile">
                Experience
              </h3>
              <p className="texto-regular text-center txt-regular-mobile">
                With more than 20 years in the
                <CorteMobile /> language services industry,
                <CorteMobile /> we have carefully selected and
                <CorteMobile /> trained our team of linguists,
                <CorteMobile /> designers and IT professionals.
              </p>
            </Card>
          </CardContainer>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default WhyUSH;
