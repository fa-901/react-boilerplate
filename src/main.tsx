import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';
import App from './App.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
