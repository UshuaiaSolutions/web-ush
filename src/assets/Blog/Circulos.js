import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../../components/base/breakpoints";

function Circulos() {
  const theme = useTheme();

  return (
    <SVG
      width="333"
      height="333"
      viewBox="0 0 333 333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A colored circle with small white circles in it that barely resembles a shooting target. It is used just to catch the user's attention."
    >
      <path
        d="M173.064 123.988C170.947 123.671 168.723 123.512 166.5 123.512C164.276 123.512 162.105 123.671 159.935 123.988C139.288 127.165 123.458 145.006 123.458 166.5C123.458 187.994 139.288 205.888 159.935 209.012C162.052 209.329 164.276 209.488 166.5 209.488C168.723 209.488 170.894 209.329 173.064 209.012C193.711 205.835 209.541 187.994 209.541 166.5C209.541 145.006 193.658 127.112 173.064 123.988ZM166.5 184.818C165.229 184.818 164.011 184.712 162.794 184.447C154.429 182.753 148.182 175.341 148.182 166.5C148.182 157.659 154.482 150.247 162.794 148.553C164.011 148.288 165.229 148.182 166.5 148.182C167.77 148.182 168.988 148.288 170.205 148.553C178.57 150.247 184.817 157.659 184.817 166.5C184.817 175.341 178.517 182.753 170.205 184.447C168.988 184.712 167.77 184.818 166.5 184.818Z"
        fill={theme.nombre === "light" ? colors.rojoush : colors.amarillo}
      />
      <path
        d="M166.5 74.0117C115.517 74.0117 74.0114 115.518 74.0114 166.5C74.0114 217.482 115.517 258.988 166.5 258.988C217.482 258.988 258.988 217.482 258.988 166.5C258.988 115.518 217.482 74.0117 166.5 74.0117ZM166.5 234.265C129.123 234.265 98.7349 203.876 98.7349 166.5C98.7349 129.123 129.123 98.7352 166.5 98.7352C203.876 98.7352 234.264 129.123 234.264 166.5C234.264 203.876 203.876 234.265 166.5 234.265Z"
        fill={theme.nombre === "light" ? colors.rojoush : colors.amarillo}
      />
      <path
        d="M166.5 0C74.7 0 0 74.7 0 166.5C0 258.3 74.7 333 166.5 333C258.3 333 333 258.3 333 166.5C333 74.7 258.3 0 166.5 0ZM166.5 283.553C101.859 283.553 49.4471 231.141 49.4471 166.5C49.4471 101.859 101.859 49.4471 166.5 49.4471C231.141 49.4471 283.553 101.859 283.553 166.5C283.553 231.141 231.141 283.553 166.5 283.553Z"
        fill={theme.nombre === "light" ? colors.rojoush : colors.amarillo}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  display: none;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 333px;
    height: 333px;
    display: block;
  }
`;

export default Circulos;
