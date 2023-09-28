import React from "react";
import Container from "../base/Container";

import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Row,
  Card,
  RowIcons,
  IconContainer,
  Content,
  Language,
  Project,
  Desktop,
  Creative,
  Creation,
  Learning,
} from "./WeCanHelpComp";
import BotonSecundario from "../base/BotonSecundario";
import { Link } from "react-router-dom";

function WeCanHelp() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <Row>
            <h2 className="h3-mobile h2-web mb-16-mobile text-center-mobile">
              We can help you
              <CorteDesktop /> solve multilingual
              <CorteDesktop /> challenges
            </h2>
            <p className="txt-regular-mobile destacado-regular mb-32-mobile text-center-mobile">
              From translation to desktop publishing
              <CorteDesktop /> and
              <CorteMobile /> copywriting, our team can help you
              <CorteDesktop /> remove
              <CorteMobile /> language barriers.
              <CorteDesktop /> Plus, we encourage
              <CorteMobile /> positive leadership
              <CorteDesktop /> to motivate our talented
              <CorteMobile /> professionals
              <CorteDesktop />
              to work together as one.
            </p>
          </Row>
          <RowIcons className="mb-32-mobile">
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile">
                <Language
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="none"
                >
                  <path
                    d="M0.167969 5.49964C0.274686 5.49964 0.381404 5.49964 0.488122 5.49964C4.97026 5.49964 9.50576 5.49964 13.9879 5.49964C14.0946 5.49964 14.2013 5.49964 14.3614 5.49964C13.8812 4.29782 13.3476 3.09599 12.8674 1.8419C14.0413 1.42388 15.2685 1.0581 16.4424 0.640076C17.0293 2.25993 17.6163 3.82753 18.2032 5.49964C22.0451 5.49964 25.8869 5.49964 29.7821 5.49964C29.7821 6.59697 29.7821 7.64204 29.7821 8.68711C29.6754 8.68711 29.622 8.68711 29.5153 8.68711C28.128 8.68711 26.7406 8.68711 25.3 8.68711C25.0865 8.68711 24.9798 8.73936 24.9264 8.94837C24.0193 12.9196 22.2585 16.5774 19.6973 19.7648C19.1637 20.3919 18.6301 21.0189 18.0965 21.646C20.3376 23.0568 22.7387 24.1541 25.2466 25.0424C24.8197 26.1397 24.3929 27.1848 23.966 28.2821C23.379 28.0731 22.7921 27.8641 22.2051 27.6028C19.804 26.6623 17.5096 25.5127 15.3752 24.1019C15.2151 23.9974 15.1618 24.0496 15.0017 24.1019C11.9603 26.0352 8.75873 27.6551 5.39713 28.9614C4.38331 29.3795 3.3695 29.693 2.35568 30.0588C1.87545 29.275 1.39522 28.5434 0.914993 27.8119C0.701557 27.4461 0.434763 27.1326 0.167969 26.7668V26.7145C0.221328 26.7145 0.274687 26.7145 0.274687 26.7145C4.06316 25.774 7.6382 24.4154 11.0532 22.5343C11.5334 22.273 12.0136 21.9595 12.5472 21.6982C10.7864 19.8693 9.29232 17.8837 8.11843 15.6891C6.94454 13.4944 6.03744 11.143 5.50385 8.73936C3.68965 8.73936 1.92881 8.73936 0.167969 8.73936C0.167969 7.64204 0.167969 6.59697 0.167969 5.49964ZM9.13225 8.73936C10.1461 12.9196 12.1203 16.4729 15.2151 19.5036C18.4167 16.5251 20.391 12.9719 21.2447 8.73936C17.1894 8.73936 13.1875 8.73936 9.13225 8.73936Z"
                    fill="#393939"
                  />
                  <path
                    d="M49.5782 39.3599C49.4715 39.3599 49.4181 39.3599 49.3114 39.3599C48.2442 39.3599 47.1771 39.3599 46.1099 39.3599C45.2028 39.3599 44.7226 38.9941 44.4024 38.2103C43.7087 36.277 42.9617 34.3958 42.2681 32.4625C42.1613 32.2012 42.0546 32.0967 41.7878 32.0967C37.8926 32.0967 33.9975 32.0967 30.0489 32.0967C29.8355 32.0967 29.7821 32.1489 29.6754 32.3579C28.9284 34.2913 28.128 36.2247 27.3276 38.1581C27.0074 38.9941 26.4739 39.3599 25.5668 39.3599C24.6063 39.3599 23.5925 39.3599 22.632 39.3599C22.5787 39.3599 22.472 39.3599 22.3652 39.3599C22.4186 39.2554 22.4186 39.1509 22.472 39.0986C26.1537 30.0588 29.8355 20.9667 33.5172 11.9269C33.5706 11.7178 33.6773 11.6656 33.8907 11.6656C35.2781 11.6656 36.612 11.6656 37.9994 11.6656C38.2128 11.6656 38.3195 11.7178 38.3729 11.9269C42.0546 20.9667 45.683 30.0065 49.3648 39.0986C49.4181 39.2031 49.4715 39.3076 49.5249 39.3599C49.5782 39.3076 49.5782 39.3076 49.5782 39.3599ZM35.9717 15.9504C34.6378 20.3397 32.7168 24.5722 31.1694 28.9092C34.371 28.9092 37.6258 28.9092 40.8274 28.9092C40.774 28.8047 40.774 28.7525 40.7207 28.7002C39.1733 24.4154 37.3591 20.2352 35.9717 15.9504Z"
                    fill="#393939"
                  />
                </Language>
              </IconContainer>
              <span className="texto-regular txt-mobile text-center">
                Language
                <br /> Solutions
              </span>
            </Card>
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile">
                <Project
                  width="55"
                  height="54"
                  viewBox="0 0 55 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.5025 8.35749L46.6864 8.14847L46.8999 2.55736C46.9532 1.66905 46.2596 0.989753 45.3525 0.9375C44.4987 0.9375 43.7517 1.56454 43.6983 2.45285L43.4316 9.19354L37.1886 15.3072C33.24 11.8585 28.0642 9.71607 22.3548 9.71607C10.1357 9.71607 0.210938 19.4352 0.210938 31.4012C0.210938 43.3673 10.1357 53.0864 22.3548 53.0864C34.574 53.0864 44.4987 43.3673 44.4987 31.4012C44.4987 26.1759 42.5778 21.3163 39.3763 17.5541L45.8861 11.1792L52.3958 11.4404H52.4492C53.3029 11.4404 53.9966 10.7611 54.05 9.92509C54.1033 9.08904 53.4096 8.40974 52.5025 8.35749ZM41.2972 31.4012C41.2972 41.6429 32.8132 49.9512 22.3548 49.9512C11.8965 49.9512 3.41246 41.6429 3.41246 31.4012C3.41246 21.1596 11.8965 12.8513 22.3548 12.8513C27.1571 12.8513 31.5859 14.6279 34.8941 17.5018L32.8665 19.4875C30.0385 17.0838 26.3567 15.6207 22.3548 15.6207C13.4973 15.6207 6.29384 22.6749 6.29384 31.349C6.29384 40.0231 13.4973 47.0773 22.3548 47.0773C31.2124 47.0773 38.4158 40.0231 38.4158 31.349C38.4158 27.7435 37.1886 24.3993 35.0542 21.7344L37.0819 19.7487C39.6964 22.9884 41.2972 27.012 41.2972 31.4012ZM29.3448 31.4012C29.3448 35.1635 26.1967 38.2464 22.3548 38.2464C18.513 38.2464 15.3648 35.1635 15.3648 31.4012C15.3648 27.639 18.513 24.556 22.3548 24.556C23.8489 24.556 25.2896 25.0263 26.4101 25.8624L23.2086 28.9976L22.1414 27.9003L21.1809 30.9832L20.2205 34.0662L23.422 33.3346L26.6235 32.6031L25.3963 31.2967L28.5445 28.2138C29.0247 29.2066 29.3448 30.2517 29.3448 31.4012ZM28.7045 23.6155C26.9437 22.2569 24.756 21.4208 22.3548 21.4208C16.7522 21.4208 12.1633 25.9146 12.1633 31.4012C12.1633 36.8879 16.7522 41.3817 22.3548 41.3817C27.9575 41.3817 32.5464 36.8879 32.5464 31.4012C32.5464 29.3634 31.9061 27.4822 30.8389 25.9146L32.7598 24.0335C34.3072 26.1236 35.2143 28.6318 35.2143 31.4012C35.2143 38.351 29.4516 43.9943 22.3548 43.9943C15.2581 43.9943 9.49537 38.351 9.49537 31.4012C9.49537 24.4515 15.2581 18.8082 22.3548 18.8082C25.503 18.8082 28.3844 19.9055 30.6254 21.7344L28.7045 23.6155Z"
                    fill="#393939"
                  />
                </Project>
              </IconContainer>
              <span className="texto-regular txt-mobile text-center">
                Project
                <br /> Management
              </span>
            </Card>
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile">
                <Desktop
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="50"
                  viewBox="0 0 55 50"
                  fill="none"
                >
                  <path
                    d="M52.5138 7.41674H29.5012V1.66886C29.5012 0.780552 28.807 0.101257 27.8993 0.101257C26.9917 0.101257 26.2975 0.780552 26.2975 1.66886V7.41674H3.28487C2.00342 7.41674 0.935547 8.46181 0.935547 9.71589V40.2841C0.935547 41.5382 2.00342 42.5833 3.28487 42.5833H26.2975V48.3312C26.2975 49.2195 26.9917 49.8988 27.8993 49.8988C28.807 49.8988 29.5012 49.2195 29.5012 48.3312V42.5833H52.5138C53.7953 42.5833 54.8631 41.5382 54.8631 40.2841V9.71589C54.8631 8.46181 53.7953 7.41674 52.5138 7.41674ZM4.13917 39.4481V10.5519H26.2975V39.3958H4.13917V39.4481ZM51.6595 39.4481H29.5012V10.5519H51.6595V39.4481Z"
                    fill="#393939"
                  />
                  <path
                    d="M17.5945 18.6512H14.0171L9.42529 31.0875H12.6823L13.4298 28.8929H18.1819L18.9294 31.0875H22.2398L17.5945 18.6512ZM14.2307 26.5937L15.7791 22.0477L17.381 26.5937H14.2307Z"
                    fill="#393939"
                  />
                  <path
                    d="M41.0341 31.0875C42.369 31.0875 43.3834 30.774 44.131 30.1992C44.8785 29.6244 45.2522 28.7884 45.2522 27.7433C45.2522 27.0117 45.0386 26.3847 44.5581 25.8099C44.131 25.2351 43.5436 24.8693 42.7961 24.7126C43.4368 24.5036 43.9708 24.19 44.3445 23.7198C44.7183 23.2495 44.9319 22.6224 44.9319 21.8909C44.9319 20.8981 44.5581 20.1143 43.8106 19.5395C43.0631 18.9647 42.0486 18.6512 40.7671 18.6512H35.1074V31.0875H41.0341ZM38.2043 21.1071H40.2332C40.7671 21.1071 41.1409 21.2116 41.4079 21.4206C41.6748 21.6296 41.835 21.9954 41.835 22.4134C41.835 22.8315 41.6748 23.145 41.4079 23.4062C41.1409 23.6675 40.7671 23.7198 40.2332 23.7198H38.2043V21.1071ZM38.2043 25.9144H40.4468C40.9807 25.9144 41.3545 26.0189 41.6748 26.2802C41.9952 26.5415 42.102 26.855 42.102 27.3253C42.102 27.7433 41.9418 28.1091 41.6748 28.3181C41.4079 28.5271 40.9807 28.6838 40.4468 28.6838H38.1509V25.9144H38.2043Z"
                    fill="#393939"
                  />
                </Desktop>
              </IconContainer>
              <span className="texto-regular txt-mobile text-center">
                Desktop
                <br /> Publishing
              </span>
            </Card>
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile">
                <Creative
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="46"
                  viewBox="0 0 53 46"
                  fill="none"
                >
                  <path
                    d="M29.0656 45.8613C27.9451 45.8613 26.9847 45.1298 26.7179 44.0847C24.3701 34.9404 16.9532 27.6771 7.82885 25.4825C6.76167 25.2212 6.01465 24.3329 6.01465 23.2356C6.01465 22.1383 6.70831 21.1977 7.77549 20.9365C17.8069 18.2715 24.21 12.0011 26.7179 2.33423C26.9847 1.28917 27.9451 0.557617 29.0656 0.557617C30.1862 0.557617 31.0933 1.28917 31.4134 2.33423C33.9213 12.0534 40.3777 18.376 50.5692 20.9887C51.6364 21.25 52.3834 22.1905 52.3834 23.2879C52.3834 24.3852 51.5831 25.3257 50.5159 25.5348C45.8203 26.6321 41.7117 28.9312 38.19 32.3277C34.8284 35.6719 32.534 39.5909 31.4134 44.0325C31.1466 45.1298 30.1862 45.8613 29.0656 45.8613ZM11.1371 23.1834C19.3543 26.005 26.0776 32.589 29.0123 40.7928C30.3996 36.8215 32.694 33.216 35.8422 30.1331C39.0971 26.9456 42.8322 24.5942 47.0476 23.2356C38.0299 20.2049 32.0004 14.3003 29.0123 5.67845C26.0776 14.3003 20.048 20.1527 11.1371 23.1834Z"
                    fill="#393939"
                  />
                  <path
                    d="M8.57581 15.9724C7.61535 15.9724 6.70825 15.3976 6.33474 14.5093C5.481 12.4714 4.14703 11.1651 2.17276 10.329C1.26566 9.96326 0.678711 9.12721 0.678711 8.13439C0.678711 7.19383 1.26566 6.30552 2.17276 5.93975C4.20039 5.10369 5.53436 3.79736 6.3881 1.81173C6.76161 0.92342 7.61535 0.348633 8.62917 0.348633C9.58963 0.348633 10.4967 0.92342 10.8702 1.81173C11.724 3.79736 13.0579 5.10369 15.0856 5.93975C15.9927 6.30552 16.5796 7.14158 16.5796 8.13439C16.5796 9.07495 15.9927 9.96326 15.0856 10.329C13.0579 11.1651 11.6706 12.5237 10.8702 14.5093C10.4434 15.3976 9.53627 15.9724 8.57581 15.9724ZM4.8407 8.13439C6.3881 9.0227 7.66871 10.2768 8.57581 11.8444C9.48291 10.2768 10.7635 9.07495 12.3109 8.13439C10.7635 7.24608 9.48291 5.992 8.57581 4.47665C7.66871 5.992 6.3881 7.24608 4.8407 8.13439Z"
                    fill="#393939"
                  />
                </Creative>
              </IconContainer>
              <span className="texto-regular txt-mobile text-center">
                Creative
                <br /> Visuals
              </span>
            </Card>
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile">
                <Creation
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="46"
                  viewBox="0 0 47 46"
                  fill="none"
                >
                  <path
                    d="M8.25081 45.1816C7.6105 45.1816 6.9702 44.9203 6.48997 44.5023L5.68959 43.7185C4.94256 42.987 4.78249 41.9419 5.20936 41.0536C4.30226 41.4716 3.23508 41.2626 2.48806 40.5833L1.68768 39.7995C0.940654 39.1202 0.780577 38.0229 1.20745 37.0823L11.0788 16.0765C11.5591 15.0836 12.6796 14.5089 13.8001 14.7179C18.6024 15.7107 24.2584 11.1124 27.1932 8.34295C28.1536 7.45464 29.701 7.45464 30.6081 8.3952L38.7187 16.3377C39.6791 17.2783 39.6791 18.7414 38.772 19.6819C35.8907 22.6604 31.1951 28.3038 32.1555 32.7453C32.369 33.8426 31.8354 34.9399 30.7682 35.4102L9.31798 45.0771C8.94447 45.0771 8.62432 45.1816 8.25081 45.1816ZM14.6005 28.565C15.2408 28.565 15.8811 28.774 16.308 29.2443L17.1617 30.0804C18.1222 31.0209 18.1222 32.5363 17.1617 33.4768L8.73104 41.7329L28.8473 32.693C28.1003 27.52 32.1022 21.9288 35.8907 17.9576L28.7939 11.0079C24.792 14.6656 19.136 18.5846 13.6934 17.8008L4.40897 37.5526L12.8397 29.2966C13.3199 28.8263 13.9602 28.565 14.6005 28.565Z"
                    fill="#393939"
                  />
                  <path
                    d="M41.5469 16.0242C40.9066 16.0242 40.3197 15.7629 39.8928 15.3449L30.9285 6.61858C30.5017 6.20056 30.2349 5.62577 30.2349 4.99873C30.2349 4.37169 30.5017 3.7969 30.9285 3.37887L33.1162 1.23648C34.0233 0.348174 35.5174 0.348174 36.4245 1.23648L45.3354 9.9628C46.2425 10.8511 46.2425 12.3142 45.3354 13.2025L43.1477 15.3449C42.7742 15.8152 42.1872 16.0242 41.5469 16.0242ZM33.8099 4.99873L41.5469 12.5755L42.5607 11.5827L34.8237 4.00591L33.8099 4.99873Z"
                    fill="#393939"
                  />
                </Creation>
              </IconContainer>
              <span className="texto-regular txt-mobile text-center">
                Content
                <br /> Creation
              </span>
            </Card>
            <Card className="mb-16-mobile">
              <IconContainer className="mb-15 mb-8-mobile"></IconContainer>
              <span className="texto-regular txt-mobile text-center">
                E-Learning
                <br /> and video
              </span>
            </Card>
          </RowIcons>
          <Link to="/services">
            <BotonSecundario>Explore USH Services</BotonSecundario>
          </Link>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default WeCanHelp;
