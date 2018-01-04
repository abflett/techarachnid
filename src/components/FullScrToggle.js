import React, { Component } from 'react';
import Fullscreen from "react-full-screen";

const fullScrButtonStyle = {
  margin: 0,
  right: '10px',
  top: '10px',
  padding: 0,
  backgroundColor: 'rgb(68, 0, 0)',
  color:  'rgb(255, 255, 255)',
  display: 'block',
  width: '100px',
  height: '50px',
  position: 'absolute'
};

class FullScrToggle extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isFull: false,
    };
  }
 
  toggleFullScr = () => {
    console.log(this.state.isFull);
    if (this.state.isFull){
      this.setState({ isFull: false });
    } else{
      this.setState({ isFull: true });
    }
    
  }

  render() {
    return (
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div style={fullScrButtonStyle} onClick={this.toggleFullScr}>
            Fullscreen
          </div>
          {this.props.children}
        </Fullscreen>
    );
  }
}

export default FullScrToggle;
