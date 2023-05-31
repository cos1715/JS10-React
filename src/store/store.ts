import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slice/todo";
import { themeReducer } from "./slice/theme";
import { productsReducer } from "./slice/products";

// створити стор
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
