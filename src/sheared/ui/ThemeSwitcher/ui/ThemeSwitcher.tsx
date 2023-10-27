import { classNames } from "sheared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider/ui";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toogleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toogleTheme}
    >
      ch
    </button>
  );
};

export default ThemeSwitcher;
