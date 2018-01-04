import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Test from './pages/test/Test';


//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/test' component={Test} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

//registerServiceWorker();
