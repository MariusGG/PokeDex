import React, { Component } from 'react';

class Description extends Component{

  render () {
    return (
      <div>
        {this.props.id && <p>Id: {this.props.id}</p>}
        {this.props.name && <p>Name: {this.props.name.toUpperCase()}</p>}
        {this.props.weight && <p>Weight: {this.props.weight}</p>}
        {this.props.sprite && <img src={this.props.sprite} alt={this.props.name}/>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}
export default Description;
