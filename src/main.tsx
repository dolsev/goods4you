import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPageTemplate from './components/templates/MainPageTemplate';
import styles from './main.module.css';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className={styles.body}>
            <div id="root" className={styles.root}>
                <MainPageTemplate />
            </div>
        </div>
    </React.StrictMode>
);
