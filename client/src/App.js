import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    fuckers: [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => {
        this.setState({ fuckers: res }) 
        console.log("fuckers:", res, this.state)
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.fuckers.name}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
