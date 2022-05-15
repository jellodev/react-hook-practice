import React, { useEffect, useState } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  // ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate
  useEffect(sayHello, []);
  return (
    <div className="App">
      <div>hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setSecondNumber(secondNumber + 1)}>
        {secondNumber}
      </button>
    </div>
  );
};

export default App;
