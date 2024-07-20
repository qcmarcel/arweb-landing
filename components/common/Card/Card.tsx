import "./Card.css";
import React from "react";
interface Props extends Readonly<React.HTMLAttributes<HTMLDivElement>> {
  readonly cardType: "vertical" | "horizontal";
  readonly children: React.ReactNode;
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
