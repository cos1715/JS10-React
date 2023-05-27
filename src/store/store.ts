import { combineReducers, compose, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { themeReducer } from "./reducers/themeReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

export const store = createStore(
  rootReducer,
  {},
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
