interface IIcon {
  icon: any;
  className?: string;
}

const Icon = ({ icon: Icon, className = "" }: IIcon) => {
  return <Icon className={`icon text-icon ${className}`} />;
};

export default Icon;
