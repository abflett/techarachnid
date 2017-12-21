import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const MaterialButton = () => (
  <Link to='/contact'><RaisedButton label="Contact" /></Link>
);

export default MaterialButton;