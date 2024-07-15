import type { SVGProps } from "react";

export function NetworksIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      width="51"
      height="51"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.127 18.47a1.328 1.328 0 10-1.879-1.878l-7.968 7.969a1.328 1.328 0 000 1.878l7.968 7.969a1.328 1.328 0 001.879-1.878l-7.03-7.03 7.03-7.03zm10.625-1.878a1.328 1.328 0 00-1.879 1.878l7.03 7.03-7.03 7.03a1.328 1.328 0 101.879 1.878l7.968-7.969a1.328 1.328 0 000-1.878l-7.968-7.969z"
        fill="#F4F6F6"
      />
    </svg>
  );
}
