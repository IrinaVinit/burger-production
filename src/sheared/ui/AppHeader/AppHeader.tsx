import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./AppHeader.module.scss";
import { NavBar } from "widgets/NavBar";
import { classNames } from "sheared/lib/classNames/classNames";
import AppLink from "../AppLink/AppLink";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTranslation } from "react-i18next";


interface AppHeader {
  className?: string;
}

export const AppHeader = ({className}: AppHeader) => {
  const { t, i18n } = useTranslation();
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={cls.wrapper}>
        <div className={cls.container}>
          
         <NavBar/>
          {/* <Logo /> */}
          <div>Logo</div>
          <div className={`${cls.account} pb-4 pt-4 pl-5 pr-5`}>
              <AppLink to={"/login"}> {t('Личный кабинет')}               
              </AppLink>
            <ThemeSwitcher/>  
            </div>
        </div>
      </div>
    </header>
  );
}
