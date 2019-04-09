import React, {Component} from 'react';
import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  // Redirect,
  // Switch
} from 'react-router-dom';
import ToDoList from "./ToDoList";


class App extends Component {

  state = {
    isAuth: false
  };

  login = () => {
    this.setState({
      isAuth: true
    })
  }

  render() {
    return (
        <div className="app">
          <div className="message">
            <h1> Please try localhost:3000/login for Login Page</h1>
          </div>
          <Router>

            <Route
                path="/login"
                render={(props) => <Login {...props} isAuth={this.state.isAuth} loginCallback={this.login}/>}/>

            <PrivateRoute
                exact path="/todolist"
                component={ToDoList}
                isAuth={this.state.isAuth}/>

          </Router>

        </div>
    );
  }
}

export default App;

const PrivateRoute = ({component: Component, isAuth, ...props}) => {

  return (
      <Route
          {...props}
          render={(_props) =>
              (isAuth ? (<Component {...props} {..._props} />) :
                      <div> You have no access to this page </div>
              )
          }
      />)
}




