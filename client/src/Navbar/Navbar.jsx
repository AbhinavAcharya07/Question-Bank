import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar1">
        <p>Brand</p>
        <ul>
          <a href="">Home</a>
          <a href="">CreatePost</a>
        </ul>
      </div>
      <form className="form" action="">
        <input id="Search" type="text" />
        <button id="Searchbtn">Search</button>
      </form>
    </div>
  );
};

export default Navbar;
