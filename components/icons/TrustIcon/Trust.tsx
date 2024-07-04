import type { SVGProps } from "react";

export function TrustIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.767 11.86a1.167 1.167 0 011.067-.693 4.667 4.667 0 014.666 4.666v3.5h5.43a3.498 3.498 0 013.494 4.026l-1.61 10.5s0-.001 0 0a3.502 3.502 0 01-3.493 2.974H14.667a3.5 3.5 0 01-3.5-3.5v-8.166a3.5 3.5 0 013.5-3.5h2.742l4.358-9.807zM17 24h-2.333a1.167 1.167 0 00-1.167 1.167v8.166a1.167 1.167 0 001.167 1.167H17V24zm2.334 10.5V23.081l4.209-9.47a2.334 2.334 0 011.624 2.222V20.5c0 .644.522 1.167 1.167 1.167h6.617a1.166 1.166 0 011.166 1.34l-1.61 10.501a1.166 1.166 0 01-1.167.992H19.334z"
        fill="#fff"
      />
    </svg>
  );
}
