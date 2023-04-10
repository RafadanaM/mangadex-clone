import {
  ButtonCollapseBreakPoint,
  IconButtonType,
} from "../../types/common.types";
import { getButtonCollapseStyle } from "../../utils/button.util";
import Button, { IButton } from "./Button";

interface IIconButton extends IButton {
  Icon: any;
  text?: string;
  textPosition?: "bottom" | "right";
  textClassName?: string;
  iconClassName?: string;
  buttonType?: IconButtonType;
  textCollapse?: ButtonCollapseBreakPoint;
}
const IconButton = ({
  Icon,
  text,
  textPosition,
  textClassName,
  iconClassName,
  buttonType = "default",
  textCollapse,
  round = true,
  theme = "secondary",
  className,
  ...rest
}: IIconButton) => {
  const styleType =
    buttonType === "menu"
      ? {
          btnPadding: "p-2",
          icon: "icon-medium",
        }
      : {
          btnPadding: "p-3",
          icon: "icon-medium",
        };

  const textLocation = textPosition === "bottom" ? "flex-col " : "";

  const textCollapseStyle = getButtonCollapseStyle(textCollapse);

  return (
    <Button
      round={round}
      theme={theme}
      padding={styleType.btnPadding}
      className={`flex justify-center items-center flex-shrink-0 gap-3 ${textLocation} ${className}`}
      {...rest}
    >
      <Icon className={`icon ${styleType.icon} ${iconClassName}`} />
      {text ? (
        <span
          className={`font-medium transition-all duration-500 ${textCollapseStyle} ${textClassName}`}
        >
          {text}
        </span>
      ) : null}
    </Button>
  );
};

export default IconButton;
