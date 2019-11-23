import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    /**
     * this.handleChange = this.handleChange.bind(this);
     * or
     * use an arrow function for handleChange
     */
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // returns a Promise
        .then(response => response.json()) // returns in a JSON format
        .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state; // const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">
          <SearchBox placeholder='Search Monsters' handleChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))}/>
          <CardList monsters={filteredMonsters} />
        </div>
    );

  }
}

export default App;
