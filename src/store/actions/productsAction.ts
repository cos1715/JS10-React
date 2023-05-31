import { Dispatch } from "redux";
import { IProducts, IAction } from "../types";

// Тип action
export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

type TProductsLoadStartedAction = Omit<IAction<never>, "payload">;
export type TProductsLoadSuccessfulAction = IAction<IProducts["data"]>;
export type TProductsLoadFailedAction = IAction<IProducts["error"]>;
export type TProductsActions =
  | TProductsLoadStartedAction
  | TProductsLoadSuccessfulAction
  | TProductsLoadFailedAction;

const productsLoadStarted = (): TProductsLoadStartedAction => ({
  type: PRODUCTS_LOADING,
});

const productsLoadSuccessful = (
  products: unknown
): TProductsLoadSuccessfulAction => ({
  type: PRODUCTS_SUCCESS,
  payload: products,
});

const productsLoadFailed = (error: string): TProductsLoadFailedAction => ({
  type: PRODUCTS_ERROR,
  payload: error,
});

export const fetchProducts = () => {
  return (dispatch: Dispatch<TProductsActions>) => {
    dispatch(productsLoadStarted());
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((products) => dispatch(productsLoadSuccessful(products)))
      .catch((error) => dispatch(productsLoadFailed(error)));
  };
};
