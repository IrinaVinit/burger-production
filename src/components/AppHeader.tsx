import { Link } from "react-router-dom";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./AppHeader.module.scss";

export function AppHeader() {
  return (
    <header>
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <nav className={`${cls.navList} pb-4 pt-4`}>
            <Link to={"/"}>
              {" "}
              <p className="text text_type_main-default pl-2">Конструктор</p>
            </Link>
            <Link to={"/feed"}>
              {" "}
              <p className="text text_type_main-default pl-2">Лента заказов</p>
            </Link>
           
          </nav>
          {/* <Logo /> */}
          <div>Logo</div>
          <div className={`${cls.account} pb-4 pt-4 pl-5 pr-5`}>
              <Link to={"/login"}>
                <p className="text text_type_main-default pl-2 pr-5">Личный кабинет</p>
              </Link>
            </div>
        </div>

      </div>
    </header>
  );
}