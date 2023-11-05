import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'sheared/lib/classNames/classNames';
import { AppHeader } from 'sheared/ui/AppHeader/AppHeader';
import Loader from 'sheared/ui/Loader/Loader';
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
