import { combineReducers, compose, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { themeReducer } from "./reducers/themeReducer";

// складаєм всі редюсери в один
const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  // тут можна додати інші reducers, якщо є потреба
});

export const store = createStore(
  rootReducer,
  {},
  // Підключити redux devtools
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
