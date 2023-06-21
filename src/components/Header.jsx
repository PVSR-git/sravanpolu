import React from "react";
import { BsPersonCircle } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/Sravan.jpg";
export default function Header() {
  return (
    <header>
      <div className="header-items">
        <Link className="site-logo" to="/">
          <img src={bgImg} className="site-img" />
        </Link>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/photo"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Resume
          </NavLink>
        </nav>
        <Link to="login" className="login-link">
          <BsPersonCircle className="login-icon" size={22} />
        </Link>
      </div>
    </header>
  );
}
