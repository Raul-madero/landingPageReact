import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark d-flex justify-content-between">
      <div className="container-fluid w-25 m-0">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>
      </div>
      <div>
        <ul className="nav me-2 mb-2 d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
