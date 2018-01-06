import React, { Component } from 'react';


class FullScrDiv extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        width: '100%',
        height: this.props.height }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FullScrDiv;