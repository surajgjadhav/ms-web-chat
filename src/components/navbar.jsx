import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <img
        src="https://png2.cleanpng.com/sh/c95de1a00a653c478afc5ff0f2661c3d/L0KzQYm3VMA2N5h3fZH0aYP2gLBuTfxwb5CygdD8cHn1ccXwjB4uPZJoTqtrZUjldLW8g8MvO2MASKY5NUO0RYO5WcY2PGk1T6kCNj7zfri=/kisspng-logo-inspiration-5ac69be8bdd5c3.3290405315229654807776.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
      <h2 className="text-white">Financial Guide</h2>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="button" className="btn btn-outline-dark">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
