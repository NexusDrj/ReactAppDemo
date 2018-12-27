import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignInLink from "./SignInLink";
import SignUpLink from "./SignUpLink";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Piggy Bank
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <SignUpLink />
          <SignInLink />
        </div>
      </nav>
    );
  }
}

export default NavBar;
