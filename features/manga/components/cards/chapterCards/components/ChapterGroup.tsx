import IconText from "@Common/components/icons/IconText";
import styles from "./ChapterGrid.module.css";
import GroupIcon from "@Images/icon/users.svg";

const ChapterGroup = () => {
  return (
    <div className={`${styles.group}`}>
      <IconText
        icon={GroupIcon}
        text="Kasahaya"
        iconClassName="icon-small"
        textClassName="ml-2"
      />
    </div>
  );
};

export default ChapterGroup;
