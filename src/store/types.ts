import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export interface IAction<T> {
  type: string;
  payload: T;
}

export type TThunkDispatch<T = void, Y = any> = ThunkDispatch<
  IStore,
  T,
  Action<Y>
>;

export interface ITodoItem {
  id: string;
  content: string;
  completed: boolean;
}

export interface ILoadable<T, Y> {
  loading: boolean;
  data: null | T;
  error: null | Y;
}

export interface IProducts {
  productsList: ILoadable<any, any>;
  product: ILoadable<any, any>;
}

export interface IStore {
  todo: ITodoItem[];
  theme: "dark" | "light";
  products: IProducts;
}
