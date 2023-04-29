import { useCallback, useState } from "react";

const useClientRect = (): [
  DOMRect | undefined,
  (node: HTMLElement | null) => void
] => {
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const ref = useCallback((node: HTMLElement | null): void => {
    if (node) setRect(node.getBoundingClientRect());
  }, []);

  return [rect, ref];
};

export default useClientRect;
