import type { SVGProps } from "react";

export function StoreIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#F4F6F6"
        d="M13.386 13.386a3.985 3.985 0 012.817-1.167h18.594a3.985 3.985 0 013.984 3.984v18.594a3.985 3.985 0 01-3.984 3.984H16.203a3.985 3.985 0 01-3.984-3.984V16.203c0-1.057.42-2.07 1.167-2.817zm1.489 9.458h5.313v13.281h-3.985a1.328 1.328 0 01-1.328-1.328V22.844zm7.969 13.281h11.953a1.328 1.328 0 001.328-1.328V22.844H22.844v13.281zm13.281-15.938h-21.25v-3.984a1.328 1.328 0 011.328-1.328h18.594a1.328 1.328 0 011.328 1.328v3.985z"
      />
    </svg>
  );
}
