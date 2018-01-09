import React, { Component } from 'react';

function Welcome() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '5vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}>Creating <span
    style={{
        color: 'rgb(241, 179, 98)'
    }}>content</span> that <span
    style={{
        color: 'rgb(220, 167, 255'
    }}>captures</span> attention</h2>;
}

function Welcome2() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '5vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}>Getting your <span
    style={{
        color: 'rgb(220, 167, 255'
    }}>product</span> out of the <span
    style={{
        color: 'rgb(241, 179, 98)'
    }}>cave</span></h2>;
}


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.calcPosition = this.calcPosition.bind(this);
      }
    
      calcPosition(thePosition) {
        const value = thePosition / this.props.height;
        if(value > 0.7){
            return <Welcome2 />;
        }
        return <Welcome />;
      }

  render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            position: 'fixed',
            width: '100%',
            minHeight: '5vh',
            zIndex: 7,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          
          {this.calcPosition(this.props.scrollPos)}
        
          <h1 style={{
              textAlign: 'right',
              padding: 0,
              margin: 'auto 1vw auto auto',
              fontSize: '4vmin'
          }}>Tech Arachnid</h1>
        </div>
    );
  }
}

export default NavBar;
