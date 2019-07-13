import React, { Component } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import ShowUser from './components/ShowUser'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    this.setState({ users });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <UserTable {...props} users={this.state.users}/>}
            />
            <Route
              path="/:id"
              render={props => <ShowUser {...props} users={this.state.users}/>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
