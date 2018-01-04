import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import Logo from '../components/hero/logo'
import './hero/hero.css'
import Webs from '../components/hero/webs'
import Lightning from '../components/hero/lightning'

class Hero extends Component {
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
    
    console.log(scale);
    
    if(this.state.scale > 0.72){
      this.setState({divScale: "scale(" + this.state.scale * 2.2 + ")"});
    }else{
      this.setState({divScale: 'scale(1)'});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.scrResize);
    this.scrResize();
  }


  render() {
    return (
      <div>
          <FullScrDiv>

            <div className="shock1">
            </div>

            <div className="shock2">
            </div>

            <div className="shock3">
            </div>

            <div className="layer1">
              <div style={{
                  transform: this.state.divScale,
                  transformOrigin: 'top'
                }}>
                  <Webs />
              </div>
            </div>
              
            <div className="layer2">
              <div className="logoDiv">

                  <div className="theLightningDiv"><Lightning /></div>

              </div>
            </div>

            <div className="layer3">
              <div className="logoDiv">
                <div className="logoDivMargin"></div>
                   <div className="theLogoDiv"><Logo /></div>
                <div className="logoDivMargin"></div>
              </div>
            </div>

          </FullScrDiv>
      </div>
    );
  }
}

export default Hero;