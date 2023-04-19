import styles from "./ChapterGrid.module.css";
import IconText from "@Common/components/icons/IconText";
import { getRelativeTime } from "@Common/utils/date.util";
import ClockIcon from "@Images/icon/clock.svg";

interface IChapterTime {
  uploadTime: Date;
}

const ChapterTime = ({ uploadTime }: IChapterTime) => {
  return (
    <div className={`${styles.time}`}>
      <IconText
        icon={ClockIcon}
        text={getRelativeTime(uploadTime)}
        iconClassName="icon-small"
        textClassName="ml-2"
      />
    </div>
  );
};

export default ChapterTime;
