import React, { Component } from 'react';

class Form extends Component {

  render() {

    return(
      <form onSubmit={this.props.loadPokemon}>
        <input type="text" name="pokemon" placeholder="Pokemon..."/>
        <button>Get Pokemon</button>
      </form>

    )
  }
}
export default Form;
