import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

import { breakpoints } from "../components/base/breakpoints";

function Logo() {
  const theme = useTheme();

  return (
    <SVG
      width="123"
      height="28"
      viewBox="0 0 123 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Desktop / USH Logo">
        <path
          id="Vector"
          d="M17.1321 12.0208V25.8165C17.1321 26.9065 16.5319 27.5199 15.4288 27.5199H13.559C12.4904 27.5199 11.889 26.9065 11.889 25.8165V25.237C10.9202 26.8046 9.35118 27.9625 6.9798 27.9625C2.80523 27.9625 0 25.2031 0 21.0483V12.0208C0 10.9309 0.601473 10.3174 1.67007 10.3174H4.90915C5.97776 10.3174 6.61251 10.9309 6.61251 12.0208V20.0262C6.61251 21.3198 7.31381 22.3079 8.55004 22.3079C9.81831 22.3079 10.5221 21.3537 10.5221 20.0262V12.0208C10.5221 10.9309 11.1236 10.3174 12.1922 10.3174H15.4312C16.5319 10.3124 17.1321 10.9309 17.1321 12.0208Z"
          fill={theme.texto}
        />
        <path
          id="Vector_2"
          d="M19.6611 25.6115C18.7983 24.8283 18.6257 24.1808 19.4602 23.1588L20.4289 21.9331C21.2633 20.8771 22.099 21.2178 22.8669 21.7282C24.0353 22.4825 25.4712 23.0909 27.0081 23.0909C27.7095 23.0909 28.0767 22.8533 28.0767 22.4435C28.0767 21.8992 27.2411 21.6264 26.4745 21.3875C23.3019 20.4685 19.7288 19.3761 19.7288 15.5293C19.7288 12.1225 22.5341 10.0105 26.9095 10.0105C29.4473 10.0105 32.186 10.8905 33.2879 11.8157C34.1506 12.531 34.2899 13.1785 33.421 14.3023L32.6198 15.3923C31.9851 16.2446 31.0841 16.1767 30.278 15.699C29.3771 15.1547 28.2739 14.7122 27.0057 14.7122C26.2662 14.7122 25.8705 14.9498 25.8705 15.2904C25.8705 16.0057 27.5061 16.2106 29.6433 16.9938C32.382 18.0159 34.2197 19.5144 34.2197 22.3756C34.2197 25.9521 31.2468 27.9962 26.9058 27.9962C23.7678 27.9962 20.9626 26.7705 19.6611 25.6115Z"
          fill={theme.texto}
        />
        <path
          id="Vector_3"
          d="M53.6261 17.5396V25.8165C53.6261 26.9064 53.0247 27.5199 51.9228 27.5199H48.6837C47.6139 27.5199 47.0136 26.9064 47.0136 25.8165V18.016C47.0136 16.6872 46.2113 15.6991 44.8764 15.6991C43.5416 15.6991 42.738 16.6872 42.738 18.016V25.8165C42.738 26.9064 42.1378 27.5199 41.0692 27.5199H37.8954C36.8268 27.5199 36.2266 26.9064 36.2266 25.8165V5.54907C36.2266 4.41766 36.8268 4.01538 37.8954 3.81172L41.0692 3.23218C42.1378 3.09641 42.738 3.84566 42.738 4.93559V11.3394C43.8646 10.479 45.239 10.0236 46.6463 10.0446C50.6866 10.0446 53.6261 12.941 53.6261 17.5396Z"
          fill={theme.texto}
        />
        <path
          id="Vector_4"
          d="M72.7029 12.0208V25.8165C72.7029 26.9065 72.1027 27.5199 70.9996 27.5199H69.1298C68.0612 27.5199 67.4598 26.9065 67.4598 25.8165V25.237C66.491 26.8046 64.922 27.9625 62.5506 27.9625C58.376 27.9625 55.5708 25.2031 55.5708 21.0483V12.0208C55.5708 10.9309 56.1723 10.3174 57.2409 10.3174H60.48C61.5486 10.3174 62.1833 10.9309 62.1833 12.0208V20.0262C62.1833 21.3198 62.8846 22.3079 64.1208 22.3079C65.3891 22.3079 66.0929 21.3537 66.0929 20.0262V12.0208C66.0929 10.9309 66.6944 10.3174 67.763 10.3174H71.002C72.1027 10.3124 72.7029 10.9309 72.7029 12.0208Z"
          fill={theme.texto}
        />
        <path
          id="Vector_5"
          d="M93.1764 11.821V25.8166C93.1764 26.9065 92.5749 27.52 91.5063 27.52H89.6699C88.5606 27.52 87.9665 26.9065 87.9665 25.8166C87.2942 26.5079 86.4923 27.0541 85.6087 27.4228C84.7251 27.7914 83.7778 27.975 82.8232 27.9625C78.0471 27.9625 74.5073 24.0793 74.5073 19.0042C74.5073 13.9292 78.0139 10.0447 82.8232 10.0447C84.8273 10.0447 86.5639 10.799 87.9665 11.953V11.821C87.9665 10.7311 88.5668 10.1188 89.6699 10.1188H91.5063C92.5749 10.1138 93.1764 10.726 93.1764 11.821ZM86.8979 19.0093C86.8979 17.1349 85.6284 15.7407 83.9251 15.7407C82.2217 15.7407 80.9867 17.1374 80.9867 19.0093C80.9867 20.8811 82.2192 22.2778 83.9251 22.2778C85.5619 22.274 86.8979 20.8434 86.8979 19.0042V19.0093Z"
          fill={theme.texto}
        />
        <path
          id="Vector_6"
          d="M95.3804 3.91355C95.378 3.14166 95.6003 2.38642 96.0193 1.74359C96.4382 1.10077 97.0349 0.599322 97.7336 0.302841C98.4324 0.00635981 99.2017 -0.0718009 99.944 0.0782708C100.686 0.228343 101.368 0.599887 101.903 1.14579C102.438 1.69169 102.802 2.38735 102.949 3.14457C103.096 3.90178 103.019 4.68643 102.728 5.39902C102.438 6.11161 101.946 6.72004 101.315 7.14715C100.685 7.57426 99.9445 7.80081 99.1877 7.79807C98.1782 7.79641 97.2106 7.38658 96.4969 6.65841C95.7832 5.93025 95.3817 4.94317 95.3804 3.91355ZM95.9153 25.8165V12.0208C95.9153 10.9308 96.5155 10.3174 97.5841 10.3174H100.824C101.893 10.3174 102.495 10.9308 102.495 12.0208V25.8165C102.495 26.9064 101.893 27.5199 100.824 27.5199H97.5841C96.5155 27.5199 95.9153 26.9064 95.9153 25.8165Z"
          fill={theme.texto}
        />
        <path
          id="Vector_7"
          d="M123 11.821V25.8166C123 26.9065 122.399 27.52 121.33 27.52H119.494C118.392 27.52 117.79 26.9065 117.79 25.8166C117.118 26.5079 116.316 27.0541 115.432 27.4228C114.549 27.7914 113.602 27.975 112.647 27.9625C107.871 27.9625 104.331 24.0793 104.331 19.0042C104.331 13.9292 107.838 10.0447 112.647 10.0447C114.651 10.0447 116.388 10.799 117.79 11.953V11.821C117.79 10.7311 118.392 10.1188 119.494 10.1188H121.33C122.399 10.1138 123 10.726 123 11.821ZM116.722 19.0093C116.722 17.1349 115.452 15.7407 113.749 15.7407C112.045 15.7407 110.81 17.1374 110.81 19.0093C110.81 20.8811 112.043 22.2778 113.749 22.2778C115.386 22.274 116.722 20.8434 116.722 19.0042V19.0093Z"
          fill={theme.texto}
        />
      </g>
    </SVG>
  );
}

const SVG = styled.svg`
  width: 74.699px;
  height: 17px;

  ${breakpoints.min_desktop} {
    width: 123px;
    height: 27.992px;
  }
`;

export default Logo;
