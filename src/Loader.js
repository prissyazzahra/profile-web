import React from 'react';

import './loader.css';

import Home from './Home';

class Loader extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      done: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 4);
  }
  render() {

    return (
      !this.state.done ?
      <div className="loader">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle" style={{animationDelay: "0.4s"}}></div>
          <div className="circle" style={{animationDelay: "0.8s"}}></div>
        </div>
      </div>
      :
      <Home />
    )
  }
}

export default Loader;