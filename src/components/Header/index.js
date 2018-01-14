import React, { Component } from "react";
import Link from "gatsby-link";
import "./index.styl";

class Header extends Component {
  render() {
    return (
      <header className="header-header">
        <nav className="header-nav">
          <h1>
            <Link to="/">Airport Codes</Link>
            <Link className="nav-about" to="/about">
              About
            </Link>
          </h1>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Find your airport"
          />
          <button className="clear" type="reset" />
        </nav>
      </header>
    );
  }
}

export default Header;
