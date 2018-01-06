import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import './cave/cave.css'
import CaveSvg from './cave/cavesvg'


class Cave extends Component {
  constructor() {
    super();
    this.scrResize = this.scrResize.bind(this);
    this.state = {height: window.innerHeight,
                  width: window.innerWidth,
                  scale: window.innerHeight / window.innerWidth,
                  divScale: 'scale(1)'};
    
  }

  scrResize(){
    const height = window.innerHeight,
          width = window.innerWidth;
    const scale = height / width;

    this.setState({height, width, scale});

    if(this.state.scale >= 1.0){
      this.setState({divScale: "scale(" + this.state.scale * 1.1 + ")"});
    }else if(this.state.scale <= 1.0){
      this.setState({divScale: "scale(" + 1.0 / this.state.scale + ")"});
    }else{
      this.setState({divScale: 'scale(1)'});
    }
    console.log(this.state.scale);
    console.log(this.state.divScale);
  }

  componentDidMount() {
    window.addEventListener('resize', this.scrResize);
    this.scrResize();
  }

  render() {
    return (
        <FullScrDiv>
          <div style={{
              width: '100%',
              transformOrigin: 'center',
              transform: this.state.divScale
          }}>
            <CaveSvg />
          </div>
        </FullScrDiv>
    );
  }
}

export default Cave;
