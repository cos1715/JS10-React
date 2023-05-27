import { ITodoItem, IAction } from "../types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (todo: ITodoItem) => {
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id: ITodoItem["id"]): IAction<ITodoItem["id"]> => {
  return { type: DELETE_TODO, payload: id };
};

export const updateTodo = (
  id: ITodoItem["id"],
  completed: ITodoItem["completed"]
): IAction<{ id: ITodoItem["id"]; completed: ITodoItem["completed"] }> => {
  return { type: UPDATE_TODO, payload: { id, completed } };
};
