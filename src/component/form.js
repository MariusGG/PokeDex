import React, from 'react';

class Form extends Component {

  render(){

    return(
      <form>
        <input type="text" name="pokemon" placeholder="Pokemon..."/>
        <button>Get Pokemon</button>
      </form>

    )
  }
}
export default Form;
