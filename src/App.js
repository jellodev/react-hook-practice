import React, { useEffect, useRef } from "react";

const useClick = (onclick) => {
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

const App = () => {
  const sayHello = () => {
    console.log("say Hello");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
