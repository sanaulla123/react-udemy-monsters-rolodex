import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
    <div className="App">
      <h1 className="app-name"> Monsters Rolodex </h1>
      <SearchBox placeholder='search monsters'
        handleChange={ this.handleChange } />
      <CardList monsters={filteredMonsters} />  
    </div>
    );
  }

  componentDidMount(){
    var url = "https://jsonplaceholder.typicode.com/users/";
    fetch(url)
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }



}

export default App;
