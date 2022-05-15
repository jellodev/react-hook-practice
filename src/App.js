import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) return;
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") return;
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const fireNotification = useNotification("hi", {});
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={fireNotification}>Notification</button>
    </div>
  );
};
export default App;
