import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../components/base/breakpoints";

function Mundo() {
  const theme = useTheme();

  return (
    <SVG
      width="438"
      height="438"
      viewBox="0 0 438 438"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M219.309 438C340.089 438 438 340.089 438 219.309C438 98.5296 340.089 0.618408 219.309 0.618408C98.5294 0.618408 0.618164 98.5296 0.618164 219.309C0.618164 340.089 98.5294 438 219.309 438Z"
        fill={theme.nombre === "light" ? colors.amarillo : colors.amarillo}
      />
      <path
        d="M222.79 75.2562C224.966 72.8626 228.448 73.0802 229.318 71.9922C230.189 71.1218 233.888 67.8577 234.323 66.3345C234.758 64.8113 235.846 60.4592 235.194 58.7184C234.541 56.76 233.453 56.1072 231.93 54.584C230.406 53.0607 227.577 52.1903 226.707 51.3199C225.837 50.4495 216.48 49.1439 212.78 48.4911C209.299 47.8383 198.636 53.2783 197.766 52.6255C196.895 51.9727 193.849 51.3199 193.196 51.3199C192.543 51.3199 186.886 51.7551 186.015 51.3199C185.145 50.8847 181.663 49.7967 180.358 49.7967C179.052 50.0143 170.783 52.8431 170.348 52.8431C169.695 52.8431 163.82 51.9727 162.079 51.5375C160.121 51.3199 153.593 55.2368 153.593 55.2368C149.24 56.3248 149.458 61.3296 149.458 61.3296C148.152 61.3296 147.717 68.5105 148.152 71.1218C148.588 73.733 151.416 73.733 151.199 75.0386C150.981 76.3442 152.069 83.7427 152.069 85.0483C152.069 86.354 156.421 88.9652 157.727 89.618C159.033 90.2708 162.297 91.5764 162.732 92.6644C163.385 93.7525 165.125 99.4101 165.996 100.063C166.866 100.716 168.607 101.586 169.695 102.457C170.783 103.327 172.742 106.809 173.177 107.244C173.394 107.679 176.006 112.031 177.311 113.119C178.617 113.99 181.228 114.642 182.534 114.642C183.839 114.642 188.844 114.86 191.02 114.642C193.196 114.425 195.155 110.508 196.46 109.855C197.548 109.42 201.248 108.767 202.553 108.114C204.076 107.461 205.817 105.068 206.688 103.109C207.558 101.151 207.776 100.933 210.169 97.8869C212.563 94.6229 211.91 92.6645 212.128 91.794C212.128 90.9236 216.262 86.7892 217.568 85.4836C218.873 84.1779 219.091 81.3491 219.744 78.9555C220.397 76.7794 220.614 77.4323 222.79 75.2562Z"
        fill={theme.fondo}
      />
      <path
        d="M121.605 218.221C120.517 217.568 115.73 216.263 114.642 214.957C113.554 213.652 110.507 212.128 108.767 210.605C106.808 209.082 100.933 209.952 99.4097 209.952C97.8865 209.952 93.0993 208.864 92.0113 209.082C89.4 209.952 87.0064 214.087 86.7888 214.522C86.5712 214.957 84.6128 216.48 84.3952 217.351C84.1776 218.221 87.0064 221.05 88.7472 219.962C89.4 219.962 93.9697 221.268 96.5809 221.485C99.1921 221.703 105.938 220.18 108.331 220.832C110.725 221.485 112.901 222.138 114.424 222.791C115.948 223.444 116.6 224.749 117.471 225.837C118.341 226.925 120.517 229.537 122.258 229.972C123.999 230.189 125.522 228.666 126.175 227.578C126.828 226.49 125.304 223.444 124.652 221.703C123.999 219.962 122.693 218.874 121.605 218.221Z"
        fill={theme.fondo}
      />
      <path
        d="M84.3952 246.51C84.3952 246.51 83.96 247.38 82.4367 250.426C81.1311 253.473 77.8671 262.177 77.2143 265.441C76.5615 268.487 73.9502 275.451 74.3854 278.28C75.0383 280.891 84.8304 292.859 86.136 293.512C87.4416 294.165 94.8401 304.827 94.4049 306.133C93.9697 307.438 96.3633 316.143 97.0161 317.448C97.6689 318.754 108.114 326.37 107.896 327.893C107.679 329.416 105.72 337.903 106.373 339.861C107.026 341.82 112.901 352.482 112.901 354.441C112.901 356.399 110.943 364.886 110.507 366.191C110.072 367.279 111.813 376.201 113.119 379.247C114.424 382.294 118.776 386.646 118.994 387.516C119.212 388.169 120.3 393.827 120.952 394.48C121.605 395.35 131.18 401.443 133.138 399.484C135.097 397.308 134.009 385.34 134.661 383.382C135.314 381.423 136.402 379.9 136.402 377.942C136.402 375.983 135.749 371.631 137.49 369.238C139.449 366.844 140.972 363.362 141.842 361.186C142.713 359.01 140.972 353.788 141.842 352.7C142.713 351.612 144.671 349.436 146.63 348.783C148.37 348.13 153.158 346.607 154.681 344.866C156.204 343.125 154.463 339.208 155.769 335.727C157.292 332.245 164.473 327.24 167.519 325.064C170.566 322.888 170.566 318.971 171.001 317.448C171.436 315.925 172.524 312.226 173.612 308.962C174.7 305.698 177.747 293.729 177.747 290.901C177.747 288.072 178.4 284.808 179.052 283.067C179.705 281.326 180.14 278.062 180.358 275.886C180.576 273.71 172.742 270.664 170.783 268.923C168.825 267.182 157.945 267.399 155.334 266.094C152.94 264.788 145.324 257.825 144.671 255.431C143.801 253.038 141.625 252.82 140.319 251.297C139.013 249.774 134.879 247.162 133.356 246.074C131.833 244.986 131.18 243.246 129.657 242.81C127.916 242.375 124.434 240.199 122.911 239.329C121.388 238.458 112.031 238.894 112.031 238.894C112.031 238.894 108.549 236.282 104.415 234.977C100.28 233.671 98.5393 235.194 96.5809 235.847C94.6225 236.5 88.7472 239.982 88.7472 239.982C88.7472 239.982 81.7839 240.634 79.8255 237.37C77.8671 234.106 75.6911 234.977 74.3854 233.236C73.0798 231.277 70.6862 229.319 69.8158 228.013C69.163 226.708 64.1581 222.356 63.5053 221.05C62.8525 219.744 59.5884 215.828 56.9772 214.74C54.1484 213.652 47.6203 212.781 47.1851 212.128C46.7499 211.476 43.921 206.906 43.921 205.6C43.7034 204.295 45.6619 199.29 45.6619 199.29C45.6619 199.29 49.7963 194.938 51.3195 193.632C52.8428 192.326 59.1532 191.674 61.3293 190.803C63.2877 190.15 67.8574 190.586 69.5982 191.021C71.339 191.238 73.515 194.72 75.6911 196.243C77.8671 197.767 81.1311 201.248 82.8719 201.466C84.6128 201.683 90.0528 199.507 90.488 197.984C90.9232 196.461 90.0528 192.979 91.5761 190.15C93.0993 187.104 94.8401 183.622 97.0161 181.882C99.1922 179.923 98.9745 176.442 99.1922 174.483C99.4098 172.525 100.063 170.349 107.679 167.737C115.512 165.126 122.911 159.033 124.216 158.816C125.522 158.38 126.392 158.38 127.045 157.945C127.698 157.51 131.18 155.552 131.833 153.811C132.703 152.07 131.833 149.459 130.962 148.371C130.092 147.283 129.657 143.801 129.439 143.148C129.439 142.495 134.009 141.19 135.097 140.755C136.185 140.319 145.542 139.667 146.412 139.014C147.065 138.143 152.505 135.315 152.94 132.051C153.158 128.786 148.588 125.087 148.37 124.652C148.153 123.999 144.018 119.43 143.366 119.212C142.495 119.212 138.796 116.383 138.143 115.295C137.49 113.989 135.532 111.596 136.185 110.073C136.837 108.549 139.231 106.591 139.231 105.068C139.231 103.545 138.578 101.586 137.708 99.8453C136.62 98.1045 133.138 95.2757 131.833 94.4052C130.745 93.5348 127.263 90.4884 126.175 89.1828C125.087 87.8772 120.082 85.4835 118.341 84.8307C116.383 84.1779 110.29 87.6596 109.202 87.6596C108.114 87.6596 103.544 91.3588 102.674 92.4468C101.803 93.5348 97.4513 94.6228 95.9281 94.6228C94.4049 94.6228 87.6592 97.0165 84.1776 97.4517C80.6959 97.8869 77.2143 99.8453 74.603 100.063C71.9918 100.281 65.8989 97.0165 65.2461 95.4933C64.5933 93.97 62.8525 89.618 62.1997 88.53C61.5469 87.2244 59.3708 84.8307 56.7596 83.0899C55.454 82.2195 51.715 81.6456 49.1038 81.428C26.0379 109.281 10.1765 142.705 3.64844 179.915C5.38926 183.179 7.58138 187.104 8.01659 188.627C8.887 191.456 16.9383 198.419 18.6791 200.378C20.4199 202.336 19.3319 212.564 22.3784 217.133C25.4248 221.703 28.2536 222.791 33.0409 222.138C37.6106 221.703 42.6154 230.407 46.3147 230.842C50.0139 231.277 56.542 231.93 57.63 233.889C58.718 235.847 66.1165 243.898 69.163 244.551C71.7742 245.204 84.3952 246.51 84.3952 246.51Z"
        fill={theme.fondo}
      />
      <path
        d="M387.95 80.0435C387.08 79.6083 386.427 79.1731 386.427 79.1731C382.728 78.9555 382.075 78.9555 378.811 80.2611C375.547 81.3491 373.153 82.4371 372.5 83.7427C371.848 85.0483 368.801 85.7012 366.19 86.354C363.361 87.0068 361.838 87.6596 360.968 88.53C360.097 89.4004 359.009 89.618 357.268 91.3588C355.31 93.0996 354.875 94.6229 351.828 96.1461C348.782 97.6693 340.948 101.369 338.99 101.804C337.466 102.021 333.55 102.239 331.156 102.021C330.286 100.933 328.327 98.5397 327.892 97.8869C327.239 97.0165 322.887 93.7525 320.711 93.5349C318.535 93.0996 313.965 93.3172 312.225 93.0996C310.484 92.882 307.872 92.882 305.479 92.4468C302.868 92.2292 299.821 92.0116 297.645 92.0116C295.252 92.2292 293.511 93.3172 291.552 94.1877C289.594 95.0581 281.76 95.4933 280.019 95.7109C278.061 95.9285 272.403 98.3221 271.315 99.1925C270.227 100.063 270.01 107.244 268.269 108.114C266.528 108.767 262.829 111.378 262.829 112.684C262.829 113.99 263.917 117.689 264.57 118.342C265.005 118.994 270.01 119.647 270.88 119.865C271.75 119.865 274.362 117.906 276.102 116.818C277.843 115.73 283.719 110.943 284.371 110.508C285.024 109.855 285.677 108.114 288.288 108.114C290.899 108.114 291.552 110.29 293.293 110.943C295.034 111.596 299.386 113.772 301.127 113.99C301.127 113.99 301.344 113.99 301.562 113.99C301.78 114.86 302.215 115.513 302.215 115.948C302.65 116.818 302.215 122.041 300.909 123.346C299.604 124.87 296.34 126.175 293.728 127.046C291.117 127.916 286.765 123.999 283.936 124.217C280.89 124.434 276.973 124.87 275.232 126.393C273.491 127.916 268.704 133.139 267.834 134.444C267.181 135.75 265.222 138.579 263.699 138.796C262.176 139.014 256.736 139.449 255.213 141.625C253.689 143.583 252.166 145.977 251.731 148.588C251.296 151.417 249.337 156.64 248.685 157.292C248.032 157.945 246.726 160.774 244.985 163.385C243.462 165.997 244.332 171.219 244.985 172.307C245.638 173.613 249.99 173.613 252.166 173.613C254.125 173.83 260 170.131 262.829 168.39C265.658 166.649 273.056 166.432 274.579 166.432C276.102 166.432 285.024 165.997 286.33 164.473C287.853 162.95 293.728 157.51 295.904 157.51C298.298 157.51 305.479 161.209 306.784 162.297C308.308 163.385 313.313 163.385 315.271 163.385C317.447 163.385 319.188 164.691 320.929 166.649C322.669 168.608 326.586 169.913 329.85 171.001C333.114 172.089 336.378 174.048 336.814 176.006C337.249 177.747 333.767 178.835 331.374 178.835C328.98 178.835 326.804 177.312 324.41 177.312C322.017 177.312 319.841 178.4 317.665 178.835C315.489 179.27 309.831 180.576 308.525 180.576C307.22 180.576 302.432 179.053 301.127 178.4C299.821 177.747 296.122 174.701 294.816 173.83C293.293 172.96 289.376 170.131 285.895 170.131C282.413 170.131 279.584 169.696 276.755 171.219C273.926 172.742 271.315 174.048 268.922 174.701C266.528 175.353 259.347 177.53 254.995 178.618C250.861 179.706 245.203 181.446 243.462 184.493C241.721 187.539 237.587 193.197 236.499 194.285C235.411 195.591 226.054 205.818 225.183 208.864C224.531 211.911 227.577 218.221 227.142 219.962C226.489 221.485 224.748 230.407 226.489 233.453C228.012 236.717 232.364 239.329 233.67 241.07C235.193 243.028 240.633 253.255 244.985 254.126C249.555 254.996 253.907 251.732 257.171 251.732C260.435 251.732 263.046 248.468 265.658 248.468C268.269 248.468 270.88 246.727 272.621 248.25C274.362 249.774 277.19 253.473 280.237 254.126C283.501 254.779 288.071 258.695 287.635 260.871C287.2 263.047 287.2 271.969 287.418 272.404C287.635 272.84 292.423 281.979 292.423 283.284C292.64 284.808 290.464 291.553 289.376 295.035C288.288 298.299 292.64 305.045 293.946 307.221C295.034 309.397 295.904 310.485 295.904 312.878C295.904 315.272 299.604 320.712 300.474 322.018C301.127 323.541 301.562 328.546 302.432 330.939C303.303 333.333 305.044 337.25 306.567 338.773C308.09 340.514 314.401 345.301 315.706 346.607C317.012 347.913 323.757 347.26 325.498 346.389C327.239 345.519 335.508 338.991 335.943 338.338C336.378 337.685 338.99 326.152 339.207 324.411C339.425 322.671 348.129 310.702 347.476 309.397C346.823 307.874 347.911 296.558 347.911 295.688C347.911 294.817 351.175 289.377 351.175 288.725C351.393 288.072 351.393 281.979 351.393 280.891C351.393 279.803 358.356 264.788 360.532 263.047C362.491 261.307 374.241 253.255 375.765 251.95C377.288 250.426 379.681 238.241 379.681 237.588C379.681 236.935 377.07 233.236 376.417 232.801C375.765 232.365 368.584 230.625 367.278 229.537C365.972 228.449 359.009 227.361 358.356 226.925C357.704 226.49 351.393 220.18 350.958 219.527C350.523 218.874 347.259 211.911 347.259 210.823C347.259 209.735 346.606 202.554 347.911 202.336C348.999 202.119 351.175 200.813 351.393 201.683C351.611 202.554 353.351 207.124 355.527 208.647C357.486 210.17 364.667 214.522 364.667 216.045C364.667 217.568 370.542 221.485 372.5 221.703C374.459 221.92 388.386 219.527 390.344 218.656C392.302 217.568 396.872 213.216 397.09 212.564C397.307 211.693 396.002 206.253 395.131 205.818C394.043 205.165 388.821 203.642 387.515 202.989C386.209 202.336 383.816 199.29 382.293 198.419C380.769 197.767 378.158 195.155 377.941 193.85C377.723 192.544 378.158 187.322 379.029 187.322C379.681 187.322 382.728 187.539 384.033 188.192C385.121 188.845 387.515 190.803 388.603 191.238C389.691 191.674 392.738 195.155 394.478 195.808C396.437 196.461 407.317 196.679 408.405 197.114C409.493 197.549 415.803 200.16 416.456 200.16C417.109 200.16 422.332 203.859 424.29 204.295C426.031 204.73 432.124 206.688 434.082 205.818C434.952 205.383 436.476 204.73 437.781 203.859C434.3 157.51 416.239 114.425 387.95 80.0435Z"
        fill={theme.fondo}
      />
      <path
        d="M373.589 297.864C373.589 297.211 374.895 293.729 375.112 292.859C375.33 291.771 376.635 290.03 376.635 289.16C376.635 288.289 377.071 285.896 376.635 285.243C376.2 284.59 372.719 282.849 372.283 283.067C371.848 283.284 368.802 284.808 368.584 285.025C368.584 285.243 367.714 288.507 367.061 288.725C366.408 288.942 365.973 292.206 365.102 292.859C364.232 293.294 363.362 297.211 363.579 297.646C363.797 297.864 365.32 300.258 365.102 301.563C364.885 302.869 364.014 303.957 365.102 304.827C366.19 305.698 368.366 307.221 369.89 307.221C371.631 307.221 373.154 304.392 373.589 303.086C374.242 301.998 373.589 298.517 373.589 297.864Z"
        fill={theme.fondo}
      />
      <path
        d="M236.064 95.7108C235.194 95.2756 230.406 93.0996 228.883 93.0996C227.36 93.0996 223.225 97.8869 222.79 98.3221C220.832 100.281 221.049 104.85 222.79 105.938C224.531 107.026 226.49 106.809 227.142 107.244C228.013 107.897 228.883 111.378 230.406 112.031C231.712 112.684 237.152 112.031 238.458 110.725C239.763 109.42 239.981 105.938 240.198 104.197C240.198 102.457 237.805 101.369 237.587 100.063C236.934 98.3221 236.717 95.9284 236.064 95.7108Z"
        fill={theme.fondo}
      />
      <path
        d="M250.426 133.139C250.426 133.574 250.861 136.185 251.514 136.838C252.167 137.491 255.431 136.403 256.084 136.185C256.736 135.967 259.348 135.75 259.565 135.315C259.783 134.879 260.653 133.139 260.436 132.268C260.218 131.398 259.13 130.962 259.348 130.092C259.565 129.222 259.13 127.916 258.477 126.828C257.824 125.74 256.954 125.522 256.736 125.305C256.519 125.087 254.778 124.217 254.56 123.999C254.343 123.564 254.343 122.476 254.125 122.476C253.908 122.258 253.037 121.606 252.602 121.388C251.296 120.953 250.861 121.606 250.861 121.823C250.861 122.041 250.861 123.129 250.644 123.346C250.426 123.564 249.991 125.74 249.991 126.393C249.991 127.046 251.514 127.263 251.732 127.916C251.949 128.569 251.949 129.657 251.514 130.31C250.426 131.18 250.426 132.703 250.426 133.139Z"
        fill={theme.fondo}
      />
      <g clip-path="url(#clip0_9_9104)">
        <path
          d="M306.758 151.126C302.763 147.268 299.42 142.863 296.567 138.116C294.468 134.621 292.817 130.924 291.961 126.904C289.841 117.105 295.833 107.954 305.698 105.974C306.187 105.873 306.677 105.772 307.166 105.671C308.185 105.671 309.204 105.671 310.223 105.671C311.303 105.913 312.404 106.075 313.464 106.398C322.371 109.125 327.466 117.893 325.428 126.904C324.103 132.782 320.964 137.671 317.133 142.197C314.34 145.51 311.181 148.439 307.777 151.126C307.451 151.126 307.105 151.126 306.758 151.126ZM307.37 147.773C311.405 144.762 316.48 139.126 319.171 134.722C321.066 131.611 322.432 128.338 322.942 124.701C324.307 114.742 315.461 106.641 305.576 108.822C297.749 110.56 293.061 117.833 294.631 125.792C295.405 129.752 296.995 133.348 299.054 136.782C301.418 140.722 304.21 144.338 307.37 147.773Z"
          fill={theme.nombre === "light" ? colors.rojoush : colors.rosaush}
        />
        <path
          d="M308.674 128.358C304.862 128.358 301.54 125.045 301.56 121.247C301.581 117.55 304.944 114.216 308.653 114.196C312.403 114.176 315.828 117.55 315.807 121.287C315.828 125.085 312.505 128.358 308.674 128.358ZM308.694 117.004C306.167 117.025 304.393 118.782 304.373 121.267C304.353 123.792 306.167 125.59 308.735 125.59C311.262 125.59 313.117 123.732 313.056 121.227C312.995 118.742 311.181 116.984 308.694 117.004Z"
          fill={theme.nombre === "light" ? colors.rojoush : colors.rosaush}
        />
      </g>
      <g clip-path="url(#clip1_9_9104)">
        <path
          d="M128.977 369.312C124.982 365.453 121.64 361.049 118.786 356.302C116.687 352.807 115.036 349.11 114.18 345.089C112.06 335.291 118.052 326.139 127.917 324.16C128.407 324.059 128.896 323.958 129.385 323.857C130.404 323.857 131.423 323.857 132.442 323.857C133.523 324.099 134.623 324.261 135.683 324.584C144.59 327.311 149.686 336.079 147.647 345.089C146.323 350.968 143.184 355.857 139.352 360.382C136.559 363.696 133.4 366.625 129.996 369.312C129.67 369.312 129.324 369.312 128.977 369.312ZM129.589 365.958C133.624 362.948 138.7 357.312 141.39 352.908C143.286 349.796 144.651 346.524 145.161 342.887C146.526 332.927 137.681 324.826 127.795 327.008C119.968 328.746 115.28 336.018 116.85 343.978C117.624 347.938 119.214 351.534 121.273 354.968C123.637 358.908 126.43 362.524 129.589 365.958Z"
          fill={theme.nombre === "light" ? colors.rojoush : colors.rosaush}
        />
        <path
          d="M130.893 346.544C127.081 346.544 123.759 343.231 123.779 339.433C123.8 335.736 127.163 332.402 130.872 332.382C134.623 332.362 138.047 335.736 138.027 339.473C138.047 343.271 134.725 346.544 130.893 346.544ZM130.913 335.19C128.386 335.21 126.613 336.968 126.592 339.453C126.572 341.978 128.386 343.776 130.954 343.776C133.481 343.776 135.336 341.917 135.275 339.412C135.214 336.927 133.4 335.17 130.913 335.19Z"
          fill={theme.nombre === "light" ? colors.rojoush : colors.rosaush}
        />
      </g>
      <path
        d="M132.943 313.755C129.913 288.502 134.559 235.37 177.389 224.865C230.925 211.733 289.007 204.157 302.138 164.258"
        stroke={theme.texto}
        stroke-width="2"
        stroke-dasharray="6 6"
      />
      <defs>
        <clipPath id="clip0_9_9104">
          <rect
            width="34.3441"
            height="45.4554"
            fill="white"
            transform="translate(291.532 105.671)"
          />
        </clipPath>
        <clipPath id="clip1_9_9104">
          <rect
            width="34.3441"
            height="45.4554"
            fill="white"
            transform="translate(113.751 323.857)"
          />
        </clipPath>
      </defs>
    </SVG>
  );
}

const SVG = styled.svg`
  height: 117px;
  width: 273px;
  margin-top: 16px;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 437.382px;
    height: 437.382px;
    margin-top: 0;
  }
`;

export default Mundo;
