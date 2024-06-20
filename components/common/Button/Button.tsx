import "./Button.css";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top" | undefined;
  rel?: string | undefined;
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
