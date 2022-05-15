import React, { useRef } from "react";

const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="test"></input>
    </div>
  );
};

export default App;
