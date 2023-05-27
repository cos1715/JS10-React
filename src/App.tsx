import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoList } from "components/todo-list";
import { ThemeChanger } from "components/theme-changer/theme-changer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeChanger />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
