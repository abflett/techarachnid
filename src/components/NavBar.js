import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const NavBar = () => (
    <AppBar 
        zDepth='2'
        showMenuIconButton='true'
        title={
            <Link className='appbar' to='/contact'>Tech Arachnid</Link>}
            > 
        <Link to='/test'><RaisedButton label="Test" /></Link>
        <Link to='/'><RaisedButton label="Home" /></Link>
        <Link to='/contact'><RaisedButton label="Contact" /></Link>
    </AppBar>
            
);

export default NavBar;