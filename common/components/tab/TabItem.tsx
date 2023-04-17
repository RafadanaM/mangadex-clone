import { useRouter } from "next/router";
import { ReactNode } from "react";

export interface ITabItem {
  id: string;
  defaultTab?: boolean;
  children: ReactNode;
}

const TabItem = ({ children, id, defaultTab = false }: ITabItem) => {
  const { query } = useRouter();

  if (query.tab === undefined ? defaultTab : query.tab === id)
    return <div>{children}</div>;

  return null;
};

export default TabItem;
