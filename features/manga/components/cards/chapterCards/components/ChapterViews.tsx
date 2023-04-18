import IconText from "@Common/components/icons/IconText";
import styles from "./ChapterGrid.module.css";
import EyeIcon from "@Images/icon/eye.svg";

const ChapterViews = () => {
  return (
    <div className={`${styles.views}`}>
      <IconText
        icon={EyeIcon}
        text="N/A"
        iconClassName="h-4 w-4"
        textClassName="ml-1"
      />
    </div>
  );
};

export default ChapterViews;
