import { ITodoItem, IAction } from "../types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export interface IAddTodoAction extends IAction<ITodoItem> {
  type: typeof ADD_TODO;
}

export interface IDeleteTodoAction extends IAction<ITodoItem["id"]> {
  type: typeof DELETE_TODO;
}

export interface IUpdateTodoAction
  extends IAction<{ id: ITodoItem["id"]; completed: ITodoItem["completed"] }> {
  type: typeof UPDATE_TODO;
}

export const addTodo = (todo: ITodoItem): IAddTodoAction => {
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id: ITodoItem["id"]): IDeleteTodoAction => {
  return { type: DELETE_TODO, payload: id };
};

export const updateTodo = (
  id: ITodoItem["id"],
  completed: ITodoItem["completed"]
): IUpdateTodoAction => {
  return { type: UPDATE_TODO, payload: { id, completed } };
};
