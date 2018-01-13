import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { unregister } from './registerServiceWorker';

import Home from './pages/home/Home';
unregister();


ReactDOM.render(
    <Home />,
    document.getElementById('root')
);