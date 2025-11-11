import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="NavBar">
      <p>MyNotes</p>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/createpost">CreatePost</Link>
        {/* <a>Notes</a> */}
      </ul>

      <button>Light</button>
    </div>
  );
};

export default Navbar;
