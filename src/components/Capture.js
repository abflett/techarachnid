import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import './cave/cave.css'

class Cave extends Component {
  render() {
    return (
        <FullScrDiv {...this.props}>
              <div style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
                transform: this.props.divScale
              }}>
          </div>
        </FullScrDiv>
    );
  }
}

export default Cave;