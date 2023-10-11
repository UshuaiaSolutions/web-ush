import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Avion() {
  const theme = useTheme();

  return (
    <SVG
      width="617"
      height="447"
      viewBox="0 0 617 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M259.287 410.188C259.422 407.341 259.565 404.587 259.692 401.833C259.801 399.669 259.885 397.513 260.02 395.357C260.045 394.893 259.919 394.582 259.574 394.287C257.258 392.24 254.967 390.152 252.651 388.105C251.076 386.716 250.764 386.337 251.497 383.599C252.449 383.844 253.417 384.037 254.352 384.349C256.196 384.947 258.032 385.587 259.868 386.244C262.1 387.027 264.341 387.027 266.598 386.353C268.535 385.781 270.472 385.191 272.417 384.644C273.352 384.383 274.295 384.214 275.256 384.012C275.315 384.172 275.34 384.248 275.357 384.315C275.938 386.884 275.87 386.901 273.858 388.61C271.525 390.59 269.267 392.645 266.994 394.683C266.85 394.809 266.758 395.053 266.758 395.239C266.935 400.25 267.137 405.269 267.322 410.289C267.322 410.356 267.356 410.441 267.389 410.558C275.651 406.878 283.863 403.214 292.234 399.492C292.142 399.921 292.117 400.233 292.007 400.511C291.266 402.414 290.516 404.309 289.742 406.196C289.64 406.432 289.438 406.667 289.236 406.819C282.414 411.771 275.584 416.715 268.754 421.659C268.392 421.92 268.265 422.198 268.257 422.644C268.232 427.049 268.24 431.454 268.114 435.858C268.063 437.593 267.869 439.354 267.465 441.038C266.724 444.154 263.498 445.662 260.719 444.348C259.473 443.758 258.74 442.739 258.344 441.451C257.712 439.421 257.578 437.315 257.611 435.21C257.679 431.555 257.813 427.916 257.982 424.261C258.041 423.057 257.738 422.097 256.794 421.339C254.293 419.326 251.859 417.212 249.299 415.275C245.374 412.31 241.365 409.464 237.373 406.583C236.935 406.263 236.733 405.909 236.649 405.387C236.32 403.374 235.941 401.362 235.545 399.197C243.513 402.886 251.354 406.516 259.287 410.188Z"
        fill={theme.texto}
      />
      <path
        d="M451.5 0.5V16C451.5 48.5848 425.085 75 392.5 75H51.5C23.6096 75 1 97.6096 1 125.5V125.5C1 153.39 23.6096 176 51.5 176H568.75C594.845 176 616 197.155 616 223.25V223.25C616 249.345 594.845 270.5 568.75 270.5H323C290.415 270.5 264 296.915 264 329.5V409"
        stroke={theme.texto}
        stroke-width="2"
        stroke-dasharray="6 6"
      />
    </SVG>
  );
}

const SVG = styled.svg`
  display: none;

  ${breakpoints.min_desktop} {
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

export default Avion;