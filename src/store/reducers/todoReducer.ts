import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/todoActions";
import { IAction, IStore } from "../types";

export const todoReducer = (
  state: IStore["todo"] = [],
  action: IAction<any>
) => {
  console.log(state, action);

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo;
      });
    default:
      return state;
  }
};
