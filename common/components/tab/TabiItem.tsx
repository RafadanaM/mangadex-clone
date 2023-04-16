import { ReactNode } from "react";

export interface ITabItem {
  id: string;
  title: string;
  children: ReactNode;
}

const TabiItem = ({ title, children, id }: ITabItem) => {
  return <div>{children}</div>;
};

export default TabiItem;
