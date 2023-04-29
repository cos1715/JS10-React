import { ReactNode, createContext, useState } from "react";

interface IContext {
  theme: "dark" | "light";
  setTheme: (arg: "dark" | "light") => void;
}

export const ThemeContext = createContext<IContext>({
  theme: "dark",
  setTheme: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
