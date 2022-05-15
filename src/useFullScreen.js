import { useRef } from "react";
export const useFullScreen = (onFullScreen) => {
  const element = useRef();
  console.log(element);
  const triggerFull = () => {
    if (!element.current) return;
    element.current.requestFullScreen();
    if (onFullScreen || typeof onFullScreen === "function") onFullScreen(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (onFullScreen || typeof onFullScreen === "function") onFullScreen(false);
  };
  return { element, triggerFull, exitFull };
};
