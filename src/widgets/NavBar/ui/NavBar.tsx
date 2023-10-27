import { Link } from "react-router-dom";
import { classNames } from "sheared/lib/classNames/classNames";
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
  }

const NavBar = ({ className }: NavBarProps) => {
    return (
        <nav className={classNames(cls.navList, {}, [className, 'pb-4', 'pt-4'])}>
            <Link to={"/"}>
              {" "}
              <p className="text text_type_main-default pl-2">Конструктор</p>
            </Link>
            <Link to={"/feed"}>
              {" "}
              <p className="text text_type_main-default pl-2">Лента заказов</p>
            </Link>
           
          </nav>
    );
};

export default NavBar;