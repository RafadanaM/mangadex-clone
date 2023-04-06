import { ReactNode } from "react";

interface IBaseCard {
  className?: string;
  rounded?: boolean;
  children?: ReactNode;
}

const BaseCard = ({ className = "", children, rounded = true }: IBaseCard) => {
  return (
    <div
      className={`bg-secondary overflow-hidden ${
        rounded ? "rounded" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
