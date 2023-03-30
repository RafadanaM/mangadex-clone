import { IconButtonType } from "../../../configs/types/types";

interface IIconButton {
  Icon: any;
  text?: string;
  textPosition?: "bottom" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  hasShade?: boolean;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  type?: IconButtonType;
}
const IconButton = ({
  Icon,
  onClick,
  text,
  textPosition,
  hasShade,
  type = "default",
  className,
  textClassName,
  iconClassName,
}: IIconButton) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex justify-center items-center flex-shrink-0  overflow-hidden 
      ${text ? "px-2 py-1" : "p-1"}
      ${textPosition === "bottom" ? "flex-col " : " "}
      ${
        hasShade
          ? "transition-colors ease-in hover:bg-shade hover:bg-opacity-20"
          : ""
      } 
      ${className ?? ""}
      `}
    >
      <Icon
        className={` ${
          type === "menu"
            ? "icon-menu"
            : type === "medium"
            ? ""
            : type === "small"
            ? "icon-small"
            : "icon"
        } ${iconClassName}`}
      />

      <span className={`font-medium ${textClassName}`}>{text}</span>
    </button>
  );
};

export default IconButton;
