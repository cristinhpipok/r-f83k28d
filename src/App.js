import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1
    })
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.contador}</span>
      <button  onClick={this.incrementar.bind(this)} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
