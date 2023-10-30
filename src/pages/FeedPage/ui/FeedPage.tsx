import { useTranslation } from "react-i18next";

const FeedPage = () => {
    const { t, i18n } = useTranslation('feedPage');
    return (
        <div>
               {t('Лента заказов')}
        </div>
    );
};

export default FeedPage;