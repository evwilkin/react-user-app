import React, { Component } from 'react';
import './App.css';
import UserTable from './components/Table/UserTable';
import ShowUser from './components/User/ShowUser';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    const usersDescendingByName = [...users].sort((a,b) => {
      const name1 = a.name.toUpperCase();
      const name2 = b.name.toUpperCase();
      return (name1 < name2)
        ? 1
        : (name2 < name1)
          ? -1
          : 0;
    })
    this.setState({ users: usersDescendingByName });
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
