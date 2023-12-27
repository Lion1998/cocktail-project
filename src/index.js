import React from 'react';
import App from './App';
import Provider from './Context';
import {createRoot} from 'react-dom/client';
import './index.css';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);