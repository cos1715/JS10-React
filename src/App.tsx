import { Provider } from "react-redux";
import { Octokit } from "@octokit/core";
import { store } from "./store/store";
import { Routes } from "routes/routes";

import "./App.css";

export const octokit = new Octokit({
  auth: import.meta.env.VITE_ACCESS_TOKEN,
});

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
