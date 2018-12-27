import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class SignUpLink extends Component {
  state = {};
  render() {
    return (
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );
  }
}

export default SignUpLink;
