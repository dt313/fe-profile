import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './components/global-style/GlobalStyle.jsx';
import MouseContextProvider from './context/mouse-context.jsx';
import ThemeContextProvider from './context/theme-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyle>
        <React.StrictMode>
            <ThemeContextProvider>
                <MouseContextProvider>
                    <App />
                </MouseContextProvider>
            </ThemeContextProvider>
        </React.StrictMode>
    </GlobalStyle>,
);
