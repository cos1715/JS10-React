import { useDispatch } from "react-redux";
import { useThemeSelector } from "../../store/selectors/themeSelector";
import { changeAction } from "../../store/actions/themeActions";

export const ThemeChanger = () => {
  const theme = useThemeSelector();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeAction(theme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button onClick={onClick}>Change Theme</button>
      <p>{theme}</p>
    </div>
  );
};
