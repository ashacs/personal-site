import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;