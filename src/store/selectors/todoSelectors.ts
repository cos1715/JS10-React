import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useTodoSelector = () => {
  const todo = useSelector((state: IStore) => state.todo);

  return todo;
};
