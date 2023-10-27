import { classNames } from "sheared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import AppLink from "sheared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string;
  }

const NavBar = ({ className }: NavBarProps) => {
    return (
        <nav className={classNames(cls.navList, {}, [className, 'pb-4', 'pt-4'])}>
            <AppLink to={"/"}>
              {/* <p className="text text_type_main-default pl-2"> */}
                Конструктор
                {/* </p> */}
            </AppLink>
            <AppLink to={"/feed"}>
              {/* <p className="text text_type_main-default pl-2"> */}
                Лента заказов
                {/* </p> */}
            </AppLink>
          </nav>
    );
};

export default NavBar;