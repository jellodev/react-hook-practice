import { useRef, useEffect } from "react";

export const useClick = (onclick) => {
  const element = useRef();
  useEffect(() => {
    const currentElement = element.current;
    if (typeof onclick !== "function") return;
    if (currentElement) currentElement.addEventListener("click", onclick);

    // componentWillUnMount
    return () => {
      if (currentElement) currentElement.removeEventListener("click", onclick);
    };
  }, []);
  return element;
};
