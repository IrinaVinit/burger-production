import { useTranslation } from 'react-i18next';

const FeedPage = () => {
    const { t } = useTranslation('feedPage');
    return (
        <div>
            {t('Лента заказов')}
        </div>
    );
};

export default FeedPage;
