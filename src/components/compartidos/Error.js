import React from "react";
import { CorteDesktop } from "../base/Cortes";
import { Container, SVG } from "./SuccessComp";
import { useTheme } from "styled-components";

const Error = ({ showDiv }) => {
  const theme = useTheme();

  return (
    <Container className={`fade-in ${showDiv ? "show" : ""}`}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
      >
        <path
          d="M28.1544 42.0001C30.7035 42.0001 32.7698 39.9337 32.7698 37.3847C32.7698 34.8357 30.7035 32.7693 28.1544 32.7693C25.6054 32.7693 23.5391 34.8357 23.5391 37.3847C23.5391 39.9337 25.6054 42.0001 28.1544 42.0001Z"
          fill={theme.texto}
        />
        <path
          d="M42.0007 48.1538C50.7353 48.1538 58.0815 53.8327 60.4065 61.5827C60.4718 61.8141 60.4819 62.0576 60.4361 62.2936C60.3902 62.5297 60.2897 62.7517 60.1425 62.9419C59.9954 63.132 59.8057 63.285 59.5887 63.3886C59.3717 63.4923 59.1334 63.5435 58.893 63.5384H25.1065C24.8669 63.542 24.6298 63.4896 24.414 63.3853C24.1983 63.2811 24.0098 63.1279 23.8638 62.9379C23.7177 62.748 23.618 62.5265 23.5727 62.2912C23.5274 62.0559 23.5376 61.8133 23.6026 61.5827C25.9084 53.8327 33.2565 48.1538 42.0007 48.1538Z"
          fill={theme.texto}
        />
        <path
          d="M55.8459 42.0001C58.3949 42.0001 60.4612 39.9337 60.4612 37.3847C60.4612 34.8357 58.3949 32.7693 55.8459 32.7693C53.2968 32.7693 51.2305 34.8357 51.2305 37.3847C51.2305 39.9337 53.2968 42.0001 55.8459 42.0001Z"
          fill={theme.texto}
        />
        <path
          d="M42 82C64.0914 82 82 64.0914 82 42C82 19.9086 64.0914 2 42 2C19.9086 2 2 19.9086 2 42C2 64.0914 19.9086 82 42 82Z"
          stroke={theme.texto}
          stroke-width="4"
          stroke-miterlimit="10"
        />
      </SVG>
      <h2 className="h2-web h3-mobile mb-30 mb-30-mobile">Sorry</h2>
      <h3 className="destacado-bold destacados-semibold-mobile mb-30 mb-30-mobile text-center-mobile">
        Your request has been successfully sent.
      </h3>
      <p className="text-center text-center-mobile texto-regular txt-minimo-mobile">
        You'll be quickly contacted by a member of the USHteam. If you don't see
        our response,
        <CorteDesktop /> please check your spam or junk email folders.
      </p>
    </Container>
  );
};

export default Error;
