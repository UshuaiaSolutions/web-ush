import React from "react";
import { CorteDesktop } from "../base/Cortes";
import { Container, SVG } from "./SuccessComp";
import { useTheme } from "styled-components";

const Success = ({ showDiv }) => {
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
          d="M28.1535 42.0001C30.7025 42.0001 32.7689 39.9337 32.7689 37.3847C32.7689 34.8357 30.7025 32.7693 28.1535 32.7693C25.6045 32.7693 23.5381 34.8357 23.5381 37.3847C23.5381 39.9337 25.6045 42.0001 28.1535 42.0001Z"
          fill={theme.texto}
        />
        <path
          d="M42.0094 66.6153C33.2748 66.6153 25.9286 60.9364 23.6036 53.1864C23.5386 52.9558 23.5283 52.7132 23.5737 52.4779C23.619 52.2426 23.7187 52.0211 23.8648 51.8311C24.0108 51.6412 24.1992 51.488 24.415 51.3837C24.6308 51.2795 24.8679 51.227 25.1075 51.2306H58.894C59.1336 51.227 59.3707 51.2795 59.5865 51.3837C59.8022 51.488 59.9907 51.6412 60.1367 51.8311C60.2828 52.0211 60.3825 52.2426 60.4278 52.4779C60.4731 52.7132 60.4629 52.9558 60.3979 53.1864C58.0921 60.9364 50.744 66.6153 42.0094 66.6153Z"
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
      <h2 className="h2-web h3-mobile mb-30 mb-30-mobile">Thank you!</h2>
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

export default Success;
