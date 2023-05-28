import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TAddTodoAction,
  TDeleteTodoAction,
  TUpdateTodoAction,
} from "../actions/todoActions";
import { IAction, IStore } from "../types";

const addTodo = (state: IStore["todo"], action: TAddTodoAction) => {
  return [...state, action.payload];
};

const deleteTodo = (state: IStore["todo"], action: TDeleteTodoAction) => {
  return state.filter((todo) => todo.id !== action.payload);
};

const updateTodo = (state: IStore["todo"], action: TUpdateTodoAction) => {
  return state.map((todo) => {
    return todo.id === action.payload.id
      ? { ...todo, completed: action.payload.completed }
      : todo;
  });
};

export const todoReducer = (
  // не забудьте передати початкове значення
  state: IStore["todo"] = [],
  action: IAction<unknown>
) => {
  // перевіряєм тип action
  switch (action.type) {
    case ADD_TODO:
      // обробляєм action і повертаєм нове значення store
      return addTodo(state, action as TAddTodoAction);
    case DELETE_TODO:
      return deleteTodo(state, action as TDeleteTodoAction);
    case UPDATE_TODO:
      return updateTodo(state, action as TUpdateTodoAction);
    // не забудьте поставити default провірку
    default:
      return state;
  }
};
