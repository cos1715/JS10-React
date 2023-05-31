import { IStore } from "../types";
import {
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
  TProductsActions,
  TProductsLoadSuccessfulAction,
  TProductsLoadFailedAction,
} from "../actions/productsAction";

const initialState: IStore["products"] = {
  loading: false,
  data: null,
  error: null,
};

const productsLoadStarted = (state: IStore["products"]) => ({
  ...state,
  loading: true,
});

const productsLoadSuccessful = (
  state: IStore["products"],
  action: TProductsLoadSuccessfulAction
): IStore["products"] => ({
  ...state,
  data: action.payload,
  loading: false,
});

const productsLoadFailed = (
  state: IStore["products"],
  action: TProductsLoadFailedAction
): IStore["products"] => ({
  ...state,
  loading: false,
  error: action.payload,
});

export const productsReducer = (
  state: IStore["products"] = initialState,
  action: TProductsActions
) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return productsLoadStarted(state);
    case PRODUCTS_SUCCESS:
      return productsLoadSuccessful(
        state,
        action as TProductsLoadSuccessfulAction
      );
    case PRODUCTS_ERROR:
      return productsLoadFailed(state, action as TProductsLoadFailedAction);
    default:
      return state;
  }
};
