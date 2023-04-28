import { useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  function toggleState() {
    setState((prevState) => !prevState);
  }

  return [state, toggleState];
};

export default useToggle;
