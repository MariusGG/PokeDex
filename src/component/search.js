import React, { Component } from 'react';
import Title from './title';
import Description from './pokemon_description';
import Form from './form.js'


class Search extends Component {
  state = {
    id: undefined,
    name: undefined,
    weight: undefined,
    error: undefined,
    sprite: undefined,
  }

  getPokemon = async (e) => {

    e.preventDefault();

    const name = e.target.elements.pokemon.value;


    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const response = await api_call.json();

    console.log(response);
    if(name){
      this.setState({
        id: response.id,
        name: response.name,
        weight: response.weight,
        error: "",
        sprite: response.sprites.front_default
      })
    }else {
      this.setState({
        error: "Please search for a Pokemon..."
      })
    }
  }

  render() {
    return (
      <div className="search-pokemon">
        <header>
          <Title />
        </header>
        <section>
          <Form loadPokemon={this.getPokemon}/>
        </section>
        <main>
          <Description
            id={this.state.id}
            name={this.state.name}
            weight={this.state.weight}
            error={this.state.error}
            sprite={this.state.sprite}
            />
        </main>


      </div>
    )
  }
}

export default Search;
