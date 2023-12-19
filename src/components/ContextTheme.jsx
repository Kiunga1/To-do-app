import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ContextTheme = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const themeHandler = () => setDarkMode(prev => !prev);

    return(
        <ThemeContext.Provider value={{darkMode, themeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const GetThemeValues = () => useContext(ThemeContext)