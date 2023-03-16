import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">CS</div>
      <ul className="nav__items">
        <li className="nav__links">About us</li>
        <li className="nav__links">Brands</li>
        <li className="nav__links">Story</li>
      </ul>
      <button className="nav__btn">Contacts</button>
    </div>
  );
}

export default Nav;
