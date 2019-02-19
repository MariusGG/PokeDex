import React, { Component } from 'react';
import Pokedex from './component/pokedex.js';
import Search from './component/search.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
        <Search />

      </div>
    );
  }
}

export default App;
