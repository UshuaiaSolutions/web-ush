import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../components/base/breakpoints";

function IlustracionAbout() {
  const theme = useTheme();

  return (
    <SVG
      width="1440"
      height="415"
      viewBox="0 0 1440 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="An illustration that simulates a rainbow with three colored semicircles divided by three dotted lines."
    >
      <g clip-path="url(#clip0_47_2054)">
        <path
          d="M720.079 48.9989C622.895 48.9989 528.565 68.0743 439.784 105.748C354.015 142.15 277.124 194.13 210.855 260.417C144.745 326.703 92.7447 403.958 56.598 489.956C19.0245 578.974 -4.25937e-06 673.556 0 770.999L66.5859 770.999C66.5859 682.458 83.8666 596.778 117.952 516.026C150.928 437.976 198.014 367.874 258.1 307.787C318.186 247.541 388.101 200.33 465.784 167.266C546.322 133.089 631.774 115.762 720.079 115.762C808.385 115.762 893.837 133.089 974.374 167.266C1052.22 200.33 1122.13 247.541 1182.06 307.787C1242.14 368.033 1289.23 438.135 1322.21 516.026C1356.13 596.778 1373.41 682.458 1373.41 770.999L1440 770.999C1440 673.556 1420.98 578.974 1383.4 489.956C1347.1 403.958 1295.25 326.862 1229.14 260.417C1163.03 194.13 1085.98 141.991 1000.22 105.748C911.593 68.0742 817.263 48.9989 720.079 48.9989Z"
          fill={theme.nombre === "dark" ? colors.amarillo : "#4951F2"}
        />
        <path
          d="M1139.57 351.391C1085.03 296.708 1021.62 253.789 950.91 223.904C877.825 192.907 800.141 177.17 719.921 177.17C639.859 177.17 562.176 192.907 488.931 223.904C418.223 253.789 354.808 296.708 300.271 351.391C245.734 406.073 202.929 469.658 173.123 540.554C142.367 613.835 126.672 691.726 126.672 772.001L193.258 772.001C193.258 700.628 207.209 631.48 234.636 566.465C261.112 503.516 299.161 447.085 347.515 398.602C395.869 350.119 452.309 311.969 514.931 285.422C579.773 257.922 648.737 243.933 719.921 243.933C791.104 243.933 860.068 257.922 924.91 285.422C987.691 311.969 1043.97 350.119 1092.33 398.602C1140.68 447.085 1178.73 503.675 1205.21 566.465C1232.79 631.48 1246.74 700.628 1246.74 772.001L1313.33 772.001C1313.33 691.726 1297.63 613.835 1266.72 540.395C1236.75 469.658 1193.95 406.073 1139.57 351.391Z"
          fill={theme.nombre === "dark" ? colors.rosaush : colors.verdeush}
        />
        <path
          d="M1045.24 445.973C1003.07 403.689 953.764 370.307 899.068 347.099C842.47 323.096 782.226 310.856 720.079 310.856C657.932 310.856 597.688 323.096 541.09 347.099C486.394 370.307 437.089 403.53 394.918 445.973C352.747 488.256 319.454 537.693 296.307 592.534C272.21 649.283 260.161 709.689 260.161 772.001L326.747 772.001C326.747 718.749 337.21 667.087 357.661 618.604C377.479 571.711 405.857 529.427 442.004 493.184C478.15 456.941 520.163 428.487 567.09 408.617C615.444 388.111 666.969 377.619 720.079 377.619C773.189 377.619 824.714 388.111 873.068 408.617C919.837 428.487 962.008 456.941 998.155 493.184C1034.3 529.427 1062.68 571.552 1082.5 618.604C1102.95 667.087 1113.41 718.749 1113.41 772.001L1180 772.001C1180 709.689 1167.79 649.283 1143.85 592.534C1120.7 537.534 1087.41 488.256 1045.24 445.973Z"
          fill={theme.nombre === "dark" ? colors.verdeush : "#7839C4"}
        />
        <circle
          cx="720"
          cy="769"
          r="741"
          stroke={theme.texto}
          stroke-width="2"
          stroke-dasharray="6 6"
        />
        <circle
          cx="720"
          cy="769"
          r="613"
          stroke={theme.texto}
          stroke-width="2"
          stroke-dasharray="6 6"
        />
        <circle
          cx="720"
          cy="769"
          r="479"
          stroke={theme.texto}
          stroke-width="2"
          stroke-dasharray="6 6"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_2054">
          <rect
            width="415"
            height="1440"
            fill="white"
            transform="translate(0 415) rotate(-90)"
          />
        </clipPath>
      </defs>
    </SVG>
  );
}

const SVG = styled.svg`
  width: 100%;
  max-width: 500px;
  max-height: 319px;
  height: auto;
  margin: 16px auto 0;
  display: block;

  & path,
  & circle {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    margin: 60px 0 32px;
    max-height: 380px;
    max-width: 100%;
  }
`;

export default IlustracionAbout;
