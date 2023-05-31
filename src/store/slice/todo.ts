import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { IStore, ITodoItem } from "store/types";

const initialState: IStore["todo"] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export const useTodoSelector = () => {
  const todo = useAppSelector((state) => state.todo);

  return todo;
};
