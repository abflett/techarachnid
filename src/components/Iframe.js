import React, { Component } from 'react';



class Iframe extends Component {
  render() {
    return (
          <iframe src={this.props.src} height={this.props.height} width={this.props.width} title={this.props.title} style={{
            padding: 0,
            margin: 0,
            border: 0
          }}/>
    );
  }
}

export default Iframe;
