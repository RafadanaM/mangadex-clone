import styles from "./ChapterGrid.module.css";
import Flag from "@Common/components/icons/Flag";
import Icon from "@Common/components/icons/Icon";
import { Language } from "@Common/types/common.types";
import EyeIcon from "@Images/icon/eye.svg";
import Link from "next/link";

interface IChapterTitle {
  id: string;
  title: string;
  language: Language;
}

const ChapterTitle = ({ id, title, language }: IChapterTitle) => {
  return (
    <Link title={title} href={`/chapters/${id}`}>
      <a className={`${styles.title} flex items-center gap-1.5`}>
        <Icon icon={EyeIcon} className="icon-small" />
        <Flag language={language} />
        <span className="font-bold line-clamp-1">{title}</span>
      </a>
    </Link>
  );
};

export default ChapterTitle;
