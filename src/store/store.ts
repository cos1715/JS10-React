import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";
import { themeReducer } from "./reducers/themeReducer";
import { productsReducer } from "./reducers/productsReducer";

// складаєм всі редюсери в один
const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  products: productsReducer,
  // тут можна додати інші reducers, якщо є потреба
});

// змінна яка перевіряє який compose використати
// якщо встановлений REDUX_DEVTOOLS_EXTENSION то берем від нього compose якщо ні то стандартний
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);
