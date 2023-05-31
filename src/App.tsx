import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoList } from "components/todo-list";
import { ThemeChanger } from "components/theme-changer/theme-changer";
import { Products } from "components/products";

import "./App.css";

function App() {
  return (
    // Використовуєм Provider щоб мати доступ до store в компонентах
    <Provider store={store}>
      <div className="App">
        <Products />
        <ThemeChanger />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
