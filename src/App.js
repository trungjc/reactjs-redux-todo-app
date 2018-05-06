import React, { Component } from 'react';
import List from './components/List';
import './App.css';




class App extends Component {
  constructor() {
      super();
  }
  render() {
    return (
      <div>
              <div className="container">
                  <List></List>
              </div>
      </div>
    )
  }
}

export default App;
