import styles from "./ChapterGrid.module.css";
import Flag from "@Common/components/icons/Flag";
import Icon from "@Common/components/icons/Icon";
import EyeIcon from "@Images/icon/eye.svg";

const ChapterTitle = () => {
  return (
    <div className={`${styles.title} flex items-center gap-1.5`}>
      <Icon icon={EyeIcon} className="icon-small" />
      <Flag language="BR" />
      <span className="font-bold line-clamp-1">Vol. 1 Ch. 25.1 - Extra</span>
    </div>
  );
};

export default ChapterTitle;
