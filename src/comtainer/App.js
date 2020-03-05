import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Errorboundary from '../components/Errorboundry';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then(users =>{this.setState({robots: users})});
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div className='tc ma5 '>
                <h1>RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <Scroll>
                    <Errorboundary>
                        <CardList robots={filteredRobots} />
                    </Errorboundary>
                </Scroll>
            </div>
            )
    }
}

export default App;