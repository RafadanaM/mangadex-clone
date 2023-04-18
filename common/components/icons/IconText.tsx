import Icon from "./Icon";

interface IIconText {
  icon: any;
  text: string;
  iconClassName?: string;
  textClassName?: string;
}

const IconText = ({ icon, text, iconClassName, textClassName }: IIconText) => {
  return (
    <div className="flex items-center overflow-hidden">
      <Icon icon={icon} className={iconClassName} />
      <span className={`flex-shrink-0 ${textClassName}`}>{text}</span>
    </div>
  );
};

export default IconText;
