import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar1">
        <p>Brand</p>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/createpost">CreatePost</Link>
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
