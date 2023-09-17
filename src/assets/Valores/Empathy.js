import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Empathy() {
  return (
    <SVG
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_152_2132"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="61"
      >
        <path d="M60 0.227539H0V60.2275H60V0.227539Z" fill="white" />
      </mask>
      <g mask="url(#mask0_152_2132)">
        <path
          d="M62.5878 -79.7154C62.5878 -78.6852 62.6614 -77.6426 62.8209 -76.6246C63.3728 -73.2027 63.8511 -69.8176 61.4227 -66.874C58.4791 -64.4456 55.094 -64.9239 51.672 -65.4758C50.6541 -65.6353 49.6115 -65.7089 48.5813 -65.7089C40.6704 -65.7334 35.6663 -60.4718 36.0588 -52.5486C36.1447 -50.8315 36.3532 -49.1144 36.5126 -47.3973C37.1504 -40.762 33.6917 -37.4137 27.0196 -38.1496C24.8977 -38.3826 22.7514 -38.5911 20.6173 -38.5911C14.3499 -38.5789 9.50525 -34.139 9.12503 -27.8961C8.97786 -25.3695 9.30901 -22.8062 9.54205 -20.2673C10.143 -13.9754 6.77019 -10.5535 0.502808 -11.1177C-1.7662 -11.3262 -4.03522 -11.5838 -6.3165 -11.596C-12.5716 -11.6451 -17.4653 -7.2052 -17.87 -0.962357C-18.0295 1.49063 -17.7229 3.99268 -17.4898 6.45792C-16.8521 13.2159 -20.2862 16.5888 -27.0687 15.8283C-29.1292 15.5953 -31.202 15.3868 -33.2625 15.3745C-39.7261 15.3623 -44.5953 19.9125 -44.9019 26.3762C-45.0246 28.7678 -44.7057 31.1963 -44.4727 33.6002C-43.8472 40.1129 -47.2691 43.5225 -53.7817 42.8602C-56.0508 42.6272 -58.3198 42.3941 -60.601 42.3941C-63.5937 42.3941 -66.2061 43.4367 -68.3647 45.6075C-68.3893 45.6321 -68.4138 45.6566 -68.4261 45.6689C-68.4506 45.6934 -68.4751 45.7179 -68.4874 45.7302C-70.6705 47.8888 -71.7131 50.5135 -71.7008 53.4939C-71.7008 55.7629 -71.4678 58.0442 -71.2347 60.3132C-70.5602 66.8259 -73.9698 70.2478 -80.4947 69.6223C-82.8987 69.3892 -85.3149 69.0826 -87.7188 69.193C-94.1824 69.5119 -98.7204 74.3811 -98.7204 80.8324C-98.7204 82.8929 -98.4996 84.9657 -98.2666 87.0262C-97.5062 93.8087 -100.879 97.2429 -107.637 96.6051C-110.102 96.3721 -112.604 96.0654 -115.057 96.2249C-121.3 96.6296 -125.728 101.523 -125.691 107.778C-125.679 110.047 -125.409 112.329 -125.213 114.598C-124.808 119.087 -126.439 122.079 -129.714 123.208L-126.182 126.74C-122.662 124.79 -120.564 121.123 -120.527 116.425C-120.515 114.083 -120.785 111.74 -121.067 109.41C-121.766 103.657 -117.069 99.7572 -111.807 100.824C-110.188 101.155 -108.52 101.229 -106.864 101.315C-98.2298 101.781 -92.7597 96.0532 -93.5569 87.4064C-93.7286 85.5544 -94.0107 83.7024 -94.072 81.8381C-94.2314 76.3802 -90.6869 73.1914 -85.2903 73.7801C-83.4383 73.9886 -81.5863 74.2094 -79.722 74.2952C-71.1366 74.6631 -65.8014 69.0335 -66.5618 60.4604C-66.709 58.7433 -66.9297 57.0262 -67.0647 55.3091C-67.2486 53.0033 -66.9175 50.8201 -65.1268 48.9927C-63.2993 47.202 -61.1162 46.8708 -58.8104 47.0548C-57.0933 47.1897 -55.3762 47.4105 -53.6591 47.5577C-45.0859 48.3181 -39.4563 42.9828 -39.8243 34.3974C-39.8979 32.5331 -40.1309 30.6811 -40.3394 28.8291C-40.9281 23.4203 -37.7392 19.888 -32.2813 20.0474C-30.4293 20.0965 -28.5773 20.3909 -26.7131 20.5626C-18.0663 21.3598 -12.3386 15.8896 -12.8046 7.25514C-12.8905 5.59938 -12.9641 3.93134 -13.2952 2.31238C-14.3623 -2.94928 -10.462 -7.63448 -4.70979 -6.94764C-2.37946 -6.66555 -0.03685 -6.39571 2.30574 -6.40798C9.19862 -6.45704 13.8838 -10.9583 14.1537 -17.8389C14.2518 -20.1692 13.9452 -22.5241 13.6876 -24.8544C13.0253 -30.6925 16.1651 -34.1758 22.04 -33.9427C24.3826 -33.8446 26.7129 -33.4153 29.0555 -33.4153C36.3164 -33.4031 41.1242 -38.1619 41.1978 -45.435C41.2223 -47.5691 41.0261 -49.7277 40.6704 -51.825C39.7628 -57.2829 43.6876 -61.6001 49.2068 -60.9378C50.7154 -60.7538 52.224 -60.5576 53.7326 -60.4227C57.7187 -60.0425 61.4227 -60.6189 64.5502 -63.5625C64.5502 -63.5625 64.5502 -63.5625 64.5625 -63.5502C64.587 -63.5748 64.5993 -63.5993 64.6238 -63.6238C64.6483 -63.6484 64.6729 -63.6606 64.6974 -63.6852C64.6974 -63.6852 64.6974 -63.6852 64.6851 -63.6974C67.6287 -66.825 68.2052 -70.529 67.825 -74.5151C67.6778 -76.0237 67.4815 -77.5323 67.3098 -79.0408C66.8928 -82.5363 68.475 -85.3941 71.0751 -86.78L67.6042 -90.251C64.4521 -88.1414 62.5756 -84.4497 62.5878 -79.7154Z"
          fill="#4951F2"
        />
        <path
          d="M120.27 -76.588C120.27 -75.5577 120.344 -74.5152 120.503 -73.4972C121.055 -70.0753 121.533 -66.6902 119.105 -63.7466C116.161 -61.3181 112.776 -61.7965 109.354 -62.3484C108.336 -62.5078 107.294 -62.5814 106.263 -62.5814C98.3525 -62.606 93.3484 -57.3443 93.7409 -49.4212C93.8268 -47.7041 94.0353 -45.987 94.1947 -44.2699C94.8325 -37.6346 91.3738 -34.2863 84.7017 -35.0221C82.5798 -35.2552 80.4335 -35.4637 78.2994 -35.4637C72.032 -35.4514 67.1874 -31.0115 66.8072 -24.7687C66.66 -22.2421 66.9911 -19.6787 67.2242 -17.1399C67.8251 -10.848 64.4523 -7.42609 58.1849 -7.99027C55.9159 -8.19878 53.6469 -8.45633 51.3656 -8.46859C45.1105 -8.51765 40.2168 -4.07776 39.8121 2.16508C39.6526 4.61807 39.9593 7.12012 40.1923 9.58537C40.8301 16.3433 37.3959 19.7162 30.6134 18.9558C28.5529 18.7227 26.4801 18.5142 24.4196 18.502C17.956 18.4897 13.0868 23.04 12.7802 29.5036C12.6575 31.8953 12.9764 34.3237 13.2095 36.7276C13.835 43.2403 10.4131 46.6499 3.90038 45.9876C1.63137 45.7546 -0.637634 45.5216 -2.91891 45.5216C-5.91155 45.5216 -8.52398 46.5641 -10.6826 48.735C-10.7071 48.7595 -10.7317 48.784 -10.7439 48.7963C-10.7685 48.8208 -10.793 48.8454 -10.8053 48.8576C-12.9884 51.0163 -14.0309 53.641 -14.0187 56.6213C-14.0187 58.8904 -13.7856 61.1716 -13.5526 63.4406C-12.878 69.9533 -16.2877 73.3752 -22.8126 72.7497C-25.2165 72.5167 -27.6327 72.2101 -30.0367 72.3204C-36.5003 72.6393 -41.0383 77.5085 -41.0383 83.9599C-41.0383 86.0204 -40.8175 88.0931 -40.5845 90.1536C-39.8241 96.9361 -43.1969 100.37 -49.9549 99.7325C-52.4201 99.4995 -54.9222 99.1929 -57.3752 99.3523C-63.618 99.7571 -68.0456 104.651 -68.0088 110.906C-67.9966 113.175 -67.7267 115.456 -67.5305 117.725C-67.1258 122.214 -68.757 125.207 -72.0317 126.335L-68.4994 129.867C-64.9794 127.917 -62.8821 124.25 -62.8453 119.553C-62.833 117.21 -63.1029 114.867 -63.385 112.537C-64.0841 106.785 -59.3866 102.885 -54.125 103.952C-52.506 104.283 -50.838 104.356 -49.1822 104.442C-40.5477 104.908 -35.0775 99.1806 -35.8747 90.5338C-36.0465 88.6818 -36.3286 86.8298 -36.3899 84.9656C-36.5493 79.5077 -33.0048 76.3188 -27.6082 76.9075C-25.7562 77.116 -23.9042 77.3368 -22.0399 77.4226C-13.4545 77.7906 -8.11923 72.161 -8.87966 63.5878C-9.02684 61.8707 -9.24761 60.1536 -9.38252 58.4365C-9.56649 56.1307 -9.23535 53.9476 -7.44467 52.1201C-5.6172 50.3294 -3.43404 49.9983 -1.12823 50.1823C0.588852 50.3172 2.30595 50.5379 4.02303 50.6851C12.5962 51.4455 18.2258 46.1103 17.8579 37.5248C17.7843 35.6606 17.5512 33.8086 17.3427 31.9566C16.754 26.5478 19.9429 23.0154 25.4008 23.1749C27.2528 23.2239 29.1048 23.5183 30.9691 23.69C39.6158 24.4872 45.3435 19.0171 44.8775 10.3826C44.7916 8.72682 44.718 7.05878 44.3869 5.43982C43.3198 0.178162 47.2201 -4.50703 52.9723 -3.8202C55.3027 -3.53811 57.6453 -3.26827 59.9879 -3.28054C66.8808 -3.3296 71.5659 -7.83082 71.8358 -14.7114C71.9339 -17.0418 71.6273 -19.3967 71.3697 -21.727C70.7074 -27.5651 73.8472 -31.0483 79.7221 -30.8153C82.0647 -30.7172 84.3951 -30.2879 86.7377 -30.2879C93.9985 -30.2756 98.8064 -35.0344 98.8799 -42.3075C98.9045 -44.4416 98.7082 -46.6002 98.3525 -48.6975C97.4449 -54.1554 101.37 -58.4727 106.889 -57.8104C108.398 -57.6264 109.906 -57.4302 111.415 -57.2952C115.401 -56.915 119.105 -57.4915 122.232 -60.4351C122.232 -60.4351 122.232 -60.4351 122.245 -60.4228C122.269 -60.4473 122.281 -60.4719 122.306 -60.4964C122.33 -60.5209 122.355 -60.5332 122.38 -60.5577C122.38 -60.5577 122.38 -60.5577 122.367 -60.57C125.311 -63.6975 125.887 -67.4015 125.507 -71.3876C125.36 -72.8962 125.164 -74.4048 124.992 -75.9134C124.575 -79.4089 126.157 -82.2666 128.757 -83.6526L125.286 -87.1235C122.134 -85.014 120.258 -81.3222 120.27 -76.588Z"
          fill="#4951F2"
        />
        <path
          d="M82.874 -59.4293C82.874 -58.399 82.9476 -57.3565 83.107 -56.3385C83.6589 -52.9166 84.1373 -49.5315 81.7088 -46.5879C78.7652 -44.1595 75.3801 -44.6378 71.9582 -45.1897C70.9402 -45.3491 69.8977 -45.4227 68.8674 -45.4227C60.9565 -45.4473 55.9525 -40.1856 56.3449 -32.2625C56.4308 -30.5454 56.6393 -28.8283 56.7987 -27.1112C57.4365 -20.4759 53.9778 -17.1276 47.3057 -17.8635C45.1839 -18.0965 43.0375 -18.305 40.9034 -18.305C34.636 -18.2927 29.7914 -13.8528 29.4112 -7.60999C29.264 -5.08341 29.5951 -2.52004 29.8282 0.0187988C30.4292 6.3107 27.0563 9.73261 20.7889 9.16843C18.5199 8.95992 16.2509 8.70235 13.9696 8.69009C7.71452 8.64103 2.82082 13.0809 2.41608 19.3238C2.25664 21.7768 2.56326 24.2788 2.79629 26.7441C3.43407 33.502 -0.000106812 36.8749 -6.78261 36.1144C-8.84312 35.8814 -10.9159 35.6729 -12.9764 35.6607C-19.44 35.6484 -24.3092 40.1987 -24.6158 46.6623C-24.7385 49.0539 -24.4196 51.4824 -24.1865 53.8863C-23.561 60.399 -26.9829 63.8087 -33.4956 63.1463C-35.7646 62.9133 -38.0336 62.6803 -40.3149 62.6803C-43.3075 62.6803 -45.92 63.7228 -48.0786 65.8937C-48.1031 65.9182 -48.1277 65.9427 -48.1399 65.955C-48.1645 65.9795 -48.189 66.0041 -48.2012 66.0163C-50.3844 68.175 -51.4269 70.7997 -51.4147 73.78C-51.4147 76.049 -51.1816 78.3303 -50.9486 80.5993C-50.274 87.112 -53.6837 90.5339 -60.2086 89.9084C-62.6125 89.6754 -65.0287 89.3687 -67.4326 89.4791C-73.8963 89.798 -78.4343 94.6672 -78.4343 101.119C-78.4343 103.179 -78.2135 105.252 -77.9805 107.312C-77.2201 114.095 -80.5929 117.529 -87.3509 116.891C-89.8161 116.658 -92.3182 116.352 -94.7712 116.511C-101.014 116.916 -105.442 121.809 -105.405 128.065C-105.393 130.334 -105.123 132.615 -104.927 134.884C-104.522 139.373 -106.153 142.365 -109.428 143.494L-105.895 147.026C-102.375 145.076 -100.278 141.409 -100.241 136.711C-100.229 134.369 -100.499 132.026 -100.781 129.696C-101.48 123.944 -96.7826 120.043 -91.521 121.11C-89.902 121.441 -88.234 121.515 -86.5782 121.601C-77.9437 122.067 -72.4735 116.339 -73.2707 107.693C-73.4425 105.841 -73.7245 103.989 -73.7859 102.124C-73.9453 96.6664 -70.4008 93.4775 -65.0042 94.0662C-63.1522 94.2747 -61.3002 94.4955 -59.4359 94.5813C-50.8505 94.9493 -45.5152 89.3197 -46.2757 80.7465C-46.4228 79.0294 -46.6436 77.3123 -46.7785 75.5952C-46.9625 73.2894 -46.6313 71.1063 -44.8407 69.2788C-43.0132 67.4881 -40.83 67.157 -38.5242 67.3409C-36.8071 67.4759 -35.09 67.6966 -33.373 67.8438C-24.7998 68.6042 -19.1702 63.269 -19.5381 54.6835C-19.6117 52.8193 -19.8447 50.9673 -20.0533 49.1153C-20.642 43.7064 -17.4531 40.1741 -11.9952 40.3336C-10.1432 40.3826 -8.2912 40.677 -6.42693 40.8487C2.21984 41.6459 7.94755 36.1758 7.48148 27.5413C7.39563 25.8855 7.32204 24.2175 6.99089 22.5985C5.92384 17.3369 9.82408 12.6517 15.5763 13.3385C17.9067 13.6206 20.2493 13.8904 22.5919 13.8782C29.4848 13.8291 34.17 9.32787 34.4398 2.44725C34.5379 0.116913 34.2313 -2.23795 33.9737 -4.56828C33.3114 -10.4064 36.4512 -13.8896 42.3261 -13.6566C44.6687 -13.5585 46.9991 -13.1292 49.3417 -13.1292C56.6025 -13.1169 61.4104 -17.8757 61.4839 -25.1488C61.5085 -27.2829 61.3122 -29.4415 60.9565 -31.5388C60.0489 -36.9967 63.9737 -41.314 69.4929 -40.6517C71.0015 -40.4677 72.5101 -40.2715 74.0187 -40.1366C78.0048 -39.7563 81.7088 -40.3328 84.8363 -43.2764C84.8363 -43.2764 84.8363 -43.2764 84.8486 -43.2641C84.8731 -43.2886 84.8854 -43.3132 84.9099 -43.3377C84.9345 -43.3622 84.959 -43.3745 84.9835 -43.399C84.9835 -43.399 84.9835 -43.399 84.9713 -43.4113C87.9148 -46.5388 88.4913 -50.2428 88.1111 -54.2289C87.9639 -55.7375 87.7677 -57.2461 87.596 -58.7547C87.179 -62.2502 88.7611 -65.1079 91.3613 -66.4939L87.8903 -69.9648C84.7382 -67.8553 82.8617 -64.1635 82.874 -59.4293Z"
          fill="#4951F2"
        />
        <path
          d="M140.556 -56.3013C140.556 -55.2711 140.629 -54.2286 140.789 -53.2106C141.341 -49.7887 141.819 -46.4036 139.391 -43.46C136.447 -41.0315 133.062 -41.5099 129.64 -42.0618C128.622 -42.2212 127.58 -42.2948 126.549 -42.2948C118.638 -42.3193 113.634 -37.0577 114.027 -29.1345C114.113 -27.4175 114.321 -25.7004 114.481 -23.9833C115.118 -17.348 111.66 -13.9996 104.988 -14.7355C102.866 -14.9686 100.719 -15.1771 98.5853 -15.1771C92.3179 -15.1648 87.4733 -10.7249 87.093 -4.48206C86.9459 -1.95548 87.277 0.607887 87.5101 3.14673C88.111 9.43863 84.7382 12.8605 78.4708 12.2964C76.2018 12.0879 73.9328 11.8303 71.6515 11.818C65.3964 11.769 60.5027 16.2089 60.098 22.4517C59.9385 24.9047 60.2451 27.4067 60.4782 29.872C61.116 36.63 57.6818 40.0028 50.8993 39.2424C48.8388 39.0093 46.766 38.8008 44.7055 38.7886C38.2419 38.7763 33.3727 43.3266 33.0661 49.7902C32.9434 52.1819 33.2623 54.6103 33.4954 57.0143C34.1209 63.5269 30.699 66.9366 24.1863 66.2743C21.9173 66.0412 19.6483 65.8082 17.367 65.8082C14.3743 65.8082 11.7619 66.8507 9.60329 69.0216C9.57875 69.0461 9.55423 69.0707 9.54196 69.0829C9.51743 69.1075 9.4929 69.132 9.48064 69.1443C7.29748 71.3029 6.25497 73.9276 6.26723 76.908C6.26723 79.177 6.50026 81.4583 6.73329 83.7273C7.40786 90.2399 3.99821 93.6618 -2.52673 93.0363C-4.93065 92.8033 -7.34683 92.4967 -9.75076 92.6071C-16.2144 92.9259 -20.7524 97.7951 -20.7524 104.246C-20.7524 106.307 -20.5316 108.38 -20.2986 110.44C-19.5382 117.223 -22.911 120.657 -29.669 120.019C-32.1342 119.786 -34.6363 119.479 -37.0893 119.639C-43.3321 120.044 -47.7598 124.937 -47.723 131.193C-47.7107 133.462 -47.4409 135.743 -47.2446 138.012C-46.8399 142.501 -48.4711 145.493 -51.7458 146.622L-48.2136 150.154C-44.6935 148.204 -42.5962 144.537 -42.5594 139.839C-42.5472 137.497 -42.817 135.154 -43.0991 132.824C-43.7982 127.071 -39.1007 123.171 -33.8391 124.238C-32.2201 124.569 -30.5521 124.643 -28.8963 124.729C-20.2618 125.195 -14.7916 119.467 -15.5889 110.82C-15.7606 108.968 -16.0427 107.116 -16.104 105.252C-16.2634 99.7943 -12.7189 96.6054 -7.3223 97.1941C-5.4703 97.4026 -3.6183 97.6234 -1.75403 97.7093C6.83142 98.0772 12.1666 92.4476 11.4062 83.8744C11.259 82.1573 11.0383 80.4403 10.9034 78.7232C10.7194 76.4174 11.0505 74.2342 12.8412 72.4067C14.6687 70.6161 16.8519 70.2849 19.1577 70.4689C20.8747 70.6038 22.5918 70.8246 24.3089 70.9717C32.8821 71.7322 38.5117 66.3969 38.1438 57.8115C38.0702 55.9472 37.8371 54.0952 37.6286 52.2432C37.0399 46.8344 40.2288 43.3021 45.6867 43.4615C47.5387 43.5106 49.3907 43.8049 51.255 43.9767C59.9017 44.7739 65.6294 39.3037 65.1634 30.6692C65.0775 29.0135 65.0039 27.3454 64.6728 25.7264C63.6057 20.4648 67.506 15.7796 73.2582 16.4664C75.5886 16.7485 77.9312 17.0184 80.2737 17.0061C87.1666 16.957 91.8518 12.4558 92.1217 5.57518C92.2198 3.24484 91.9132 0.889977 91.6556 -1.44035C90.9933 -7.27846 94.1331 -10.7617 100.008 -10.5287C102.351 -10.4305 104.681 -10.0013 107.024 -10.0013C114.284 -9.989 119.092 -14.7478 119.166 -22.0209C119.19 -24.155 118.994 -26.3136 118.638 -28.4109C117.731 -33.8688 121.656 -38.1861 127.175 -37.5238C128.683 -37.3398 130.192 -37.1435 131.701 -37.0086C135.687 -36.6284 139.391 -37.2049 142.518 -40.1484C142.518 -40.1484 142.518 -40.1484 142.531 -40.1362C142.555 -40.1607 142.567 -40.1852 142.592 -40.2098C142.616 -40.2343 142.641 -40.2466 142.665 -40.2711C142.665 -40.2711 142.665 -40.2711 142.653 -40.2834C145.597 -43.4109 146.173 -47.1149 145.793 -51.101C145.646 -52.6096 145.45 -54.1182 145.278 -55.6268C144.861 -59.1223 146.443 -61.98 149.043 -63.3659L145.572 -66.8369C142.42 -64.7273 140.544 -61.0356 140.556 -56.3013Z"
          fill="#4951F2"
        />
        <path
          d="M103.161 -39.1431C103.161 -38.1129 103.234 -37.0704 103.394 -36.0524C103.946 -32.6305 104.424 -29.2454 101.995 -26.3018C99.0518 -23.8733 95.6667 -24.3517 92.2448 -24.9036C91.2268 -25.063 90.1843 -25.1366 89.154 -25.1366C81.2432 -25.1611 76.2391 -19.8995 76.6315 -11.9763C76.7174 -10.2593 76.9259 -8.54217 77.0853 -6.82508C77.7231 -0.189762 74.2644 3.15857 67.5923 2.42267C65.4705 2.18964 63.3241 1.98114 61.19 1.98114C54.9226 1.9934 50.078 6.4333 49.6978 12.6761C49.5506 15.2027 49.8818 17.7661 50.1148 20.3049C50.7158 26.5968 47.3429 30.0187 41.0755 29.4546C38.8065 29.2461 36.5375 28.9885 34.2562 28.9762C28.0011 28.9272 23.1074 33.3671 22.7027 39.6099C22.5433 42.0629 22.8499 44.5649 23.0829 47.0302C23.7207 53.7882 20.2865 57.161 13.504 56.4006C11.4435 56.1675 9.37074 55.9591 7.31023 55.9468C0.846611 55.9345 -4.02256 60.4848 -4.32919 66.9484C-4.45184 69.3401 -4.13295 71.7685 -3.89992 74.1725C-3.27441 80.6851 -6.69632 84.0948 -13.209 83.4325C-15.478 83.1994 -17.747 82.9664 -20.0283 82.9664C-23.0209 82.9664 -25.6334 84.0089 -27.792 86.1798C-27.8165 86.2043 -27.841 86.2289 -27.8533 86.2411C-27.8778 86.2657 -27.9024 86.2902 -27.9146 86.3025C-30.0978 88.4611 -31.1403 91.0858 -31.128 94.0662C-31.128 96.3352 -30.895 98.6165 -30.662 100.885C-29.9874 107.398 -33.397 110.82 -39.922 110.195C-42.3259 109.962 -44.7421 109.655 -47.146 109.765C-53.6096 110.084 -58.1477 114.953 -58.1477 121.405C-58.1477 123.465 -57.9269 125.538 -57.6939 127.598C-56.9334 134.381 -60.3063 137.815 -67.0643 137.177C-69.5295 136.944 -72.0315 136.638 -74.4845 136.797C-80.7274 137.202 -85.155 142.096 -85.1182 148.351C-85.106 150.62 -84.8361 152.901 -84.6399 155.17C-84.2351 159.659 -85.8664 162.652 -89.1411 163.78L-85.6088 167.312C-82.0888 165.362 -79.9915 161.695 -79.9547 156.997C-79.9424 154.655 -80.2123 152.312 -80.4943 149.982C-81.1934 144.23 -76.496 140.329 -71.2343 141.396C-69.6154 141.728 -67.9473 141.801 -66.2916 141.887C-57.6571 142.353 -52.1869 136.625 -52.9841 127.979C-53.1558 126.127 -53.4379 124.275 -53.4993 122.41C-53.6587 116.953 -50.1141 113.764 -44.7176 114.352C-42.8656 114.561 -41.0136 114.782 -39.1493 114.867C-30.5639 115.235 -25.2286 109.606 -25.989 101.033C-26.1362 99.3156 -26.357 97.5985 -26.4919 95.8814C-26.6759 93.5756 -26.3447 91.3924 -24.554 89.5649C-22.7266 87.7743 -20.5434 87.4431 -18.2376 87.6271C-16.5205 87.762 -14.8034 87.9828 -13.0863 88.1299C-4.51316 88.8904 1.11644 83.5551 0.748497 74.9697C0.674904 73.1054 0.441864 71.2534 0.23336 69.4014C-0.355354 63.9926 2.83353 60.4603 8.29142 60.6197C10.1434 60.6688 11.9954 60.9631 13.8597 61.1348C22.5065 61.9321 28.2342 56.4619 27.7681 47.8274C27.6823 46.1716 27.6087 44.5036 27.2775 42.8847C26.2105 37.623 30.1107 32.9378 35.863 33.6246C38.1933 33.9067 40.5359 34.1766 42.8785 34.1643C49.7714 34.1152 54.4566 29.614 54.7264 22.7334C54.8245 20.403 54.5179 18.0482 54.2603 15.7178C53.598 9.87975 56.7378 6.3965 62.6127 6.62954C64.9553 6.72766 67.2857 7.15693 69.6283 7.15693C76.8891 7.16919 81.697 2.4104 81.7706 -4.86269C81.7951 -6.99679 81.5988 -9.15541 81.2432 -11.2527C80.3356 -16.7106 84.2603 -21.0279 89.7795 -20.3656C91.2881 -20.1816 92.7967 -19.9853 94.3053 -19.8504C98.2914 -19.4702 101.995 -20.0467 105.123 -22.9902C105.123 -22.9902 105.123 -22.9902 105.135 -22.978C105.16 -23.0025 105.172 -23.027 105.197 -23.0516C105.221 -23.0761 105.246 -23.0884 105.27 -23.1129C105.27 -23.1129 105.27 -23.1129 105.258 -23.1252C108.201 -26.2527 108.778 -29.9567 108.398 -33.9428C108.251 -35.4514 108.054 -36.96 107.883 -38.4686C107.466 -41.9641 109.048 -44.8218 111.648 -46.2077L108.177 -49.6787C105.025 -47.5691 103.148 -43.8774 103.161 -39.1431Z"
          fill="#4951F2"
        />
        <path
          d="M160.842 -36.0152C160.842 -34.985 160.916 -33.9424 161.075 -32.9245C161.627 -29.5025 162.106 -26.1174 159.677 -23.1738C156.733 -20.7454 153.348 -21.2237 149.926 -21.7756C148.908 -21.9351 147.866 -22.0087 146.836 -22.0087C138.925 -22.0332 133.921 -16.7716 134.313 -8.84842C134.399 -7.13133 134.608 -5.41424 134.767 -3.69715C135.405 2.93817 131.946 6.2865 125.274 5.5506C123.152 5.31757 121.006 5.10907 118.872 5.10907C112.604 5.12133 107.76 9.56123 107.379 15.8041C107.232 18.3306 107.563 20.894 107.796 23.4329C108.397 29.7248 105.025 33.1467 98.7572 32.5825C96.4882 32.374 94.2192 32.1164 91.9379 32.1042C85.6828 32.0551 80.7891 36.495 80.3843 42.7378C80.2249 45.1908 80.5315 47.6929 80.7645 50.1581C81.4023 56.9161 77.9681 60.2889 71.1856 59.5285C69.1251 59.2955 67.0524 59.087 64.9919 59.0747C58.5282 59.0625 53.6591 63.6127 53.3524 70.0763C53.2298 72.468 53.5487 74.8965 53.7817 77.3004C54.4072 83.8131 50.9853 87.2227 44.4726 86.5604C42.2036 86.3274 39.9346 86.0943 37.6533 86.0943C34.6607 86.0943 32.0483 87.1369 29.8897 89.3077C29.8651 89.3323 29.8406 89.3568 29.8283 89.3691C29.8038 89.3936 29.7793 89.4181 29.767 89.4304C27.5839 91.589 26.5413 94.2137 26.5536 97.1941C26.5536 99.4631 26.7866 101.744 27.0197 104.013C27.6942 110.526 24.2846 113.948 17.7597 113.322C15.3557 113.089 12.9395 112.783 10.5356 112.893C4.07199 113.212 -0.466019 118.081 -0.466019 124.533C-0.466019 126.593 -0.245256 128.666 -0.0122223 130.726C0.748203 137.509 -2.62465 140.943 -9.38262 140.305C-11.8479 140.072 -14.3499 139.766 -16.8029 139.925C-23.0457 140.33 -27.4734 145.224 -27.4366 151.479C-27.4243 153.748 -27.1545 156.029 -26.9582 158.298C-26.5535 162.787 -28.1847 165.78 -31.4595 166.908L-27.9272 170.44C-24.4071 168.49 -22.3098 164.823 -22.2731 160.125C-22.2608 157.783 -22.5306 155.44 -22.8127 153.11C-23.5118 147.358 -18.8143 143.457 -13.5527 144.524C-11.9337 144.856 -10.2657 144.929 -8.60993 145.015C0.0245762 145.481 5.49473 139.753 4.69751 131.107C4.5258 129.255 4.24371 127.403 4.18239 125.538C4.02295 120.08 7.5675 116.892 12.9641 117.48C14.8161 117.689 16.6681 117.91 18.5323 117.995C27.1178 118.363 32.453 112.734 31.6926 104.161C31.5454 102.443 31.3246 100.726 31.1897 99.0093C31.0058 96.7035 31.3369 94.5203 33.1276 92.6929C34.9551 90.9022 37.1382 90.571 39.444 90.755C41.1611 90.8899 42.8782 91.1107 44.5953 91.2579C53.1685 92.0183 58.7981 86.683 58.4301 78.0976C58.3565 76.2333 58.1235 74.3813 57.915 72.5293C57.3263 67.1205 60.5152 63.5882 65.973 63.7477C67.8251 63.7967 69.6771 64.0911 71.5413 64.2628C80.1881 65.06 85.9158 59.5898 85.4497 50.9553C85.3639 49.2996 85.2903 47.6315 84.9592 46.0126C83.8921 40.7509 87.7923 36.0657 93.5446 36.7526C95.8749 37.0347 98.2175 37.3045 100.56 37.2922C107.453 37.2432 112.138 32.7419 112.408 25.8613C112.506 23.531 112.2 21.1761 111.942 18.8458C111.28 13.0077 114.419 9.52443 120.294 9.75747C122.637 9.85559 124.967 10.2849 127.31 10.2849C134.571 10.2971 139.379 5.53833 139.452 -1.73476C139.477 -3.86886 139.28 -6.02748 138.925 -8.12479C138.017 -13.5827 141.942 -17.8999 147.461 -17.2376C148.97 -17.0536 150.478 -16.8574 151.987 -16.7225C155.973 -16.3423 159.677 -16.9187 162.805 -19.8623C162.805 -19.8623 162.805 -19.8623 162.817 -19.85C162.841 -19.8746 162.854 -19.8991 162.878 -19.9236C162.903 -19.9482 162.927 -19.9604 162.952 -19.985C162.952 -19.985 162.952 -19.985 162.94 -19.9972C165.883 -23.1248 166.46 -26.8288 166.079 -30.8149C165.932 -32.3235 165.736 -33.8321 165.564 -35.3406C165.147 -38.8362 166.729 -41.6939 169.33 -43.0798L165.859 -46.5508C162.706 -44.4412 160.83 -40.7495 160.842 -36.0152Z"
          fill="#4951F2"
        />
        <path
          d="M123.447 -18.857C123.447 -17.8267 123.52 -16.7842 123.68 -15.7662C124.232 -12.3443 124.71 -8.95916 122.282 -6.01558C119.338 -3.58713 115.953 -4.06546 112.531 -4.61738C111.513 -4.77683 110.47 -4.85041 109.44 -4.85041C101.529 -4.87494 96.5252 0.386707 96.9177 8.30984C97.0036 10.0269 97.2121 11.744 97.3715 13.4611C98.0093 20.0964 94.5506 23.4448 87.8784 22.7089C85.7566 22.4758 83.6102 22.2673 81.4762 22.2673C75.2088 22.2796 70.3641 26.7195 69.9839 32.9623C69.8367 35.4889 70.1679 38.0523 70.4009 40.5911C71.0019 46.883 67.6291 50.3049 61.3617 49.7408C59.0927 49.5322 56.8237 49.2747 54.5424 49.2624C48.2873 49.2134 43.3936 53.6533 42.9888 59.8961C42.8294 62.3491 43.136 64.8511 43.369 67.3164C44.0068 74.0743 40.5726 77.4472 33.7901 76.6868C31.7296 76.4537 29.6569 76.2452 27.5964 76.233C21.1327 76.2207 16.2636 80.771 15.957 87.2346C15.8343 89.6263 16.1532 92.0547 16.3862 94.4587C17.0117 100.971 13.5898 104.381 7.07715 103.719C4.80814 103.486 2.53913 103.253 0.257858 103.253C-2.73479 103.253 -5.34722 104.295 -7.50584 106.466C-7.53038 106.491 -7.5549 106.515 -7.56717 106.527C-7.5917 106.552 -7.61623 106.576 -7.62849 106.589C-9.81165 108.747 -10.8542 111.372 -10.8419 114.352C-10.8419 116.621 -10.6089 118.903 -10.3758 121.172C-9.70127 127.684 -13.1109 131.106 -19.6359 130.481C-22.0398 130.248 -24.456 129.941 -26.8599 130.051C-33.3235 130.37 -37.8615 135.24 -37.8615 141.691C-37.8615 143.751 -37.6408 145.824 -37.4077 147.885C-36.6473 154.667 -40.0202 158.101 -46.7781 157.464C-49.2434 157.231 -51.7454 156.924 -54.1984 157.083C-60.4412 157.488 -64.8689 162.382 -64.8321 168.637C-64.8198 170.906 -64.55 173.187 -64.3538 175.456C-63.949 179.945 -65.5802 182.938 -68.855 184.066L-65.3227 187.598C-61.8027 185.648 -59.7053 181.981 -59.6686 177.284C-59.6563 174.941 -59.9261 172.598 -60.2082 170.268C-60.9073 164.516 -56.2098 160.616 -50.9482 161.683C-49.3292 162.014 -47.6612 162.087 -46.0054 162.173C-37.3709 162.639 -31.9008 156.912 -32.698 148.265C-32.8697 146.413 -33.1518 144.561 -33.2131 142.697C-33.3726 137.239 -29.828 134.05 -24.4314 134.639C-22.5794 134.847 -20.7274 135.068 -18.8632 135.154C-10.2777 135.522 -4.94247 129.892 -5.7029 121.319C-5.85008 119.602 -6.07085 117.885 -6.20576 116.168C-6.38974 113.862 -6.05858 111.679 -4.26791 109.851C-2.44043 108.06 -0.257271 107.729 2.04853 107.913C3.76562 108.048 5.48271 108.269 7.1998 108.416C15.773 109.177 21.4026 103.841 21.0346 95.2559C20.961 93.3916 20.728 91.5396 20.5195 89.6876C19.9308 84.2788 23.1197 80.7465 28.5775 80.9059C30.4296 80.955 32.2816 81.2493 34.1458 81.421C42.7926 82.2183 48.5203 76.7481 48.0542 68.1136C47.9684 66.4578 47.8948 64.7898 47.5637 63.1708C46.4966 57.9092 50.3968 53.224 56.1491 53.9108C58.4794 54.1929 60.822 54.4627 63.1646 54.4505C70.0575 54.4014 74.7427 49.9002 75.0125 43.0196C75.1107 40.6892 74.804 38.3344 74.5465 36.004C73.8842 30.1659 77.024 26.6827 82.8989 26.9157C85.2415 27.0138 87.5718 27.4431 89.9144 27.4431C97.1752 27.4554 101.983 22.6966 102.057 15.4235C102.081 13.2894 101.885 11.1308 101.529 9.03348C100.622 3.57559 104.546 -0.741669 110.066 -0.0793629C111.574 0.10461 113.083 0.300852 114.591 0.435766C118.578 0.815979 122.282 0.239531 125.409 -2.70405C125.409 -2.70405 125.409 -2.70405 125.421 -2.69179C125.446 -2.71632 125.458 -2.74085 125.483 -2.76538C125.507 -2.78991 125.532 -2.80217 125.556 -2.8267C125.556 -2.8267 125.556 -2.8267 125.544 -2.83897C128.488 -5.96652 129.064 -9.67052 128.684 -13.6566C128.537 -15.1652 128.34 -16.6738 128.169 -18.1824C127.752 -21.6779 129.334 -24.5356 131.934 -25.9215L128.512 -29.4048C125.311 -27.283 123.434 -23.5912 123.447 -18.857Z"
          fill="#4951F2"
        />
        <path
          d="M181.128 -15.7296C181.128 -14.6993 181.202 -13.6568 181.361 -12.6388C181.913 -9.21689 182.392 -5.83177 179.963 -2.88819C177.02 -0.45974 173.634 -0.938076 170.213 -1.49C169.195 -1.64944 168.152 -1.72303 167.122 -1.72303C159.211 -1.74755 154.207 3.51409 154.599 11.4372C154.685 13.1543 154.894 14.8714 155.053 16.5885C155.691 23.2238 152.232 26.5721 145.56 25.8363C143.438 25.6032 141.292 25.3947 139.158 25.3947C132.89 25.407 128.046 29.8469 127.666 36.0897C127.518 38.6163 127.85 41.1797 128.083 43.7185C128.684 50.0104 125.311 53.4323 119.043 52.8681C116.774 52.6596 114.505 52.4021 112.224 52.3898C105.969 52.3407 101.075 56.7806 100.67 63.0235C100.511 65.4765 100.818 67.9785 101.051 70.4438C101.688 77.2017 98.2543 80.5746 91.4718 79.8142C89.4113 79.5811 87.3385 79.3726 85.278 79.3604C78.8144 79.3481 73.9452 83.8984 73.6386 90.362C73.5159 92.7537 73.8348 95.1821 74.0679 97.586C74.6934 104.099 71.2715 107.508 64.7588 106.846C62.4898 106.613 60.2208 106.38 57.9395 106.38C54.9468 106.38 52.3344 107.423 50.1758 109.593C50.1513 109.618 50.1267 109.642 50.1145 109.655C50.0899 109.679 50.0654 109.704 50.0532 109.716C47.87 111.875 46.8275 114.499 46.8397 117.48C46.8397 119.749 47.0728 122.03 47.3058 124.299C47.9804 130.812 44.5707 134.234 38.0458 133.608C35.6419 133.375 33.2257 133.068 30.8218 133.179C24.3581 133.498 19.8201 138.367 19.8201 144.818C19.8201 146.879 20.0409 148.952 20.2739 151.012C21.0343 157.795 17.6615 161.229 10.9035 160.591C8.43827 160.358 5.93622 160.051 3.48324 160.211C-2.7596 160.615 -7.18723 165.509 -7.15044 171.764C-7.13818 174.033 -6.86835 176.315 -6.67211 178.584C-6.26737 183.073 -7.89861 186.065 -11.1733 187.194L-7.64104 190.726C-4.121 188.776 -2.02371 185.109 -1.98691 180.411C-1.97465 178.068 -2.24448 175.726 -2.52657 173.396C-3.22567 167.643 1.47179 163.743 6.73344 164.81C8.35241 165.141 10.0204 165.215 11.6762 165.301C20.3107 165.767 25.7809 160.039 24.9837 151.392C24.8119 149.54 24.5298 147.688 24.4685 145.824C24.3091 140.366 27.8536 137.177 33.2502 137.766C35.1022 137.974 36.9542 138.195 38.8185 138.281C47.4039 138.649 52.7392 133.019 51.9787 124.446C51.8316 122.729 51.6108 121.012 51.4759 119.295C51.2919 116.989 51.6231 114.806 53.4137 112.979C55.2412 111.188 57.4244 110.857 59.7302 111.041C61.4473 111.176 63.1643 111.396 64.8814 111.544C73.4546 112.304 79.0842 106.969 78.7163 98.3833C78.6427 96.519 78.4097 94.667 78.2011 92.815C77.6124 87.4062 80.8013 83.8739 86.2592 84.0333C88.1112 84.0824 89.9632 84.3767 91.8275 84.5484C100.474 85.3456 106.202 79.8755 105.736 71.241C105.65 69.5852 105.576 67.9172 105.245 66.2982C104.178 61.0366 108.078 56.3514 113.831 57.0382C116.161 57.3203 118.504 57.5901 120.846 57.5779C127.739 57.5288 132.424 53.0276 132.694 46.147C132.792 43.8166 132.486 41.4618 132.228 39.1314C131.566 33.2933 134.706 29.8101 140.581 30.0431C142.923 30.1412 145.253 30.5705 147.596 30.5705C154.857 30.5828 159.665 25.824 159.738 18.5509C159.763 16.4168 159.567 14.2582 159.211 12.1609C158.303 6.70298 162.228 2.38572 167.747 3.04802C169.256 3.232 170.765 3.42824 172.273 3.56315C176.259 3.94337 179.963 3.36692 183.091 0.423336C183.091 0.423336 183.091 0.423332 183.103 0.435596C183.128 0.411068 183.14 0.386541 183.164 0.362011C183.189 0.337481 183.213 0.325216 183.238 0.300686C183.238 0.300686 183.238 0.300682 183.226 0.288416C186.169 -2.83914 186.746 -6.54314 186.365 -10.5292C186.218 -12.0378 186.022 -13.5464 185.85 -15.055C185.433 -18.5505 187.016 -21.4082 189.616 -22.7942L186.145 -26.2651C182.993 -24.1556 181.116 -20.4638 181.128 -15.7296Z"
          fill="#4951F2"
        />
        <path
          d="M143.733 1.42912C143.733 2.45938 143.806 3.50189 143.966 4.51988C144.518 7.94179 144.996 11.3269 142.567 14.2705C139.624 16.6989 136.239 16.2206 132.817 15.6687C131.799 15.5093 130.756 15.4357 129.726 15.4357C121.815 15.4111 116.811 20.6728 117.204 28.5959C117.289 30.313 117.498 32.0301 117.657 33.7472C118.295 40.3825 114.836 43.7308 108.164 42.9949C106.042 42.7619 103.896 42.5534 101.762 42.5534C95.4947 42.5657 90.65 47.0056 90.2698 53.2484C90.1226 55.775 90.4538 58.3383 90.6868 60.8772C91.2878 67.1691 87.9149 70.591 81.6476 70.0268C79.3785 69.8183 77.1096 69.5608 74.8283 69.5485C68.5732 69.4994 63.6795 73.9393 63.2747 80.1822C63.1153 82.6352 63.4219 85.1372 63.6549 87.6025C64.2927 94.3604 60.8585 97.7333 54.076 96.9729C52.0155 96.7398 49.9427 96.5313 47.8822 96.519C41.4186 96.5068 36.5494 101.057 36.2428 107.521C36.1202 109.912 36.4391 112.341 36.6721 114.745C37.2976 121.257 33.8757 124.667 27.363 124.005C25.094 123.772 22.825 123.539 20.5437 123.539C17.5511 123.539 14.9387 124.581 12.78 126.752C12.7555 126.777 12.731 126.801 12.7187 126.813C12.6942 126.838 12.6697 126.862 12.6574 126.875C10.4742 129.033 9.43171 131.658 9.44397 134.638C9.44397 136.907 9.67701 139.189 9.91005 141.458C10.5846 147.97 7.17497 151.392 0.650032 150.767C-1.75389 150.534 -4.17009 150.227 -6.57401 150.338C-13.0376 150.656 -17.5756 155.526 -17.5756 161.977C-17.5756 164.037 -17.3549 166.11 -17.1218 168.171C-16.3614 174.953 -19.7343 178.387 -26.4922 177.75C-28.9575 177.517 -31.4595 177.21 -33.9125 177.369C-40.1554 177.774 -44.583 182.668 -44.5462 188.923C-44.5339 191.192 -44.2641 193.473 -44.0679 195.742C-43.6631 200.231 -45.2944 203.224 -48.5691 204.352L-45.0368 207.885C-41.5168 205.934 -39.4195 202.267 -39.3827 197.57C-39.3704 195.227 -39.6402 192.885 -39.9223 190.554C-40.6214 184.802 -35.924 180.902 -30.6623 181.969C-29.0433 182.3 -27.3753 182.373 -25.7195 182.459C-17.085 182.925 -11.6149 177.198 -12.4121 168.551C-12.5838 166.699 -12.8659 164.847 -12.9272 162.983C-13.0867 157.525 -9.54211 154.336 -4.14555 154.925C-2.29355 155.133 -0.44154 155.354 1.42273 155.44C10.0082 155.808 15.3434 150.178 14.583 141.605C14.4358 139.888 14.215 138.171 14.0801 136.454C13.8961 134.148 14.2273 131.965 16.018 130.137C17.8455 128.347 20.0286 128.015 22.3344 128.199C24.0515 128.334 25.7686 128.555 27.4857 128.702C36.0589 129.463 41.6885 124.127 41.3205 115.542C41.2469 113.678 41.0139 111.826 40.8054 109.974C40.2167 104.565 43.4055 101.033 48.8634 101.192C50.7154 101.241 52.5674 101.535 54.4317 101.707C63.0785 102.504 68.8062 97.0342 68.3401 88.3997C68.2543 86.7439 68.1807 85.0759 67.8495 83.4569C66.7825 78.1953 70.6827 73.5101 76.435 74.1969C78.7653 74.479 81.1079 74.7488 83.4505 74.7365C90.3434 74.6875 95.0286 70.1863 95.2984 63.3056C95.3965 60.9753 95.0899 58.6204 94.8324 56.2901C94.17 50.452 97.3099 46.9688 103.185 47.2018C105.527 47.2999 107.858 47.7292 110.2 47.7292C117.461 47.7415 122.269 42.9827 122.343 35.7096C122.367 33.5755 122.171 31.4169 121.815 29.3196C120.908 23.8617 124.832 19.5444 130.352 20.2067C131.86 20.3907 133.369 20.5869 134.877 20.7218C138.863 21.102 142.567 20.5256 145.695 17.582C145.695 17.582 145.695 17.582 145.707 17.5943C145.732 17.5698 145.744 17.5452 145.769 17.5207C145.793 17.4962 145.818 17.4839 145.842 17.4594C145.842 17.4594 145.842 17.4594 145.83 17.4471C148.773 14.3196 149.35 10.6155 148.97 6.62945C148.823 5.12086 148.626 3.61228 148.455 2.10369C148.038 -1.39181 149.62 -4.24954 152.22 -5.63547L148.749 -9.10645C145.597 -6.99688 143.72 -3.3174 143.733 1.42912Z"
          fill="#4951F2"
        />
      </g>
    </SVG>
  );
}

const SVG = styled.svg`
  width: 60px;
  height: 60px;

  ${breakpoints.min_desktop} {
    width: 122.562px;
    height: 122.99px;
  }
`;

export default Empathy;
