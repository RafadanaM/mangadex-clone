import { useEffect, useState } from "react";

// src: https://usehooks-ts.com/react-hook/use-media-query
function useMediaQuery(query: string): [boolean, boolean] {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    matchMedia.addEventListener("change", handleChange);
    setLoading(false);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return [loading, matches];
}

export default useMediaQuery;
