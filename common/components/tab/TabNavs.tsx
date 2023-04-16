import { ReactElement, createRef, useEffect, useMemo, useRef } from "react";
import { ITabItem } from "./TabiItem";
import TabNav from "./TabNav";

interface ITabNavs {
  items: ReactElement<ITabItem>[];
  selectedTab: string;
}

const TabNavs = ({ items, selectedTab }: ITabNavs) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLElement>(null);

  const tabNavs = useMemo(
    () =>
      items.map((child) => ({
        id: child.props.id,
        title: child.props.title,
        ref: createRef<HTMLLIElement>(),
      })),
    [items]
  );

  useEffect(() => {
    const selectedChild = tabNavs
      .filter((child) => child.id === selectedTab)
      .at(0);

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
  }, [tabNavs, selectedTab]);

  return (
    <nav ref={parentRef}>
      <ul className="inline-flex relative items-center gap-2 bg-secondary p-1 rounded-sm">
        <div
          ref={trackRef}
          className="absolute transition-all shadow-md left-1 bottom-1 top-1 rounded-sm bg-black"
        />
        {tabNavs.map(({ id, title, ref }, idx) => (
          <TabNav ref={ref} id={id} key={idx} active={selectedTab === id}>
            {title}
          </TabNav>
        ))}
      </ul>
    </nav>
  );
};

export default TabNavs;
