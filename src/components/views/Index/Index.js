import React, { Component } from 'react';
import Header from '../Header/Header';
import TabComponent from '../Tab/TabComponent';
import './Main.css';
class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabComponent />
      </div>
    );
  }
}

export default Main;
