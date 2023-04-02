import { RefObject, useEffect, useMemo, useState } from "react";

/*
 I can abstract away the ResizeObsever to its own hook
 but in this project's case I think I will not use ResizeObserver
 besides this case so I will not abstract it
*/
const useIsTagWrapped = <T extends HTMLElement>(
  refs: RefObject<T | null>[]
) => {
  const [isOverflow, setIsOverflow] = useState<boolean[]>(() =>
    Array(refs.length).fill(false)
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries) {
        entries.forEach((entry, idx) => {
          const isOverflow =
            entry.target.scrollHeight > entry.target.clientHeight;
          setIsOverflow((prevState) => {
            if (prevState[idx] === isOverflow) return prevState;

            return [
              ...prevState.slice(0, idx),
              isOverflow,
              ...prevState.slice(idx + 1),
            ];
          });
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

  const data = useMemo(() => isOverflow, [isOverflow]);

  return data;
};

export default useIsTagWrapped;
