import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import TabNavs from "./TabNavs";

interface ITab {
  defaultTab?: string;
  tabs: Map<string, string>;
}

const Tab = ({ defaultTab, tabs }: ITab) => {
  const { replace, query, isReady } = useRouter();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (!isReady) return;

    const currentTab = query.tab;
    const isDefaultTabValid = defaultTab ? tabs.has(defaultTab) : false;
    const selectedDefaultTab = isDefaultTabValid
      ? defaultTab
      : tabs.keys().next().value ?? "";

    // if tab is string[] remove the tab
    if (Array.isArray(currentTab)) {
      delete query.tab;
      replace({ query: query });
      return;
    }
    // if undefined show the defaultTab
    if (currentTab === undefined) {
      setSelectedTab(selectedDefaultTab);
      return;
    }

    // if string check if its a valid tab
    if (typeof currentTab === "string") {
      if (tabs.has(currentTab)) {
        setSelectedTab(currentTab);
      } else {
        let newQuery = query;
        if (selectedDefaultTab === "") {
          delete newQuery.tab;
        } else {
          newQuery = { ...newQuery, tab: selectedDefaultTab };
        }
        // if not replace to the default Tab
        replace({ query: newQuery });
      }
    }
  }, [defaultTab, isReady, query, replace, tabs]);

  return (
    <div>
      <TabNavs tabs={tabs} selectedTab={selectedTab} defaultTab={defaultTab} />
    </div>
  );
};

export default Tab;
