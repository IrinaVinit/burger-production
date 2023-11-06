import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavBar } from 'widgets/NavBar';
import { classNames } from 'sheared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AppHeader.module.scss';
import AppLink from '../AppLink/AppLink';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/ui/LangSwitcher';

interface AppHeaderRes {
  className?: string;
}

export const AppHeader = ({ className = '' }: AppHeaderRes) => {
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className={cls.wrapper}>
                <div className={cls.container}>
                    <NavBar />
                    {/* <Logo /> */}
                    <div>
                        {' '}
                        {t('Лого')}
                    </div>
                    <div className={`${cls.account} pb-4 pt-4 pl-5 pr-5`}>
                        <AppLink to="/login">
                            {t('Личный кабинет')}
                        </AppLink>
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};
