import { createContext } from 'react';

export type Theme = 'light' | 'dark' | 'blue'

export interface ThemeContextProps {
  theme?: Theme | any
  setTheme?: any
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
