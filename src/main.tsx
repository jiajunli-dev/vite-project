import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Button from './components/Button';
import DisplayAvatar from './components/Avatar';
import App from './components/Greeting';
import DisplayGreeting from './components/toggleGreeting';
import Conditional from './components/Conditional';
import Notification, { AlertType } from './components/Notification';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Notification type={AlertType.Success} message="This is a success message" />
  </React.StrictMode>,
);
