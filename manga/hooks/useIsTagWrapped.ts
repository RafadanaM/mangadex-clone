import { RefObject, useEffect, useMemo, useState } from "react";

/*
 I can abstract away the ResizeObsever to its own hook
 but in this project's case I think I will not use ResizeObserver
 besides this case so I will not abstract it
*/
const useIsTagWrapped = <T extends HTMLElement>(
  refs: RefObject<T | null>[]
) => {
  const [isWrapped, setIsWrapped] = useState<boolean[]>(() =>
    Array(refs.length).fill(false)
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries) {
        entries.forEach((entry, idx) => {
          const children = Array.from(entry.target.children).filter(
            (child) => child.nodeName !== "BUTTON"
          );

          const firstChild = children.shift();
          const lastChild = children.pop();

          if (firstChild && lastChild) {
            const { top: firstTop } = firstChild.getClientRects()[0];
            const { top: lastTop } = lastChild.getClientRects()[0];

            if (lastTop > firstTop) {
              setIsWrapped((prevState) => {
                const current = [...prevState];
                current[idx] = true;

                return [...current];
              });
            } else {
              setIsWrapped((prevState) => {
                const current = [...prevState];
                current[idx] = false;
                return [...current];
              });
            }
          }
        });
      }
    });

    refs.forEach((ref) => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [refs]);

  const data = useMemo(() => isWrapped, [isWrapped]);

  return data;
};

export default useIsTagWrapped;
