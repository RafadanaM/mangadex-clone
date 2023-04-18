import Icon from "@Common/components/icons/Icon";
import styles from "./ChapterGrid.module.css";
import CommentIcon from "@Images/icon/message-square.svg";

const ChapterComments = () => {
  return (
    <div className={`${styles.comments} flex items-center`}>
      <Icon icon={CommentIcon} className="icon-small" />
    </div>
  );
};

export default ChapterComments;
