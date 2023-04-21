import { ReactNode } from "react";

interface IBaseCard {
  className?: string;
  rounded?: boolean;
  children?: ReactNode;
  overflowHidden?: boolean;
}

const BaseCard = ({
  className = "",
  children,
  rounded = true,
  overflowHidden = true,
}: IBaseCard) => {
  return (
    <div
      className={`bg-secondary ${overflowHidden ? "overflow-hidden" : ""} ${
        rounded ? "rounded" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
