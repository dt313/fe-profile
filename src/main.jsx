import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './components/global-style/GlobalStyle.jsx';
import MouseContextProvider from './context/mouse-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyle>
        <React.StrictMode>
            <MouseContextProvider>
                <App />
            </MouseContextProvider>
        </React.StrictMode>
    </GlobalStyle>,
);
