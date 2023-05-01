import { ReactNode, createContext, useState } from "react";

interface IContext {
  theme: "dark" | "light";
  setTheme: (arg: "dark" | "light") => void;
}

// Context used to pass data between components without explicitly passing props
// Context data can be used in all child elements
// Create a context with initial data
// Export context to us it in hook useContext
export const ThemeContext = createContext<IContext>({
  theme: "dark",
  setTheme: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

// Common practice is to create providers for contexts
export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    // Set context in elements tree
    // Pass values to context
    // Here values are synced with state
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
