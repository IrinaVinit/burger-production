import { useTranslation } from "react-i18next";


const LoginPage = () => {
  const { t, i18n } = useTranslation();
    return (
        <div>
          {t('Личный кабинет')}
        </div>
    );
};

export default LoginPage;