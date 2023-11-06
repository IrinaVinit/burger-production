import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t, i18n } = useTranslation('translation');
    return (
        <main className={cls.main}>
            {t('Конструктор')}
        </main>
    );
};

export default MainPage;
