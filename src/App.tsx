import { Octokit } from "@octokit/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./store/store";
import { Routes } from "routes/routes";
import { AuthProvider } from "providers/auth";
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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="App">
          <Routes />
        </div>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
