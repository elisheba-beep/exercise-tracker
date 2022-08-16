import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          ExerTracker
        </Link>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav mr-auto mb-2 mb-lg-0"'>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
