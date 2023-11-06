import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppHeader } from 'shared/ui/AppHeader/AppHeader';
import PageLoader from 'widgets/PageLoader/PageLoader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <AppHeader />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
