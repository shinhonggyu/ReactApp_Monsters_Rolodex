import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello jone doe',
    };
  }

  render() {
    return (
      <>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: 'Hello jane doe' })}>
          Change Text
        </button>
      </>
    );
  }
}

export default App;
