"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path
      ? "text-primary"
      : "text-gray-600 dark:text-gray-300 hover:text-primary";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            fill="currentColor"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <g transform="translate(0,500) scale(0.1,-0.1)">
              <path d="M2395 4993 c-65 -3 -221 -20 -270 -28 -16 -3 -66 -12 -110 -21 -348 -64 -766 -256 -1046 -480 -124 -99 -131 -105 -244 -219 -449 -448 -713 -1084 -717 -1725 -4 -518 163 -1041 471 -1472 80 -113 120 -160 249 -291 304 -310 676 -529 1103 -652 158 -46 305 -71 511 -89 147 -13 187 -13 325 0 374 35 650 112 968 272 117 58 314 186 425 275 115 93 408 387 386 387 -3 0 5 11 17 24 91 100 242 353 320 536 88 208 140 383 173 589 21 128 43 386 38 441 -2 25 -9 101 -14 170 -31 356 -154 744 -335 1053 -386 656 -1056 1103 -1810 1205 -151 21 -329 31 -440 25z m-630 -1893 c366 -35 578 -148 657 -353 26 -66 37 -324 19 -434 -29 -167 -142 -300 -310 -364 -201 -75 -355 -90 -959 -89 -267 0 -488 3 -491 6 -3 3 -5 279 -3 612 1 334 3 613 2 620 0 15 919 17 1085 2z m1904 -4 c6 -8 134 -204 282 -437 149 -233 306 -477 348 -542 134 -207 153 -239 144 -248 -5 -5 -126 -8 -269 -7 l-259 3 -32 55 c-18 30 -44 74 -57 98 l-26 42 -383 0 -383 0 -59 -100 -58 -100 -263 0 c-144 0 -265 4 -268 8 -3 5 18 44 47 88 29 43 104 160 166 259 97 152 393 614 533 833 l40 62 243 0 c195 0 245 -3 254 -14z" />
              <path d="M1208 2773 c-2 -9 -2 -143 0 -299 2 -211 6 -283 15 -286 7 -2 104 -1 217 2 228 7 286 19 367 73 54 37 79 79 94 161 12 69 -1 171 -28 219 -27 45 -95 94 -156 112 -70 20 -224 34 -379 35 -110 0 -127 -2 -130 -17z" />
              <path d="M3385 2674 c-17 -30 -35 -63 -40 -72 -6 -9 -30 -51 -54 -92 -25 -41 -51 -86 -60 -100 -10 -15 -11 -21 -3 -17 6 5 12 4 12 -1 0 -7 359 -5 367 2 2 2 -15 34 -102 184 -5 9 -27 47 -48 85 -21 37 -39 67 -40 67 -2 0 -16 -25 -32 -56z" />
            </g>
          </svg>
          <span>
            {"It's Me"}
            <span className="text-primary">Danii</span>{" "}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              className="h-6 w-6"
            >
              <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
              <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
            </svg>
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/about"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              className="h-6 w-6"
            >
              <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
              <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
            </svg>
            <span>About</span>
          </Link>
          <Link
            href="/education"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/education"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.6"
              className="h-6 w-6"
            >
              <path d="M8.278,35.973c0,3.048,2.48,5.527,5.528,5.527h22.488c0.276,0,0.5-0.224,0.5-0.5v-1.53c0-0.104-0.039-0.195-0.093-0.274c-0.006-0.009-0.004-0.021-0.01-0.03c-0.705-0.92-1.078-2.024-1.078-3.193s0.373-2.273,1.078-3.194c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.03h2.237c0.276,0,0.5-0.224,0.5-0.5v-1.53c0-0.104-0.039-0.195-0.093-0.275c-0.006-0.009-0.003-0.021-0.01-0.029c-0.705-0.921-1.077-2.025-1.077-3.194s0.373-2.273,1.077-3.194c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.53c0-0.276-0.224-0.5-0.5-0.5h-5.227v-4.659l3.947-1.862v3.428c-0.563,0.206-0.969,0.742-0.969,1.376c0,0.81,0.659,1.469,1.469,1.469c0.811,0,1.47-0.659,1.47-1.469c0-0.634-0.406-1.17-0.97-1.376V13.08c0-0.088-0.029-0.166-0.068-0.238c-0.01-0.019-0.022-0.037-0.035-0.051c-0.043-0.059-0.095-0.107-0.159-0.142c-0.008-0.005-0.012-0.015-0.021-0.019L25.854,6.55c-0.138-0.066-0.297-0.066-0.435,0l-12.615,6.08c-0.173,0.083-0.284,0.26-0.283,0.452c0.001,0.193,0.112,0.368,0.287,0.45l4.661,2.198v4.659h-0.926c-1.48,0-2.87,0.574-3.912,1.616c-1.042,1.042-1.615,2.431-1.615,3.912c0,1.894,0.958,3.567,2.415,4.564c-1.337,0.09-2.585,0.627-3.536,1.579C8.852,33.102,8.278,34.491,8.278,35.973z M34.652,35.473H13.15c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h21.502c0.069,0.884,0.314,1.729,0.735,2.497H13.972c-1.653,0-2.998-1.344-2.998-2.997c0-0.803,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.416C34.966,33.744,34.722,34.588,34.652,35.473z M37.39,25.417H15.887c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H37.39c0.069,0.885,0.314,1.729,0.735,2.498H16.709c-1.653,0-2.998-1.345-2.998-2.998c0-0.802,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.415C37.703,23.688,37.459,24.533,37.39,25.417z M38.252,19.142c-0.259,0-0.469-0.21-0.469-0.469s0.21-0.469,0.469-0.469s0.47,0.21,0.47,0.469S38.511,19.142,38.252,19.142z M14.184,13.075l11.454-5.52l11.453,5.52l-3.286,1.55v-1.448c0-0.065-0.014-0.127-0.037-0.185c-0.008-0.021-0.022-0.037-0.033-0.057c-0.019-0.034-0.038-0.068-0.065-0.096c-0.017-0.018-0.038-0.032-0.057-0.048c-0.028-0.022-0.056-0.044-0.089-0.06c-0.024-0.012-0.05-0.019-0.076-0.027c-0.022-0.007-0.041-0.019-0.064-0.022l-1.819-0.291c-3.933-0.632-7.921-0.633-11.854,0l-1.82,0.291c-0.023,0.004-0.042,0.016-0.064,0.022c-0.026,0.008-0.052,0.015-0.076,0.027c-0.033,0.016-0.06,0.037-0.089,0.06c-0.02,0.016-0.04,0.029-0.057,0.048c-0.027,0.029-0.046,0.062-0.065,0.096c-0.011,0.019-0.025,0.036-0.033,0.057c-0.023,0.058-0.037,0.119-0.037,0.185v1.448L14.184,13.075z M18.469,15.414v-1.81l1.4-0.224c3.827-0.615,7.708-0.615,11.537,0l1.398,0.223v1.811v4.976H18.469V15.414z M12.016,25.917c0-1.214,0.47-2.353,1.322-3.205c0.854-0.853,1.992-1.323,3.205-1.323h1.426h15.335h5.227v0.53H16.709c-1.059,0-2.063,0.415-2.828,1.169c-0.754,0.755-1.169,1.759-1.169,2.828c0,2.204,1.793,3.998,3.998,3.998h21.822v0.53h-2.237H16.543C14.046,30.445,12.016,28.414,12.016,25.917z M13.806,31.445h2.737h19.251v0.53H13.972c-1.059,0-2.062,0.415-2.828,1.169c-0.754,0.754-1.169,1.758-1.169,2.828c0,2.204,1.793,3.997,3.998,3.997h21.822v0.53H13.806c-2.497,0-4.528-2.031-4.528-4.527c0-1.214,0.47-2.353,1.323-3.205C11.454,31.915,12.592,31.445,13.806,31.445z" />
            </svg>
            <span>Education</span>
          </Link>
          <Link
            href="/experience"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/experience"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z" />
            </svg>
            <span>Experience</span>
          </Link>
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/portfolio"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              className="h-6 w-6"
            >
              <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
            </svg>
            <span>Portfolio</span>
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 text-base font-medium transition ${isActive(
              "/contact"
            )}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              className="h-6 w-6"
            >
              <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
            </svg>
            <span>Contact</span>
          </Link>
        </div>

        {/* Desktop Theme Toggle and CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
          >
            <span>{"Let's Talk"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M17.5 11.667v-5h-5" />
              <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-dark transition dark:text-white/70"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="h-9 w-9 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white p-6 shadow-lg dark:bg-black">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-lg font-semibold text-dark dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5A1.5 1.5 0 0 1 22.5 24H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                  />
                </svg>
                <span>
                  {"It's Me"}
                  <span className="text-primary">Danii</span>{" "}
                </span>
              </Link>
              <button
                type="button"
                className="text-dark transition dark:text-white/70"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-6">
              <Link
                href="/"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  className="h-6 w-6"
                >
                  <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
                  <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                </svg>
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/about"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  className="h-6 w-6"
                >
                  <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                  <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                </svg>
                <span>About</span>
              </Link>
              <Link
                href="/education"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/education"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.6"
                  className="h-6 w-6"
                >
                  <path d="M8.278,35.973c0,3.048,2.48,5.527,5.528,5.527h22.488c0.276,0,0.5-0.224,0.5-0.5v-1.53c0-0.104-0.039-0.195-0.093-0.274c-0.006-0.009-0.004-0.021-0.01-0.03c-0.705-0.92-1.078-2.024-1.078-3.193s0.373-2.273,1.078-3.194c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.03h2.237c0.276,0,0.5-0.224,0.5-0.5v-1.53c0-0.104-0.039-0.195-0.093-0.275c-0.006-0.009-0.003-0.021-0.01-0.029c-0.705-0.921-1.077-2.025-1.077-3.194s0.373-2.273,1.077-3.194c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.53c0-0.276-0.224-0.5-0.5-0.5h-5.227v-4.659l3.947-1.862v3.428c-0.563,0.206-0.969,0.742-0.969,1.376c0,0.81,0.659,1.469,1.469,1.469c0.811,0,1.47-0.659,1.47-1.469c0-0.634-0.406-1.17-0.97-1.376V13.08c0-0.088-0.029-0.166-0.068-0.238c-0.01-0.019-0.022-0.037-0.035-0.051c-0.043-0.059-0.095-0.107-0.159-0.142c-0.008-0.005-0.012-0.015-0.021-0.019L25.854,6.55c-0.138-0.066-0.297-0.066-0.435,0l-12.615,6.08c-0.173,0.083-0.284,0.26-0.283,0.452c0.001,0.193,0.112,0.368,0.287,0.45l4.661,2.198v4.659h-0.926c-1.48,0-2.87,0.574-3.912,1.616c-1.042,1.042-1.615,2.431-1.615,3.912c0,1.894,0.958,3.567,2.415,4.564c-1.337,0.09-2.585,0.627-3.536,1.579C8.852,33.102,8.278,34.491,8.278,35.973z M34.652,35.473H13.15c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h21.502c0.069,0.884,0.314,1.729,0.735,2.497H13.972c-1.653,0-2.998-1.344-2.998-2.997c0-0.803,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.416C34.966,33.744,34.722,34.588,34.652,35.473z M37.39,25.417H15.887c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H37.39c0.069,0.885,0.314,1.729,0.735,2.498H16.709c-1.653,0-2.998-1.345-2.998-2.998c0-0.802,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.415C37.703,23.688,37.459,24.533,37.39,25.417z M38.252,19.142c-0.259,0-0.469-0.21-0.469-0.469s0.21-0.469,0.469-0.469s0.47,0.21,0.47,0.469S38.511,19.142,38.252,19.142z M14.184,13.075l11.454-5.52l11.453,5.52l-3.286,1.55v-1.448c0-0.065-0.014-0.127-0.037-0.185c-0.008-0.021-0.022-0.037-0.033-0.057c-0.019-0.034-0.038-0.068-0.065-0.096c-0.017-0.018-0.038-0.032-0.057-0.048c-0.028-0.022-0.056-0.044-0.089-0.06c-0.024-0.012-0.05-0.019-0.076-0.027c-0.022-0.007-0.041-0.019-0.064-0.022l-1.819-0.291c-3.933-0.632-7.921-0.633-11.854,0l-1.82,0.291c-0.023,0.004-0.042,0.016-0.064,0.022c-0.026,0.008-0.052,0.015-0.076,0.027c-0.033,0.016-0.06,0.037-0.089,0.06c-0.02,0.016-0.04,0.029-0.057,0.048c-0.027,0.029-0.046,0.062-0.065,0.096c-0.011,0.019-0.025,0.036-0.033,0.057c-0.023,0.058-0.037,0.119-0.037,0.185v1.448L14.184,13.075z M18.469,15.414v-1.81l1.4-0.224c3.827-0.615,7.708-0.615,11.537,0l1.398,0.223v1.811v4.976H18.469V15.414z M12.016,25.917c0-1.214,0.47-2.353,1.322-3.205c0.854-0.853,1.992-1.323,3.205-1.323h1.426h15.335h5.227v0.53H16.709c-1.059,0-2.063,0.415-2.828,1.169c-0.754,0.755-1.169,1.759-1.169,2.828c0,2.204,1.793,3.998,3.998,3.998h21.822v0.53h-2.237H16.543C14.046,30.445,12.016,28.414,12.016,25.917z M13.806,31.445h2.737h19.251v0.53H13.972c-1.059,0-2.062,0.415-2.828,1.169c-0.754,0.754-1.169,1.758-1.169,2.828c0,2.204,1.793,3.997,3.998,3.997h21.822v0.53H13.806c-2.497,0-4.528-2.031-4.528-4.527c0-1.214,0.47-2.353,1.323-3.205C11.454,31.915,12.592,31.445,13.806,31.445z" />
                </svg>
                <span>Education</span>
              </Link>
              <Link
                href="/experience"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/experience"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z" />
                </svg>
                <span>Experience</span>
              </Link>
              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/portfolio"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  className="h-6 w-6"
                >
                  <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
                </svg>
                <span>Portfolio</span>
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 text-lg font-medium transition ${isActive(
                  "/contact"
                )}`}
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  className="h-6 w-6"
                >
                  <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                </svg>
                <span>Contact</span>
              </Link>
            </nav>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
                onClick={toggleMobileMenu}
              >
                <span>{"Let's Talk"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path d="M17.5 11.667v-5h-5" />
                  <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
