import { classNames } from 'sheared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton | any
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '', children, theme, ...otherProps
    } = props;

    return (
        <button type="button" className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
