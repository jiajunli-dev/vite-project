import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Button from './components/Button';
import DisplayAvatar from './components/Avatar';
import App from './components/Greeting';
import DisplayGreeting from './components/toggleGreeting';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
