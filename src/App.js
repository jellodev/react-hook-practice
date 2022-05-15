import React, { useRef } from "react";

const useFullScreen = (onFullScreen) => {
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

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "full" : "small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img
        ref={element}
        src="https://i.ibb.co/R6RwNxx/grape.jpg"
        alt="test-img"
      />

      <button onClick={triggerFull}>Make Full screen</button>
      <button onClick={exitFull}>Exit Full screen</button>
    </div>
  );
};

export default App;
