import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme, setTheme])

    return (
       <ThemeContext.Provider value={defaultValue}>
           {children}
       </ThemeContext.Provider>
    );
};

export default ThemeProvider;