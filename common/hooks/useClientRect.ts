import { useCallback, useState } from "react";

const useClientRect = (
  deps: any[] = []
): [DOMRect | undefined, (node: HTMLElement | null) => void] => {
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const ref = useCallback(
    (node: HTMLElement | null): void => {
      if (node) setRect(node.getBoundingClientRect());
      console.log("run");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps]
  );

  return [rect, ref];
};

export default useClientRect;
