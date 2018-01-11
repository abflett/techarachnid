import React, { Component } from 'react';
import FreedomSvg from './freedomsvg';
import './freedom.css'


class Freedom extends Component {
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
          <FreedomSvg height={this.props.height}
                   scrollPos={this.props.scrollPos} />
      </div>
    );
  }
}

export default Freedom;
