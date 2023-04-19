import IconText from "@Common/components/icons/IconText";
import styles from "./ChapterGrid.module.css";
import GroupIcon from "@Images/icon/users.svg";

interface IChapterGroup {
  group: string;
}

const ChapterGroup = ({ group }: IChapterGroup) => {
  return (
    <div className={`${styles.group}`}>
      <IconText
        icon={GroupIcon}
        text={group}
        iconClassName="icon-small"
        textClassName="ml-2"
      />
    </div>
  );
};

export default ChapterGroup;
