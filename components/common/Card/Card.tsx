import "./Card.css";
import {HTMLAttributes, ReactNode} from "react";
interface Props extends Readonly<HTMLAttributes<HTMLDivElement>> {
  readonly cardType: "vertical" | "horizontal";
  readonly children: ReactNode;
  readonly className?: string;
}

function Card({
  cardType,
  children,
  className,
  ...props
}: Readonly<Props>) {
  return (
    <div className={`Card Card-${cardType} ` + className} {...props}>
      {children}
    </div>
  );
}

export default Card;
