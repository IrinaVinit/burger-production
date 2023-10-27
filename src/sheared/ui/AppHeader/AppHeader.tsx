import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./AppHeader.module.scss";
import { useTheme } from "../../../app/providers/ThemeProvider/ui";
import { NavBar } from "widgets/NavBar";
import { classNames } from "sheared/lib/classNames/classNames";
import AppLink from "../AppLink/AppLink";

interface AppHeader {
  className?: string;
}

export const AppHeader = ({className}: AppHeader) => {
  const {toogleTheme} = useTheme();

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={cls.wrapper}>
        <div className={cls.container}>
         <NavBar/>
          {/* <Logo /> */}
          <div>Logo</div>
          <div className={`${cls.account} pb-4 pt-4 pl-5 pr-5`}>
              <AppLink to={"/login"}>Личный кабинет                
              </AppLink>
              <button onClick={toogleTheme}>ch</button>
            </div>
        </div>
      </div>
    </header>
  );
}
