import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/search/Search';
import Cardlist from './Components/cardlist/Cardlist';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: '',
            users: [],
            filteredUsers: []
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({Search: event.target.value}, () => {
            let filtered = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.Search));
            console.log(filtered);
            this.setState({filteredUsers: filtered});
        });
     
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(data => this.setState({users: data, filteredUsers: data}));
    }

    render() {
        let filteredUsers = this.state.filteredUsers;
        return !this.state.users.length ? (<div> LOADING... </div>) :
         (
            <div className="App" >
                <Search key='key' handleChange = {this.handleChange} />
                <Cardlist data = {filteredUsers} />
            <h1> {this.state.Search} </h1>
            </div>
        );
    }
}

export default App;
