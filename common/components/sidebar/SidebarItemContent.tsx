import Link from "next/link";
import { SidebarItemContentType } from "../../types/common.types";

interface ISidebarItemContent {
  title: string;
  path?: string;
  currPath: string;
  Icon?: any;
  type?: SidebarItemContentType;
  closeSidebar?: () => void;
}

const SidebarItemContent = ({
  title,
  path,
  Icon,
  type = "main",
  currPath,
  closeSidebar,
}: ISidebarItemContent) => {
  const style = path
    ? path === currPath
      ? "bg-primary text-white hover:bg-primary-dark"
      : "hover:bg-shade-light"
    : "";

  const renderContent = () => (
    <>
      {Icon && (
        <Icon
          className={`icon-menu ${path === currPath ? "text-white" : ""}`}
        />
      )}
      <span className="mx-2">{title}</span>
    </>
  );

  const renderWrapper = () =>
    path ? (
      <Link href={path}>
        <a className="flex flex-shrink-0 items-center" onClick={closeSidebar}>
          {renderContent()}
        </a>
      </Link>
    ) : (
      <div className="flex flex-shrink-0 items-center">{renderContent()}</div>
    );

  return type === "main" ? (
    <div
      className={`mt-2 px-2 py-0.5 rounded whitespace-nowrap font-bold text-sm ${style}`}
    >
      {renderWrapper()}
    </div>
  ) : (
    <li
      className={`mt-0.5 px-2 py-0.5 rounded whitespace-nowrap font-medium text-sm ${style}`}
    >
      {renderWrapper()}
    </li>
  );
};

export default SidebarItemContent;
