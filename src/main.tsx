import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Button from './components/Button';
import DisplayAvatar from './components/Avatar';
import App from './components/Greeting';
import DisplayGreeting from './components/toggleGreeting';
import Conditional from './components/Conditional';
import Notification, { AlertType } from './components/Notification';
import Avatar from './components/Avatar';
import Card from './components/Composition';
import DisplayItem from './components/DisplayItem';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DisplayItem />
  </React.StrictMode>,
);
