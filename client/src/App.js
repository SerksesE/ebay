import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className="App background">
        <Route exact path='/' component={ItemListContainer}></Route>
      </div>
    );
  }
}

export default App;
