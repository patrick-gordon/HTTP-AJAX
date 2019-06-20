import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';
import FriendForum from './Components/FriendForum';
import Friend from './Components/Friend';

class App extends React.Component {

  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => this.setState({ error: err }))
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/freinds', friend)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }

  

  

  render() {
    return (
      <div className="App">
        <h2>Friends List</h2>
        <FriendForum addFriend={this.addFriend} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
