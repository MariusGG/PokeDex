import React, { Component } from 'react';
import pokedex from '../resource/pokedek-closed.png';

class Pokedex extends Component {

  render () {
    return (
      <div className='pokedexContainer'>
        <img src={pokedex} alt='closed pokedex'/>
      </div>
    )
  }
}

export default Pokedex;
