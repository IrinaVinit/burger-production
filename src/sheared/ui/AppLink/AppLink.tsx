import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import { classNames } from "sheared/lib/classNames/classNames";

interface AppLinkProps extends LinkProps {
    className?: string;
  }

const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, 
        ...otherProps} = props;
    return (
        <Link to = {to} 
        className={classNames(cls.appLink, {}, [className])}
        {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;