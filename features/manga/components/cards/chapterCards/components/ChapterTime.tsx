import styles from "./ChapterGrid.module.css";
import IconText from "@Common/components/icons/IconText";
import ClockIcon from "@Images/icon/clock.svg";

const ChapterTime = () => {
  return (
    <div className={`${styles.time}`}>
      <IconText
        icon={ClockIcon}
        text="25 days ago"
        iconClassName="icon-small"
        textClassName="ml-2"
      />
    </div>
  );
};

export default ChapterTime;
