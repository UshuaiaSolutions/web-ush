import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../components/base/breakpoints";

function Technology() {
  return (
    <SVG
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.7464 23.5998C40.5092 23.5998 39.4552 24.2872 38.9053 25.2953H33.1314V19.3381H36.8432C38.722 19.3381 40.2342 17.8259 40.2342 15.947V10.4022C41.2424 9.85234 41.9297 8.75255 41.9297 7.5611C41.9297 5.77393 40.4633 4.26171 38.6303 4.26171C36.8432 4.26171 35.331 5.72811 35.331 7.5611C35.331 8.79837 36.0183 9.85234 37.0265 10.4022V15.9929C37.0265 16.0845 36.9348 16.1762 36.8432 16.1762H33.1314V15.3055C33.1314 13.4267 31.6191 11.9145 29.7403 11.9145H28.4114V6.14053C29.4196 5.59063 30.1069 4.49083 30.1069 3.29939C30.1069 1.51222 28.6405 0 26.8075 0C24.9745 0 23.5081 1.4664 23.5081 3.29939C23.5081 4.53666 24.1955 5.59063 25.2037 6.14053V11.9145H20.1171V8.20265C20.1171 6.32383 18.6049 4.81161 16.7261 4.81161H11.1354C10.5855 3.80346 9.48574 3.11609 8.2943 3.11609C6.50713 3.11609 4.99491 4.58248 4.99491 6.41548C4.99491 8.20265 6.4613 9.71487 8.2943 9.71487C9.53157 9.71487 10.5855 9.02749 11.1354 8.01935H16.7261C16.8177 8.01935 16.9094 8.111 16.9094 8.20265V11.9145H15.3055C13.4267 11.9145 11.9145 13.4267 11.9145 15.3055V17.1385H6.14053C5.59063 16.1303 4.49084 15.443 3.29939 15.443C1.51222 15.443 0 16.9094 0 18.7424C0 20.4837 1.4664 21.9959 3.29939 21.9959C4.53666 21.9959 5.59063 21.3086 6.14053 20.3004H11.9145V25.2953H8.20265C6.32383 25.2953 4.81161 26.8075 4.81161 28.6864V34.277C3.80346 34.8269 3.11609 35.8809 3.11609 37.1181C3.11609 38.9053 4.58249 40.4175 6.41548 40.4175C8.20265 40.4175 9.71487 38.9511 9.71487 37.1181C9.71487 35.8809 9.0275 34.8269 8.01935 34.277V28.6864C8.01935 28.5947 8.111 28.5031 8.20265 28.5031H11.9145V29.7403C11.9145 31.6191 13.4267 33.1314 15.3055 33.1314H16.9094V38.9053C15.9012 39.4552 15.2139 40.555 15.2139 41.7464C15.2139 43.5336 16.6802 45.0458 18.5132 45.0458C20.3004 45.0458 21.8126 43.5794 21.8126 41.7464C21.8126 40.5092 21.1253 39.4552 20.1171 38.9053V33.1314H25.6619V36.8432C25.6619 38.722 27.1741 40.2342 29.053 40.2342H34.6436C35.1935 41.2424 36.2933 41.9297 37.4847 41.9297C39.2719 41.9297 40.7841 40.4633 40.7841 38.6303C40.7841 36.8432 39.3177 35.331 37.4847 35.331C36.2475 35.331 35.1935 36.0183 34.6436 37.0265H29.0071C28.9155 37.0265 28.8238 36.9348 28.8238 36.8432V33.1314H29.6945C31.5733 33.1314 33.0855 31.6191 33.0855 29.7403V28.5031H38.8595C39.4094 29.5112 40.5092 30.1986 41.7006 30.1986C43.4878 30.1986 45 28.7322 45 26.8992C45 25.112 43.5336 23.5998 41.7464 23.5998ZM38.5845 6.55295C39.1344 6.55295 39.5927 7.0112 39.5927 7.5611C39.5927 8.111 39.1344 8.56925 38.5845 8.56925C38.0346 8.56925 37.5764 8.111 37.5764 7.5611C37.5764 7.0112 38.0346 6.55295 38.5845 6.55295ZM26.7617 2.29124C27.3116 2.29124 27.7699 2.74949 27.7699 3.29939C27.7699 3.84929 27.3116 4.30754 26.7617 4.30754C26.2118 4.30754 25.7536 3.84929 25.7536 3.29939C25.7536 2.74949 26.2118 2.29124 26.7617 2.29124ZM8.2943 7.42363C7.7444 7.42363 7.28615 6.96538 7.28615 6.41548C7.28615 5.86558 7.7444 5.40733 8.2943 5.40733C8.8442 5.40733 9.30244 5.86558 9.30244 6.41548C9.30244 6.96538 8.8442 7.42363 8.2943 7.42363ZM3.29939 19.7047C2.74949 19.7047 2.29124 19.2464 2.29124 18.6965C2.29124 18.1466 2.74949 17.6884 3.29939 17.6884C3.84929 17.6884 4.30754 18.1466 4.30754 18.6965C4.30754 19.2464 3.80346 19.7047 3.29939 19.7047ZM6.41548 38.0804C5.86558 38.0804 5.40733 37.6222 5.40733 37.0723C5.40733 36.5224 5.86558 36.0642 6.41548 36.0642C6.96538 36.0642 7.42363 36.5224 7.42363 37.0723C7.42363 37.6222 6.96538 38.0804 6.41548 38.0804ZM18.5132 42.7088C17.9633 42.7088 17.5051 42.2505 17.5051 41.7006C17.5051 41.1507 17.9633 40.6925 18.5132 40.6925C19.0631 40.6925 19.5214 41.1507 19.5214 41.7006C19.5214 42.2505 19.0173 42.7088 18.5132 42.7088ZM37.4389 37.6222C37.9888 37.6222 38.447 38.0804 38.447 38.6303C38.447 39.1802 37.9888 39.6385 37.4389 39.6385C36.889 39.6385 36.4308 39.1802 36.4308 38.6303C36.4308 38.0804 36.9348 37.6222 37.4389 37.6222ZM29.9236 29.7403C29.9236 29.832 29.832 29.9236 29.7403 29.9236H15.2597C15.168 29.9236 15.0764 29.832 15.0764 29.7403V15.2597C15.0764 15.168 15.168 15.0764 15.2597 15.0764H29.7403C29.832 15.0764 29.9236 15.168 29.9236 15.2597V29.7403ZM41.7464 27.9073C41.1965 27.9073 40.7383 27.4491 40.7383 26.8992C40.7383 26.3493 41.1965 25.891 41.7464 25.891C42.2963 25.891 42.7546 26.3493 42.7546 26.8992C42.7546 27.4491 42.2505 27.9073 41.7464 27.9073Z"
        fill="#393939"
      />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 24px;
  height: 46px;

  ${breakpoints.min_desktop} {
    width: 45px;
    height: 46px;
  }
`;

export default Technology;
