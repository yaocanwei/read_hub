import React, { Component } from 'react';
import Sidebar from './components/sidebar.js';
import Footer from './components/footer.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>你来了</h2>
          </div>
        </div>
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
