import React, { Component } from 'react';

import '../assets/stylesheets/app.css';

import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />

          <Content />
        </div>          
      </div>
    );
  }
}
 
export default App;
