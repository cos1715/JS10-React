export interface IAction<T> {
  type: string;
  payload: T;
}

export interface ITodoItem {
  id: string;
  content: string;
  completed: boolean;
}

export interface IStore {
  todo: ITodoItem[];
  theme: "dark" | "light";
}
