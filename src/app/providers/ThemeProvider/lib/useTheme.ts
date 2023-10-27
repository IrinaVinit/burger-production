import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toogleTheme: () => void;
    theme: Theme;
}


export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

const toogleTheme = ()=> {
 const newTheme = theme === 'dark' ? 'light' :  theme === 'light' ? 'blue' : 'dark';
 setTheme(newTheme);
 localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
}
return {
    theme, toogleTheme
}
}