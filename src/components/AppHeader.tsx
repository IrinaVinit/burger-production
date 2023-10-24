import { Link } from "react-router-dom";
import cls from "./AppHeader.module.scss";

export function AppHeader() {
  return (
    <header className={cls.header}>
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <Link to={"/"}>главная</Link>
          <Link to={"/login"}>профиль</Link>
          <Link to={"/feed"}>лента заказов</Link>
        </div>
      </div>
    </header>
  );
}
