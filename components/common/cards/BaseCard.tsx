import { ReactNode } from "react";

interface IBaseCard {
  className?: string;
  children?: ReactNode;
}

const BaseCard = ({ className = "", children }: IBaseCard) => {
  return <div className={`bg-secondary ${className}`}>{children}</div>;
};

export default BaseCard;
