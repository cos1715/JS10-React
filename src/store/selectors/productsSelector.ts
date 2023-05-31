import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useProductSelector = () => {
  return useSelector((state: IStore) => state.products);
};
