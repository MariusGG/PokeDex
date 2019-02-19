import React, { Component } from 'react';
import pokedex from '../resource/pokedek-closed.png';
import pokedexOpen from '../resource/pokedek-opened.png';

class Pokedex extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pokedex: <img src={pokedex} alt='closed pokedex'/>
    };
  }

  handleClick = () => {
    this.setState({pokedex: <img src={pokedexOpen} alt='open pokedex'/>})
  }

  render () {
    return (
      <div className='pokedexContainer'>
        {this.state.pokedex}
        <div className="open-pokedex-btn">
          <button onClick={this.handleClick}> Open </button>

        </div>
      </div>
    )
  }
}

export default Pokedex;
