import IconText from "@Common/components/icons/IconText";
import styles from "./ChapterGrid.module.css";
import UserIcon from "@Images/icon/person.svg";

interface IChapterUploader {
  uploader: string;
}

const ChapterUploader = ({ uploader }: IChapterUploader) => {
  return (
    <div className={`${styles.uploader} line-clamp-1 capitalize`}>
      <IconText
        icon={UserIcon}
        text={uploader}
        iconClassName="icon-small"
        textClassName="ml-1 text-status-blue px-1 rounded hover:bg-shade hover:bg-opacity-60"
      />
    </div>
  );
};

export default ChapterUploader;
