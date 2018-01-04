import React, { Component } from 'react';


class FullScrDiv extends Component {
  constructor() {
    super();
    this.scrResize = this.scrResize.bind(this);
    this.state = {height: window.innerHeight,
                  width: window.innerWidth};
  }

  scrResize(){
    const height = window.innerHeight,
          width = window.innerWidth;
    this.setState({height, width});
  }

  componentDidMount() {
    window.addEventListener('resize', this.scrResize);
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        width: '100%',
        height: this.state.height,
        backgroundColor: this.props.bgColor }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FullScrDiv;