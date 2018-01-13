import React, { Component } from 'react';
import './cave.css'
import CaveSvg from './cavesvg'


class Cave extends Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
          <CaveSvg height={this.props.height}
                   scrollPos={this.props.scrollPos} />
          
          <div style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '100vh',
            justifyContent: 'space-between',
            flexDirection: 'column'
          }}>
            <div style={{
            width: '100%',
            height: '1vh',
            background: 'linear-gradient(to bottom, black, rgba(34, 17, 3, 0))'
            }} />
            <div style={{
            width: '100%',
            height: '1vh',
            background: 'linear-gradient(to top, black, rgba(34, 17, 3, 0))'
            }} />
          </div>
      </div>
    );
  }
}

export default Cave;
