import IconButton from "@Common/components/button/IconButton";
import BookIcon from "@Images/icon/book.svg";
import FlagIcon from "@Images/icon/flag.svg";
import UploadIcon from "@Images/icon/upload.svg";
import ListAddIcon from "@Images/icon/list-add.svg";
import BookMarkIcon from "@Images/icon/bookmark.svg";

const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        theme="primary"
        Icon={BookMarkIcon}
        text="Add to Library"
        round={false}
        className="md:min-w-[13.5rem]"
        iconClassName="block md:hidden"
        textCollapse="md"
      />
      <IconButton
        round={false}
        Icon={ListAddIcon}
        text="Add to MDList"
        className="xl:min-w-[13.5rem]"
        textCollapse="xl"
      />
      <IconButton
        round={false}
        Icon={BookIcon}
        text="Start Reading"
        className="xl:min-w-[13.5rem]"
        textCollapse="xl"
      />
      <IconButton
        round={false}
        Icon={FlagIcon}
        text="Report"
        textCollapse="2xl"
      />
      <IconButton
        round={false}
        Icon={UploadIcon}
        text="Upload Chapter"
        textCollapse="2xl"
      />
    </div>
  );
};

export default Actions;
