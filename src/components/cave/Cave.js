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
      </div>
    );
  }
}

export default Cave;
