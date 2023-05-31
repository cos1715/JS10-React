import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "store/types";
import { useAppSelector } from "../hooks";

const initialState: IStore["theme"] = "dark";

// створюєм слайс стору
const themeSlice = createSlice({
  // обов'зково ім'я
  // це для перфіксу екшенів
  name: "theme",
  // обов'зково початковий стан
  initialState: initialState,
  // обов'зково редюсери
  reducers: {
    changeTheme: (_, action) => {
      return action.payload;
    },
  },
});

// зі слайсу дістаєм екшен
// ім'я екшена така сама як в редюсера
export const { changeTheme } = themeSlice.actions;

// зі слайсу дістаєм редюсер
// цей редюсер використовуєм в configureStore
export const themeReducer = themeSlice.reducer;

export const useThemeSelector = () => {
  return useAppSelector((state) => state.theme);
};
