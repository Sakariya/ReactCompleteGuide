import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 1,name: 'Pooja', age: 25},
      {id: 2,name: 'Brinju', age: 23},
      {id: 3,name: 'Ashish', age: 18}
    ],
    otherState: "some valuee......",
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deleteUserHandler = (personIndex) => {
    // const persons = this.state.persons; it's not a good approch to use state object 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons =  <Persons
            persons={this.state.persons}
            clicked={this.deleteUserHandler}
            changed={this.nameChangedHandler}
          />;
    }    

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title}
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />  
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
  }
}

export default App;
