import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class SignInLink extends Component {
  state = {};
  render() {
    return (
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            user
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/user/category" className="nav-link">
            Category
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/user/piggy-bank/add" className="nav-link">
            Piggy Bank
          </Link>
        </li>
      </ul>
    );
  }
}

export default SignInLink;
