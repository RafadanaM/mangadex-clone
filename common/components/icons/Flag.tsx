import Image from "next/future/image";
import { Language } from "../../types/common.types";
interface IFlag {
  language: Language;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Flag = ({ language, className, width = 20, height = 20 }: IFlag) => {
  const getFlag = () => {
    switch (language) {
      case "BR":
        return "br";
      case "EN":
        return "gb";
      case "ID":
        return "id";
      case "IT":
        return "it";
      default:
        return "gb";
    }
  };

  return (
    <Image
      alt={`${language} Flag`}
      width={width}
      height={height}
      src={`/images/flags/${getFlag()}.svg`}
      className={className}
    />
  );
};

export default Flag;
