import type { SVGProps } from "react";

export function HamburgerIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}

export default HamburgerIcon;
