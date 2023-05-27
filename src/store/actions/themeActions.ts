import { IAction, IStore } from "../types";

export const CHANGE_THEME = "CHANGE_THEME";

export const changeAction = (
  theme: IStore["theme"]
): IAction<IStore["theme"]> => {
  return { type: CHANGE_THEME, payload: theme };
};
