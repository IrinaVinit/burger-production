import { Button, ThemeButton } from 'sheared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../sheared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={toogle}
        >
            RU
        </Button>
    );
};
