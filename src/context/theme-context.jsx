import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    handleChangeTheme: () => {},
});

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('dark');

    const handleChangeTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                handleChangeTheme: handleChangeTheme,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
