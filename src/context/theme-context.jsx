import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    handleChangeTheme: () => {},
});

const ThemeContextProvider = (props) => {
    // Initialize theme from localStorage or default to 'dark'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    const handleChangeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme to localStorage
    };

    useEffect(() => {
        // Sync theme with localStorage on mount
        localStorage.setItem('theme', theme);
    }, [theme]);

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
