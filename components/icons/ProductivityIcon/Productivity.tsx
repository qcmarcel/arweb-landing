import type { SVGProps } from "react";

export function ProductivityIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.996 13.61a1.167 1.167 0 01.56 1.553l-6 12.772a1.167 1.167 0 01-1.9.31l-3.607-3.776-3.018 6.26a1.167 1.167 0 01-1.78.404l-2.36-1.889-2.351 4.619a1.166 1.166 0 11-2.08-1.058l3-5.895a1.168 1.168 0 011.769-.382l2.337 1.87 3.114-6.46a1.166 1.166 0 011.894-.3l3.594 3.764 5.276-11.231a1.167 1.167 0 011.552-.56z"
        fill="#fff"
      />
    </svg>
  );
}
