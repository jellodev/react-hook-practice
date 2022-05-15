import React, { useState } from "react";
import { useInput } from "./UseInput";
import { useTabs } from "./UseTab";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "section 2",
    content: "I'm the content of Section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
