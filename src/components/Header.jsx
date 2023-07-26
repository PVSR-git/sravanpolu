import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/Sravan.jpg";
import Detail from "../pages/Detail";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="header-items">
        <Link className="site-logo" to="/">
          <img src={bgImg} className="site-img" />
        </Link>
        {/* <button className="menu-bar">
          <img src="/svg/menu-bar.svg" alt="Menu" />
        </button> */}

        <nav id="menu">
          <label for="menu-toggle" id="menu-icon">
            &#9776;
          </label>
          <input type="checkbox" id="menu-toggle" />
          <div className="information-user">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Home
            </NavLink>
            <NavLink
              to="/photos"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Photos
            </NavLink>
            <NavLink
              to="/resume"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              <div className="resume-container">
                Resume
                {menuOpen && (
                  <div className="resume-menu-content">
                    <NavLink to="/single-page-resume">SPResume</NavLink>
                    <NavLink to="/detail">Detail</NavLink>
                  </div>
                )}
              </div>
            </NavLink>
          </div>

          <NavLink to="login" className="login-link">
            <BsPersonCircle className="login-icon" size={22} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
