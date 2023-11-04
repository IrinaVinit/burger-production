import { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext }
    from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light';

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const DefaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={DefaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
