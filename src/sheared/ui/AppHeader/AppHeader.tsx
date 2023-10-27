import { Link } from "react-router-dom";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./AppHeader.module.scss";
import { useTheme } from "../../../app/providers/ThemeProvider/ui";
import NavBar from "widgets/NavBar/ui/NavBar";


export function AppHeader() {
  const {toogleTheme} = useTheme();

  
  return (
    <header>
      <div className={cls.wrapper}>
        <div className={cls.container}>
         <NavBar/>
          {/* <Logo /> */}
          <div>Logo</div>
          <div className={`${cls.account} pb-4 pt-4 pl-5 pr-5`}>
              <Link to={"/login"}>
                <p className="text text_type_main-default pl-2 pr-5">Личный кабинет</p>
              </Link>
              <button onClick={toogleTheme}>ch</button>
            </div>
        </div>

      </div>
    </header>
  );
}
