import styles from "./ChapterGrid.module.css";
import Flag from "@Common/components/icons/Flag";
import Icon from "@Common/components/icons/Icon";
import IconText from "@Common/components/icons/IconText";
import EyeIcon from "@Images/icon/eye.svg";
import ClockIcon from "@Images/icon/clock.svg";
import GroupIcon from "@Images/icon/users.svg";
import UserIcon from "@Images/icon/users.svg";
import CommentIcon from "@Images/icon/message-square.svg";
import useMediaQuery from "@Common/hooks/useMediaQuery";
import ChapterTitle from "./ChapterTitle";
import ChapterTime from "./ChapterTime";
import ChapterGroup from "./ChapterGroup";
import ChapterViews from "./ChapterViews";
import ChapterUploader from "./ChapterUploader";
import ChapterComments from "./ChapterComments";

const ChapterGrid = () => {
  const [isLoading, isLarge] = useMediaQuery("(min-width:640px)");
  return (
    <div
      className={`${styles.chapterGrid} text-xs md:text-sm px-2 py-1 border-l-2 border-l-status-blue overflow-hidden border-b border-b-shade-light last:border-b-0`}
    >
      {!isLoading ? (
        isLarge ? (
          <>
            <ChapterTitle />
            <ChapterTime />
            <ChapterViews />
            <ChapterGroup />
            <ChapterUploader />
            <ChapterComments />
          </>
        ) : (
          <>
            <div className={`${styles.titleComments} flex justify-between`}>
              <ChapterTitle />
              <ChapterComments />
            </div>
            <div className={`${styles.groupViews} flex justify-between`}>
              <ChapterGroup />
              <ChapterViews />
            </div>
            <div className={`${styles.uploaderTime} flex justify-between`}>
              <ChapterUploader />
              <ChapterTime />
            </div>
          </>
        )
      ) : null}
    </div>
  );
};

export default ChapterGrid;
