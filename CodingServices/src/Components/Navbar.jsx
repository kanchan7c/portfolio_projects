import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
      <div className="row ">
        <div className="col-md-10 mx-auto">
      <nav className="navbar navbar-expand-md navbar-light " >
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
          <img src="https://img.icons8.com/clouds/70/000000/edit.png" alt="..."/> <span className="coding-service-logo ms-2 fs-3 fw-bolder">CodingServices</span> 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bold">
              <li className="nav-item">
                <NavLink  exact activeClassName="menu_active" className="nav-link text-dark" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link text-dark" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-dark"
                  to="/Service"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink activeClassName="menu_active" className="dropdown-item text-dark" to="/WebDevelopment">
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="menu_active" className="dropdown-item text-dark" to="/AppDevelopment">
                      App Development
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink activeClassName="menu_active" className="dropdown-item text-dark" to="/Service">
                      All Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link text-dark" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
