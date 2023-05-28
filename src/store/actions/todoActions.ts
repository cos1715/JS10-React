import { ITodoItem, IAction } from "../types";

// Тип action
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export type TAddTodoAction = IAction<ITodoItem>
export type TDeleteTodoAction = IAction<ITodoItem["id"]> 
export type TUpdateTodoAction
  = IAction<{ id: ITodoItem["id"]; completed: ITodoItem["completed"] }>

// Функція яка повертає action
export const addTodo = (todo: ITodoItem): TAddTodoAction => {
  // action
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id: ITodoItem["id"]): TDeleteTodoAction => {
  return { type: DELETE_TODO, payload: id };
};

export const updateTodo = (
  id: ITodoItem["id"],
  completed: ITodoItem["completed"]
): TUpdateTodoAction => {
  return { type: UPDATE_TODO, payload: { id, completed } };
};
