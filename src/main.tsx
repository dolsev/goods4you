import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPageTemplate from './components/templates/MainPageTemplate';
import GlobalStyles from './styles/GlobalStyles'; // Import GlobalStyles

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <MainPageTemplate />
    </React.StrictMode>
);
