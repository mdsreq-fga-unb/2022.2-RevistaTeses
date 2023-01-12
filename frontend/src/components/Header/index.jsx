import React from "react";
import "./styles.css";

const Header = () => {
  function handleLogPro() {
    if (!document.cookie) {
      return (
        <a href="/login">Entrar</a>
      );
    } else {
      return (
        <a href="/perfil">Perfil</a>
      );
    }
  }
  return (
    <div className="header" data-testid="header">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="125.000000pt"
        height="125.000000pt"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M0 4849 l0 -146 53 -85 c259 -412 621 -740 1065 -962 61 -31 112 -60
112 -65 0 -5 -15 -42 -34 -83 -102 -223 -180 -530 -206 -803 -21 -227 -5 -531
40 -785 90 -497 301 -946 581 -1233 l109 -112 39 44 40 45 -93 97 c-308 324
-504 776 -583 1349 -24 176 -24 543 0 700 20 133 64 320 102 435 30 90 113
293 124 299 3 2 58 -14 121 -35 685 -237 1391 -237 1935 1 27 11 51 23 54 25
6 7 -40 115 -49 115 -5 0 -38 -13 -73 -29 -101 -46 -271 -97 -392 -120 -444
-83 -901 -44 -1405 121 l-131 43 42 70 c171 284 437 548 692 685 76 41 77 42
77 81 l0 39 -58 0 c-53 0 -67 -5 -143 -51 -268 -163 -539 -448 -699 -736 l-23
-42 -120 60 c-245 123 -432 255 -626 444 -216 209 -376 424 -492 660 l-59 119
0 -145z"
            fill="#00719e"
          />
          <path
            d="M3352 2718 c-53 -10 -66 -29 -26 -37 10 -2 22 -8 26 -15 12 -18 9
-415 -2 -437 -6 -10 -20 -19 -30 -19 -11 0 -20 -7 -20 -15 0 -12 18 -15 105
-15 87 0 105 3 105 15 0 8 -9 15 -20 15 -36 0 -40 31 -40 279 l0 241 -22 -1
c-13 -1 -47 -6 -76 -11z"
          />
          <path
            d="M1430 2681 c0 -5 14 -14 30 -20 l30 -10 0 -209 c0 -218 -1 -225 -44
-233 -11 -2 -21 -10 -24 -16 -3 -10 28 -13 132 -13 114 0 136 2 136 15 0 10
-10 15 -34 15 -54 0 -66 20 -66 109 l0 78 76 6 c139 12 198 56 198 147 0 60
-23 96 -77 121 -35 16 -67 19 -199 19 -88 0 -158 -4 -158 -9z m262 -32 c59
-16 86 -88 55 -149 -16 -32 -72 -60 -119 -60 l-38 0 0 103 c0 57 3 107 7 110
9 10 53 8 95 -4z"
          />
          <path
            d="M2756 2585 c-9 -14 -33 -33 -51 -42 -40 -19 -46 -40 -12 -45 21 -3
22 -7 27 -148 l5 -145 38 -19 c26 -12 48 -16 71 -12 40 8 75 41 59 57 -8 8
-13 8 -17 0 -11 -17 -53 -13 -60 5 -3 9 -6 72 -6 140 l0 124 35 0 c24 0 35 5
35 15 0 10 -11 15 -35 15 -34 0 -35 1 -35 40 0 33 -4 40 -19 40 -10 0 -26 -11
-35 -25z"
          />
          <path
            d="M2015 2522 c-123 -57 -150 -203 -55 -293 80 -77 209 -72 283 10 80
88 55 226 -50 276 -56 27 -130 30 -178 7z m139 -52 c58 -70 39 -220 -33 -249
-37 -16 -64 -3 -91 42 -37 60 -20 198 27 226 34 20 70 13 97 -19z"
          />
          <path
            d="M2392 2526 c-58 -12 -66 -22 -31 -40 30 -15 37 -42 38 -149 1 -96 -9
-127 -39 -127 -11 0 -20 -7 -20 -15 0 -12 19 -15 110 -15 91 0 110 3 110 15 0
9 -9 15 -23 15 -37 0 -47 19 -47 88 0 119 30 189 71 164 32 -20 68 -15 81 13
9 21 8 28 -7 45 -10 11 -30 20 -44 20 -31 0 -89 -33 -98 -56 -8 -21 -23 1 -23
34 0 24 -2 25 -78 8z"
          />
          <path
            d="M2990 2522 c-30 -15 -35 -22 -35 -52 0 -31 3 -35 27 -38 22 -3 32 4
53 37 40 64 95 48 95 -28 0 -37 -1 -38 -75 -70 -90 -40 -125 -72 -125 -116 0
-78 114 -107 179 -46 l32 30 9 -25 c15 -38 49 -49 94 -30 22 9 36 21 33 28 -2
7 -11 12 -18 10 -29 -7 -39 30 -39 141 0 59 -5 117 -11 129 -25 46 -152 64
-219 30z m124 -263 c-23 -26 -81 -26 -89 0 -9 30 5 51 54 83 l46 29 3 -47 c2
-33 -2 -52 -14 -65z"
          />
          <path
            d="M2689 1759 c-90 -14 -161 -68 -194 -146 -19 -45 -19 -144 -1 -188 23
-54 92 -115 210 -185 73 -43 119 -78 138 -104 46 -64 35 -126 -27 -152 -112
-46 -227 24 -265 161 -12 42 -15 45 -46 45 l-34 0 0 -145 c0 -143 0 -145 22
-145 12 0 31 12 43 26 l20 25 45 -25 c122 -68 315 -48 404 40 58 59 79 146 56
231 -18 63 -108 152 -216 212 -178 99 -224 172 -155 242 65 64 157 24 217 -93
21 -41 29 -48 54 -48 l30 0 0 120 c0 110 -2 120 -18 120 -11 0 -27 -9 -37 -20
-15 -17 -20 -17 -39 -6 -49 31 -138 46 -207 35z"
          />
          <path
            d="M4366 1759 c-112 -17 -196 -108 -204 -220 -9 -117 48 -195 211 -290
51 -30 111 -73 135 -97 40 -39 43 -46 40 -89 -2 -36 -9 -50 -29 -66 -34 -24
-106 -33 -153 -17 -49 16 -109 87 -130 155 -17 53 -19 55 -52 55 l-34 0 0
-145 0 -145 24 0 c14 0 32 10 43 25 l18 25 51 -26 c105 -52 247 -51 345 3 82
44 119 109 119 207 -1 106 -63 179 -244 287 -115 68 -154 106 -163 161 -4 27
0 41 20 64 22 25 32 29 75 29 65 0 96 -23 140 -103 29 -54 38 -62 63 -62 l29
0 0 120 c0 113 -1 120 -20 120 -11 0 -25 -8 -31 -18 -11 -18 -14 -18 -68 4
-68 26 -120 33 -185 23z"
          />
          <path
            d="M1818 1741 c-80 -26 -136 -61 -191 -120 -178 -191 -149 -518 58 -661
149 -103 392 -97 542 13 87 65 92 73 62 102 l-24 25 -49 -35 c-230 -164 -454
-52 -459 230 l-2 80 281 3 c322 3 296 -7 283 101 -15 131 -97 231 -219 265
-76 22 -209 20 -282 -3z m229 -102 c46 -43 69 -129 41 -157 -8 -8 -59 -12
-165 -12 l-153 0 6 28 c16 64 69 136 119 158 45 21 120 12 152 -17z"
          />
          <path
            d="M3498 1741 c-80 -26 -136 -61 -191 -120 -178 -191 -149 -518 58 -661
149 -103 392 -97 542 13 87 65 92 73 62 102 l-24 25 -49 -35 c-230 -164 -454
-52 -459 230 l-2 80 281 3 c322 3 296 -7 283 101 -15 131 -97 231 -219 265
-76 22 -209 20 -282 -3z m229 -102 c46 -43 69 -129 41 -157 -8 -8 -59 -12
-165 -12 l-153 0 6 28 c16 64 69 136 119 158 45 21 120 12 152 -17z"
          />
        </g>
      </svg>

      <div className="headerContainer">
        <ul className="opcoes">
          <li key="inicio">
            <a href="/">Inicio</a>
          </li>
          <li key="colunas">
            <a href="/">Colunas</a>
          </li>
          <li key="noticias">
            <a href="/noticias">Noticias</a>
          </li>
          <li key="eventos">
            <a href="/">Eventos</a>
          </li>
          <li key={Math.random()}>{handleLogPro()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
