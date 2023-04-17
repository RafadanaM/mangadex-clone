import { RefObject, createRef, useEffect, useMemo, useRef } from "react";
import TabNav from "./TabNav";
interface ITabNavs {
  selectedTab: string;
  defaultTab?: string;
  tabs: Map<string, string>;
}

const TabNavs = ({ selectedTab, tabs, defaultTab }: ITabNavs) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLElement>(null);

  const tabNavs = useMemo(() => {
    const arr: {
      id: string;
      title: string;
      ref: RefObject<HTMLLIElement>;
    }[] = [];
    tabs.forEach((title, id) => {
      arr.push({
        id,
        title,
        ref: createRef<HTMLLIElement>(),
      });
    });

    return arr;
  }, [tabs]);

  useEffect(() => {
    const tab = selectedTab !== "" ? selectedTab : defaultTab;
    const selectedChild = tabNavs.filter((child) => child.id === tab).at(0);

    if (
      selectedChild !== undefined &&
      selectedChild.ref.current &&
      trackRef.current &&
      parentRef.current
    ) {
      const childRect = selectedChild.ref.current.getBoundingClientRect();
      trackRef.current.style.left = `${
        childRect.left - parentRef.current.getBoundingClientRect().left
      }px`;
      trackRef.current.style.width = `${childRect.width}px`;
    }
  }, [tabNavs, selectedTab, defaultTab]);

  return (
    <nav ref={parentRef} className="overflow-auto">
      <ul className="inline-flex relative items-center gap-2 bg-secondary p-1 rounded-sm">
        <div
          ref={trackRef}
          className="absolute transition-all shadow-md left-1 bottom-1 top-1 rounded-sm bg-black"
        />

        {tabNavs.map(({ id, title, ref }, idx) => (
          <TabNav
            ref={ref}
            id={id}
            key={idx}
            active={selectedTab === "" ? defaultTab === id : selectedTab === id}
          >
            {title}
          </TabNav>
        ))}
      </ul>
    </nav>
  );
};

export default TabNavs;
