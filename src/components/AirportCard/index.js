import classNames from "classnames";
import React from "react";
import Link from "gatsby-link";
import "./index.styl";

const AirportCard = ({ className, href, label }) => (
  <li className={classNames("card", className)}>
    {href ? <Link to={href}>{label}</Link> : <a href="javascript:;">{label}</a>}
  </li>
);

export default AirportCard;