import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints, colors } from "../components/base/breakpoints";

function IlustracionNeeds() {
  const theme = useTheme();

  return (
    <SVG
      width="495"
      height="832"
      viewBox="0 0 495 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="An abstract illustration that shows a cedilla and a machine nut united by a long pencil. There are also some stars next to the pencil."
    >
      <path
        opacity="0.3"
        d="M214.14 714.812L214.143 714.812C214.957 714.812 215.77 714.817 216.583 714.825L216.573 715.825C217.987 715.84 219.402 715.864 220.82 715.888C221.024 715.891 221.228 715.895 221.433 715.898L221.449 714.898C223.066 714.926 224.681 714.951 226.298 714.96L226.292 715.96C227.908 715.97 229.528 715.963 231.152 715.926L231.129 714.927C231.929 714.909 232.729 714.883 233.53 714.849C234.538 714.79 235.543 714.723 236.543 714.645L236.62 715.642C238.642 715.486 240.647 715.291 242.634 715.058L242.518 714.065C244.524 713.83 246.512 713.557 248.48 713.245L248.636 714.233C250.645 713.915 252.634 713.558 254.602 713.162L254.405 712.182C256.382 711.784 258.338 711.348 260.272 710.875L260.51 711.846C262.48 711.363 264.427 710.842 266.352 710.282L266.073 709.322C268.007 708.759 269.919 708.158 271.807 707.519L272.127 708.467C274.051 707.816 275.95 707.126 277.824 706.398L277.462 705.466C279.338 704.737 281.19 703.969 283.015 703.165L283.418 704.08C285.272 703.263 287.1 702.407 288.9 701.515L288.456 700.619C290.256 699.726 292.029 698.796 293.773 697.83L294.258 698.704C296.03 697.723 297.772 696.704 299.485 695.649L298.961 694.798C300.673 693.743 302.354 692.653 304.005 691.527L304.568 692.353C306.241 691.213 307.881 690.037 309.49 688.826L308.889 688.027C310.492 686.82 312.064 685.578 313.602 684.303L314.24 685.072C315.796 683.782 317.319 682.457 318.807 681.1L318.133 680.361C319.615 679.01 321.061 677.625 322.473 676.21L323.181 676.916C324.608 675.484 325.999 674.021 327.353 672.527L326.612 671.855C327.958 670.37 329.267 668.854 330.539 667.309L331.311 667.944C332.594 666.385 333.84 664.796 335.046 663.179L334.244 662.581C335.442 660.976 336.6 659.343 337.72 657.682L338.549 658.241C339.677 656.568 340.765 654.868 341.813 653.142L340.958 652.623C341.996 650.912 342.994 649.175 343.951 647.414L344.83 647.892C345.793 646.12 346.714 644.324 347.594 642.504L346.693 642.069C347.563 640.269 348.392 638.446 349.178 636.601L350.098 636.993C350.888 635.14 351.635 633.265 352.339 631.37L351.401 631.022C352.097 629.149 352.75 627.255 353.36 625.343L354.312 625.647C354.924 623.728 355.492 621.791 356.016 619.836L355.05 619.577C355.567 617.647 356.041 615.7 356.471 613.736L357.447 613.949C357.877 611.984 358.263 610.003 358.604 608.007L357.619 607.838C357.955 605.873 358.247 603.892 358.495 601.898L359.487 602.021C359.735 600.027 359.939 598.02 360.098 596L359.101 595.921C359.258 593.933 359.37 591.932 359.438 589.92L360.438 589.953C360.506 587.944 360.53 585.924 360.509 583.893L359.509 583.903C359.488 581.911 359.424 579.908 359.316 577.897L360.315 577.843C360.207 575.841 360.056 573.831 359.861 571.812L358.865 571.909C358.674 569.926 358.439 567.936 358.161 565.939L359.151 565.801C358.874 563.812 358.554 561.817 358.19 559.816L357.206 559.995C356.85 558.034 356.452 556.068 356.01 554.098L356.986 553.879C356.549 551.927 356.07 549.97 355.549 548.009L354.583 548.266C354.325 547.296 354.057 546.325 353.778 545.353C353.488 544.367 353.2 543.382 352.914 542.396L353.874 542.117C353.301 540.145 352.733 538.172 352.171 536.198L351.209 536.472C350.646 534.496 350.088 532.519 349.534 530.541L350.497 530.271C349.943 528.294 349.394 526.316 348.848 524.338L347.884 524.604C347.337 522.623 346.794 520.643 346.253 518.662L347.218 518.398C346.677 516.418 346.139 514.437 345.603 512.455L344.638 512.716C344.101 510.734 343.567 508.751 343.033 506.769L343.998 506.509C343.465 504.527 342.932 502.544 342.399 500.561L341.433 500.82L341.225 500.046C340.762 498.322 340.299 496.598 339.835 494.873L340.801 494.613C340.268 492.631 339.734 490.649 339.198 488.667L338.233 488.927C337.965 487.937 337.697 486.946 337.429 485.956L337.428 485.954C337.164 484.976 336.909 484 336.662 483.025L337.631 482.779C337.134 480.823 336.671 478.875 336.242 476.935L335.265 477.151C334.827 475.169 334.423 473.195 334.055 471.23L335.038 471.046C334.666 469.061 334.33 467.084 334.032 465.117L333.043 465.267C332.739 463.26 332.472 461.263 332.244 459.274L333.238 459.16C333.008 457.157 332.818 455.163 332.668 453.179L331.671 453.255C331.517 451.23 331.405 449.215 331.334 447.21L332.334 447.174C332.263 445.162 332.234 443.159 332.248 441.166L331.248 441.159C331.262 439.132 331.321 437.115 331.423 435.107L332.422 435.159C332.524 433.15 332.672 431.151 332.865 429.163L331.87 429.067C332.065 427.052 332.307 425.048 332.595 423.054L333.585 423.198C333.872 421.211 334.206 419.236 334.588 417.271L333.606 417.08C333.992 415.097 334.425 413.124 334.906 411.162L335.877 411.401C336.355 409.456 336.88 407.523 337.453 405.601L336.495 405.315C337.072 403.383 337.697 401.463 338.371 399.554L339.314 399.887C339.979 398.003 340.692 396.13 341.454 394.268L340.528 393.89C341.29 392.029 342.099 390.18 342.957 388.341L343.863 388.764C344.706 386.959 345.597 385.165 346.535 383.381L345.65 382.915C346.584 381.139 347.565 379.373 348.594 377.617L349.457 378.123C350.462 376.409 351.512 374.705 352.609 373.012L351.77 372.468C352.858 370.789 353.991 369.119 355.169 367.46L355.984 368.04C357.135 366.419 358.329 364.809 359.568 363.208L358.777 362.596C360 361.017 361.264 359.447 362.572 357.887L363.338 358.53C364.612 357.011 365.926 355.501 367.283 354L366.541 353.329C367.215 352.583 367.9 351.839 368.594 351.097L368.6 351.091C369.401 350.25 370.194 349.4 370.977 348.543L371.715 349.217C373.292 347.491 374.832 345.733 376.335 343.944L375.57 343.301C377.064 341.522 378.522 339.713 379.942 337.874L380.734 338.485C382.161 336.636 383.551 334.756 384.902 332.849L384.086 332.271C384.757 331.324 385.417 330.37 386.068 329.41C386.649 328.544 387.22 327.678 387.779 326.811L388.619 327.353C389.757 325.589 390.85 323.821 391.898 322.051L391.037 321.542C392.102 319.743 393.12 317.941 394.09 316.136L394.971 316.61C395.965 314.76 396.911 312.907 397.807 311.052L396.906 310.617C397.812 308.74 398.667 306.86 399.471 304.978L400.391 305.371C401.215 303.441 401.986 301.508 402.703 299.572L401.765 299.224C402.487 297.275 403.154 295.323 403.766 293.37L404.72 293.668C405.346 291.669 405.915 289.667 406.426 287.662L405.457 287.415C405.969 285.407 406.423 283.396 406.818 281.384L407.799 281.576C408.202 279.526 408.544 277.474 408.825 275.419L407.835 275.283C408.115 273.236 408.335 271.188 408.494 269.137L409.491 269.214C409.651 267.138 409.75 265.06 409.787 262.98L408.787 262.963C408.823 260.904 408.797 258.844 408.71 256.782L409.709 256.74C409.621 254.666 409.471 252.591 409.258 250.515L408.263 250.617C408.054 248.575 407.785 246.533 407.453 244.489L408.44 244.329C408.11 242.286 407.718 240.242 407.265 238.198L406.289 238.414C405.847 236.416 405.345 234.416 404.785 232.416L405.748 232.146C405.191 230.159 404.577 228.171 403.904 226.183L402.957 226.503C402.302 224.566 401.591 222.629 400.824 220.691L401.753 220.323C400.996 218.409 400.184 216.494 399.317 214.58L398.406 214.992C397.563 213.128 396.667 211.264 395.719 209.4L396.611 208.947C395.679 207.115 394.698 205.284 393.666 203.453L392.795 203.944C392.289 203.046 391.771 202.148 391.24 201.251C390.752 200.424 390.258 199.608 389.761 198.802L390.611 198.277C389.594 196.629 388.557 195.025 387.5 193.465L386.672 194.025C385.592 192.429 384.491 190.88 383.371 189.376L384.172 188.778C383.014 187.225 381.835 185.719 380.633 184.262L379.862 184.899C378.641 183.418 377.397 181.988 376.131 180.61L376.868 179.933C375.559 178.507 374.225 177.135 372.867 175.816L372.171 176.533C370.799 175.201 369.403 173.925 367.982 172.703L368.634 171.945C367.171 170.687 365.68 169.487 364.163 168.345L363.562 169.144C362.042 167.999 360.495 166.913 358.921 165.886L359.467 165.049C357.858 163.999 356.221 163.01 354.556 162.082L354.069 162.955C352.416 162.034 350.734 161.173 349.024 160.372L349.448 159.467C347.717 158.656 345.957 157.907 344.167 157.219L343.809 158.153C342.051 157.477 340.266 156.862 338.451 156.306L338.744 155.35C336.925 154.793 335.077 154.295 333.201 153.857L332.973 154.83C331.148 154.404 329.294 154.035 327.413 153.723L327.576 152.736C325.706 152.426 323.809 152.171 321.885 151.972L321.782 152.967C319.922 152.775 318.035 152.635 316.121 152.549L316.167 151.55C314.276 151.464 312.361 151.429 310.42 151.446L310.429 152.446C308.561 152.462 306.668 152.526 304.752 152.638L304.694 151.639C302.809 151.749 300.901 151.905 298.971 152.107L299.075 153.101C297.211 153.296 295.326 153.534 293.418 153.816L293.272 152.826C291.408 153.101 289.524 153.417 287.62 153.774L287.804 154.757C286.872 154.932 285.936 155.116 284.994 155.31C283.983 155.519 282.984 155.707 281.995 155.875L281.827 154.889C279.788 155.236 277.798 155.496 275.86 155.671L275.949 156.667C273.861 156.855 271.829 156.946 269.853 156.942L269.855 155.942C267.788 155.938 265.787 155.828 263.854 155.615L263.745 156.609C261.654 156.379 259.637 156.029 257.699 155.564L257.932 154.592C255.934 154.112 254.024 153.508 252.203 152.782L251.832 153.711C249.891 152.938 248.047 152.03 246.302 150.99L246.814 150.131C245.08 149.099 243.45 147.934 241.924 146.642L241.278 147.405C239.713 146.08 238.257 144.626 236.913 143.047L237.674 142.399C236.392 140.894 235.214 139.273 234.141 137.539L233.29 138.065C232.232 136.356 231.276 134.542 230.422 132.629L231.335 132.221C230.539 130.435 229.833 128.558 229.219 126.593L228.265 126.891C227.673 124.994 227.166 123.02 226.746 120.971L227.726 120.77C227.334 118.86 227.019 116.881 226.78 114.837L225.787 114.953C225.558 112.988 225.4 110.966 225.313 108.887L226.312 108.846C226.231 106.89 226.213 104.884 226.261 102.827L225.261 102.804C225.284 101.803 225.322 100.79 225.376 99.7663C225.419 98.7729 225.446 97.7806 225.458 96.7894L226.458 96.8011C226.481 94.7872 226.441 92.7783 226.337 90.7772L225.339 90.8288C225.236 88.8395 225.07 86.8579 224.843 84.887L225.836 84.7723C225.605 82.7735 225.311 80.7858 224.955 78.8116L223.971 78.9889C223.618 77.0307 223.204 75.086 222.728 73.1579L223.699 72.9186C223.218 70.9669 222.676 69.032 222.073 67.1167L221.119 67.417C220.522 65.5208 219.865 63.644 219.149 61.7896L220.082 61.4296C219.359 59.5561 218.577 57.7052 217.736 55.8798L216.827 56.2981C215.996 54.4944 215.108 52.7157 214.162 50.9651L215.042 50.4899C214.089 48.7247 213.078 46.9877 212.012 45.2817L211.164 45.8117C210.113 44.1291 209.006 42.4772 207.845 40.8585L208.658 40.2757C207.49 38.6473 206.268 37.0522 204.993 35.4934L204.219 36.1265C203.591 35.3582 202.949 34.5988 202.295 33.8487C201.641 33.0996 200.977 32.3622 200.302 31.6365L201.035 30.9556C199.665 29.4828 198.253 28.0579 196.801 26.6823L196.113 27.4083C194.669 26.0405 193.185 24.722 191.664 23.454L192.304 22.6858C190.761 21.3996 189.18 20.1649 187.563 18.983L186.973 19.7903C185.369 18.6179 183.73 17.498 182.058 16.4321L182.596 15.5889C180.904 14.5098 179.179 13.4854 177.424 12.517L176.941 13.3926C175.203 12.4339 173.435 11.5308 171.64 10.6845L172.066 9.77996C170.253 8.92498 168.412 8.1275 166.546 7.38891L166.178 8.31872C164.335 7.58892 162.467 6.91723 160.577 6.30511L160.885 5.35375C158.98 4.7365 157.053 4.17913 155.106 3.68298L154.859 4.65197C152.94 4.16271 151.002 3.73364 149.047 3.36614L149.232 2.38336C147.266 2.0136 145.284 1.70556 143.288 1.4605L143.166 2.45306C142.182 2.33227 141.196 2.22698 140.205 2.1372C139.236 2.04864 138.265 1.97515 137.291 1.91662L137.351 0.918451C135.39 0.80047 133.42 0.742426 131.443 0.742609L131.443 1.74261C129.498 1.74273 127.547 1.79986 125.591 1.91223L125.534 0.913874C123.573 1.02654 121.609 1.19427 119.643 1.4154L119.755 2.40911C117.821 2.6267 115.885 2.89642 113.95 3.21679L113.787 2.23022C111.85 2.5509 109.914 2.92187 107.981 3.34149L108.193 4.31872C106.29 4.73181 104.39 5.1925 102.495 5.69934L102.237 4.73327C100.34 5.24066 98.4478 5.79388 96.5634 6.39129L96.8656 7.34454C95.0072 7.93371 93.1558 8.5664 91.3136 9.24108L90.9697 8.30206C89.1243 8.9779 87.2883 9.69549 85.4637 10.4534L85.8474 11.3769C84.0446 12.1258 82.2529 12.9144 80.4744 13.7412L80.0529 12.8344C78.2692 13.6636 76.4989 14.531 74.7439 15.4351L75.2018 16.3241C73.4643 17.2192 71.7419 18.1506 70.0364 19.1169L69.5435 18.2468C67.8305 19.2174 66.1347 20.2229 64.4581 21.2619L64.9849 22.1119C63.3217 23.1426 61.6774 24.2066 60.0541 25.3024L59.4946 24.4736C57.8612 25.5762 56.2489 26.7107 54.6597 27.8759L55.251 28.6824C53.6715 29.8405 52.1149 31.0291 50.5832 32.2466L49.961 31.4639C48.4169 32.6913 46.898 33.9482 45.4062 35.2329L46.0588 35.9907C44.5735 37.2698 43.1154 38.5768 41.6864 39.9102L41.0042 39.1791C39.5608 40.526 38.1468 41.8997 36.7644 43.2989L37.4757 44.0018C36.0972 45.3969 34.7504 46.8174 33.4373 48.2618L32.6974 47.5891C31.3683 49.051 30.0734 50.5374 28.8148 52.0466L29.5828 52.6871C28.3263 54.1938 27.1063 55.7233 25.9251 57.2742L25.1295 56.6683C23.9317 58.2409 22.7731 59.8355 21.656 61.4506L22.4784 62.0195C21.3626 63.6328 20.2886 65.2664 19.2586 66.9187L18.4099 66.3897C17.3637 68.0682 16.3622 69.7663 15.4079 71.4822L16.2818 71.9683C15.3286 73.6823 14.4229 75.4141 13.5671 77.1619L12.669 76.7222C11.7991 78.4987 10.9802 80.2921 10.2144 82.1006L11.1352 82.4906C10.3716 84.2942 9.66152 86.1127 9.00742 87.9442L8.06568 87.6079C7.40099 89.4692 6.79335 91.3442 6.24521 93.2315L7.20552 93.5104C6.93351 94.447 6.67633 95.3864 6.43429 96.3286L6.43329 96.3325C6.17475 97.3223 5.9281 98.311 5.69304 99.2986L4.72021 99.0671C4.24213 101.076 3.81171 103.08 3.42669 105.08L4.40866 105.269C4.02161 107.28 3.68075 109.286 3.38375 111.288L2.39457 111.141C2.09222 113.18 1.83502 115.214 1.62057 117.244L2.61504 117.349C2.40037 119.381 2.2288 121.41 2.09786 123.435L1.09995 123.371C0.967276 125.423 0.876082 127.471 0.823835 129.516L1.82351 129.541C1.77137 131.582 1.75825 133.62 1.78164 135.654L0.781704 135.666C0.805292 137.718 0.865796 139.767 0.960637 141.813L1.95956 141.767C2.05401 143.805 2.18272 145.84 2.34314 147.873L1.34624 147.952C1.50749 149.995 1.70059 152.037 1.92295 154.075L2.91706 153.967C3.1382 155.994 3.38845 158.02 3.66529 160.044L2.67451 160.18C2.95208 162.209 3.25619 164.237 3.58427 166.263L4.5714 166.103C4.89761 168.117 5.24767 170.13 5.61906 172.142L4.63567 172.323C5.00735 174.337 5.40024 176.349 5.81179 178.36L6.79149 178.16C7.20086 180.16 7.62883 182.159 8.07292 184.159L7.09672 184.375C7.54078 186.374 8.00081 188.372 8.47432 190.37L9.44735 190.139C9.91867 192.128 10.4035 194.116 10.8993 196.104L9.92897 196.346C10.4245 198.333 10.931 200.321 11.4458 202.308L12.4139 202.057C12.9269 204.037 13.4484 206.017 13.976 207.999L13.0097 208.256C13.5368 210.236 14.0699 212.216 14.6064 214.196L15.5716 213.935C15.8394 214.923 16.1081 215.912 16.3774 216.901L214.14 714.812ZM214.14 714.812C213.127 714.816 212.118 714.814 211.111 714.805L211.102 715.805C209.08 715.788 207.069 715.746 205.068 715.679L205.101 714.68C203.094 714.613 201.097 714.521 199.112 714.405L199.053 715.403C197.033 715.285 195.023 715.142 193.025 714.973L193.109 713.977C191.111 713.809 189.124 713.615 187.149 713.397L187.039 714.391C185.026 714.169 183.025 713.921 181.037 713.647L181.173 712.657C179.188 712.384 177.215 712.086 175.255 711.763L175.092 712.75C173.094 712.42 171.109 712.065 169.138 711.685L169.327 710.703C167.36 710.323 165.406 709.918 163.467 709.488L163.25 710.464C161.274 710.025 159.311 709.561 157.364 709.071L157.608 708.101C155.665 707.613 153.737 707.099 151.824 706.559L151.553 707.522C149.605 706.973 147.673 706.398 145.757 705.797L146.056 704.843C144.144 704.244 142.248 703.619 140.368 702.969L140.041 703.915C138.131 703.254 136.237 702.568 134.359 701.856L134.714 700.921C132.84 700.211 130.983 699.475 129.144 698.714L128.761 699.639C126.895 698.867 125.046 698.069 123.216 697.247L123.625 696.335C121.797 695.513 119.987 694.666 118.195 693.795L117.758 694.694C115.944 693.812 114.148 692.904 112.372 691.971L112.836 691.086C111.062 690.154 109.306 689.197 107.57 688.216L107.078 689.087C105.323 688.095 103.588 687.079 101.874 686.038L102.392 685.183C100.679 684.143 98.9853 683.078 97.3126 681.989L96.767 682.827C95.0795 681.728 93.4128 680.605 91.7674 679.459L92.3391 678.638C90.6944 677.492 89.0712 676.322 87.4696 675.128L86.8721 675.93C85.2588 674.728 83.6674 673.502 82.0984 672.252L82.7213 671.47C81.1534 670.222 79.6079 668.95 78.0851 667.655L77.4374 668.417C75.9052 667.115 74.396 665.789 72.9101 664.441L73.582 663.7C72.0983 662.354 70.638 660.985 69.2014 659.595L68.5059 660.313C67.0609 658.914 65.6398 657.493 64.243 656.05L64.9615 655.355C63.5694 653.917 62.2015 652.457 60.8584 650.976L60.1177 651.648C58.7667 650.159 57.4405 648.648 56.1396 647.116L56.9018 646.469C55.6069 644.944 54.3372 643.399 53.093 641.834L52.3101 642.456C51.0593 640.883 49.8342 639.289 48.6351 637.675L49.4378 637.078C48.2453 635.474 47.0787 633.849 45.9384 632.205L45.1167 632.775C43.9716 631.124 42.8529 629.454 41.7609 627.766L42.6007 627.223C41.5151 625.544 40.4561 623.846 39.4241 622.13L38.5672 622.646C37.5325 620.926 36.5247 619.187 35.5444 617.431L36.4175 616.944C35.443 615.198 34.4957 613.435 33.576 611.655L32.6875 612.114C31.7667 610.332 30.8734 608.532 30.008 606.717L30.9107 606.286C30.051 604.483 29.219 602.663 28.415 600.827L27.499 601.228C26.6944 599.391 25.9178 597.537 25.1695 595.669L26.0978 595.297C25.3555 593.443 24.6412 591.575 23.9553 589.691L23.0157 590.033C22.3293 588.148 21.6712 586.249 21.0417 584.335L21.9917 584.023C21.3683 582.128 20.7732 580.218 20.2067 578.296L19.2474 578.578C18.6804 576.654 18.1419 574.716 17.6323 572.765L18.5998 572.512C18.0961 570.583 17.6207 568.642 17.1741 566.688L16.1992 566.911C15.7519 564.954 15.3333 562.985 14.9438 561.005L15.925 560.812C15.5406 558.858 15.1847 556.892 14.8574 554.915L13.8709 555.078C13.543 553.098 13.2438 551.106 12.9737 549.103L13.9648 548.969C13.6988 546.997 13.4611 545.015 13.2521 543.023L12.2575 543.127C12.0479 541.13 11.867 539.122 11.715 537.105L12.7122 537.03C12.5628 535.048 12.4415 533.056 12.3487 531.055L11.3498 531.101C11.2567 529.095 11.192 527.079 11.1561 525.055L12.1559 525.037C12.1207 523.051 12.1133 521.056 12.1341 519.054L11.1341 519.043C11.1549 517.035 11.2039 515.018 11.2814 512.994L12.2807 513.032C12.3566 511.048 12.46 509.056 12.5913 507.057L11.5934 506.992C11.725 504.988 11.8844 502.977 12.0719 500.959L13.0676 501.052C13.2513 499.075 13.4621 497.091 13.7004 495.102L12.7075 494.983C12.9461 492.99 13.212 490.991 13.5056 488.987L14.4951 489.131C14.7829 487.166 15.0975 485.195 15.4389 483.219L14.4535 483.049C14.795 481.073 15.1632 479.092 15.5585 477.106L16.5392 477.301C16.9274 475.351 17.3419 473.396 17.7828 471.437L16.8072 471.217C17.2467 469.264 17.7125 467.306 18.2047 465.345L19.1746 465.588C19.4197 464.612 19.6713 463.634 19.9296 462.655C20.1815 461.701 20.436 460.746 20.6926 459.792L19.727 459.532C20.2407 457.623 20.7632 455.714 21.2924 453.805L22.256 454.072C22.7838 452.169 23.3182 450.265 23.857 448.362L22.8947 448.089C23.4334 446.186 23.9763 444.283 24.5211 442.38L25.4825 442.655C25.919 441.131 26.3566 439.606 26.7945 438.081L27.1193 436.949L26.1581 436.673C26.704 434.771 27.2496 432.869 27.7925 430.966L28.7541 431.241C29.2973 429.336 29.838 427.431 30.3738 425.525L29.4111 425.255C29.9467 423.349 30.4773 421.443 31.0007 419.535L31.965 419.8C32.4896 417.888 33.0069 415.975 33.5146 414.06L32.548 413.803C33.0555 411.889 33.5534 409.974 34.0394 408.057L35.0087 408.303C35.4962 406.38 35.9719 404.454 36.4333 402.527L35.4607 402.294C35.9218 400.368 36.3685 398.44 36.7984 396.51L37.7745 396.727C38.2064 394.788 38.6215 392.847 39.0175 390.904L38.0377 390.704C38.433 388.764 38.8091 386.821 39.1638 384.876L40.1476 385.055C40.504 383.1 40.8389 381.142 41.1498 379.18L40.1621 379.024C40.472 377.069 40.7579 375.111 41.0175 373.149L42.0088 373.281C42.2696 371.31 42.504 369.336 42.7096 367.358L41.7149 367.254C41.9193 365.287 42.0951 363.316 42.2398 361.342L43.2371 361.415C43.3823 359.433 43.4965 357.446 43.5771 355.456L42.5779 355.415C42.6579 353.441 42.7047 351.463 42.7161 349.48L43.716 349.486C43.7274 347.5 43.7034 345.51 43.6416 343.515L42.6421 343.546C42.5811 341.574 42.483 339.598 42.3456 337.617L43.3432 337.548C43.2058 335.568 43.0294 333.584 42.8117 331.594L41.8177 331.703C41.6036 329.747 41.3494 327.786 41.0529 325.82L42.0418 325.671C41.8934 324.687 41.7345 323.702 41.5648 322.715C41.3942 321.721 41.221 320.728 41.0452 319.735L40.0605 319.91C39.7096 317.928 39.3484 315.947 38.9776 313.968L39.9604 313.784C39.5891 311.802 39.2082 309.822 38.8181 307.843L37.837 308.036C37.4477 306.062 37.0493 304.088 36.6425 302.116L37.6218 301.914C37.2146 299.94 36.7988 297.967 36.3752 295.995L35.3975 296.205C34.9746 294.238 34.5438 292.271 34.1058 290.305L35.0818 290.088C34.6434 288.121 34.1976 286.155 33.7452 284.19L32.7707 284.415C32.3189 282.453 31.8604 280.493 31.3958 278.533L32.3688 278.303C31.9039 276.342 31.4328 274.382 30.9562 272.424L29.9846 272.661C29.5085 270.705 29.0269 268.75 28.5404 266.796L29.5108 266.554C29.0239 264.599 28.5321 262.645 28.036 260.692L27.0668 260.939C26.571 258.987 26.0709 257.037 25.567 255.088L26.5352 254.837C26.0309 252.887 25.5229 250.937 25.0117 248.989L24.0445 249.243C23.5335 247.295 23.0194 245.349 22.5026 243.403L23.469 243.146C22.9519 241.199 22.4321 239.253 21.9104 237.308L20.9445 237.567C20.4228 235.623 19.899 233.678 19.3737 231.735L20.3391 231.474C19.8135 229.53 19.2864 227.586 18.7585 225.643L17.7935 225.906C17.2654 223.962 16.7364 222.02 16.2071 220.078L17.1719 219.815L16.3775 216.902L214.14 714.812Z"
        stroke={theme.nombre === "light" ? colors.lilaush : colors.amarillo}
        stroke-width="2"
        stroke-dasharray="6 6"
      />
      <g clipPath="url(#clip0_6_8997)">
        <path
          d="M346.422 543.06C334.675 540.336 322.998 537.288 311.259 534.502C310.311 534.365 309.419 533.965 308.686 533.348C307.953 532.73 307.407 531.92 307.111 531.009C304.91 525.28 302.531 519.619 299.975 514.024C299.507 513.181 299.287 512.221 299.343 511.258C299.399 510.295 299.727 509.368 300.289 508.584C305.827 499.589 311.216 490.507 316.639 481.434C320.622 474.762 320.133 470.649 314.77 465.243C305.908 456.354 297.035 447.475 288.149 438.609C282.726 433.203 278.638 432.723 271.974 436.696C262.9 442.102 253.799 447.473 244.812 453.027C242.75 454.302 241.187 454.249 239.065 453.28C233.588 450.774 228.008 448.459 222.392 446.294C221.522 446.037 220.74 445.542 220.137 444.864C219.534 444.187 219.132 443.354 218.977 442.46C216.086 430.392 213.082 418.34 210.068 406.298C208.26 399.05 204.872 396.378 197.518 396.36C184.853 396.36 172.186 396.36 159.516 396.36C152.319 396.36 148.826 399.085 147.088 406.028C144.083 418.07 141.07 430.112 138.188 442.189C138.049 443.137 137.649 444.027 137.031 444.76C136.414 445.493 135.605 446.039 134.694 446.337C128.546 448.759 122.467 451.341 116.458 454.083C115.618 454.557 114.661 454.78 113.698 454.728C112.736 454.675 111.808 454.348 111.025 453.786C101.628 448.014 92.1342 442.39 82.6667 436.74C75.8368 432.671 71.8713 433.16 66.2292 438.793C57.4953 447.525 48.7847 456.237 40.0974 464.929C34.4378 470.597 33.9836 474.762 38.0798 481.687C43.9752 491.555 49.8534 501.44 55.8274 511.256C56.3109 511.949 56.5908 512.764 56.6355 513.608C56.6803 514.452 56.4882 515.292 56.0807 516.032C53.9147 520.905 51.8623 525.83 50.0544 530.878C49.2334 533.148 47.9495 534.048 45.6874 534.589C33.722 537.427 21.8002 540.44 9.87841 543.435C2.83015 545.182 0.087292 548.675 0.0698242 555.731C0.0698242 568.539 0.0698242 581.323 0.0698242 594.085C0.0698242 601.202 2.82991 604.651 9.85197 606.407C21.896 609.411 33.94 612.432 46.0103 615.296C46.9584 615.458 47.8425 615.882 48.5631 616.519C49.2836 617.156 49.8119 617.982 50.0889 618.903C52.3947 624.841 54.8664 630.736 57.4953 636.534C57.9017 637.272 58.0915 638.109 58.042 638.95C57.9925 639.79 57.7061 640.6 57.2159 641.285C51.8359 650.105 46.5111 658.959 41.2416 667.849C37.5996 673.962 38.1675 678.407 43.2332 683.498C52.1767 692.475 61.1375 701.429 70.1159 710.36C75.3563 715.547 79.6711 716.045 86.0643 712.237C94.7371 707.068 103.436 701.924 112.021 696.597C114.065 695.331 115.637 695.409 117.733 696.361C123.323 698.894 128.991 701.287 134.721 703.487C135.633 703.78 136.444 704.324 137.061 705.056C137.679 705.788 138.079 706.678 138.214 707.626C140.992 719.372 144.049 731.047 146.765 742.801C147.962 747.945 150.468 751.683 155.542 753.464H201.579C206.653 751.674 209.168 747.945 210.356 742.801C213.081 731.056 216.138 719.38 218.924 707.644C219.059 706.693 219.458 705.8 220.076 705.065C220.693 704.33 221.505 703.783 222.418 703.487C228.462 701.129 234.436 698.579 240.331 695.881C241.118 695.441 242.014 695.236 242.913 695.29C243.812 695.344 244.678 695.656 245.406 696.187C254.201 701.601 263.083 706.875 271.957 712.167C278.49 716.071 282.839 715.564 288.184 710.237C297.075 701.394 305.949 692.522 314.805 683.62C320.089 678.311 320.613 674.119 316.805 667.718C311.399 658.645 306.01 649.563 300.482 640.56C299.951 639.829 299.639 638.962 299.582 638.061C299.525 637.16 299.725 636.261 300.159 635.469C302.639 629.985 304.98 624.431 307.146 618.798C307.44 617.885 307.984 617.073 308.718 616.456C309.452 615.838 310.345 615.439 311.294 615.305C323.033 612.519 334.701 609.463 346.457 606.738C351.601 605.551 355.331 603.027 357.112 597.953V551.924C355.304 546.771 351.566 544.265 346.422 543.06ZM178.425 648.078C138.136 647.974 105.226 614.956 105.34 574.724C105.453 534.493 138.459 501.528 178.705 501.633C218.951 501.737 251.904 534.764 251.79 574.987C251.677 615.209 218.636 648.183 178.425 648.078Z"
          fill={theme.nombre === "light" ? colors.lilaush : colors.verdeush}
        />
      </g>
      <path
        opacity="0.3"
        d="M445.017 750.713H401.587L424.642 831.138L445.017 750.713Z"
        fill={theme.nombre === "light" ? colors.amarillo : colors.amarillo}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M419.109 811.836L424.642 831.138L429.532 811.836H419.109Z"
        fill={theme.nombre === "light" ? colors.textonegro : colors.fondoblanco}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M435.366 127.69C435.366 115.549 425.524 105.707 413.383 105.707C401.242 105.707 391.4 115.549 391.4 127.69V158.787H435.366V127.69Z"
        fill={theme.nombre === "light" ? colors.textonegro : colors.fondoblanco}
      />
      <rect
        x="391.4"
        y="158.787"
        width="43.9655"
        height="5.36165"
        fill={theme.nombre === "light" ? colors.textonegro : colors.fondoblanco}
      />
      <rect
        x="391.4"
        y="164.149"
        width="43.9655"
        height="5.36165"
        fill={theme.nombre === "light" ? colors.textonegro : colors.fondoblanco}
        fillOpacity="0.3"
      />
      <path
        d="M238.496 257.885C255.166 257.885 269.788 254.239 282.364 246.947C295.232 239.363 305.175 228.279 312.194 213.695H382.822C373.756 241.697 358.109 264.302 335.883 281.512C313.949 298.429 288.067 308.493 258.236 311.701V329.64C274.321 329.64 287.774 333.723 298.595 341.891C309.708 350.058 315.265 361.871 315.265 377.33C315.265 393.081 309.562 405.186 298.156 413.645C287.043 422.104 273.298 426.333 256.92 426.333H194.628V390.456H246.831C253.85 390.456 259.114 389.435 262.623 387.393C266.425 385.352 268.326 381.706 268.326 376.455C268.326 371.205 266.425 367.559 262.623 365.517C259.114 363.767 253.85 362.892 246.831 362.892H219.633V311.701C193.604 308.784 170.208 300.471 149.444 286.762C128.972 272.761 112.887 254.531 101.189 232.071C89.4907 209.611 83.6416 184.526 83.6416 156.816C83.6416 126.772 90.368 99.9373 103.821 76.3108C117.566 52.3926 136.137 33.8705 159.533 20.7447C183.222 7.32717 209.689 0.618408 238.935 0.618408C273.152 0.618408 303.128 9.36897 328.864 26.8701C354.6 44.3712 372.586 68.5811 382.822 99.4998H312.194C305.175 84.9155 295.232 73.9773 282.364 66.6852C269.788 59.393 255.166 55.747 238.496 55.747C220.656 55.747 204.717 59.9764 190.68 68.4353C176.934 76.6025 166.114 88.2699 158.217 103.438C150.614 118.605 146.812 136.398 146.812 156.816C146.812 176.942 150.614 194.735 158.217 210.194C166.114 225.362 176.934 237.175 190.68 245.634C204.717 253.801 220.656 257.885 238.496 257.885Z"
        fill={theme.nombre === "light" ? colors.rojoush : colors.rosaush}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M435.366 127.69C435.366 115.549 425.524 105.707 413.383 105.707C401.242 105.707 391.4 115.549 391.4 127.69V312.935C391.4 325.52 381.198 335.722 368.613 335.722H365.932C330.547 335.722 301.861 364.408 301.861 399.793C301.861 410.898 292.859 419.9 281.755 419.9H165.139C125.163 419.9 92.7563 452.306 92.7563 492.282V523.379C92.7563 563.355 125.163 595.762 165.139 595.762H248.705C250.692 589.168 251.77 582.194 251.79 574.987C251.813 566.895 250.497 559.095 248.054 551.796H165.139C149.445 551.796 136.722 539.074 136.722 523.379V492.282C136.722 476.588 149.445 463.865 165.139 463.865H281.755C317.14 463.865 345.826 435.179 345.826 399.793C345.826 388.689 354.828 379.687 365.932 379.687H368.613C405.48 379.687 435.366 349.801 435.366 312.935V127.69ZM357.067 551.796C357.082 551.838 357.097 551.881 357.112 551.924V595.762H373.171C388.865 595.762 401.587 608.484 401.587 624.178V744.816C401.587 756.956 411.429 766.798 423.57 766.798C435.711 766.798 445.553 756.956 445.553 744.816V624.178C445.553 584.203 413.146 551.796 373.171 551.796H357.067Z"
        fill={theme.nombre === "light" ? colors.amarillo : colors.amarillo}
      />
      <path
        d="M331.35 463.368C374.773 452.298 401.833 425.032 412.913 381.296C423.898 425.066 451.029 452.162 494.344 463.374C450.985 474.497 423.973 501.636 412.899 545.362C401.821 501.691 374.846 474.428 331.35 463.368Z"
        fill={theme.nombre === "light" ? colors.rosaush : colors.fondoblanco}
      />
      <path
        d="M269.155 777.007C292.58 771.074 307.178 756.461 313.156 733.02C319.082 756.479 333.718 771.001 357.086 777.01C333.695 782.971 319.123 797.516 313.148 820.951C307.172 797.545 292.62 782.934 269.155 777.007Z"
        fill={theme.nombre === "light" ? colors.rosaush : colors.fondoblanco}
      />
      <defs>
        <clipPath id="clip0_6_8997">
          <rect
            width="357.086"
            height="357.086"
            fill="white"
            transform="translate(0 396.308)"
          />
        </clipPath>
      </defs>
    </SVG>
  );
}

const SVG = styled.svg`
  display: none;

  & path,
  & rect {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    display: block;
    width: 494.344px;
    height: 830.52px;
  }
`;

export default IlustracionNeeds;
