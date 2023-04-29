import { useContext } from "react";
import { ThemeContext } from "providers/theme-provider";

export const ThemeButton = () => {
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
