import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import UserHome from "./components/user/UserHome";
import Category from "./components/user/Category";
import PiggyBankAddFrom from "./components/user/PiggyBankAddFrom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className=" container-fluid h-100">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/User" component={UserHome} />
            <Route path="/user/category" component={Category} />
            <Route path="/user/piggy-bank/add" component={PiggyBankAddFrom} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
