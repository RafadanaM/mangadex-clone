import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className = "" }: IContainer) => {
  return (
    <div className={`w-full max-w-md-mw mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
