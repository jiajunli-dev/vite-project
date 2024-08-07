import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Button from './components/Button';
import DisplayAvatar from './components/Avatar';
import Greeting from './components/Greeting';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
);
