import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useThemeSelector = () => {
  return useSelector((state: IStore) => state.theme);
};
