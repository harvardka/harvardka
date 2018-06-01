import React from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

const Header = props => (
  <div
    style={{
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '15px',
      paddingBottom: '10px',
      width: '100%',
      height: 'auto',
      backgroundColor: '#7E107F'
    }}>
    <h1 style={{ color: 'white' }}>
      <Glyphicon glyph="glass" />
    </h1>
  </div>
);

export default Header;
