import React, { Component } from 'react';

class Description extends Component {

  render () {
    return (
      <div>
        {props.id && <p>Id: {props.id}}</p>
        {props.name && <p>Name: {props.name}}</p>
        {props.weight && <p>Weight: {props.weight}}</p>
      </div>
    )
  }
}
export default Description;
