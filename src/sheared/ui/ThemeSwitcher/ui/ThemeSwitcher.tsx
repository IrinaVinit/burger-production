import { classNames } from "sheared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import ThemeIcon from "sheared/assets/icons/theme-icon.svg";
import { Button, ThemeButton } from "sheared/ui/Button/Button";


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();
  return (
    <Button
    theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toogleTheme}
    >
      {theme === 'dark' ? <ThemeIcon fill="#FFC700"/> : theme === 'light' ? <ThemeIcon fill="#0115C6" /> : <ThemeIcon fill="#0a0a0a" />}
    </Button>
  );
};


