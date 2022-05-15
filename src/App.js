import React from "react";
import { useInput } from "./UseInput";

const App = () => {
  const validator = (value) => !value.includes("@");
  const name = useInput("jello", validator);
  return (
    <div>
      <h1>hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
