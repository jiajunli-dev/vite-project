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
import Product from './components/Product';
import Phone from './components/Phone';
import Toy from './components/Toy';
import Car from './components/Car';
import ListItems, { Items } from './components/ListItems';
import Flag from './renderprop/Flag';
import Flyout from './flyout/Flyout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Flag renderProp={(name: string) => <h1>Hello {name}</h1>} name='Jiajun' />
);
