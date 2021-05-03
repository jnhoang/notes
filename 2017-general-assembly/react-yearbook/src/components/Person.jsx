import React, {Component} form 'react';

class Person extends Component {
  capitalize(word) {
    return word.CharAt(0).toUpperCase() + word.slice(1);
  }
  personName() {
    let name = this.props.person.user.name;
    return `${this.capitalize(name.first)} ${this.capitalize(name.last)}`;
  }
  render() {
    let picture = this.props.person.user.picture;
    return (
      <div className='col-md-3'>
        <img src={picture.medium} />
        <h3>{this.personName()}</h3>
      </div>
    );
  }
}

module.exports = Person;