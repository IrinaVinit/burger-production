import { AppHeader } from "../sheared/ui/AppHeader/AppHeader";
import "./styles/index.scss";
import { classNames } from "../sheared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Comp = () => {
  const { t, i18n } = useTranslation();
  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <>
     <h1>{t('Конструктор')}</h1>
     <button onClick={toogle}>EN</button>
    </>
  )
  
 
}


const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
      <AppHeader />
      <Comp/>
      <AppRouter/>
      </Suspense>
    </div>
  );
};

export default App;
