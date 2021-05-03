import React, {Component} from 'react';
import Person from './Person';


class Yearbook extends Component {
  constructor(props) {
    super(props);
    this.state = {people: null};
  }
  componentDidMount() {
    fetch('/api/people')
    .then( (response) => {
      response.json()
      .then( (data) => this.setState({people: data}); )
      .catch( (error) => this.setState({people: null}))
    })
    .catch( (error) => this.setState({people: null}); );
  }

  render() {
    if (!this.state.people) return (
      <div>
        <h1>Yearbook</h1>
        <h2>Loading</h2>
      </div>
    );
    let people = this.state.people.map((person, index) => 
      <Person key{index} index={index} person={person} />
    });
    return (
      <div>
        <h1>Yearbook</h1>
        <div className='row'>
          {people}
        </div>
      </div>
    );
  }
});

module.exports = Yearbook;