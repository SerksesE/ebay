import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import PostItemContainer from './components/PostItemContainer';

class App extends Component {
  render() {
    return (
      <div className="App background">
        <Route exact path='/' component={ItemListContainer}></Route>
        <Route exact path='/' component={PostItemContainer}></Route>
      </div>
    );
  }
}

export default App;
