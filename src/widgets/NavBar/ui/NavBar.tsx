import { classNames } from "sheared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import AppLink from "sheared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "sheared/ui/LangSwitcher/ui/LangSwitcher";

interface NavBarProps {
    className?: string;
  }

const NavBar = ({ className }: NavBarProps) => {
  const { t, i18n } = useTranslation();
    return (
        <nav className={classNames(cls.navList, {}, [className, 'pb-4', 'pt-4'])}>
            <LangSwitcher/>
            <AppLink to={"/"}>
            {t('Конструктор')}
            </AppLink>
            <AppLink to={"/feed"}>
            {t('Лента заказов')}
                
      
            </AppLink>
          </nav>
    );
};

export default NavBar;