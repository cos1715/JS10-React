import { Provider } from "react-redux";
import { store } from "./store/store";
import { Routes } from "routes/routes";

import "./App.css";

function App() {
  console.log(import.meta.env.VITE_ACCESS_TOKEN);
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
