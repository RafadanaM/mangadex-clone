import Image from "next/image";
import { Language } from "../../../configs/types/types";
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
      alt="Language Flag"
      width={width}
      height={height}
      src={`/flags/${getFlag()}.svg`}
      className={className}
    />
  );
};

export default Flag;
