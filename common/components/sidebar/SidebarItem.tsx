import { SidebarContent } from "../../interfaces/common.interfaces";
import SidebarItemContent from "./SidebarItemContent";

interface ISidebarItem {
  Icon?: any;
  title: string;
  path?: string;
  currPath: string;
  contents?: SidebarContent[];
  closeSidebar?: () => void;
}

const SidebarItem = ({
  Icon,
  title,
  path,
  currPath,
  contents = [],
  closeSidebar,
}: ISidebarItem) => {
  const renderContents = () => {
    return contents.map(({ path, title }) => (
      <SidebarItemContent
        key={path}
        path={path}
        title={title}
        currPath={currPath}
        type="sub"
        closeSidebar={closeSidebar}
      />
    ));
  };

  return (
    <li>
      <SidebarItemContent
        path={path}
        title={title}
        Icon={Icon}
        currPath={currPath}
        closeSidebar={closeSidebar}
      />

      <ul>{renderContents()}</ul>
    </li>
  );
};

export default SidebarItem;
