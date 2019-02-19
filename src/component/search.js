import React, { Component } from 'react';
import Title from './title';
import Pokemon from './pokemon_description';
import Form from './form.js'


class Search extends Component {
  state = {
  id: undefined,
  name: undefined,
  weight: undefined,
  error: undefined
}

  getPokemon = async (e) => {

e.preventDefault();

const name = e.target.elements.pokemon.value;


  const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const response = await api_call.json();

  console.log(response);


}

   render() {
    return (
     <div>
       <header>
         <Title />
       </header>
       <section>
         <Form loadPokemon={this.getPokemon}/>
       </section>
       <main>
         <Pokemon />
       </main>


     </div>
    )
  }
}

export default Search;
