import { Button, ThemeButton } from "sheared/ui/Button/Button";
import { classNames } from "../../../../sheared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";


interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toogle}
    >
      RU
    </Button>
  );
};
