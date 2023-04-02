import Link from "next/link";
import Flag from "@Common/components/icons/Flag";
import { Language } from "@Common/types/common.types";

interface ITitle {
  className?: string;
  language: Language;
  title: string;
}

function Title({ title, language, className = "" }: ITitle) {
  return (
    <Link href={"link to manga title"} passHref>
      <a
        className={`overflow-hidden overflow-ellipsis whitespace-nowrap ${className}`}
      >
        <Flag language={language} className="inline-block" />
        <span className="ml-1 font-bold">{title}</span>
      </a>
    </Link>
  );
}

export default Title;
