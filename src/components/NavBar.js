import React, { Component } from 'react';



class NavBar extends Component {
  render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            position: 'fixed',
            width: '100%',
            minHeight: '5vh',
            zIndex: 7,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          

          <h2 style={{
              padding: 0,
              paddingRight: '5vw',
              margin: 'auto auto auto 1vw'
          }}>I make things that are flashy and move</h2>

          <h1 style={{
              padding: 0,
              margin: 'auto 1vw auto auto'
          }}>-Tech Arachnid</h1>
        </div>
    );
  }
}

export default NavBar;
