import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import Logo from '../components/hero/logo'
import Webs from '../components/hero/webs'
import Lightning from '../components/hero/lightning'
import './hero/hero.css'

class Hero extends Component {
  render() {
    return (
          <FullScrDiv {...this.props} >
            <div className="shock1">
            </div>

            <div className="shock2">
            </div>

            <div className="shock3">
            </div>

            <div className="layer1">
              <div style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
                transform: this.props.divScale
              }}>
                  <Webs />
              </div>
            </div>
              
            <div className="layer2">
              <div className="logoDiv">
                  <div className="theLogoDiv"><Lightning /></div>
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
    );
  }
}

export default Hero;