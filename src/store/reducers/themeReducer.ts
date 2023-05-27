import { CHANGE_THEME } from "../actions/themeActions";
import { IAction, IStore } from "../types";

export const themeReducer = (
  state: IStore["theme"] = "dark",
  action: IAction<IStore["theme"]>
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};
