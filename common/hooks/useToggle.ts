import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggleState];
};

export default useToggle;
