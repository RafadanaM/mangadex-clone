import { HTMLProps, ReactNode } from "react";
import { ButtonTheme } from "../../../configs/types/types";

interface IButton extends HTMLProps<HTMLButtonElement> {
  theme?: ButtonTheme;
}

const Button = ({
  theme = "primary",
  children,
  className,
  ...props
}: IButton) => {
  const buttonTheme = theme === "primary" ? "bg-primary text-white px-2" : "";
  return (
    <button className={`${buttonTheme} font-medium px-3 rounded`}>
      {children}
    </button>
  );
};

export default Button;
