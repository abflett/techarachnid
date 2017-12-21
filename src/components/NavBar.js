import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const NavBar = () => (
    <AppBar
        zDepth='2'
        showMenuIconButton='true'
        title={
            <Link className='appbar' to='/contact'>Tech Arachnid</Link>}
    />
);

export default NavBar;