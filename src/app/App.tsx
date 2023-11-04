import './styles/index.scss';
import { Suspense } from 'react';

import { classNames } from 'sheared/lib/classNames/classNames';
import { AppHeader } from 'sheared/ui/AppHeader/AppHeader';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading">
                <AppHeader />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
