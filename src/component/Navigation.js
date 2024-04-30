import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="container">
      <header id="site-header" className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <h1>
            <NavLink style={{ paddingLeft: "20px" }} className="navbar-brand pe-xl-5 pe-lg-4 " to="/" >
              N<span className="sublog">E</span>W<span className="sublog">S</span><span className="sublog">/24</span>
            </NavLink>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-lg-auto my-2  my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  National
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/business" className="nav-link">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sports" className="nav-link">
                  Sports
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/world" className="nav-link">
                  World
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/politics" className="nav-link">
                  Politics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/technology" className="nav-link">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/startup" className="nav-link">
                  Startup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/entertainment" className="nav-link">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/miscellaneous" className="nav-link">
                  Miscellaneous
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/science" className="nav-link">
                  Science
                </NavLink>
              </li>
            </ul>
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
