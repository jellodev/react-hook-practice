import React from "react";
import { useAxios } from "./UseAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/list_movies.json",
    data: {},
    error: null,
  });

  console.log([data, error.message]);
  console.log(loading ? "loading" : "done");

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
export default App;
