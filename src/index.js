import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import Provider from './Context';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>
);