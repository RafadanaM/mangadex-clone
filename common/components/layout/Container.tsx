import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}
const Container = ({
  children,
  className = "",
  fullWidth = false,
}: IContainer) => {
  return (
    <div
      className={`w-full mb-4 ${
        fullWidth ? "" : "max-w-md-mw mx-auto px-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
