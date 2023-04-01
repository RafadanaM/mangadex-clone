import { RefObject, useEffect } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  onClickOutside?: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if ref element exist, check if ref target is HTMLElement, check if the clicked element does not contain the ref element
      if (
        ref.current &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target)
      ) {
        onClickOutside?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useOutsideClick;
