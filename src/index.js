import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

import MaterialButton from './components/MaterialButton'
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent'


//import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <NavBar />
            <MyAwesomeReactComponent />
            <MaterialButton />
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

//registerServiceWorker();
