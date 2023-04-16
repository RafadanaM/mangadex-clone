import {
  ReactElement,
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ITabItem } from "./TabiItem";
import TabNav from "./TabNav";
import { useRouter } from "next/router";
import TabNavs from "./TabNavs";

interface ITab {
  children: ReactElement<ITabItem>[];
  defaultTab?: string;
}

const Tab = ({ children, defaultTab }: ITab) => {
  const { replace, query, isReady } = useRouter();

  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    if (!isReady) return;

    const currentTab = query.tab;

    if (currentTab === undefined) {
      const chosenTab = children.at(0);
      if (chosenTab !== undefined) {
        setSelectedTab(chosenTab.props.id);
      } else {
        setSelectedTab("");
      }
    } else if (
      typeof currentTab === "string" &&
      children.map((child) => child.props.id).includes(currentTab)
    ) {
      setSelectedTab(currentTab);
    } else {
      let newQuery = query;
      if (
        defaultTab === undefined ||
        (defaultTab &&
          !children.map((child) => child.props.id).includes(defaultTab))
      ) {
        delete newQuery.tab;
      } else {
        newQuery = { ...newQuery, tab: defaultTab };
      }

      replace({ query: newQuery }, undefined, { shallow: true });
    }
  }, [query, isReady, defaultTab, children, replace]);

  return (
    <div>
      <TabNavs items={children} selectedTab={selectedTab} />
      {children.filter((child) => child.props.id === selectedTab)}
    </div>
  );
};

export default Tab;
