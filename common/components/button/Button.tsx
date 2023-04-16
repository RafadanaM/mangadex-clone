import { ButtonTheme } from "@Common/types/button.type";
import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  round?: boolean;
  hover?: boolean;
  padding?: string;
}

const Button = ({
  theme = "primary",
  padding = "p-3",
  round = false,
  hover = true,
  children,
  className = "",
  ...props
}: IButton) => {
  const buttonTheme =
    theme === "primary"
      ? "bg-primary text-white shadow-glow shadow-primary"
      : theme === "secondary"
      ? "bg-secondary text-black"
      : theme === "light"
      ? "bg-transparent text-black"
      : "bg-transparent text-white";

  const roundStyle = round
    ? "rounded-full before:rounded-full"
    : "rounded before:rounded";

  const hoverAnimation = hover
    ? "before:transition-opacity before:hover:opacity-10 before:focus:opacity-10"
    : "";

  const beforeItem = `before:content[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-black before:opacity-0 ${hoverAnimation}`;

  return (
    <button
      className={`font-medium relative whitespace-nowrap ${roundStyle} ${buttonTheme} ${beforeItem} ${className} p-3 ${padding}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
