import "./Button.css";
import {ButtonHTMLAttributes, ReactNode} from "react";
interface Props extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  readonly buttonType: "solid" | "outline" | "link" | "icon";
  readonly children: ReactNode;
  readonly className?: string;
  readonly href?: string;
  readonly target?: "_self" | "_blank" | "_parent" | "_top";
  readonly rel?: string;
}

function Button({
  buttonType,
  children,
  className,
  href,
  target,
  rel,
  ...props
}: Props) {
  if (href) {
    if (!target) target = undefined;
    if (!rel) rel = undefined;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`Button Button-${buttonType}${
          className ? " " + className : ""
        }`}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={`Button Button-${buttonType} ` + className} {...props}>
      {children}
    </button>
  );
}

export default Button;
