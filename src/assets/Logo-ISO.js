import React from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../components/base/breakpoints";

function LogoISO() {
  const theme = useTheme();

  return (
    <SVG
      version="1.1"
      viewBox="0 0 2048 692"
      width="1280"
      height="1280"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(1662,71)"
        d="m0 0h57v36h18v-18h39v-18h21v17l15 1v-15l1-3h20v20l-20 1-1 36h-36v18h36v-17l1-1h20v20l-20 1-1 15h18l1 1v58l-1 1h-35l-1-1v-18l-20 1v-39h-37v-19h-18v-20h-21v20h-18v16h18v21h-18v18h18v-17l1-1h20v18h16v-18h20l1 36h19l1 1v18h36l1 1-1 19h39v37h37v20h-18v19h18v-18l1-1h74v-35l1-1h20v91h-21v-34h-18v36h-16v19h37v15l-1 5h19v20l-1 1h-19l-1-1v-20h-34v18l18 1v18h18l1 1v19h-37v39l-20 1-1 15h19v20l-1 1h-36v18h18l1 1-1 17h17l-1-2 1-18h20v-52l1-1h19l1 1v15h18v75l-20 1-1-1v-15h-18v17l-1 1h-17v20h-39v-20h-37v20h-57v-20l36-1 1-15h-37v-20l1-1h18l-1-2v-16l1-2h-19v-37h-18v20l-1 1h-20v36h-18v16h18v20l-1 1h-17v20h-57v-20h-18l-1-36-18-1v21h-18v34h-41v-38l1-1h38v-16h18v-18h-18v-20l2-1h15l1-18h-39v-20h-15l-1-1v-20h18v-16h-20v21h-57v-62h39v-16h-19v-20l19-1-1-17-20-1v18l-3 1-15-1v21h-55v16h39v20l-41 1v-19h-19v-19l1-1 17-1v-17l-36-1v-20h18v-55h-18v-20h18v-19h-18v-36h39v18h18v-18h39v36h36l1 1v19l-1 1h-18v16h19v20h-37v19h55v-55h20l1 3-1 15h37v-39h-16v21h-20l-1-1v-19l1-1h18v-18h-18l-1-1v-20h-20v-36h20l1 5v15h20v35h73v-16h-18v-18h-11l-7-1v18l-1 1h-20v-21h-18v-18h-18l-1-1v-19l1-1h20v19h16v-18l1-1h17v-15l1-1h18v-20h-16v-21h16l-1-15-15-1zm114 20v16h16v-16zm-37 19v17l1 1h36v-18zm55 57v36h16v-36zm-151 18v18h16v-18zm76 39v36h36v-36zm-265 20v16h16v-15l-1-1zm301 16v21h21v20h-39v-20h-18l-1 15-20 1v-16h-18v20h-39v16h57v21h-57v18h-20v-36h-17v35l-18 1v18l4 1h14v17l1 1h36l1-18h17l1-18 20-1v19h77v19l-20 1v39l-20-1v-37l-1-1h-18v18h-18v19l20 1v19h-41v-18h-18v18h-16v37h16l1-20 56-1v21h18l1-5v-14l19 1 1 38h-18v37h16l1-18h19v-39h39v-76h-20v-41h20v21h18l1-2v-17l5 1h14l1 18h18v18h19v21h38l1-2v-17h20v-18h-20l-1 5v13h-20v-20h20l1-2v-15l15-2v-36h-36v16l20 1v19h-75v-20h16v-57h-18v20h-37v-20h16v-37zm-282 2-1 1v73h36v-19h-18v-20h37v-16h-37v-18zm-1 94v18l4 1h30l2-1v-18zm96 18v19h16v-18l-2-1zm94 3v16h18v-16zm-76 18v16h18l1-15-1-1zm55 0v18h21v-17l-1-1zm-36 18-1 6v12l1 1h15v-19zm-57 18-1 1v20h19v-20zm286 0-1 1v18h18v-18zm-1 39v55h55v-54l-1-1zm-152 18-1 1-1 40-17 1-1 11 1 5h36v-57zm19 58v36h17l-1-36zm151 0v20h-18v16h37v-36zm-168 38-1 1v18h16v-18zm206 0-1 1v18h18v-18zm-170 1v18h16v-18z"
        fill={theme.texto}
      />
      <path
        transform="translate(110,45)"
        d="m0 0h469l15 1 16 4 10 5 10 8 8 10 7 14 3 17v483l-3 17-8 16-11 12-8 6-8 4-14 4-6 1h-488l-17-4-14-7-9-8-7-10-6-12-4-17v-488l4-17 8-14 9-10 8-6 11-5 13-3zm1 4-14 1-16 5-11 7-9 9-8 15-3 9-1 7v410h595v-408l-3-15-4-10-9-12-11-9-11-5-11-3zm72 500-9 2-6 4-4 5-3 8v17l4 10 6 5 4 2h16l8-4 3-4 1-9h-10l-5 8-2 1h-7l-4-4-2-5v-17l4-8 3-2h7l3 3 2 5 7 1 4-1-1-7-2-4-6-4zm31 1-1 1v50l9 1 26-1v-8h-24l1-13 21-1v-8l-21-1v-11h21l2-3v-5l-1-1zm45 0v51l10 1 1-1v-21l14 1 4 20 5 1h6l-1-10-3-12-3-3-2-1 5-3 4-7-1-7-4-6-4-2-13-1zm47 0v8l5 1h10v42l10 1 1-44 6 1 9-1v-7l-5-1zm49 0v51l10 1 1-1v-51zm23 0v51l3 1h7l1-1v-21h20l1-8-1-1h-20v-13h22v-8zm42 0v51l10 1v-52zm23 0v51l4 1h30l1-1v-8h-25v-14h23v-8l-22-1-1-11h23l1-1v-8zm46 0-1 1v50h28l8-5 5-6 2-6 1-11-2-9-5-8-7-4-12-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(93,8)"
        d="m0 0h1922l11 2 6 4 6 7 2 5 1 8 2 215 3 358v56l-4 10-9 8-6 2-671 1h-1266l-16-4-13-5-12-7-11-9-9-9-9-13-6-13-5-15-1-5v-516l3-12 6-15 4-8 9-12 12-12 15-10 15-6 14-4zm1263 4-1 1v667h671l9-4 5-6 2-4v-116l-3-361-1-102-1-60-4-8-9-6-3-1zm-735 1 3 2 17 8 13 10 9 9 7 10 8 16 4 13 2 12v504l-3 16-4 12-8 16-8 10-7 8-15 11-15 7-5 2 3 1h729v-163h-587v-4h587v-500zm-525 17-12 2-17 7-11 8-11 11-8 13-4 10-3 14-1 14v471l1 16 4 17 7 14 8 11 8 8 14 9 15 6 6 1h508l12-3 16-8 13-10 7-8 9-15 4-13 2-14v-495l-2-12-5-13-7-11-9-10-10-8-16-8-9-3-9-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(346,79)"
        d="m0 0 3 3 10 17 12 20 28 48 15 26 10 16 16 28 9 15 14 24 9 15v2l-21-1h-47l-26 3-35 7-29 6-17 2h-19l6-11 12-21 5-3 28-4 34-8 28-4 11-1h10l-7-14-8-13-28-48-12-20-8-14-3-3-13 22-7 12-11 19-16 27-20 34-12 21-10 17-19 32-1 2 4 1 25 1 34-2 22-3 41-9 23-4 22-2h40l23 2 16 3 3 3 14 24 6 11-27-5-12-2-27-2h-34l-25 2-36 7-33 7-25 3h-54l-24-3-29-6-1-2 17-29 10-17 14-24 10-17 11-19 12-20 14-24 10-17 11-19 9-15 14-24 16-27 8-14z"
        fill={theme.texto}
      />
      <path
        transform="translate(93,8)"
        d="m0 0h1922l11 2 6 4 6 7 2 5 1 8 2 215 2 234v79l-1 79-1 23h-1l-4-475-1-102-1-60-4-8-8-5-3-1h-665l-1 666-4 1v-163h-587v-4h587v-500l-731 1-1-2 6-1-2-1-530-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1434,486)"
        d="m0 0h131l1 1v133l-1 1h-132v-134zm20 21v94h90l1-1v-93z"
        fill={theme.texto}
      />
      <path
        transform="translate(1433,71)"
        d="m0 0h133v134h-133zm21 20v94h91v-94z"
        fill={theme.texto}
      />
      <path
        transform="translate(1852,71)"
        d="m0 0h132v134h-133v-133zm20 20v94h91v-94z"
        fill={theme.texto}
      />
      <path
        transform="translate(110,45)"
        d="m0 0h469l15 1 16 4 10 5 10 8 8 10 7 14 3 17v483h-1l-2-75h-1l-1-408-3-15-4-10-9-12-10-8-11-5-11-3-484-1-14 1-16 5-11 7-8 8-8 15-3 9-2-3-2 3 1-7 4-10 7-11 8-8 9-6 13-5 9-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(2044,562)"
        d="m0 0h1l1 45v56l-4 10-9 8-6 2-671 1h-1266l-6-1v-1h1245l-491-1v-1l517-1h671l9-4 4-5 3-6 1-23z"
        fill={theme.texto}
      />
      <path
        transform="translate(1484,109)"
        d="m0 0h22l23 1v56l-1 1h-56v-57z"
        fill={theme.texto}
      />
      <path
        transform="translate(1903,109)"
        d="m0 0h21l23 1v56l-1 1h-55l-1-1v-56z"
        fill={theme.texto}
      />
      <path
        transform="translate(1472,525)"
        d="m0 0h57v57h-57z"
        fill={theme.texto}
      />
      <path
        transform="translate(1720,317)"
        d="m0 0h74v19h37v20h-37v-18h-36v18h-39v-38z"
        fill={theme.texto}
      />
      <path
        transform="translate(764,513)"
        d="m0 0h582l6 1-1 3h-587z"
        fill={theme.texto}
      />
      <path
        transform="translate(588,46)"
        d="m0 0 11 1 13 4 8 4 10 8 8 10 7 14 3 17v483h-1l-2-75h-1l-1-408-3-15-4-10-9-12-10-8-11-5-11-3-213-1 1-2 194-1 15 1z"
        fill={theme.texto}
      />
      <path
        transform="translate(2036,25)"
        d="m0 0 4 1 1 8 2 215 2 234v79l-1 79-1 23h-1l-4-475-1-102z"
        fill={theme.texto}
      />
      <path
        transform="translate(1964,221)"
        d="m0 0h19l1 1v20l-18 1v17h-19v21h-18v18h-20l-1-1v-14l1-5 17-1 1-38h36v-18z"
        fill={theme.texto}
      />
      <path
        transform="translate(1642,566)"
        d="m0 0h1v21h-18v34h-41v-38l1-1h38v-15z"
        fill={theme.texto}
      />
      <path
        transform="translate(1850,221)"
        d="m0 0h19l1 1v18h39l-1 20h-18v25h-20v-43h-21v-20z"
        fill={theme.texto}
      />
      <path
        transform="translate(771,43)"
        d="m0 0h14l14 43 3-7 10-29 3-7h12v55h-7l-1-1-1-42-15 42-1 1h-6l-4-8-12-35-1-1v43l-1 1h-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(1353,12)"
        d="m0 0h1v668h-3v-164l1-2h-6v-1l5-1 1-498z"
        fill={theme.texto}
      />
      <path
        transform="translate(140,419)"
        d="m0 0h12l1 1 1 40 2 4 3 1h11l4-4 1-2 1-40h12v41l-4 8-9 6-3 1h-16l-8-4-6-7-2-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(197,419)"
        d="m0 0h13l4 10 10 30 2-4 12-36h12l-2 9-8 21-7 19-3 6h-13l-11-29-9-24z"
        fill={theme.texto}
      />
      <path
        transform="translate(1605,107)"
        d="m0 0h38v41h-20v-20h-18l-1-1v-15z"
        fill={theme.texto}
      />
      <path
        transform="translate(48,99)"
        d="m0 0h2l-1 413h595v2h-597z"
        fill={theme.texto}
      />
      <path
        transform="translate(260,419)"
        d="m0 0h27l7 3 5 6 1 5-2 7-5 5h-2v2l4 2 3 10 2 10v5h-8l-4-20-2-3-3-1-15-1v25h-8zm8 6v17h18l4-3 1-7-3-5-6-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(859,233)"
        d="m0 0h12l8 3 5 5 5 9 1 6v10l-2 9-6 9-8 5-4 1h-12l-7-3-6-5-4-8-1-5v-15l4-11 4-5 7-4zm1 6-6 4-4 5-2 9v10l3 10 7 6h13l6-4 3-6 1-4v-17l-3-7-6-5-2-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(982,142)"
        d="m0 0h10l6 5 4-2 5-3h10l6 4 3 5v30h-8l-1-29-3-3h-8l-4 3-1 3-1 26h-7l-1-28-3-4h-9l-4 5-1 27h-8v-38h8l1 3z"
        fill={theme.texto}
      />
      <path
        transform="translate(787,125)"
        d="m0 0 11 1 6 4 4 6v4h-8l-3-5-4-2h-9l-5 3-1 1v8l11 4 13 4 5 4 2 5v8l-3 6-6 5-3 1h-19l-6-3-4-5-1-9h8l3 8 3 2h14l5-5v-7l-4-3-18-5-6-4-4-6v-7l4-7 6-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(804,233)"
        d="m0 0h13l8 3 4 6 1 5-8 1-5-7-2-1h-9l-6 2-1 9 6 4 15 4 6 3 4 5 1 8-3 7-7 6-5 2h-14l-7-3-5-5-1-9h8l2 6 4 3 9 1 7-3 2-3v-7l-5-3-21-7-5-6v-10l3-5 5-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(1074,59)"
        d="m0 0h10l5 2 1 4 7-5 3-1h9l6 3 3 7v29h-6l-1-1-1-27-4-4h-8l-3 3-1 2-1 26-1 1h-6l-1-1-1-28-3-3h-8l-4 4-1 2-1 26h-7v-38h7l2 2z"
        fill={theme.texto}
      />
      <path
        transform="translate(980,60)"
        d="m0 0h12l6 3v-3h7v43l-4 6-4 3-3 1h-13l-6-3-3-5v-5h7l3 5 2 1h8l4-4 2-9-10 4-10-1-6-5-3-9v-7l3-9 5-5zm3 6-5 5-1 3v10l3 5 3 2h8l6-5 1-5v-7l-3-6-4-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(1100,235)"
        d="m0 0h9l6 3 4 5 3 9v20l-3 8-6 7-4 2h-10l-6-4-4-6-2-9v-15l2-9 5-8zm1 7-4 5-2 6v19l3 7 5 4 5-1 4-4 2-11v-12l-2-9-4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(1205,235)"
        d="m0 0h9l6 3 5 7 2 6v21l-4 10-7 6-2 1h-10l-6-4-3-4-3-12v-13l3-12 3-5zm1 7-4 5-2 7v17l3 8 5 4 6-1 3-4 2-9v-15l-2-8-4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(1058,235)"
        d="m0 0h9l7 4 4 7 2 9v13l-2 9-4 6-5 5-3 1h-9l-6-4-4-6-2-7v-19l3-10 5-6zm1 7-5 6-1 3v23l4 7 4 2 5-1 4-4 1-4v-25l-3-5-2-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(1279,236)"
        d="m0 0h30v6l-7 1h-17l1 14 7-3 9 1 6 4 3 5 1 10-3 9-8 6-3 1h-11l-7-4-4-7 1-3h6l5 6 6 1 6-3 2-3v-11l-4-4h-8l-6 6h-6v-22z"
        fill={theme.texto}
      />
      <path
        transform="translate(87,419)"
        d="m0 0h45v9l-16 1-1 45-4-2-7-7-1-2v-35h-16z"
        fill={theme.texto}
      />
      <path
        transform="translate(598,419)"
        d="m0 0h7l1 5v50l-1 1h-5l-3-4-5 4h-13l-6-5-4-8v-14l6-10 5-3h12l5 3zm-13 21-5 3-3 6v12l4 7 3 2h7l6-5 1-3v-14l-3-5-5-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(2042,296)"
        d="m0 0h1l2 187v79l-1 79-1 23h-1l-1-114v-171z"
        fill={theme.texto}
      />
      <path
        transform="translate(311,419)"
        d="m0 0h8v20l6-4h13l5 5 2 4v30h-8l-1-28-1-4-7-1-5 2-3 4-1 27h-7l-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1584,525)"
        d="m0 0h20l1 1v18l-1 22h-20z"
        fill={theme.texto}
      />
      <path
        transform="translate(49,91)"
        d="m0 0h1v8h-2v386l-1 29h-1v-419h2z"
        fill={theme.texto}
      />
      <path
        transform="translate(1584,71)"
        d="m0 0h41v20h-41z"
        fill={theme.texto}
      />
      <path
        transform="translate(1162,235)"
        d="m0 0h10l7 3 4 5 1 3v9l-7 11-13 13-2 1 22 2v6h-33v-7l9-10 7-6 8-11v-8l-3-3h-8l-3 1-2 6-3 1-4-1v-6l4-6z"
        fill={theme.texto}
      />
      <path
        transform="translate(1140,59)"
        d="m0 0h11l7 3 5 10v8h-28l1 7 6 5h7l4-2 2-5h7l1 2-3 6-5 4-7 2-10-1-6-4-4-6-1-5v-8l3-9 7-6zm2 6-6 5-1 4h20l-2-6-3-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(1027,59)"
        d="m0 0h11l7 3 4 7 1 11h-28l2 8 5 4h7l4-1 2-5 1-1h5l1 5-4 5-5 3-10 1-9-3-5-6-2-6v-9l3-9 7-6zm2 6-5 4-1 5h18l-1-6-3-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(1737,450)"
        d="m0 0h39v20h-39z"
        fill={theme.texto}
      />
      <path
        transform="translate(939,59)"
        d="m0 0h10l7 3 3 6v29l-1 1h-5l-2-3-6 4-8 1-6-3-4-5v-9l6-7 5-2 13-1-2-6-1-1h-8l-3 3-1 2h-7l1-6 5-5zm6 20-9 3-2 3 1 6 3 3h7l6-6v-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(492,435)"
        d="m0 0h15l5 3 3 7v29h-6l-1-4-7 5h-12l-6-5-1-2v-9l5-6 5-2 6-1h9l-2-8-8-1-4 1-1 4h-7l1-6 4-4zm11 20-9 1-4 4v6l4 4h6l6-5 1-9z"
        fill={theme.texto}
      />
      <path
        transform="translate(936,142)"
        d="m0 0h11l6 4 4 5 1 4v8l-6 1h-21l1 7 4 4 7 1 5-3 2-4h7l1 2-3 6-5 4-4 1h-11l-6-3-4-5-2-6v-12l3-7 5-5zm1 6-5 4-1 6h19l-1-6-4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(850,59)"
        d="m0 0h11l7 3 2 3 1 5-1 28h-6l-2-3-5 4-8 1-7-3-4-7 1-8 4-5 6-3 14-1-3-7h-8l-5 5h-6l1-7 5-4zm5 20-7 3-2 2v6l4 4h6l4-2 3-6v-6l-2-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(365,435)"
        d="m0 0h14l5 3 4 6 1 4v8h-27l2 9 5 4 8-1 4-6h7l-1 6-4 5-4 2h-14l-6-4-4-7-1-4v-10l4-10 5-4zm5 5-5 3-3 5v3h20l-1-6-4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(540,435)"
        d="m0 0h12l6 5 2 5v29l-5 1-3-1v-26l-2-5-2-1h-8l-4 1-1 3-1 28-3 1-5-1v-38h7l1 3z"
        fill={theme.texto}
      />
      <path
        transform="translate(786,609)"
        d="m0 0h20l8 3 6 9 1 5v10l-3 9-5 5-5 2-21 1-1-1zm6 5v33l1 1h8l9-3 4-6 1-10-2-8-5-6-2-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(870,142)"
        d="m0 0h11l6 3 3 3 1 4-1 1h-7l-5-5-8 1-2 4 1 3 16 4 5 4 1 2v8l-5 6-6 2h-11l-7-3-3-4-1-5h9l2 5h11l2-2v-5l-7-3-11-3-4-5v-7l5-6z"
        fill={theme.texto}
      />
      <path
        transform="translate(1067,610)"
        d="m0 0h11l6 4 3 6-1 5-5 6 5 6 1 5-4 8-5 3h-12l-6-5-2-5 1-7 4-4-4-8v-6l4-6zm3 4-5 5 1 5 4 4 7-1 3-4-1-5-3-4zm0 19-5 4-1 4 3 6 4 2 5-1 4-6-2-7-3-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(500,558)"
        d="m0 0h7l7 2 5 6 2 7-1 10-4 7-5 3h-12v-34z"
        fill={theme.texto}
      />
      <path
        transform="translate(815,143)"
        d="m0 0h9l5 12 6 16 5-11 7-17h8l-3 9-14 32-4 10-1 1h-7l3-9 1-6-8-20z"
        fill={theme.texto}
      />
      <path
        transform="translate(899,59)"
        d="m0 0h8l5 2 4 5 1 4v27l-1 1h-7l-1-28-3-4h-8l-5 5-1 26-1 1h-6l-1-38h8v3z"
        fill={theme.texto}
      />
      <path
        transform="translate(1108,554)"
        d="m0 0 5 1v2l5-3h9l4 3 5-2 1-1h10l5 3 1 2v26h-6l-1-24-1-3h-6l-4 4-1 6-1 17h-5l-1-1-1-23-3-3-5 1-3 3-1 2-1 21h-5l-1-1v-29z"
        fill={theme.texto}
      />
      <path
        transform="translate(840,554)"
        d="m0 0 3 1 5 15 1 5 2-4 5-16 5-1 1 4-6 18-4 9h-5l-3-4-4-15v-3h-2l-2 9-5 12-1 1h-5l-4-9-6-19v-2h6l7 21 7-21z"
        fill={theme.texto}
      />
      <path
        transform="translate(419,435)"
        d="m0 0h7l1 4 5-4h13l6 5 1 2v32h-6l-1-27-4-5-5-1-7 3-1 2-1 28h-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(809,554)"
        d="m0 0 4 1-3 9-7 20-1 1h-5l-3-5-5-16-2 3-5 16-1 2h-6l-4-9-6-18v-3h6l3 9 3 10 1 1 7-20h8l4 12 2 9 3-7 4-13z"
        fill={theme.texto}
      />
      <path
        transform="translate(867,554)"
        d="m0 0 4 1 6 20 4-10 3-10h9l5 19v2h2l3-13 3-8h6l-1 5-7 20-3 5h-5l-3-7-4-13v-3h-2l-2 10-4 12-1 1h-6l-4-10-6-20z"
        fill={theme.texto}
      />
      <path
        transform="translate(1189,59)"
        d="m0 0h8l5 2 4 5v32h-6l-1-1-1-27-3-4h-8l-5 5-1 26-1 1h-6v-38h7l2 2z"
        fill={theme.texto}
      />
      <path
        transform="translate(959,236)"
        d="m0 0h36l-1 9-13 31-5 12-3 1-6-1 2-6 12-28 5-12-4 1h-22l-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1104,610)"
        d="m0 0h9l6 4 2 3v3l-5 1-3-3-2-3h-6l-3 3-2 9 3-2h10l5 4 3 8-1 7-4 6-5 3h-9l-5-3-3-4-1-3v-20l4-8 5-4zm1 20-5 5v8l3 5 1 1h6l3-3 1-9-2-5-3-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(868,610)"
        d="m0 0h9l5 3 4 6 1 3v18l-3 8-5 4-2 1h-11l-6-5-1-5 1-1h5l4 5 5 1 4-3 2-11-6 3-8-1-5-4-2-6 1-9 5-6zm2 4-4 5v8l4 5h7l3-3v-11l-4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(968,610)"
        d="m0 0h9l6 4 3 6 1 5v12l-3 9-4 5-4 2h-8l-5-3-4-7-1-6v-11l3-10 5-5zm5 4-5 3-2 3-1 5v13l2 7 5 4 5-2 3-8v-15l-3-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(98,46)"
        d="m0 0h3v2h106l101 1v1h-197l-14 1-16 5-11 7-8 8-8 15-3 9-2-3-2 3 1-7 4-10 7-11 8-8 9-6 13-5z"
        fill={theme.texto}
      />
      <path
        transform="translate(902,610)"
        d="m0 0h9l6 4 3 5 1 6v11l-2 9-5 6-4 2h-8l-6-4-3-7-1-6v-9l3-11 5-5zm4 4-5 4-2 7v12l3 10 5 2 4-2 2-3 1-5v-15l-3-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(1167,610)"
        d="m0 0h9l6 4 4 10v15l-5 10-6 4h-8l-7-6-2-5-1-6v-8l2-9 4-6zm2 5-4 6-1 7v8l2 9 4 4 5-1 3-4 1-4v-17l-4-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(1e3 610)"
        d="m0 0h9l7 6 2 7v16l-3 8-5 5-3 1h-8l-5-4-3-6-1-5v-12l3-10 4-5zm1 5-3 4-1 3v19l3 6 5 2 5-5 1-4v-18l-3-6-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(935,610)"
        d="m0 0h9l6 5 3 6 1 10-2 13-7 8-2 1h-9l-5-4-4-9v-16l4-10zm4 4-4 2-3 6v19l3 6 3 2 4-1 4-5 1-6v-12l-2-7-5-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(698,680)"
        d="m0 0h140l19 1-1 2h-208v-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(941,235)"
        d="m0 0 2 1v52l-1 1h-6l-1-1v-43l-10 6h-2v-7l12-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(1019,236)"
        d="m0 0h8v52l-1 1-7-1-1-42-9 5h-2v-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(1251,236)"
        d="m0 0h7v52l-3 1-5-2-1-41-8 5h-3v-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(906,133)"
        d="m0 0h3v9l8 1v5h-8v28h8l1 4-2 2h-10l-4-3-1-3v-28l-6 1-1-1v-5h7v-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(1222,50)"
        d="m0 0h5l1 9 8 1v5l-1 1h-8l1 24 1 2 7 1-1 5h-12l-3-4v-28h-6l-1-1v-5h7v-9z"
        fill={theme.texto}
      />
      <path
        transform="translate(1078,554)"
        d="m0 0h12l6 4 3 6v11l-5 8-7 3h-7l-5-2-5-6-1-2v-12l3-6 3-3zm5 3-5 3-3 5v9l3 5 3 2h6l4-4 2-6-1-8-4-5z"
        fill={theme.texto}
      />
      <path
        transform="translate(464,419)"
        d="m0 0h8v55h-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(770,234)"
        d="m0 0h8v54l-1 1-7-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(571,47)"
        d="m0 0 20 1 2 2h-211l1-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(1546,221)"
        d="m0 0h19l1 1v19l-1 1h-20v-20z"
        fill={theme.texto}
      />
      <path
        transform="translate(1641,603)"
        d="m0 0h21v20h-21z"
        fill={theme.texto}
      />
      <path
        transform="translate(1849,489)"
        d="m0 0h21v20h-21z"
        fill={theme.texto}
      />
      <path
        transform="translate(954,555)"
        d="m0 0h6l1 24h9l2-1 1-4 1-19h6v30h-6l-2-2-3 2h-9l-5-4-1-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(547,368)"
        d="m0 0h11l8 4 7 8 2 5v10l-3 7-6 7-5 3-4 1h-10l-7-3-6-5-4-8v-13l6-10 8-5zm-1 3-7 4-5 7-1 3v11l4 8 7 5 3 1h11l7-4 5-6 2-6v-7l-4-9-7-6-3-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1047,554)"
        d="m0 0h11l5 4 1 5-5 1-3-5-5-1-4 4-1 3v10l2 4 7 1 3-1 2-6 4 1v5l-4 5-5 2-9-1-5-4-3-7v-8l3-7 4-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(1964,414)"
        d="m0 0h20l-1 18-1 1h-17l-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1141,610)"
        d="m0 0 4 1v41l-5 1-2-1-1-33-7 4h-2v-6l10-6z"
        fill={theme.texto}
      />
      <path
        transform="translate(1041,610)"
        d="m0 0h4v42l-5 1-2-1v-33l-9 4v-6l9-6z"
        fill={theme.texto}
      />
      <path
        transform="translate(991,554)"
        d="m0 0 3 1 7 19v3l2-1 8-21 6-1v4l-11 25-1 2h-5l-4-6-9-22v-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(2036,25)"
        d="m0 0 4 1 1 8v51l-1 8-1 96h-1l-1-102z"
        fill={theme.texto}
      />
      <path
        transform="translate(588,46)"
        d="m0 0 11 1 13 4 8 4 10 8 8 10 7 14 2 12-2 1-2 4-3-15-4-10-9-12-10-8-11-5-13-4-1-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(815,555)"
        d="m0 0h6l7 21 7-21 4 1 1 4h-2l-1 9-6 15-1 1h-5l-4-9-6-19z"
        fill={theme.texto}
      />
      <path
        transform="translate(939,546)"
        d="m0 0 2 1v8h6v3l-6 1v22h6l1 2-3 3-9-1-1-2v-24l-5-1v-3h5v-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(768,609)"
        d="m0 0h6l1 1v42l-1 1h-5l-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(399,435)"
        d="m0 0h6l2 1-1 38h-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(2044,562)"
        d="m0 0h1l1 45v56l-4 10-9 8-5 1-2-3 9-4 4-5 3-6 1-23z"
        fill={theme.texto}
      />
      <path
        transform="translate(270,558)"
        d="m0 0h12l5 4v6l-5 5h-12z"
        fill={theme.texto}
      />
      <path
        transform="translate(545,378)"
        d="m0 0h12l4 2 1 5-2 6 2 10-4 1-3-10h-6l-1 10-3-1-1-4v-18zm3 3v7l1 1 8-1v-6l-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1137,554)"
        d="m0 0h10l5 3 1 2v26h-6l-1-24-1-3-9-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(974,555)"
        d="m0 0h6v30h-6l-1-5-1-2 1-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(1344,513)"
        d="m0 0 8 1v2h-67l-25-1v-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(747,680)"
        d="m0 0h91l19 1-1 2h-37v-2h-72z"
        fill={theme.texto}
      />
      <path
        transform="translate(950,169)"
        d="m0 0h7l1 2-3 6-5 4-4 1h-11l-3-2 7-1-2-1v-2l9-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(210,46)"
        d="m0 0h11l2 1 85 1v1h-101z"
        fill={theme.texto}
      />
      <path
        transform="translate(858,170)"
        d="m0 0h9l2 5 2 1v2h2v2h11l-4 2h-11l-7-3-3-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(902,135)"
        d="m0 0h1v16l1 29-2-1-1-3v-28l-6 1-1-1v-5h7v-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(547,368)"
        d="m0 0h11l8 4 7 8 2 5v10h-1l-1-5-2-3-4-9-6-5-13-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(786,609)"
        d="m0 0h20v1h-19v41l6-1h15v2l-21 1-1-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(907,136)"
        d="m0 0h1l1 6 8 1v5h-8l-1 24h-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(1132,250)"
        d="m0 0h8v9h-8l-1-5z"
        fill={theme.texto}
      />
      <path
        transform="translate(398,421)"
        d="m0 0h9v8h-9z"
        fill={theme.texto}
      />
      <path
        transform="translate(167,402)"
        d="m0 0h8v9h-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(154,402)"
        d="m0 0h8v9h-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(573,389)"
        d="m0 0h1v10l-6 8-5 4-4-1 9-8 3-8z"
        fill={theme.texto}
      />
      <path
        transform="translate(1131,280)"
        d="m0 0h9v8l-3 1-6-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(2044,665)"
        d="m0 0 1 2-5 8-7 6-5 1-2-3 9-4 4-5 2-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(939,546)"
        d="m0 0 2 1v8h6v3l-6 1v18h-1l-1-16z"
        fill={theme.texto}
      />
      <path
        transform="translate(544,369)"
        d="m0 0h9v1l-10 3-5 4-4 6-2-1 2-5 5-5z"
        fill={theme.texto}
      />
      <path
        transform="translate(554,378)"
        d="m0 0 6 1 2 3-1 6-3 3v-2l-4-1h3l-1-9z"
        fill={theme.texto}
      />
      <path
        transform="translate(1115,612)"
        d="m0 0 4 2 2 3v3l-5 1-3-3-2-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(909,71)"
        d="m0 0h1l1 15h1l1 10 3 2h-7z"
        fill={theme.texto}
      />
      <path
        transform="translate(919,619)"
        d="m0 0h1l1 6v11l-2 9h-1v-15z"
        fill={theme.texto}
      />
      <path
        transform="translate(860,642)"
        d="m0 0h5l1 5v5l-4-2-3-5z"
        fill={theme.texto}
      />
      <path
        transform="translate(919,577)"
        d="m0 0 6 1v6l-1 1h-5l-1-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(545,409)"
        d="m0 0h15l1 3-4 1h-10l-4-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(1026,577)"
        d="m0 0 4 1v7h-5l-1-1v-6z"
        fill={theme.texto}
      />
      <path
        transform="translate(550,390)"
        d="m0 0h6l2 3 2-2 2 10-4 1-3-10-5-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(912,176)"
        d="m0 0h5l1 4-2 2h-10l-2-2 9-1z"
        fill={theme.texto}
      />
      <path
        transform="translate(547,368)"
        d="m0 0h11l5 2-2 3-13-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(857,73)"
        d="m0 0 4 1-1 1-13 2-7 7-1-2 4-5 6-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(1016,554)"
        d="m0 0 2 1-2 6-2 2-3-3-1-3 1-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(939,179)"
        d="m0 0h9l2 2-4 1h-11l-3-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(872,179)"
        d="m0 0 12 1-4 2h-11l-4-2z"
        fill={theme.texto}
      />
      <path
        transform="translate(791,650)"
        d="m0 0h17v2l-21 1z"
        fill={theme.texto}
      />
      <path
        transform="translate(571,382)"
        d="m0 0h3l1 3v10h-1l-1-5-2-3z"
        fill={theme.texto}
      />
      <path
        transform="translate(896,144)"
        d="m0 0h5v4l-6 1v-4z"
        fill={theme.texto}
      />
      <path
        transform="translate(547,378)"
        d="m0 0h7l2 1v2h-9z"
        fill={theme.texto}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  margin: 0 0 24px;
  width: 205px;
  height: 70px;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 205px;
    height: 70px;
    margin: 0 0 40px;
  }
`;

export default LogoISO;
