import React from "react";

const useConfirm = (message, callback, rejection) => {
  if (typeof callback !== "function") return;
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("bye");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  const abort = () => console.log("abort");
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
