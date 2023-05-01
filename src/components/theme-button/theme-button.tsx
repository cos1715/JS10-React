import { useContext } from "react";
import { ThemeContext } from "providers/theme-provider";

export const ThemeButton = () => {
  // Usage of context
  // Values returned from context equal to values passed in value prop in provider
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <p>current theme: {theme}</p>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change theme
      </button>
    </>
  );
};
