import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  IAddTodoAction,
  IDeleteTodoAction,
  IUpdateTodoAction,
} from "../actions/todoActions";
import { IAction, IStore } from "../types";

const addTodo = (state: IStore["todo"], action: IAddTodoAction) => {
  return [...state, action.payload];
};

const deleteTodo = (state: IStore["todo"], action: IDeleteTodoAction) => {
  return state.filter((todo) => todo.id !== action.payload);
};

const updateTodo = (state: IStore["todo"], action: IUpdateTodoAction) => {
  return state.map((todo) => {
    return todo.id === action.payload.id
      ? { ...todo, completed: action.payload.completed }
      : todo;
  });
};

export const todoReducer = (
  state: IStore["todo"] = [],
  action: IAction<unknown>
) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action as IAddTodoAction);
    case DELETE_TODO:
      return deleteTodo(state, action as IDeleteTodoAction);
    case UPDATE_TODO:
      return updateTodo(state, action as IUpdateTodoAction);
    default:
      return state;
  }
};
