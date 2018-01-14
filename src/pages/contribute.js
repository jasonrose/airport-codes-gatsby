import "./contribute.styl";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Link from "gatsby-link";

const Contribute = () => (
  <section className="contribute site-info">
    <Helmet>
      <title>Airport Codes - Contribute</title>
    </Helmet>
    <div className="overlay" />
    <div className="container">
      <div className="content">
        <h1>Contribute</h1>
        <p>
          There are lots (and we mean lots!) of airports in the world. We’ll add
          as many as we can and we encourage you to contribute airports, too.
        </p>
        <p>A couple ways you can help make the site more awesome:</p>
        <ul>
          <li>
            Tweet your airport suggestions to{" "}
            <a href="https://twitter.com/lynnandtonic">@lynnandtonic</a> on
            Twitter.
          </li>
          <li>
            Contribute code and/or content to Airport Codes via{" "}
            <a href="https://github.com/lynnandtonic/airport-codes">GitHub</a>.
          </li>
        </ul>
        <hr />
        <p className="quote">Fly well, friends.</p>
        <Link className="btn" to="/">
          Back to Airport Codes
        </Link>
        <hr />
      </div>
    </div>
    <Link className="back" to="/">
      Airport Codes
    </Link>
  </section>
);

export default Contribute;
