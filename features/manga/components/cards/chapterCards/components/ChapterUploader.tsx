import IconText from "@Common/components/icons/IconText";
import styles from "./ChapterGrid.module.css";
import UserIcon from "@Images/icon/person.svg";

const ChapterUploader = () => {
  return (
    <div className={`${styles.uploader} line-clamp-1`}>
      <IconText
        icon={UserIcon}
        text="Teppelinn"
        iconClassName="icon-small"
        textClassName="font-medium ml-2 text-status-blue"
      />
    </div>
  );
};

export default ChapterUploader;