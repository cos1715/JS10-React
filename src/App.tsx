import { Provider } from "react-redux";
import { Octokit } from "@octokit/core";
import { store } from "./store/store";
import { Routes } from "routes/routes";
import { VITE_ACCESS_TOKEN } from "./const";

import "./App.css";

export const octokit = new Octokit({
  auth: VITE_ACCESS_TOKEN,
});

export const fetchUsers = async (id: number) => {
  const resp = await fetch(`https://dummyjson.com/users/${id}`);
  return resp.json();
};

export const sum = (a: number, b: number) => {
  return a + b;
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
