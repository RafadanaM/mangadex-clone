import { ButtonHTMLAttributes } from "react";
import { ButtonTheme } from "../../types/common.types";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button className={`${buttonTheme} font-medium px-3 rounded`} {...props}>
      {children}
    </button>
  );
};

export default Button;
